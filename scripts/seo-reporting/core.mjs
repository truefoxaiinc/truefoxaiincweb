import fs from "node:fs/promises";
import path from "node:path";
import readWorkbook from "read-excel-file/node";

const aliases = {
  date: ["date", "day"], query: ["query", "search query"], page: ["page", "landing page", "landing page + query string"],
  country: ["country", "country id"], device: ["device", "device category"], clicks: ["clicks", "organic google search clicks"],
  impressions: ["impressions", "organic google search impressions"], ctr: ["ctr", "site ctr"], position: ["position", "average position"],
  channel: ["session default channel group", "default channel group", "channel"], sessions: ["sessions"], users: ["users", "total users"],
  newUsers: ["new users"], engagedSessions: ["engaged sessions"], engagementRate: ["engagement rate"],
  averageEngagementTime: ["average engagement time", "average engagement time per session"], eventName: ["event name"],
  eventCount: ["event count", "key events", "conversions"], leadType: ["lead type", "lead_type"], formName: ["form name", "form_name"],
  eventPagePath: ["page path", "page_path"], ctaLocation: ["cta location", "cta_location"]
};

export function parseCsv(text) {
  const rows = []; let row = []; let value = ""; let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]; const next = text[index + 1];
    if (char === '"' && quoted && next === '"') { value += '"'; index += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { row.push(value); value = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value); if (row.some(cell => String(cell).trim())) rows.push(row); row = []; value = "";
    } else value += char;
  }
  row.push(value); if (row.some(cell => String(cell).trim())) rows.push(row);
  return rows;
}

export async function readTabular(file) {
  const extension = path.extname(file).toLowerCase();
  if (extension === ".csv") return { rows: parseCsv(await fs.readFile(file, "utf8")), sheet: "CSV" };
  if (extension === ".xlsx") {
    const workbook = await readWorkbook(file);
    if (!workbook.length) throw new Error(`${file}: workbook contains no sheets`);
    return { rows: workbook[0].data, sheet: workbook[0].sheet, sheets: workbook.map(item => item.sheet) };
  }
  throw new Error(`${file}: only .csv and .xlsx imports are supported`);
}

const headerKey = value => String(value ?? "").trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");

function mapHeaders(header) {
  const normalized = header.map(headerKey); const mapped = {};
  for (const [field, choices] of Object.entries(aliases)) {
    const index = normalized.findIndex(item => choices.includes(item));
    if (index >= 0) mapped[field] = index;
  }
  return mapped;
}

function number(value, field, rowNumber, issues, { percent = false } = {}) {
  if (value === "" || value === null || value === undefined || value === "-") return 0;
  const raw = String(value).replace(/,/g, "").trim();
  const parsed = Number(raw.replace(/%$/, ""));
  if (!Number.isFinite(parsed)) { issues.push({ row: rowNumber, field, value, reason: "INVALID_NUMBER" }); return 0; }
  return percent && raw.endsWith("%") ? parsed / 100 : parsed;
}

function isoDate(value, rowNumber, issues) {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) return value.toISOString().slice(0, 10);
  const text = String(value ?? "").trim();
  if (!text) return "";
  const parsed = new Date(text);
  if (Number.isNaN(parsed.valueOf())) { issues.push({ row: rowNumber, field: "date", value, reason: "INVALID_DATE" }); return ""; }
  return parsed.toISOString().slice(0, 10);
}

