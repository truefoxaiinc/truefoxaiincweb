import { readFile } from "node:fs/promises";

const [analytics, leadForm, careerForm, loader] = await Promise.all([
  readFile(new URL("../lib/analytics.ts", import.meta.url), "utf8"),
  readFile(new URL("../components/LeadForm.tsx", import.meta.url), "utf8"),
  readFile(new URL("../components/CareerApplicationForm.tsx", import.meta.url), "utf8"),
  readFile(new URL("../components/GoogleAnalytics.tsx", import.meta.url), "utf8"),
]);

const failures = [];

function requirePattern(name, source, pattern) {
  if (!pattern.test(source)) failures.push(name);
}

requirePattern("generate_lead event is missing", analytics, /trackEvent\("generate_lead"/);
requirePattern("lead type mapping is missing", analytics, /contact_form[\s\S]*request_quote_form[\s\S]*book_demo_form/);
requirePattern("analytics must be guarded outside production", analytics, /NODE_ENV === "production"[\s\S]*NEXT_PUBLIC_GA_DEBUG/);
requirePattern("lead submissions need a synchronous duplicate guard", leadForm, /if \(submissionInProgress\.current\) return/);
requirePattern("lead event must occur after an OK response", leadForm, /if \(!response\.ok\)[\s\S]*trackLead\(intent\)/);
requirePattern("career applications must use their own event", careerForm, /trackApplication\(\)/);
requirePattern("GA initialization needs a duplicate guard", loader, /window\.__truefoxGaInitialized/);
requirePattern("only one GA loader should configure gtag", loader, /window\.gtag\("config", measurementId\)/);

for (const piiName of ["name", "email", "phone", "message", "company"]) {
  const eventPayload = analytics.match(/trackEvent\("generate_lead",\s*\{([\s\S]*?)\}\);/)?.[1] ?? "";
  if (new RegExp(`\\b${piiName}\\s*:`).test(eventPayload)) failures.push(`generate_lead contains PII field: ${piiName}`);
}

if (failures.length) {
  console.error("Analytics validation failed:");
  failures.forEach(failure => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Analytics validation passed: success-only lead tracking, duplicate guard, environment guard, and PII-safe parameters are present.");
