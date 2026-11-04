# Windows content audit and Services SEO validator regression fix

User validation showed:
- `npm run validate:blog-seo` PASS (eight blog posts).
- `npm run typecheck` PASS and `npm run build` PASS.
- `npm run lint:content` failed with `EPERM` scanning nested `private-ai-backend/.pytest_cache`; this is outside frontend source.
- `npm run validate:phase-one` returned FAIL for `/services` title only. The validator expected the obsolete title `AI Development Services | Truefox AI Inc.`, while `data/site.ts` currently defines `AI & ML Development, AI CCTV Surveillance and AI Agents | Truefox AI`. The expected HTML entity for & is `&amp;` per current title assertions.

The content audit now scans intentional first-party content source roots only and avoids Python caches, dependencies and untracked backend folders. It still fails for forbidden language within those roots and does not silently skip errors inside the source directories.

The phase-one SEO check aligns the expected title for `/services` with current site metadata; it does not change production page metadata.

Re-run:
```powershell
npm run lint:content
npm run validate:phase-one
npm run validate:blog-seo
npm run typecheck
npm run build
npm audit --omit=dev
npm audit
```
The phase-one check defaults to the live website and may differ from local code until deployment. To validate local site while `npm run dev` is running on port 3001, run `node scripts/validate-phase-one-seo.mjs http://localhost:3001`. Its canonical assertions still require `https://truefoxaiinc.com`. Audit dependencies before running any automated package upgrades; avoid `npm audit fix --force` without reviewing breaking changes. No server or Docker changes.
