# Validation report

## Summary

The project includes a useful set of validation tools and already demonstrates a strong baseline for metadata, canonical handling, and structured data. The most important active issue in the validation output is the custom AI/ML title mismatch.

## Commands run

```bash
cd c:\Users\USER\truefocaiinc
npm run typecheck
npm run validate:phase-one
```

## Results

### TypeScript validation

- Command: `npm run typecheck`
- Result: PASS

### Phase 1 SEO validation

- Command: `npm run validate:phase-one`
- Result before fix: FAIL overall because `/custom-ai-ml` reported `"title":false`
- Observed output included:

```json
{"path":"/custom-ai-ml","status":200,"title":false,"description":true,"canonical":true,"h1Count":1,"indexable":true,"jsonLdBlocks":2,"validJson":2,"missingLinks":[],"localBusiness":0,"result":"FAIL"}
```

## Interpretation

The failure was caused by a mismatch between the page-level `seoTitle` in `data/site.ts` and the exact title contract expected by the repository validator. The route itself was otherwise indexable and canonical. This was a metadata contract issue, not a routing or sitemap failure.

## Re-run after P0 fix

- Command: `npm run typecheck`
- Result: PASS

- Command: `npm run build`
- Result: PASS

- Command: `node scripts/validate-phase-one-seo.mjs http://127.0.0.1:3001`
- Result: PASS for all audited pages, including `/custom-ai-ml`

## Important production note

- Command: `npm run validate:phase-one`
- Result: still FAILs against the live production URL because the script defaults to `https://truefoxaiinc.com` and the production site still serves the previous metadata until deployment.
- Cause: the repository validator is not pointed at the local worktree unless a base URL argument is supplied, so the default run measures live production state rather than the current repo state.

## Recommended next step

- deploy the updated frontend or run the validator against the target production URL after deployment
- keep the canonical and title metadata aligned with the validator contract
- do not advance to P1 until the target environment passes the check
