import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const input = process.argv[2] || "reports/lh-home.json";
const file = resolve(process.cwd(), input);
const number = value => typeof value === "number" && Number.isFinite(value) ? value : null;
const round = (v, places = 2) => v === null ? null : Number(v.toFixed(places));
const thresholds = {
  "largest-contentful-paint": { good: 2500, poor: 4000 },
  "cumulative-layout-shift": { good: 0.1, poor: 0.25 }
};
function status(value, limits) {
  if (value === null) return "DATA UNAVAILABLE";
  return value <= limits.good ? "GOOD" : value <= limits.poor ? "NEEDS IMPROVEMENT" : "POOR";
}
try {
  const report = JSON.parse(await readFile(file, "utf8"));
  if (!report || typeof report !== "object" || !report.audits || !report.categories) {
    throw new Error("Expected a raw Lighthouse JSON report with audits and categories; Lighthouse HTML or custom summaries are not supported.");
  }
  const audit = id => report.audits[id] || {};
  const metric = id => number(audit(id).numericValue);
  const lcp = metric("largest-contentful-paint");
  const cls = metric("cumulative-layout-shift");
  const tbt = metric("total-blocking-time");
  const fcp = metric("first-contentful-paint");
  const speedIndex = metric("speed-index");
  const performanceScore = number(report.categories.performance?.score);
  const score = performanceScore === null ? null : Math.round(performanceScore * 100);
  const opportunities = Object.entries(report.audits)
    .filter(([, value]) => value?.details?.type === "opportunity" && number(value.details.overallSavingsMs) !== null && value.details.overallSavingsMs > 0)
    .map(([id, value]) => ({
      id, title: value.title,
      estimatedSavingsMs: Math.round(value.details.overallSavingsMs)
    }))
    .sort((a, b) => b.estimatedSavingsMs - a.estimatedSavingsMs)
    .slice(0, 8);
  const diagnostics = [
    "render-blocking-resources", "unused-javascript", "modern-image-formats",
    "uses-optimized-images", "uses-responsive-images", "offscreen-images",
    "bootup-time", "mainthread-work-breakdown", "largest-contentful-paint-element",
    "lcp-discovery-insight", "lcp-breakdown-insight", "network-dependency-tree-insight"
  ].filter(id => report.audits[id])
    .map(id => ({
      id, title: audit(id).title || id,
      score: number(audit(id).score),
      displayValue: audit(id).displayValue || null
    }));
  const summary = {
    input, url: report.finalDisplayedUrl || report.finalUrl || report.requestedUrl || null,
    fetchedAt: report.fetchTime || null,
    lighthouseVersion: report.lighthouseVersion || null,
    formFactor: report.configSettings?.formFactor || "UNKNOWN",
    labOnly: true,
    performanceScore: score,
    metrics: {
      LCP: { ms: round(lcp, 0), status: status(lcp, thresholds["largest-contentful-paint"]) },
      CLS: { value: round(cls, 3), status: status(cls, thresholds["cumulative-layout-shift"]) },
      TBT: { ms: round(tbt, 0) },
      FCP: { ms: round(fcp, 0) },
      speedIndex: { ms: round(speedIndex, 0) },
      INP: "NOT MEASURED BY LIGHTHOUSE LAB REPORT; REQUIRES FIELD DATA"
    },
    opportunities, diagnostics
  };
  console.log(JSON.stringify(summary, null, 2));
  if (lcp === null || cls === null || score === null) {
    console.error("WARNING: incomplete Lighthouse metrics; do not treat this as a passing performance assessment.");
  }
} catch (error) {
  console.error("Lighthouse baseline failed: " + (error instanceof Error ? error.message : error));
  process.exitCode = 1;
}
