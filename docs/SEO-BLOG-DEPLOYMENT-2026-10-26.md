# SEO and AI-deployment article change (2026-10-26)

- Added an original business AI deployment guide to the existing checked-in CMS fallback in `data/cms.json`. The dynamic `/blog/[postSlug]` route, listing, BlogPosting JSON-LD and XML sitemap already derive entries from published posts.
- Target article: `https://truefoxaiinc.com/blog/how-to-deploy-ai-in-business`.
- Updated `public/llms.txt` and `public/llms-full.txt` to use the hostname defined in `data/site.ts` (`https://truefoxaiinc.com`).
- Added an optional plain-text URL sitemap at `/sitemap.txt`; `/sitemap.xml` remains the canonical XML sitemap for crawlers. The text sitemap is not a ranking guarantee.
- The existing robots directives and legacy redirects were inspected and left unchanged. Do not infer live Google indexing from repository source alone.
- Validate after checkout: `npm run typecheck`, `npm run validate:phase-one`, `npm run build`; check `/blog`, the new post route, `/sitemap.xml`, `/sitemap.txt`, `/robots.txt`, `/llms.txt` and alternate-host redirects in deployed environment.
- Do not merge or deploy without review. After deployment, inspect the canonical URL in Google Search Console and submit for indexing if appropriate.
