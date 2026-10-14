# SEO audit

## Summary

The website has a strong set of SEO fundamentals: canonical metadata, robots rules, XML sitemap generation, structured data, and prompt-level indexing controls. The main remaining issues are not a broken SEO foundation but a need for tighter consistency and intent mapping across pages.

## Confirmed findings

### SEO-01 — Metadata contract mismatch on custom AI/ML page
- Severity: Medium
- File path: `scripts/validate-phase-one-seo.mjs`, `data/site.ts`, `app/[slug]/page.tsx`
- Affected URL: `https://truefoxaiinc.com/custom-ai-ml`
- Evidence: The validation script reported `"path":"/custom-ai-ml","title":false` and failed the page quality gate.
- Expected impact: weaker page-level discoverability for a high-intent service query; possible loss of clarity for custom ML buyers or SEO topic ownership.
- Recommended solution: align the actual rendered `<title>` of `/custom-ai-ml` with the page’s intended keyword target and verified metadata contract. Verify against the exact `seoTitle` used in `data/site.ts`.
- Verification procedure: run `npm run validate:phase-one` and confirm `/custom-ai-ml` returns `"title":true` and the overall result is `PASS`.
- Status: Fixed by aligning the page `seoTitle` with the project’s valid metadata contract.

### SEO-02 — Page intent is strong but not always tightly aligned to buyer query intent
- Severity: Medium
- File path: `data/site.ts`
- Affected URLs: all major service pages
- Evidence: `data/site.ts` contains many robust page descriptions and service keywords, but some pages mix capability, service, and company language without a strict buyer-intent statement near the top of the content.
- Expected impact: lower conversion clarity and weaker specificity for audience-specific search terms.
- Recommended solution: tighten top-of-page headings and intro paragraphs so each page clearly states: what it is, who it helps, and why it matters.
- Verification procedure: compare the page h1, intro paragraph, and meta title against the intended query cluster for each service.

### SEO-03 — Metadata quality is important, but the current site still has limited evidence of query-level performance monitoring
- Severity: Medium
- File path: `docs/metadata-audit-2026-08-20.md`
- Affected URLs: all public pages
- Evidence: the existing audit references search-console-style historical data, but the project does not maintain a live, refreshable SEO monitoring workflow in the repo itself.
- Expected impact: reduced ability to respond quickly to changing search demand and query cannibalization.
- Recommended solution: export and review a fresh crawl/Search Console snapshot before making SEO redirect or title changes in production.
- Verification procedure: run a fresh crawl and compare the canonical URL, status, title, and impressions for the top pages before changes.

## Suspected issues

### SEO-S1 — Keyword ownership could be clearer across the service portfolio
- Severity: Low
- File path: `data/site.ts`
- Affected URLs: `/services`, `/custom-ai-ml`, `/private-ai-assistants`, `/agentic-automation`, `/ai-smart-security`
- Evidence: the service taxonomy is well-defined, but not every page clearly claims the exact primary query cluster in the first sentence.
- Expected impact: possible overlap in query ownership across adjacent AI service pages.
- Recommended solution: document a single keyword owner per page and keep high-intent terms near the page title, intro, and first H2.
- Verification procedure: inspect each page’s first 150 words against the primary SEO target.

## Positive findings

- The site implements functional metadata and canonical URLs on the main pages.
- Global robots and XML sitemap generation are active.
- Trailing-slash and legacy redirect governance is established in `next.config.ts`.
- JSON-LD coverage is present for Organization, WebSite, FAQ, Service, Product, and BlogPosting entities.
- The valid indexable structure is already in place for the core pages that passed validation.

## Recommended SEO order of operations

1. Fix the custom AI/ML metadata mismatch.
2. Tighten page-level buyer-intent messaging across top service pages.
3. Review the service taxonomy against actual search demand and click-through data.
4. Add a lightweight, repeatable SEO validation workflow for title and canonical checks.
