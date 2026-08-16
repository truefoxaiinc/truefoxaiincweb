const baseUrl = (process.argv[2] || "https://www.truefoxaiinc.com").replace(/\/$/, "");
const canonicalRoot = "https://www.truefoxaiinc.com";

const pages = [
  { path: "/", title: "Enterprise AI Engineering Company | Truefox AI Inc.", links: ["/services", "/kitchener"] },
  { path: "/services", title: "AI Development Services | Truefox AI Inc.", links: ["/ai-smart-security", "/biometric-intelligence", "/private-ai-assistants", "/agentic-automation", "/iot-edge-ai", "/custom-ai-ml", "/web-mobile-products", "/research-development"] },
  { path: "/kitchener", title: "AI Engineering Company in Kitchener | Truefox AI", links: ["/services"] },
  { path: "/ai-smart-security", title: "AI Video Analytics &amp; Smart Security | Truefox AI", links: ["/biometric-intelligence", "/iot-edge-ai", "/request-quote"] },
  { path: "/biometric-intelligence", title: "Biometric AI &amp; Identity Verification | Truefox AI", links: ["/ai-smart-security", "/request-quote"] },
  { path: "/private-ai-assistants", title: "Private AI Assistants &amp; Enterprise RAG | Truefox AI", links: ["/agentic-automation", "/request-quote"] },
  { path: "/agentic-automation", title: "AI Agent Development &amp; Automation | Truefox AI", links: ["/private-ai-assistants", "/request-quote"] },
  { path: "/iot-edge-ai", title: "Edge AI &amp; IoT Development | Truefox AI", links: ["/ai-smart-security", "/request-quote"] },
  { path: "/custom-ai-ml", title: "Custom Machine Learning Development | Truefox AI", links: ["/request-quote"] },
  { path: "/web-mobile-products", title: "AI Product, Web &amp; Mobile Development | Truefox AI", links: ["/request-quote"] },
  { path: "/research-development", title: "AI Proof of Concept &amp; Prototyping | Truefox AI", links: ["/custom-ai-ml", "/web-mobile-products", "/request-quote"] }
];

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(match => match[1]);
}

let failed = false;
for (const page of pages) {
  const response = await fetch(`${baseUrl}${page.path}`);
  const html = await response.text();
  const blocks = jsonLdBlocks(html);
  let validJson = 0;
  for (const block of blocks) {
    try { JSON.parse(block); validJson += 1; } catch { /* reported below */ }
  }
  const missingLinks = page.links.filter(link => !html.includes(`href="${link}"`));
  const result = {
    path: page.path,
    status: response.status,
    title: html.includes(`<title>${page.title}</title>`),
    description: /<meta name="description" content="[^\"]{80,}"/.test(html),
    canonical: html.includes(`<link rel="canonical" href="${canonicalRoot}${page.path === "/" ? "" : page.path}"`),
    h1Count: (html.match(/<h1[\s>]/g) || []).length,
    indexable: !/<meta name="robots" content="[^"]*noindex/i.test(html),
    jsonLdBlocks: blocks.length,
    validJson,
    missingLinks,
    localBusiness: (html.match(/"@type":"LocalBusiness"/g) || []).length
  };
  const pass = response.ok && result.title && result.description && result.canonical && result.h1Count === 1
    && result.indexable && blocks.length > 0 && validJson === blocks.length && missingLinks.length === 0 && result.localBusiness === 0;
  console.log(JSON.stringify({ ...result, result: pass ? "PASS" : "FAIL" }));
  failed ||= !pass;
}

if (failed) process.exit(1);
