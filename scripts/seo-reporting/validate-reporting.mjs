import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { buildReport, normalizeGa4Leads, normalizeGa4Traffic, normalizeGsc, parseCsv, toCsv, writeReport } from "./core.mjs";
import { buildNativeGscReport } from "./native-gsc.mjs";

const root = process.cwd();
const config = JSON.parse(await fs.readFile(path.join(root, "config/seo-reporting.json"), "utf8"));
const [gscText, ga4Text, ga4LeadsText] = await Promise.all([
  fs.readFile(path.join(root, "scripts/seo-reporting/fixtures/gsc.csv"), "utf8"),
  fs.readFile(path.join(root, "scripts/seo-reporting/fixtures/ga4-traffic.csv"), "utf8"),
  fs.readFile(path.join(root, "scripts/seo-reporting/fixtures/ga4-leads.csv"), "utf8")
]);

const gsc = normalizeGsc(parseCsv(gscText), config, "synthetic GSC fixture");
const ga4 = normalizeGa4Traffic(parseCsv(ga4Text), config, "synthetic GA4 traffic fixture");
const ga4Leads = normalizeGa4Leads(parseCsv(ga4LeadsText), config, "synthetic GA4 leads fixture");
const report = buildReport(gsc.records, [...ga4.records, ...ga4Leads.records], config);
const failures = [];
if (report.executive.organicClicks !== 19) failures.push("organic clicks aggregation");
if (report.executive.organicSessions !== 85) failures.push("Organic Search channel filter");
if (report.executive.organicLeads !== 4) failures.push("generate_lead aggregation");
if (report.executive.canadaLeads !== 4) failures.push("Canada lead filter");
if (report.executive.brandClicks !== 12 || report.executive.nonBrandClicks !== 7) failures.push("brand/non-brand classification");
if (!report.queries.some(row => row.query === "ai company kitchener" && row.reason.includes("WRONG_LANDING_PAGE"))) failures.push("keyword ownership flag");
if (!report.kitchener.some(row => row.flag === "WRONG_LOCAL_LANDING_PAGE")) failures.push("Kitchener owner flag");
if (!toCsv(report.pages).includes("organicSessions")) failures.push("landing-page CSV output");
const duplicatedGsc = normalizeGsc(parseCsv(`${gscText.trim()}\n${gscText.trim().split("\n")[1]}\n`), config, "duplicate fixture");
if (!duplicatedGsc.issues.some(issue => issue.reason === "DUPLICATE_ROW")) failures.push("duplicate-row detection");

const nativeReport = buildNativeGscReport({
  chart: [{ date: "2026-08-01", clicks: 10, impressions: 100, ctr: 0.1, position: 5 }],
  queries: [{ query: "truefox", clicks: 4, impressions: 20, ctr: 0.2, position: 2 }],
  pages: [{ page: "/", originalPage: "https://truefoxaiinc.com/", clicks: 10, impressions: 100, ctr: 0.1, position: 5 }],
  countries: [{ country: "canada", clicks: 6, impressions: 30, ctr: 0.2, position: 2 }],
  devices: [{ device: "mobile", clicks: 10, impressions: 100, ctr: 0.1, position: 5 }],
  appearance: [], filters: { Date: "Last 3 months", "Search type": "Web" }
}, config);
if (nativeReport.executive.organicClicks !== 10 || nativeReport.executive.canadaClicks !== 6) failures.push("native GSC aggregation");
if (nativeReport.executive.organicSessions !== "DATA UNAVAILABLE") failures.push("native GSC missing-GA4 handling");
if (nativeReport.pages[0].migrationStatus !== "CURRENT_URL") failures.push("native GSC page classification");
if (!nativeReport.metadata.limitation.includes("do not join query, page")) failures.push("native GSC dimensional limitation");

const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "truefox-seo-report-"));
try {
  await writeReport(report, tempDir);
  const files = await fs.readdir(tempDir);
  for (const required of ["baseline.json", "executive-overview.csv", "query-opportunities.csv", "landing-page-performance.csv", "canada-kitchener.csv", "service-performance.csv"]) {
    if (!files.includes(required)) failures.push(`missing output ${required}`);
  }
} finally {
  await fs.rm(tempDir, { recursive: true, force: true });
}

for (const malformed of [
  { name: "zero rows", run: () => normalizeGsc([["Query", "Page", "Clicks", "Impressions", "CTR", "Position"]], config) },
  { name: "missing columns", run: () => normalizeGa4Traffic([["Landing page"], ["/"]], config) }
]) {
  try { malformed.run(); failures.push(`did not reject ${malformed.name}`); } catch { /* Expected validation failure. */ }
}

if (failures.length) {
  console.error("Reporting validation failed:"); failures.forEach(item => console.error(`- ${item}`)); process.exit(1);
}
console.log("Reporting validation passed: combined and native GSC imports, organic filter, brand split, lead attribution, ownership flags, Kitchener reporting, validation errors, and outputs are correct.");
