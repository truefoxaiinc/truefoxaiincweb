const baseUrl = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const canonicalUrl = "https://www.truefoxaiinc.com/kitchener";
const rootUrl = "https://www.truefoxaiinc.com";
const organizationId = `${rootUrl}/#organization`;
const websiteId = `${rootUrl}/#website`;
const canadaOfficeId = `${rootUrl}/#canada-office`;
const expectedTitle = "AI Engineering Company in Kitchener | Truefox AI";
const expectedDescription = "Truefox AI provides custom AI engineering from Kitchener, Ontario, including computer vision, private AI, automation, edge systems and product development.";
const expectedH1 = "AI Engineering &amp; Development in Kitchener";
const forbidden = [
  "truefoxaiinc@gmail.com",
  "/about-us/",
  "/contact-us/",
  "/terms-conditions-and-privacy-policy/",
  "https://truefoxaiinc.com",
  "http://truefoxaiinc.com",
  '"@type":"LocalBusiness"',
  '"telephone"',
  '"openingHours"',
  '"geo"',
  '"aggregateRating"'
];

const response = await fetch(`${baseUrl}/kitchener`, { signal: AbortSignal.timeout(20_000) });
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
const organization = byType("Organization");
const canadaPlaces = byType("Place").filter((entity) => entity["@id"] === canadaOfficeId);
const canonicalMatches = html.includes(`<link rel="canonical" href="${canonicalUrl}"`);
const titleMatches = html.includes(`<title>${expectedTitle}</title>`);
const descriptionMatches = html.includes(`<meta name="description" content="${expectedDescription}"`);
const h1Matches = html.includes(`<h1>${expectedH1}</h1>`);
const indexable = !/<meta[^>]+name="robots"[^>]+noindex/i.test(html);
const officeReferenceMatches = webpage?.about?.["@id"] === canadaOfficeId;
const organizationOfficeMatches = organization[0]?.location?.some((location) => location["@id"] === canadaOfficeId) === true;
const websiteMatches = webpage?.isPartOf?.["@id"] === websiteId;
const breadcrumbMatches = webpage?.breadcrumb?.["@id"] === `${canonicalUrl}#breadcrumb`;
const faqMatches = faq?.isPartOf?.["@id"] === `${canonicalUrl}#webpage` && faq?.mainEntity?.length === 6;
const visibleFaqs = (html.match(/<h2>(WHERE IS TRUEFOX AI LOCATED IN CANADA\?|WHAT AI DEVELOPMENT SERVICES DOES TRUEFOX AI PROVIDE IN KITCHENER\?|DOES TRUEFOX AI BUILD CUSTOM AI SYSTEMS FOR CANADIAN BUSINESSES\?|CAN TRUEFOX AI DEVELOP AI AGENTS AND AUTOMATION SYSTEMS\?|DOES TRUEFOX AI BUILD COMPUTER-VISION SOLUTIONS\?|HOW CAN A COMPANY DISCUSS AN AI PROJECT WITH TRUEFOX AI\?)<\/h2>/g) || []).length;
const forbiddenMatches = forbidden.filter((value) => html.includes(value));
const requiredLinks = ["/services", "/about", "/contact", "/request-quote", "/ai-smart-security", "/biometric-intelligence", "/private-ai-assistants", "/agentic-automation", "/iot-edge-ai", "/custom-ai-ml", "/web-mobile-products", "/research-development"];
const missingLinks = requiredLinks.filter((href) => !html.includes(`href="${href}"`));

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`, { signal: AbortSignal.timeout(20_000) });
const sitemap = await sitemapResponse.text();
const sitemapMatches = sitemap.split(`<loc>${canonicalUrl}</loc>`).length - 1;

const supportingPaths = ["/", "/about", "/contact"];
const missingSupportingLinks = [];
for (const path of supportingPaths) {
  const supportingResponse = await fetch(`${baseUrl}${path}`, { signal: AbortSignal.timeout(20_000) });
  const supportingHtml = await supportingResponse.text();
  if (!supportingHtml.includes('href="/kitchener"')) missingSupportingLinks.push(path);
}

const contactResponse = await fetch(`${baseUrl}/contact`, { signal: AbortSignal.timeout(20_000) });
const contactHtml = await contactResponse.text();
const contactAddressMatches = ["Suite 300", "72 Victoria Street South", "Kitchener, Ontario N2G 4Y9", "Canada"]
  .every((part) => contactHtml.includes(part));

const result = {
  http: response.status,
  canonical: canonicalMatches,
  title: titleMatches,
  description: descriptionMatches,
  h1: h1Matches,
  indexable,
  jsonLdBlocks: blocks.length,
  validJson: blocks.length - invalidJson,
  invalidJson,
  organization: organization.length,
  website: byType("WebSite").length,
  webpage: byType("WebPage").length,
  canadaPlace: canadaPlaces.length,
  allPlaces: byType("Place").length,
  breadcrumbList: byType("BreadcrumbList").length,
  faqPage: byType("FAQPage").length,
  officeReferenceMatches,
  organizationOfficeMatches,
  websiteMatches,
  breadcrumbMatches,
  visibleFaqs,
  faqMatches,
  sitemapMatches,
  missingLinks,
  missingSupportingLinks,
  contactAddressMatches,
  forbiddenMatches
};

const pass = response.ok && canonicalMatches && titleMatches && descriptionMatches && h1Matches && indexable
  && invalidJson === 0 && organization.length === 1 && organization[0]["@id"] === organizationId
  && byType("WebSite").length === 1 && byType("WebPage").length === 1
  && canadaPlaces.length === 1 && byType("Place").length === 2
  && byType("BreadcrumbList").length === 1 && byType("FAQPage").length === 1
  && officeReferenceMatches && organizationOfficeMatches && websiteMatches && breadcrumbMatches
  && visibleFaqs === 6 && faqMatches && sitemapMatches === 1
  && missingLinks.length === 0 && missingSupportingLinks.length === 0
  && contactAddressMatches && forbiddenMatches.length === 0;

console.log(JSON.stringify({ ...result, result: pass ? "PASS" : "FAIL" }, null, 2));
if (!pass) process.exitCode = 1;
