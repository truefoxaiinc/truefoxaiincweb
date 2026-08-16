const baseUrl = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const canonicalUrl = "https://www.truefoxaiinc.com/kochi";
const organizationId = "https://www.truefoxaiinc.com/#organization";
const websiteId = "https://www.truefoxaiinc.com/#website";
const indiaOfficeId = "https://www.truefoxaiinc.com/#india-office";
const expectedTitle = "AI Engineering in Kochi | Truefox AI Inc.";
const expectedH1 = "AI Engineering &amp; Development in Kochi";
const forbidden = [
  "truefoxaiinc@gmail.com",
  "/about-us/",
  "/contact-us/",
  "/terms-conditions-and-privacy-policy/",
  '"@type":"LocalBusiness"',
  '"telephone"',
  '"openingHours"',
  '"geo"',
  '"aggregateRating"'
];

const response = await fetch(`${baseUrl}/kochi`, { signal: AbortSignal.timeout(20_000) });
const html = await response.text();
const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => match[1]);
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
const webpage = byType("WebPage").find((entity) => entity["@id"] === `${canonicalUrl}#webpage`);
const faq = byType("FAQPage").find((entity) => entity["@id"] === `${canonicalUrl}#faq`);
const canonicalMatches = html.includes(`<link rel="canonical" href="${canonicalUrl}"`);
const titleMatches = html.includes(`<title>${expectedTitle}</title>`);
const h1Matches = html.includes(`<h1>${expectedH1}</h1>`);
const indexable = !/<meta[^>]+name="robots"[^>]+noindex/i.test(html);
const officeReferenceMatches = webpage?.about?.["@id"] === indiaOfficeId;
const websiteMatches = webpage?.isPartOf?.["@id"] === websiteId;
const breadcrumbMatches = webpage?.breadcrumb?.["@id"] === `${canonicalUrl}#breadcrumb`;
const faqMatches = faq?.isPartOf?.["@id"] === `${canonicalUrl}#webpage` && faq?.mainEntity?.length === 5;
const visibleFaqs = (html.match(/<h2>(WHERE IS TRUEFOX AI LOCATED IN KOCHI\?|WHAT AI SERVICES DOES THE KOCHI ENGINEERING TEAM PROVIDE\?|DOES TRUEFOX AI BUILD CUSTOM AI AND MACHINE-LEARNING SYSTEMS\?|CAN TRUEFOX AI DEVELOP PRIVATE AI ASSISTANTS AND AI AGENTS\?|HOW CAN A COMPANY DISCUSS AN AI PROJECT WITH TRUEFOX AI\?)<\/h2>/g) || []).length;
const forbiddenMatches = forbidden.filter((value) => html.includes(value));
const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`, { signal: AbortSignal.timeout(20_000) });
const sitemap = await sitemapResponse.text();
const sitemapMatches = sitemap.split(`<loc>${canonicalUrl}</loc>`).length - 1;
const organization = byType("Organization");
const organizationMatches = organization.length === 1 && organization[0]["@id"] === organizationId;

const result = {
  http: response.status,
  canonical: canonicalMatches,
  title: titleMatches,
  h1: h1Matches,
  indexable,
  jsonLdBlocks: blocks.length,
  validJson: blocks.length - invalidJson,
  invalidJson,
  organization: byType("Organization").length,
  website: byType("WebSite").length,
  webpage: byType("WebPage").length,
  imageObject: byType("ImageObject").length,
  place: byType("Place").length,
  breadcrumbList: byType("BreadcrumbList").length,
  faqPage: byType("FAQPage").length,
  officeReferenceMatches,
  websiteMatches,
  breadcrumbMatches,
  visibleFaqs,
  faqMatches,
  sitemapMatches,
  forbiddenMatches
};

const pass = response.ok && canonicalMatches && titleMatches && h1Matches && indexable
  && invalidJson === 0 && organizationMatches && byType("WebSite").length === 1
  && byType("WebPage").length === 1 && byType("Place").length === 2
  && byType("BreadcrumbList").length === 1 && byType("FAQPage").length === 1
  && officeReferenceMatches && websiteMatches && breadcrumbMatches
  && visibleFaqs === 5 && faqMatches && sitemapMatches === 1
  && forbiddenMatches.length === 0;

console.log(JSON.stringify({ ...result, result: pass ? "PASS" : "FAIL" }, null, 2));
if (!pass) process.exitCode = 1;
