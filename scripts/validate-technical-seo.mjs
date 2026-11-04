// Read-only checks against a local Next.js instance or the public site.
// Run: node scripts/validate-technical-seo.mjs http://localhost:3000
const base = (process.argv[2] || "http://localhost:3000").replace(/\/$/, "");
const canonical = "https://truefoxaiinc.com";
const required = [
  "/", "/services", "/kitchener", "/kochi", "/ai-smart-security",
  "/custom-ai-ml", "/research-development", "/blog/ai-cctv-security"
];
let failed = false;
async function request(path, options = {}) {
  const res = await fetch(base + path, {
    redirect: "manual",
    signal: AbortSignal.timeout(20_000),
    ...options
  });
  return { res, body: await res.text() };
}
function report(name, pass, data = {}) {
  console.log(JSON.stringify({ name, ...data, result: pass ? "PASS" : "FAIL" }));
  failed ||= !pass;
}
try {
  const robots = await request("/robots.txt");
  const robotText = robots.body;
  report("robots", robots.res.status === 200 &&
    robotText.includes("Sitemap: " + canonical + "/sitemap.xml") &&
    /User-agent:\s*\*/i.test(robotText) &&
    /Disallow:\s*\/api\//i.test(robotText), {
      status: robots.res.status, sitemapDirective: robotText.includes(canonical + "/sitemap.xml")
    });
  const sitemap = await request("/sitemap.xml");
  const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const requiredUrls = required.map(path => canonical + (path === "/" ? "" : path));
  const missing = requiredUrls.filter(url => !locs.includes(url));
  const foreign = locs.filter(url => !url.startsWith(canonical + "/") && url !== canonical);
  const duplicates = locs.filter((url, idx) => locs.indexOf(url) !== idx);
  const slashVariants = locs.filter(url => url !== canonical && new URL(url).pathname.endsWith("/"));
  report("sitemap", sitemap.res.status === 200 && locs.length > 0 &&
    !missing.length && !foreign.length && !duplicates.length && !slashVariants.length, {
      status: sitemap.res.status, entries: locs.length, missing, foreign, duplicates, slashVariants
    });
  // Redirected variants are normally excluded from Google's index; this is expected.
  for (const [source, target] of [
    ["/about-us/", "/about"], ["/contact-us/", "/contact"],
    ["/services/", "/services"]
  ]) {
    const { res } = await request(source);
    const destination = res.headers.get("location") || "";
    const url = destination ? new URL(destination, base) : null;
    report("redirect " + source, [301, 308].includes(res.status) &&
      url?.pathname === target, { status: res.status, destination });
  }
  for (const path of ["/kitchener", "/ai-smart-security", "/custom-ai-ml"]) {
    const { res, body } = await request(path);
    const url = canonical + path;
    report("page " + path, res.status === 200 &&
      body.includes('<link rel="canonical" href="' + url + '"') &&
      !/<meta[^>]+name="robots"[^>]*noindex/i.test(body), { status: res.status });
  }
  for (const path of ["/admin", "/admin/login"]) {
    const { res, body } = await request(path);
    const noindex = /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(body) ||
      /<meta[^>]+content="[^"]*noindex[^"]*"[^>]+name="robots"/i.test(body) ||
      /(^|,\s*)noindex/i.test(res.headers.get("x-robots-tag") || "");
    report("admin noindex " + path, noindex, { status: res.status, noindex });
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
if (failed) process.exitCode = 1;
