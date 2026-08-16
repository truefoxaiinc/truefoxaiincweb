import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { buildReport, normalizeGa4Leads, normalizeGa4Traffic, normalizeGsc, parseCsv, toCsv, writeReport } from "./core.mjs";

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
console.log("Reporting validation passed: imports, organic filter, brand split, lead attribution, ownership flags, Kitchener reporting, validation errors, and outputs are correct.");
