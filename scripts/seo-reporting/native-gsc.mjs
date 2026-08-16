import fs from "node:fs/promises";
import path from "node:path";
import { parseCsv } from "./core.mjs";

const requiredFiles = ["Chart.csv", "Queries.csv", "Pages.csv", "Countries.csv", "Devices.csv", "Filters.csv", "Search appearance.csv"];

const numeric = (value, percent = false) => {
  const text = String(value ?? "").trim().replace(/,/g, "");
  if (!text || text === "-") return 0;
  const parsed = Number(text.replace(/%$/, ""));
  if (!Number.isFinite(parsed)) throw new Error(`Invalid numeric value: ${value}`);
  return percent && text.endsWith("%") ? parsed / 100 : parsed;
};

const normalizePath = (value, origin) => {
  try { return new URL(String(value), origin).pathname || "/"; }
  catch { return String(value || "/").split(/[?#]/)[0]; }
};

function metricRows(rows, dimension, source) {
  if (!rows.length) throw new Error(`${source}: missing header row`);
  const headers = rows[0].map(value => String(value ?? "").trim().toLowerCase());
  const indexes = {
    dimension: 0,
    clicks: headers.indexOf("clicks"), impressions: headers.indexOf("impressions"),
    ctr: headers.indexOf("ctr"), position: headers.indexOf("position")
  };
  for (const field of ["clicks", "impressions", "ctr", "position"]) if (indexes[field] < 0) throw new Error(`${source}: missing ${field} column`);
  return rows.slice(1).filter(row => row.some(cell => String(cell ?? "").trim())).map(row => ({
    [dimension]: String(row[indexes.dimension] ?? "").trim(), clicks: numeric(row[indexes.clicks]),
    impressions: numeric(row[indexes.impressions]), ctr: numeric(row[indexes.ctr], true), position: numeric(row[indexes.position])
  }));
}

function queryOwner(query, config) {
  return config.ownership.find(item => new RegExp(item.pattern, "i").test(query));
}

const isBrand = (query, config) => config.brandPatterns.some(pattern => query.toLowerCase().includes(pattern.toLowerCase()));

function pageStatus(url, config) {
  const legacy = config.legacyPaths.some(prefix => url.startsWith(prefix.replace(/\/$/, "")));
  if (legacy) return "LEGACY_URL";
  return config.currentPages.includes(url) ? "CURRENT_URL" : "OTHER_URL";
}

export async function loadNativeGsc(directory, config) {
  const tables = {};
  for (const file of requiredFiles) {
    const fullPath = path.join(directory, file);
    try { tables[file] = parseCsv(await fs.readFile(fullPath, "utf8")); }
    catch (error) { if (error?.code === "ENOENT") throw new Error(`Native GSC export is missing ${file} in ${directory}`); throw error; }
  }
  const chart = metricRows(tables["Chart.csv"], "date", "Chart.csv");
  const queries = metricRows(tables["Queries.csv"], "query", "Queries.csv");
  const pages = metricRows(tables["Pages.csv"], "page", "Pages.csv").map(row => ({ ...row, originalPage: row.page, page: normalizePath(row.page, config.siteOrigin) }));
  const countries = metricRows(tables["Countries.csv"], "country", "Countries.csv").map(row => ({ ...row, country: row.country.toLowerCase() }));
  const devices = metricRows(tables["Devices.csv"], "device", "Devices.csv").map(row => ({ ...row, device: row.device.toLowerCase() }));
  const appearance = metricRows(tables["Search appearance.csv"], "appearance", "Search appearance.csv");
  const filters = Object.fromEntries(tables["Filters.csv"].slice(1).filter(row => row.length >= 2).map(row => [String(row[0]).trim(), String(row[1]).trim()]));
  if (!chart.length) throw new Error("Chart.csv: zero data rows");
  return { chart, queries, pages, countries, devices, appearance, filters, files: requiredFiles };
}

export function buildNativeGscReport(data, config, ga4Records = []) {
  const totalClicks = data.chart.reduce((sum, row) => sum + row.clicks, 0);
  const totalImpressions = data.chart.reduce((sum, row) => sum + row.impressions, 0);
  const weightedCtr = totalImpressions ? totalClicks / totalImpressions : 0;
  const weightedPosition = totalImpressions ? data.chart.reduce((sum, row) => sum + row.position * row.impressions, 0) / totalImpressions : 0;
  const organicGa = ga4Records.filter(row => row.channel.toLowerCase() === config.organicChannel.toLowerCase());
  const hasGa4 = organicGa.length > 0;
  const trafficRows = organicGa.filter(row => !row.eventName);
  const leadRows = organicGa.filter(row => row.eventName === "generate_lead");
  const sum = (rows, field) => rows.reduce((total, row) => total + (Number(row[field]) || 0), 0);
  const leads = sum(leadRows, "eventCount"); const sessions = sum(trafficRows, "sessions");
  const canada = data.countries.find(row => row.country === config.primaryCountry);
  const knownBrand = data.queries.filter(row => isBrand(row.query, config)); const knownNonBrand = data.queries.filter(row => !isBrand(row.query, config));

  const queryRows = data.queries.map(row => {
    const owner = queryOwner(row.query, config); const reasons = [];
    if (row.impressions >= config.opportunityRules.minimumImpressions && row.ctr < weightedCtr * config.opportunityRules.lowCtrRelativeToWeightedAverage) reasons.push("HIGH_IMPRESSION_LOW_CTR");
    if (row.position >= 4 && row.position <= 10) reasons.push("POSITION_4_10");
    if (row.position >= 8 && row.position <= 20) reasons.push("POSITION_8_20");
    if (row.position > 20 && row.position <= 50) reasons.push("POSITION_20_50");
    if (row.impressions > 0 && row.clicks === 0) reasons.push("ZERO_CLICK");
    return { priority: reasons.includes("HIGH_IMPRESSION_LOW_CTR") || reasons.includes("POSITION_4_10") ? "P2" : "P3", query: row.query, country: "DATA UNAVAILABLE", impressions: row.impressions, clicks: row.clicks, ctr: row.ctr, position: row.position, currentPage: "DATA UNAVAILABLE - GSC UI export has no query/page cross-dimension", intendedPage: owner?.page || "", ownerCluster: owner?.name || "", reason: reasons.join("|") || "MONITOR", recommendedAction: reasons.includes("HIGH_IMPRESSION_LOW_CTR") ? "Review title/meta and SERP intent" : reasons.includes("POSITION_8_20") ? "Improve content, proof and internal links" : "Monitor" };
  }).filter(row => row.reason !== "MONITOR" || row.intendedPage);

  const pages = data.pages.map(row => {
    const traffic = trafficRows.filter(item => item.page === row.page); const pageLeads = leadRows.filter(item => item.page === row.page || item.eventPagePath === row.page);
    return { url: row.page, originalUrl: row.originalPage, clicks: row.clicks, impressions: row.impressions, ctr: row.ctr, position: row.position, organicSessions: hasGa4 ? sum(traffic, "sessions") : "DATA UNAVAILABLE", organicUsers: hasGa4 ? sum(traffic, "users") : "DATA UNAVAILABLE", engagementRate: hasGa4 && sum(traffic, "sessions") ? sum(traffic, "engagedSessions") / sum(traffic, "sessions") : "DATA UNAVAILABLE", leads: hasGa4 ? sum(pageLeads, "eventCount") : "DATA UNAVAILABLE", conversionRate: hasGa4 && sum(traffic, "sessions") ? sum(pageLeads, "eventCount") / sum(traffic, "sessions") : "DATA UNAVAILABLE", issue: row.impressions >= config.opportunityRules.minimumImpressions && row.ctr < weightedCtr * config.opportunityRules.lowCtrRelativeToWeightedAverage ? "LOW_CTR" : row.impressions ? "MONITOR" : "LOW_VISIBILITY", migrationStatus: pageStatus(row.page, config) };
  });

  const kitchener = data.queries.filter(row => /kitchener|kitchener.waterloo|waterloo/i.test(row.query)).map(row => ({ ...row, landingPage: "DATA UNAVAILABLE", correctLandingPage: "DATA UNAVAILABLE", flag: "QUERY_PAGE EXPORT OR API REQUIRED" }));
  return {
    metadata: { baselineDate: config.baselineDate, migrationDate: config.migrationDate, generatedAt: new Date().toISOString(), gscPeriod: data.filters.Date || "DATA UNAVAILABLE", searchType: data.filters["Search type"] || "DATA UNAVAILABLE", sourceType: "GSC_NATIVE_MULTI_FILE_EXPORT", limitation: "Standard GSC UI exports do not join query, page, country and device dimensions. Cross-dimensional ownership requires Search Console API or Looker Studio." },
    executive: { organicClicks: totalClicks, organicImpressions: totalImpressions, organicCtr: weightedCtr, averagePosition: weightedPosition, organicSessions: hasGa4 ? sessions : "DATA UNAVAILABLE", organicUsers: hasGa4 ? sum(trafficRows, "users") : "DATA UNAVAILABLE", organicLeads: hasGa4 ? leads : "DATA UNAVAILABLE", organicConversionRate: hasGa4 && sessions ? leads / sessions : "DATA UNAVAILABLE", knownBrandClicks: sum(knownBrand, "clicks"), knownNonBrandClicks: sum(knownNonBrand, "clicks"), brandClassificationNote: "Query export may omit anonymized queries; known-query totals may not equal Chart totals.", canadaClicks: canada?.clicks ?? 0, canadaImpressions: canada?.impressions ?? 0, canadaCtr: canada?.ctr ?? 0, canadaPosition: canada?.position ?? 0, canadaSessions: hasGa4 ? sum(trafficRows.filter(row => row.country === config.primaryCountry), "sessions") : "DATA UNAVAILABLE", canadaLeads: hasGa4 ? sum(leadRows.filter(row => row.country === config.primaryCountry), "eventCount") : "DATA UNAVAILABLE", leadQuality: "DATA UNAVAILABLE" },
    searchTrend: data.chart, countries: data.countries, devices: data.devices, searchAppearance: data.appearance,
    pages, queries: queryRows, kitchener, servicePages: pages.filter(row => config.servicePages.includes(row.url)),
    leadTypes: hasGa4 ? [...new Set(leadRows.map(row => row.leadType || "(not set)"))].map(leadType => ({ leadType, leads: sum(leadRows.filter(row => (row.leadType || "(not set)") === leadType), "eventCount") })) : [],
    quality: { chartRows: data.chart.length, queryRows: data.queries.length, pageRows: data.pages.length, countryRows: data.countries.length, deviceRows: data.devices.length, ga4Rows: ga4Records.length }
  };
}
