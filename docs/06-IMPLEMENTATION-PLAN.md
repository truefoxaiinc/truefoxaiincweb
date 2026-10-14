# Implementation plan

## P0 — Critical security, functionality and indexing issues

### P0-01 Fix metadata contract mismatch on `/custom-ai-ml`
- Target files:
  - `data/site.ts`
  - `app/[slug]/page.tsx`
- Required changes:
  - align the rendered page title with the project’s validation contract
  - confirm the `seoTitle` value and actual rendered title are the same
  - keep the canonical and Open Graph metadata aligned
- Dependencies: none beyond SEO validation and targeted content review
- Estimated complexity: Low
- Risk: Low
- Acceptance criteria:
  - `/custom-ai-ml` returns a valid title and passes the validator
  - no duplicate title or page mismatch remains
- Validation command: `npm run validate:phase-one`
- Status: Fixed by aligning the `seoTitle` with the validated target string.

### P0-02 Confirm production redirect/canonical governance is consistent with deployment
- Target files:
  - `next.config.ts`
  - `app/layout.tsx`
  - `docs/redirect-governance.md`
- Required changes:
  - validate canonical root, redirect behavior, and legacy routes against the actual production domain
  - keep redirect chains disabled
- Dependencies: production domain and redirect review
- Estimated complexity: Low
- Risk: Low
- Acceptance criteria:
  - canonical matches to `https://truefoxaiinc.com`
  - no unexpected redirect chain or duplicate canonicals
- Validation command: `curl -I https://truefoxaiinc.com/<path>` and `npm run validate:phase-one`

## P1 — High-impact technical SEO and performance issues

### P1-01 Tighten service-page buyer-intent messaging
- Target files:
  - `data/site.ts`
  - `components/PageRenderer.tsx`
  - relevant service page content in `data/site.ts`
- Required changes:
  - rewrite page intros and first H2 paragraphs to explicitly answer buyer questions
  - align metadata and page copy around one dominant intent per page
- Dependencies: P0 metadata resolution
- Estimated complexity: Medium
- Risk: Low
- Acceptance criteria:
  - each key service page states its purpose, use case, and target audience within the first screenful
  - no page drifts between generic AI language and product-specific description
- Validation command: `npm run validate:phase-one`

### P1-02 Audit and trim client-side performance overhead on the home page
- Target files:
  - `components/HomePage.tsx`
  - `components/SiteChrome.tsx`
  - `components/DeferredExperience.tsx`
  - `components/GoogleAnalytics.tsx`
- Required changes:
  - verify what is necessary above the fold
  - reduce motion complexity and script load impact on mobile
  - keep idle deferral and trim non-critical interactivity
- Dependencies: content review and Web Vitals measurement
- Estimated complexity: Medium
- Risk: Medium
- Acceptance criteria:
  - no unnecessary hydration or script timing issue on first viewport
  - measured LCP/INP improved or at least validated against budget
- Validation command: `npm run build` and Lighthouse/Web Vitals capture

## P2 — AEO/GEO, content quality, internal linking and conversion improvements

### P2-01 Strengthen answer-first copy and internal linking
- Target files:
  - `data/site.ts`
  - `components/PageRenderer.tsx`
  - `components/seo/JsonLd.tsx`
- Required changes:
  - add direct answer sections within key pages
  - keep related links to adjacent services and conversion pages
  - review FAQ schema only where it is genuinely beneficial
- Dependencies: P1 page intent work
- Estimated complexity: Medium
- Risk: Low
- Acceptance criteria:
  - top pages contain scannable, answer-first content blocks
  - conversion paths remain obvious and user-friendly
- Validation command: `npm run validate:phase-one`

### P2-02 Improve content ownership and query clarity across service pages
- Target files:
  - `data/site.ts`
  - `docs/07-SEO-CONTENT-MAP.md`
- Required changes:
  - define primary query owners for service pages
  - maintain internal consistency between titles, intros, and H2s
- Dependencies: service taxonomy review
- Estimated complexity: Low
- Risk: Low
- Acceptance criteria:
  - each page has a single primary content owner and search-intent focus
  - no overlapping generic titles remain
- Validation command: manual review plus `npm run validate:phase-one`

## P3 — Optional refinements and long-term enhancements

### P3-01 Build an operational SEO monitoring workflow
- Target files:
  - `scripts/`
  - `docs/08-VALIDATION-REPORT.md`
- Required changes:
  - add a repeatable validation checklist for page-level metadata and crawl quality
  - capture the data in a small, maintainable format
- Dependencies: ongoing content and analytics review
- Estimated complexity: Low
- Risk: Low
- Acceptance criteria:
  - the team can run a lightweight report without a full site rebuild
- Validation command: targeted script or custom validation run

### P3-02 Review analytics and privacy controls
- Target files:
  - `components/GoogleAnalytics.tsx`
  - `lib/analytics.ts`
  - related docs
- Required changes:
  - document data collection boundaries and remove or restrict unnecessary tracking
- Dependencies: business approval and privacy review
- Estimated complexity: Medium
- Risk: Medium
- Acceptance criteria:
  - all tags and events are clearly documented and necessary
  - privacy controls align with the company’s marketing operations policy
- Validation command: manual review and script inspection
