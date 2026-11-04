# Sprint 6 — Custom AI & Machine Learning Search-Intent Audit

Date: 2026-11-04. Scope: `/custom-ai-ml` only.

## Evidence and interpretation

The user-supplied Google Search Console performance export (August 2–November 1, 2026) showed impressions without clicks for the queries **custom machine learning solutions** and **custom machine learning development company**. These historic query observations are directional, not proof that rewriting copy will improve rankings or CTR. The current page already contains substantial explanations of feasibility, data, evaluation, MLOps, security and delivery; rewriting it wholesale would risk losing useful content.

## Changes

- Add buyer-focused guidance and FAQ answers addressing partner selection, timelines and use of existing company systems and data without quoting unverifiable prices or guaranteed durations.
- Link two existing educational posts and replace nonclickable path-like bullets in Related Capabilities with genuine Next.js internal links in text.
- Give the existing `Service` JSON-LD node for `/custom-ai-ml` an explicit human-readable service name rather than a generic eyebrow label.
- Preserve the existing canonical URL, title, description, page structure, H1, robots directives and other page metadata to avoid untested sitewide changes.

## Review and quality gates

- [ ] Confirm internal links and user-facing copy on `/custom-ai-ml` and mobile layouts.
- [ ] `npm ci` on the merged security-updated branch.
- [ ] `npm run lint:content`, `npm run typecheck`, `npm run build`.
- [ ] `npm run validate:phase-one` against local Next.js dev server and live site after deployment.
- [ ] Inspect JSON-LD `Service.name` and matching visible copy in rendered HTML.
- [ ] Compare Google Search Console queries and pages by equivalent time windows **after** deployment. Avoid attributing position changes to a single copy update without sufficient evidence.
- [ ] Review indexed state of canonical `/custom-ai-ml` in Google URL Inspection; redirect and sitemap checks alone do not establish indexing.

No infrastructure, backend, authentication, pricing, product launch or deployed-customer claims are changed.
