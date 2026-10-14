# Current website audit

## Executive summary

The website is a well-structured Next.js marketing site that already includes GlobalEntityGraph, sitemap generation, robots rules, canonical metadata, and security headers. The implementation is strong in static architecture and metadata coverage.

The main risks are not catastrophic breakage. They are consistency and quality issues that can reduce commercial conversion performance and AI/SEO discoverability:

- some metadata and keyword targeting are not consistently aligned with actual page intent
- a subset of pages may still carry weak commercial or service-specific language
- there are likely performance trade-offs from a highly animated, client-heavy front page
- government and security controls are present, but there is still an opportunity to tighten accessibility and compliance detail

## Confirmed strengths

- App Router architecture is in place, with clean separation of static pages, metadata, and SEO components.
- `next.config.ts` includes security headers for MIME sniffing, clickjacking, referrer policy, permissions policy, and trailing-slash governance.
- `app/layout.tsx` sets canonical defaults, Open Graph, Twitter cards, robots settings, and the web app manifest.
- `components/seo/JsonLd.tsx` generates a useful Organization + WebSite graph and page-specific Service/FAQ/Product markup.
- `app/sitemap.ts` and `app/robots.ts` are implemented and include crawler guidance.
- `app/not-found.tsx` provides a branded 404 page.

## Audit scope and method

This audit used repository inspection and validation scripts already present in the project, including:

- `npm run typecheck`
- `npm run validate:phase-one`

The codebase inspection focused on the files most relevant to SEO, metadata, routing, and business conversion:

- `app/layout.tsx`
- `app/[slug]/page.tsx`
- `app/blog/[postSlug]/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `next.config.ts`
- `data/site.ts`
- `components/seo/JsonLd.tsx`
- `components/SiteChrome.tsx`
- `components/GoogleAnalytics.tsx`

## High-level findings

### Confirmed findings

- Some route-level metadata is not synchronized to the same commercial precision as the intended keyword/intent map.
- The Phase 1 validator reported a failure on the `/custom-ai-ml` page because the rendered title did not satisfy the expected metadata contract for that page.
- The site uses a client-heavy landing experience with animation libraries and multiple browser-side hooks, which should be checked against Core Web Vitals budgets.

### Suspected findings

- Some service-related pages may be over-optimised for broad AI language while under-specifying the exact budgeted business outcome, decision context, or buying trigger.
- A/B and conversion measurement quality should be reviewed if lead forms use both frontend tracking and server-side collection.
- AI answer optimization can be improved by strengthening answer-first paragraphs and explicit “what we do / who it helps / why this matters” sections on the highest-value pages.

## Current risk profile

| Area | Risk level | Notes |
|---|---|---|
| Technical SEO | Medium | Strong foundations, but page intent inconsistency remains |
| AEO/GEO | Medium | Useful structured data and FAQ content, but answer-first extraction can be stronger |
| Performance | Medium | Animated landing page and client interactions can affect LCP/INP |
| Security | Low | Good headers and no obvious secrets in repo; still worth monitoring third-party script policies |
| Accessibility | Medium | Good semantic structure exists, but interactive patterns should be checked against keyboard and focus quality |
