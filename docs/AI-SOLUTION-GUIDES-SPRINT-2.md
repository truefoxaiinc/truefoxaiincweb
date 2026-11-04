# Eight blog articles — Sprint 2 quality gates

## What changed

Eight SEO/AEO/GEO editorial guides from PR #10 now include additional topic-specific examples, system design considerations, deployment/evaluation details and explicit uncertainty. Each guide retains original SVG artwork, page metadata and service links.

## Risks / things not yet independently verified

- Search volume, competitor SERPs and keyword rankings were **not researched or measured**.
- Production website deployment and live canonical, sitemap, robots, OG social previews and Core Web Vitals require independent checks.
- Technical claims, jurisdiction-specific compliance and any future external citations need appropriate owner/source review.
- Existing CMS posts about RAG, agents, edge AI and inspection may overlap. Differentiate educational guides by use case and stage in buyer journey.
- SVG art may not produce previews on every social platform. Use verified raster OG images if platform testing identifies gaps.

## Required release checks

```bash
npm ci
npm run validate:blog-seo
npm run lint:content
npm run validate:phase-one
npm run typecheck
npm run build
```

Review eight blog routes, article headings, hero images, mobile layout, image alt text, BlogPosting structured data, OG/Twitter previews, sitemap inclusion, published status, dates and links. Do not infer rankings, indexing or AI citations from schema presence. No production deployment was performed in this sprint.
