import fs from "node:fs/promises";
import path from "node:path";
import { buildReport, normalizeGa4Leads, normalizeGa4Traffic, normalizeGsc, readTabular, writeReport } from "./core.mjs";

const root = process.cwd();
const importsDir = path.resolve(root, process.env.SEO_IMPORT_DIR || "data/analytics-imports");
const outputDir = path.resolve(root, process.env.SEO_REPORT_DIR || "reports/seo-performance");
const config = JSON.parse(await fs.readFile(path.resolve(root, "config/seo-reporting.json"), "utf8"));
if (new Set(config.currentPages).size !== config.currentPages.length) throw new Error("Reporting config contains duplicate current page URLs");

async function findImport(name) {
  for (const extension of ["csv", "xlsx"]) {
    const candidate = path.join(importsDir, `${name}.${extension}`);
    try { await fs.access(candidate); return candidate; } catch { /* Try the next supported extension. */ }
  }
  throw new Error(`Missing ${name}.csv or ${name}.xlsx in ${importsDir}`);
}

try {
  const [gscFile, ga4TrafficFile, ga4LeadsFile] = await Promise.all([findImport("gsc"), findImport("ga4-traffic"), findImport("ga4-leads")]);
  const [gscTable, ga4TrafficTable, ga4LeadsTable] = await Promise.all([readTabular(gscFile), readTabular(ga4TrafficFile), readTabular(ga4LeadsFile)]);
  const gsc = normalizeGsc(gscTable.rows, config, `${gscFile} (${gscTable.sheet})`);
  const ga4Traffic = normalizeGa4Traffic(ga4TrafficTable.rows, config, `${ga4TrafficFile} (${ga4TrafficTable.sheet})`);
  const ga4Leads = normalizeGa4Leads(ga4LeadsTable.rows, config, `${ga4LeadsFile} (${ga4LeadsTable.sheet})`);
  const fatalIssues = [...gsc.issues, ...ga4Traffic.issues, ...ga4Leads.issues].filter(issue => ["IMPOSSIBLE_CTR", "IMPOSSIBLE_ENGAGEMENT_RATE", "INVALID_DATE", "DUPLICATE_ROW"].includes(issue.reason));
  if (fatalIssues.length) throw new Error(`Import validation failed:\n${JSON.stringify(fatalIssues, null, 2)}`);
  const ga4Records = [...ga4Traffic.records, ...ga4Leads.records];
  const report = buildReport(gsc.records, ga4Records, config);
  report.dataSources = { gsc: { file: path.basename(gscFile), sheet: gscTable.sheet, period: dateRange(gsc.records) }, ga4Traffic: { file: path.basename(ga4TrafficFile), sheet: ga4TrafficTable.sheet, period: dateRange(ga4Traffic.records) }, ga4Leads: { file: path.basename(ga4LeadsFile), sheet: ga4LeadsTable.sheet, period: dateRange(ga4Leads.records) } };
  report.validation = { gscIssues: gsc.issues, ga4TrafficIssues: ga4Traffic.issues, ga4LeadIssues: ga4Leads.issues };
  await writeReport(report, outputDir);
  console.log(`SEO baseline generated from real imports in ${outputDir}`);
  console.log(JSON.stringify({ dataSources: report.dataSources, executive: report.executive, quality: report.quality }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}

function dateRange(rows) {
  const dates = rows.map(row => row.date).filter(Boolean).sort();
  return dates.length ? { from: dates[0], to: dates.at(-1) } : { from: "DATA UNAVAILABLE", to: "DATA UNAVAILABLE" };
}
