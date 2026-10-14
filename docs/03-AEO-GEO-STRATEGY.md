# AEO and GEO strategy

## Summary

The website has a credible base for answer-engine visibility because it already uses structured data, explicit service explanations, and a clear business entity model. However, answer-engine optimization is strongest when content is written as directly usable answers, not just as marketing narrative.

## AEO assessment

### Confirmed strengths

- The site clearly names the company, location, and business domain.
- Service pages separate specific capabilities such as AI Smart Security, Private AI Assistants, and Agentic Automation.
- FAQ-style content exists in several pages and can support answer extraction when the content is brief and specific.
- JSON-LD is in place for FAQ and Service schema where appropriate.

### Confirmed issues

#### AEO-01 — Some answer-first sections could be more explicit and scannable
- Severity: Medium
- File path: `data/site.ts`, `components/PageRenderer.tsx`
- Affected URLs: major capability pages
- Evidence: many pages provide rich narrative explanations but not always a direct answer to the prompt “what is it / who is it for / why does it matter / when should a business choose this?” in the first section.
- Expected impact: reduced answer extraction quality for AI assistants and conversational search tools.
- Recommended solution: add concise answer-first paragraphs near the top of each high-impact service page and ensure each section starts with a direct statement.
- Verification procedure: evaluate whether the first paragraph of each page can stand alone as an answer to a user query.

## GEO assessment

### Confirmed strengths

- The brand is clearly identifiable as a business entity with a documented home office and branch presence.
- The site includes organization and place data in structured markup.
- `public/llms.txt` and `public/llms-full.txt` show an explicit AI-facing documentation posture, which is beneficial for machine-readable context.
- The pages describe real capabilities, not unrealistic promises.

### Suspected issues

#### GEO-S1 — Entity consistency should be validated against the exact commercial narratives used in site copy and external PR
- Severity: Low
- File path: `data/site.ts`, `app/layout.tsx`, `public/llms.txt`
- Affected URLs: all pages
- Evidence: the site has broadly consistent organization identity, but some product and service pages may still benefit from stricter repetition of the exact company name, location, and domain identity.
- Expected impact: moderate improvement in entity confidence across AI systems.
- Recommended solution: maintain a single canonical entity summary that matches marketing copy, structured data, and public documents.
- Verification procedure: compare the company name, city, country, and capability summary across index pages, JSON-LD, and public AI-facing text files.

## Recommended strategy

1. Keep answer-first content at the top of each priority service page.
2. Use concise factual sections rather than broad narrative blocks.
3. Maintain a clear distinction between service pages, product pages, and proof pages.
4. Promote moderated, evidence-based claims and avoid speculative AI outcome language.
5. Use FAQ schema only where the answer is truly a user query and the content remains factual.

## Guardrails

- Do not claim AI citation or ranking outcomes.
- Do not add FAQ schema indiscriminately.
- Do not overstate unverified case-study outcomes.
- Keep the text grounded in business reality, not concept-only speculation.
