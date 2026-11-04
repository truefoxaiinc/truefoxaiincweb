# Sprint 10 — Lighthouse and Search Console Baseline

Date: 2026-11-04. Scope: audit tooling and documentation only.

## Why no speculative performance changes?
The code includes deferred 3D/motion/video experiences, but source-level inspection does not establish which assets, interactions or rendering steps slow real user devices. Changes to animations, pictures or JS splitting require measured evidence. An attempt to retrieve PageSpeed Insights data from its public API during review did not yield a trustworthy site-specific result; no numerical performance scores are claimed.

## What this PR adds
- A dependency-free parser for **raw Lighthouse JSON** saved locally; default path `reports/lh-home.json`. Use `npm run report:lighthouse -- reports/lh-home.json`.
- Prints form factor, tested URL, run timestamp, Lighthouse lab score, LCP/CLS/FCP/TBT/Speed Index, available opportunity estimates and selected audits.
- Explicitly labels INP as unavailable in Lighthouse lab JSON. INP needs CrUX/RUM field measurements; lab TBT is not a substitute for field INP.
- Does not auto-pass tests or make code changes based on noisy single-run numbers.

## Windows collection workflow
1. On the current Sprint 10 branch run `npm ci && npm run lint:content && npm run typecheck && npm run build`.
2. Start a production-mode local test server with `npm run start` after build, not `npm run dev` (dev mode measures debugging overhead). Shut down the existing dev server first if needed; avoid deleting the user's modified `next-env.d.ts`.
3. For real deployment diagnostics, measure the **live URL** using Chrome DevTools > Lighthouse or PageSpeed Insights, mobile and desktop, on `/`, `/services`, `/kitchener`, `/ai-smart-security`, and `/custom-ai-ml`.
4. Save the raw JSON export as `reports/lh-home.json` (or another path); run `npm run report:lighthouse -- reports/lh-home.json`. Repeat measurements under comparable conditions rather than overfitting a single run.
5. Collect CrUX field LCP / CLS / INP and distinguish URL-level vs origin fallback and insufficient data. Check Google Search Console > Core Web Vitals grouped URLs separately.
6. In Search Console > Pages, inspect excluded categories. For each representative URL check Google-selected canonical, user-declared canonical, crawl date, indexability and referring sitemap. Intentional 301/308 redirects should not be treated as indexable URLs requiring a fix.
7. Only open a follow-up optimization PR when the data identifies a reproducible bottleneck. Compare before/after for the same page, form factor and environment.

## Priority thresholds (field 75th percentile)
- LCP good <= 2.5 seconds; poor > 4 seconds.
- CLS good <= 0.1; poor > 0.25.
- INP good <= 200 ms; poor > 500 ms.

These metrics and thresholds come from Google PageSpeed Insights / Chrome Web Vitals guidance. The script reports **lab metrics**, not the field Core Web Vitals pass/fail classification.

No routing, hosting, security, backend, Google indexing settings or production deployment changes.