export function normalizePath(value, origin) {
  const text = String(value ?? "").trim(); if (!text) return "/";
  try { const url = new URL(text, origin); return url.pathname || "/"; } catch { return text.startsWith("/") ? text.split(/[?#]/)[0] : `/${text.split(/[?#]/)[0]}`; }
}

function requireColumns(mapped, required, source) {
  const missing = required.filter(field => mapped[field] === undefined);
  if (missing.length) throw new Error(`${source}: missing required columns: ${missing.join(", ")}`);
}

function duplicateIssues(records, fields) {
  const seen = new Set(); const issues = [];
  records.forEach((record, index) => {
    const key = fields.map(field => String(record[field] ?? "")).join("\u001f");
    if (seen.has(key)) issues.push({ row: index + 2, field: fields.join("+"), reason: "DUPLICATE_ROW" });
    seen.add(key);
  });
  return issues;
}

export function normalizeGsc(rows, config, source = "GSC") {
  if (rows.length < 2) throw new Error(`${source}: zero data rows`);
  const mapped = mapHeaders(rows[0]); requireColumns(mapped, ["query", "page", "clicks", "impressions", "ctr", "position"], source);
  const issues = []; const records = rows.slice(1).map((row, index) => {
    const rowNumber = index + 2; const impressions = number(row[mapped.impressions], "impressions", rowNumber, issues);
    const clicks = number(row[mapped.clicks], "clicks", rowNumber, issues); let ctr = number(row[mapped.ctr], "ctr", rowNumber, issues, { percent: true });
    if (ctr > 1 && ctr <= 100) ctr /= 100;
    if (ctr < 0 || ctr > 1) issues.push({ row: rowNumber, field: "ctr", value: row[mapped.ctr], reason: "IMPOSSIBLE_CTR" });
    return { date: mapped.date === undefined ? "" : isoDate(row[mapped.date], rowNumber, issues), query: String(row[mapped.query] ?? "").trim(), page: normalizePath(row[mapped.page], config.siteOrigin), country: String(row[mapped.country] ?? "").trim().toLowerCase(), device: String(row[mapped.device] ?? "").trim().toLowerCase(), clicks, impressions, ctr, position: number(row[mapped.position], "position", rowNumber, issues) };
  }).filter(record => record.query || record.impressions || record.clicks);
  if (!records.length) throw new Error(`${source}: zero valid data rows`);
  issues.push(...duplicateIssues(records, ["date", "query", "page", "country", "device"]));
  return { records, issues, columns: Object.keys(mapped) };
}

export function normalizeGa4Traffic(rows, config, source = "GA4 traffic") {
  if (rows.length < 2) throw new Error(`${source}: zero data rows`);
  const mapped = mapHeaders(rows[0]); requireColumns(mapped, ["page", "channel", "sessions", "users"], source);
  const issues = []; const records = rows.slice(1).map((row, index) => {
    const rowNumber = index + 2; let engagementRate = mapped.engagementRate === undefined ? 0 : number(row[mapped.engagementRate], "engagementRate", rowNumber, issues, { percent: true });
    if (engagementRate > 1 && engagementRate <= 100) engagementRate /= 100;
    if (engagementRate < 0 || engagementRate > 1) issues.push({ row: rowNumber, field: "engagementRate", value: row[mapped.engagementRate], reason: "IMPOSSIBLE_ENGAGEMENT_RATE" });
    return { date: mapped.date === undefined ? "" : isoDate(row[mapped.date], rowNumber, issues), page: normalizePath(row[mapped.page], config.siteOrigin), channel: String(row[mapped.channel] ?? "").trim(), country: String(row[mapped.country] ?? "").trim().toLowerCase(), device: String(row[mapped.device] ?? "").trim().toLowerCase(), sessions: number(row[mapped.sessions], "sessions", rowNumber, issues), users: number(row[mapped.users], "users", rowNumber, issues), newUsers: mapped.newUsers === undefined ? 0 : number(row[mapped.newUsers], "newUsers", rowNumber, issues), engagedSessions: mapped.engagedSessions === undefined ? 0 : number(row[mapped.engagedSessions], "engagedSessions", rowNumber, issues), engagementRate, averageEngagementTime: mapped.averageEngagementTime === undefined ? 0 : number(row[mapped.averageEngagementTime], "averageEngagementTime", rowNumber, issues), eventName: String(row[mapped.eventName] ?? "").trim(), eventCount: mapped.eventCount === undefined ? 0 : number(row[mapped.eventCount], "eventCount", rowNumber, issues), leadType: String(row[mapped.leadType] ?? "").trim().toLowerCase(), formName: String(row[mapped.formName] ?? "").trim(), eventPagePath: mapped.eventPagePath === undefined ? "" : normalizePath(row[mapped.eventPagePath], config.siteOrigin), ctaLocation: String(row[mapped.ctaLocation] ?? "").trim() };
  }).filter(record => record.page || record.sessions || record.eventCount);
  if (!records.length) throw new Error(`${source}: zero valid data rows`);
  issues.push(...duplicateIssues(records, ["date", "page", "channel", "country", "device"]));
  return { records, issues, columns: Object.keys(mapped) };
}

export function normalizeGa4Leads(rows, config, source = "GA4 leads") {
  if (rows.length < 2) throw new Error(`${source}: zero data rows`);
  const mapped = mapHeaders(rows[0]); requireColumns(mapped, ["page", "channel", "eventName", "eventCount"], source);
  const issues = []; const records = rows.slice(1).map((row, index) => {
    const rowNumber = index + 2;
    return { date: mapped.date === undefined ? "" : isoDate(row[mapped.date], rowNumber, issues), page: normalizePath(row[mapped.page], config.siteOrigin), channel: String(row[mapped.channel] ?? "").trim(), country: String(row[mapped.country] ?? "").trim().toLowerCase(), device: String(row[mapped.device] ?? "").trim().toLowerCase(), sessions: 0, users: 0, newUsers: 0, engagedSessions: 0, engagementRate: 0, averageEngagementTime: 0, eventName: String(row[mapped.eventName] ?? "").trim(), eventCount: number(row[mapped.eventCount], "eventCount", rowNumber, issues), leadType: String(row[mapped.leadType] ?? "").trim().toLowerCase(), formName: String(row[mapped.formName] ?? "").trim(), eventPagePath: mapped.eventPagePath === undefined ? "" : normalizePath(row[mapped.eventPagePath], config.siteOrigin), ctaLocation: String(row[mapped.ctaLocation] ?? "").trim() };
  }).filter(record => record.eventName || record.eventCount);
  if (!records.length) throw new Error(`${source}: zero valid data rows`);
  issues.push(...duplicateIssues(records, ["date", "page", "channel", "country", "device", "eventName", "leadType", "formName"]));
  return { records, issues, columns: Object.keys(mapped) };
}

const sum = (rows, field) => rows.reduce((total, row) => total + (Number(row[field]) || 0), 0);
const weightedPosition = rows => { const weight = sum(rows, "impressions"); return weight ? rows.reduce((total, row) => total + row.position * row.impressions, 0) / weight : 0; };
const aggregate = (rows, key) => { const groups = new Map(); for (const row of rows) { const id = row[key] || "(not set)"; const group = groups.get(id) || []; group.push(row); groups.set(id, group); } return groups; };
const isBrand = (query, config) => config.brandPatterns.some(pattern => query.toLowerCase().includes(pattern.toLowerCase()));
const leadCount = rows => rows.filter(row => row.eventName === "generate_lead").reduce((total, row) => total + row.eventCount, 0);

function migrationStatus(page, dates, config) {
  if (config.legacyPaths.some(prefix => page.startsWith(prefix.replace(/\/$/, "")))) return "LEGACY_URL";
  if (dates.some(date => date && date < config.migrationDate)) return "MIXED_PRE_POST_MIGRATION";
  return config.currentPages.includes(page) ? "CURRENT_URL" : "OTHER_URL";
}

export function buildReport(gsc, ga4, config) {
  const organicGa = ga4.filter(row => row.channel.toLowerCase() === config.organicChannel.toLowerCase());
  const clicks = sum(gsc, "clicks"), impressions = sum(gsc, "impressions"), sessions = sum(organicGa, "sessions"), users = sum(organicGa, "users"), leads = leadCount(organicGa);
  const weightedCtr = impressions ? clicks / impressions : 0;
  const brandRows = gsc.filter(row => isBrand(row.query, config)); const nonBrandRows = gsc.filter(row => !isBrand(row.query, config));
  const canadaGsc = gsc.filter(row => row.country === config.primaryCountry); const canadaGa = organicGa.filter(row => row.country === config.primaryCountry);
  const pageRows = [];
  for (const page of config.currentPages) {
    const search = gsc.filter(row => row.page === page); const traffic = organicGa.filter(row => row.page === page || row.eventPagePath === page);
    const pageClicks = sum(search, "clicks"), pageImpressions = sum(search, "impressions"), pageSessions = sum(traffic, "sessions"), pageLeads = leadCount(traffic);
    let issue = "HEALTHY";
    if (!pageImpressions && !pageSessions) issue = "LOW_VISIBILITY";
    else if (pageImpressions >= config.opportunityRules.minimumImpressions && pageClicks / pageImpressions < weightedCtr * config.opportunityRules.lowCtrRelativeToWeightedAverage) issue = "LOW_CTR";
    else if (pageSessions && !pageLeads) issue = "LOW_CONVERSION";
    else if (pageLeads && pageSessions && pageLeads / pageSessions >= (sessions ? leads / sessions : 0)) issue = "HIGH_VALUE";
    if (search.some(row => row.date && row.date >= config.migrationDate)) issue = issue === "HEALTHY" ? "NEW_PAGE_NEEDS_TIME" : issue;
    pageRows.push({ url: page, clicks: pageClicks, impressions: pageImpressions, ctr: pageImpressions ? pageClicks / pageImpressions : 0, position: weightedPosition(search), organicSessions: pageSessions, organicUsers: sum(traffic, "users"), engagementRate: sum(traffic, "sessions") ? sum(traffic, "engagedSessions") / sum(traffic, "sessions") : 0, leads: pageLeads, conversionRate: pageSessions ? pageLeads / pageSessions : 0, issue, migrationStatus: migrationStatus(page, search.map(row => row.date), config) });
  }

  const queryRows = [];
  for (const [query, rows] of aggregate(gsc, "query")) {
    const queryClicks = sum(rows, "clicks"), queryImpressions = sum(rows, "impressions"), ctr = queryImpressions ? queryClicks / queryImpressions : 0, position = weightedPosition(rows);
    const pages = [...aggregate(rows, "page").entries()].sort((a, b) => sum(b[1], "impressions") - sum(a[1], "impressions")); const currentPage = pages[0]?.[0] || "";
    const owner = config.ownership.find(item => new RegExp(item.pattern, "i").test(query)); const reasons = [];
    if (queryImpressions >= config.opportunityRules.minimumImpressions && ctr < weightedCtr * config.opportunityRules.lowCtrRelativeToWeightedAverage) reasons.push("HIGH_IMPRESSION_LOW_CTR");
    if (position >= 4 && position <= 10) reasons.push("POSITION_4_10");
    if (position >= 8 && position <= 20) reasons.push("POSITION_8_20");
    if (position > 20 && position <= 50) reasons.push("POSITION_20_50");
    if (queryImpressions > 0 && queryClicks === 0) reasons.push("ZERO_CLICK");
    if (owner && currentPage !== owner.page) reasons.push("WRONG_LANDING_PAGE");
    if (reasons.length) queryRows.push({ priority: reasons.includes("WRONG_LANDING_PAGE") ? "P1" : reasons.includes("POSITION_4_10") || reasons.includes("HIGH_IMPRESSION_LOW_CTR") ? "P2" : "P3", query, country: rows[0]?.country || "", impressions: queryImpressions, clicks: queryClicks, ctr, position, currentPage, intendedPage: owner?.page || "", ownerCluster: owner?.name || "", reason: reasons.join("|"), recommendedAction: reasons.includes("WRONG_LANDING_PAGE") ? "Review ownership, relevance and internal links" : reasons.includes("HIGH_IMPRESSION_LOW_CTR") ? "Review title/meta and SERP intent" : reasons.includes("POSITION_8_20") ? "Improve content, proof and internal links" : "Monitor or improve relevance" });
  }
  queryRows.sort((a, b) => a.priority.localeCompare(b.priority) || b.impressions - a.impressions);

  const kitchener = gsc.filter(row => /kitchener|kitchener.waterloo|waterloo/i.test(row.query)).map(row => ({ ...row, correctLandingPage: row.page === "/kitchener", flag: row.page === "/kitchener" ? "CORRECT_OWNER" : "WRONG_LOCAL_LANDING_PAGE" }));
  return {
    metadata: { baselineDate: config.baselineDate, migrationDate: config.migrationDate, generatedAt: new Date().toISOString(), notes: "Recent SEO migration/change context applies. Do not overreact to short periods." },
    executive: { organicClicks: clicks, organicImpressions: impressions, organicCtr: weightedCtr, averagePosition: weightedPosition(gsc), organicSessions: sessions, organicUsers: users, organicLeads: leads, organicConversionRate: sessions ? leads / sessions : 0, brandClicks: sum(brandRows, "clicks"), nonBrandClicks: sum(nonBrandRows, "clicks"), brandImpressions: sum(brandRows, "impressions"), nonBrandImpressions: sum(nonBrandRows, "impressions"), canadaClicks: sum(canadaGsc, "clicks"), canadaImpressions: sum(canadaGsc, "impressions"), canadaSessions: sum(canadaGa, "sessions"), canadaLeads: leadCount(canadaGa), leadQuality: "DATA UNAVAILABLE" },
    pages: pageRows, queries: queryRows, kitchener, servicePages: pageRows.filter(row => config.servicePages.includes(row.url)),
    leadTypes: [...aggregate(organicGa.filter(row => row.eventName === "generate_lead"), "leadType").entries()].map(([leadType, rows]) => ({ leadType, leads: sum(rows, "eventCount") })),
    quality: { gscRows: gsc.length, ga4Rows: ga4.length, organicGa4Rows: organicGa.length }
  };
}

function csvEscape(value) { const text = String(value ?? ""); return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text; }
export function toCsv(rows) { if (!rows.length) return ""; const headers = Object.keys(rows[0]); return [headers.join(","), ...rows.map(row => headers.map(header => csvEscape(row[header])).join(","))].join("\n") + "\n"; }

export async function writeReport(report, outputDir) {
  await fs.mkdir(outputDir, { recursive: true });
  await Promise.all([
    fs.writeFile(path.join(outputDir, "baseline.json"), JSON.stringify(report, null, 2)),
    fs.writeFile(path.join(outputDir, "executive-overview.csv"), toCsv([report.executive])),
    fs.writeFile(path.join(outputDir, "query-opportunities.csv"), toCsv(report.queries)),
    fs.writeFile(path.join(outputDir, "landing-page-performance.csv"), toCsv(report.pages)),
    fs.writeFile(path.join(outputDir, "canada-kitchener.csv"), toCsv(report.kitchener)),
    fs.writeFile(path.join(outputDir, "service-performance.csv"), toCsv(report.servicePages))
  ]);
}
