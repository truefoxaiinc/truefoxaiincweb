# Sprint 7 — AI Smart Security Search Intent

Date: 2026-11-04. Scope: `/ai-smart-security`, a custom-rendered page.

## Evidence
The supplied historical Google Search Console export identified impressions without clicks for the search term `smart video analytics`. This does not demonstrate causation, ranking opportunity size or expected traffic gains. Existing page already covers video analytics, camera integration, governance, human review, deployment and FAQs.

## Targeted improvements
- Add specific educational content answering the difference between traditional CCTV and smart video analytics.
- Add pilot-evaluation guidance: precision/recall, false-alert rate, missed events, latency and operator workflow, avoiding unverified performance promises.
- Add FAQs on smart video analytics, false alerts and lawful footage handling. They use the existing PageEntityGraph's FAQ extraction; answers must match visible content.
- Provide real clickable links to three existing blog guides in the custom-rendered page; previous path-like bullets were plain text, not links.
- Make the existing `Service` JSON-LD name descriptive for this one page. Do not misrepresent the service as an already-launched standalone security product.

## Review gates
1. `npm ci`, `npm run lint:content`, `npm run validate:blog-seo`, `npm run typecheck`, `npm run build`.
2. Run `node scripts/validate-phase-one-seo.mjs http://localhost:3000` with local dev server running.
3. Inspect `/ai-smart-security` on desktop and mobile: FAQ readability, actual blog links, table of contents anchors, no heading hierarchy regressions.
4. Check rendered JSON-LD for valid `Service` and `FAQPage` node properties and visible answers.
5. After any deployment, verify canonical and indexing in Google Search Console and monitor comparable future performance windows.

Preserves existing title, description, canonical URL, H1, authentication, backend, hosting and all other projects. No rankings, accuracy, certifications or client deployments are promised.
