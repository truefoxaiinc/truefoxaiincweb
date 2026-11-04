# Sprint 8 — Kitchener / Canada Search Intent

Date: 2026-11-04. Scope: /kitchener content only.

## Evidence and intent
The previously supplied Search Console report indicated impressions without clicks for the query "ai services kitchener" (36 impressions, 0 clicks, average position around 43). This is historical directional evidence, not a reliable forecast of rankings. The existing Kitchener page already has canonical metadata, a specific office address, relevant service cards and FAQs. No new address, hours, awards, client list or performance claims are introduced.

## Changes
- Explain buyer steps for Canadian organisations looking for local AI project scoping.
- Add specific linked service paths and two related educational articles using the existing inline-link renderer.
- Add two visible FAQs about starting a Kitchener project and service outside Kitchener; the existing page schema generates FAQPage data from visible sections.
- Be explicit about the Canada home-office/India-branch operating model and avoid falsely representing delivery as exclusively local.
- Retain the existing page title, canonical, H1, address, brand details and global structured data.

## Release checks
- [ ] npm ci; npm run lint:content; npm run validate:blog-seo; npm run typecheck; npm run build
- [ ] node scripts/validate-phase-one-seo.mjs http://localhost:3000 with dev server running
- [ ] Inspect /kitchener on mobile and desktop and follow links to existing pages.
- [ ] Validate visible FAQ answers match FAQPage JSON-LD on this page.
- [ ] Verify local business information against actual corporate records before making any further NAP or profile changes.
- [ ] After deployment, verify canonical URL indexing in Google Search Console and compare equivalent future date ranges.

No backend, infrastructure, other-site, Google Business Profile or production deployment changes.
