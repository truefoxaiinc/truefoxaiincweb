# Sprint 9 — Technical SEO audit and validation

Date: 2026-11-04. Scope: validation tooling only; no routing or infrastructure changes.

## Findings
1. A confirmed stale local check: `scripts/validate-kitchener-schema.mjs` expects exactly six visible FAQs and six `FAQPage` entries even after Sprint 8 introduced two more. Update the expected count and titles to eight. This is a test-maintenance bug, not proof of a live SEO fault.
2. Existing `validate:phase-one` covers 11 landing pages' HTTP, title, description, canonical, H1, JSON parsing and some internal links, but does not validate robots directives, sitemap URL uniqueness, legacy redirects or admin noindex behaviour.
3. Historic GSC "Page with redirect" exclusions for canonicalizing redirects are expected behaviour, not evidence that the redirects need to change.
4. Current Core Web Vitals bottlenecks cannot be concluded from code alone. A field-data CrUX or PageSpeed Insights report and mobile/desktop Lighthouse trace are needed before changing assets, JS or rendering.

## Changes
- Fix Kitchener FAQ validator after Sprint 8's two additions.
- Add a dependency-free, **read-only** HTTP validation command: `npm run validate:technical-seo` (defaults to local http://localhost:3000). It checks robots/sitemap, canonical-only sitemap entries, selected redirects, service-page canonicals and admin noindex.
- Avoid all redirects, server headers, canonical changes, image optimization guesses, sitemap rewrites or local-business claims without evidence.

## Quality gates
- [ ] npm ci && npm run lint:content && npm run validate:blog-seo && npm run typecheck && npm run build
- [ ] With local server running: npm run validate:kitchener
- [ ] With local server running: npm run validate:technical-seo
- [ ] With local server running: node scripts/validate-phase-one-seo.mjs http://localhost:3000
- [ ] Run npm run validate:technical-seo -- https://truefoxaiinc.com after deployment, noting Apache-level redirects can differ from Next.js local behaviour.
- [ ] Audit Google-selected canonical and indexing categories using Google Search Console URL Inspection, not just sitemap inclusion.
- [ ] Capture mobile/desktop Lighthouse LCP, INP (field data), CLS and TTFB data before proposing a CWV performance code patch.

## Notes
Google Search Console Page Indexing status and CrUX field vitals are not accessible by this source-only audit. A successful validator does **not** establish Google indexing or Core Web Vitals compliance.
