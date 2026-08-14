const baseUrl = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const canonicalUrl = "https://www.truefoxaiinc.com";
const paths = [
  "/ai-smart-security",
  "/biometric-intelligence",
  "/private-ai-assistants",
  "/agentic-automation",
  "/iot-edge-ai",
  "/custom-ai-ml",
  "/web-mobile-products",
  "/research-development"
];

const scriptPattern = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
const forbidden = [
  "truefoxaiinc@gmail.com",
  "/about-us/",
  "/contact-us/",
  "/terms-conditions-and-privacy-policy/",
  '"@type":"LocalBusiness"',
  '"telephone"',
  '"sameAs"',
  '"alternateName"'
];

let failed = false;

for (const path of paths) {
  const response = await fetch(`${baseUrl}${path}`, { signal: AbortSignal.timeout(20_000) });
  const html = await response.text();
  const blocks = [...html.matchAll(scriptPattern)].map((match) => match[1]);
  const entities = [];
  let invalidJson = 0;

  for (const block of blocks) {
    try {
      const parsed = JSON.parse(block);
      entities.push(...(Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed]));
    } catch {
      invalidJson += 1;
    }
  }

  const byType = (type) => entities.filter((entity) => entity["@type"] === type);
  const pageId = `${canonicalUrl}${path}#webpage`;
  const serviceId = `${canonicalUrl}${path}#service`;
  const webpage = byType("WebPage").find((entity) => entity["@id"] === pageId);
  const service = byType("Service").find((entity) => entity["@id"] === serviceId);
  const providerMatches = service?.provider?.["@id"] === `${canonicalUrl}/#organization`;
  const mainEntityMatches = webpage?.mainEntity?.["@id"] === serviceId;
  const websiteMatches = webpage?.isPartOf?.["@id"] === `${canonicalUrl}/#website`;
  const forbiddenMatches = forbidden.filter((value) => html.includes(value));
  const pass = response.ok && invalidJson === 0 && Boolean(webpage && service)
    && providerMatches && mainEntityMatches && websiteMatches
    && byType("Organization").length === 1 && forbiddenMatches.length === 0;

  failed ||= !pass;
  console.log(JSON.stringify({
    path,
    status: response.status,
    jsonLdBlocks: blocks.length,
    validJson: blocks.length - invalidJson,
    invalidJson,
    organization: byType("Organization").length,
    website: byType("WebSite").length,
    webpage: byType("WebPage").length,
    service: byType("Service").length,
    faqPage: byType("FAQPage").length,
    imageObject: byType("ImageObject").length,
    place: byType("Place").length,
    breadcrumbList: byType("BreadcrumbList").length,
    providerMatches,
    mainEntityMatches,
    websiteMatches,
    forbiddenMatches,
    result: pass ? "PASS" : "FAIL"
  }));
}

if (failed) process.exitCode = 1;
