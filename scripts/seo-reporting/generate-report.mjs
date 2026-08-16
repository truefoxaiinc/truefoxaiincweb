import fs from "node:fs/promises";
import path from "node:path";
import { buildReport, normalizeGa4Leads, normalizeGa4Traffic, normalizeGsc, readTabular, writeReport } from "./core.mjs";
import { buildNativeGscReport, loadNativeGsc } from "./native-gsc.mjs";

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

async function optionalImport(name) {
  try {
    const file = await findImport(name);
    return (await fs.stat(file)).size > 0 ? file : null;
  } catch { return null; }
}

try {
  const nativeDirectory = path.join(importsDir, "gsc-export");
  let nativeGsc = null;
  try { nativeGsc = await loadNativeGsc(nativeDirectory, config); } catch (error) { if (!String(error?.message || error).includes("missing Chart.csv")) throw error; }
  const [ga4TrafficFile, ga4LeadsFile] = await Promise.all([optionalImport("ga4-traffic"), optionalImport("ga4-leads")]);
  let ga4Records = []; let ga4Traffic = null; let ga4Leads = null; let ga4TrafficTable = null; let ga4LeadsTable = null;
  if (ga4TrafficFile || ga4LeadsFile) {
    if (!ga4TrafficFile || !ga4LeadsFile) throw new Error("GA4 reporting requires both ga4-traffic and ga4-leads exports; remove the incomplete file or provide its pair.");
    [ga4TrafficTable, ga4LeadsTable] = await Promise.all([readTabular(ga4TrafficFile), readTabular(ga4LeadsFile)]);
    ga4Traffic = normalizeGa4Traffic(ga4TrafficTable.rows, config, `${ga4TrafficFile} (${ga4TrafficTable.sheet})`);
    ga4Leads = normalizeGa4Leads(ga4LeadsTable.rows, config, `${ga4LeadsFile} (${ga4LeadsTable.sheet})`);
    ga4Records = [...ga4Traffic.records, ...ga4Leads.records];
  }

  if (nativeGsc) {
    const report = buildNativeGscReport(nativeGsc, config, ga4Records);
    report.dataSources = { gsc: { directory: "gsc-export", files: nativeGsc.files, period: nativeGsc.filters.Date || "DATA UNAVAILABLE" }, ga4Traffic: ga4TrafficFile ? { file: path.basename(ga4TrafficFile), sheet: ga4TrafficTable.sheet, period: dateRange(ga4Traffic.records) } : "DATA UNAVAILABLE", ga4Leads: ga4LeadsFile ? { file: path.basename(ga4LeadsFile), sheet: ga4LeadsTable.sheet, period: dateRange(ga4Leads.records) } : "DATA UNAVAILABLE" };
    report.validation = { ga4TrafficIssues: ga4Traffic?.issues || [], ga4LeadIssues: ga4Leads?.issues || [] };
    await writeReport(report, outputDir);
    console.log(`SEO baseline generated from native Search Console exports in ${outputDir}`);
    if (!ga4Records.length) console.warn("GA4 DATA UNAVAILABLE: generated a GSC-only baseline. Add both GA4 exports to enable sessions, leads and conversion rate.");
    console.log(JSON.stringify({ dataSources: report.dataSources, executive: report.executive, quality: report.quality }, null, 2));
    process.exit(0);
  }

  const gscFile = await findImport("gsc");
  if (!ga4TrafficFile || !ga4LeadsFile) throw new Error("Combined GSC import mode requires both ga4-traffic and ga4-leads exports.");
  const gscTable = await readTabular(gscFile);
  const gsc = normalizeGsc(gscTable.rows, config, `${gscFile} (${gscTable.sheet})`);
  ga4Traffic = normalizeGa4Traffic(ga4TrafficTable.rows, config, `${ga4TrafficFile} (${ga4TrafficTable.sheet})`);
  ga4Leads = normalizeGa4Leads(ga4LeadsTable.rows, config, `${ga4LeadsFile} (${ga4LeadsTable.sheet})`);
  const fatalIssues = [...gsc.issues, ...ga4Traffic.issues, ...ga4Leads.issues].filter(issue => ["IMPOSSIBLE_CTR", "IMPOSSIBLE_ENGAGEMENT_RATE", "INVALID_DATE", "DUPLICATE_ROW"].includes(issue.reason));
  if (fatalIssues.length) throw new Error(`Import validation failed:\n${JSON.stringify(fatalIssues, null, 2)}`);
  ga4Records = [...ga4Traffic.records, ...ga4Leads.records];
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
