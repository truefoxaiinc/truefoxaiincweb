# Development state

## Completed

- Frontend audits and implementation plan are recorded in `docs/01-CURRENT-WEBSITE-AUDIT.md` through `docs/08-VALIDATION-REPORT.md`.
- `/custom-ai-ml` metadata title mismatch was fixed and locally validated.
- Low-risk homepage performance mitigations are implemented; the changes and baseline are recorded in `docs/04-PERFORMANCE-AUDIT.md`.
- Private AI backend P0 conversation-capability and proxy-header rate-limit hardening implemented; evidence and limits are recorded in `docs/backend/BACKEND-AUDIT.md`.

## Pending

- Confirm production redirect and canonical behavior against the live domain.
- Continue prioritized service-page intent, answer-first content, and internal-link work from `docs/06-IMPLEMENTATION-PLAN.md`.
- Measure mobile performance after the implemented mitigations; consider deeper hero-motion changes only if production measurements miss targets and design approval is granted.
- Complete the remaining security, accessibility, and monitoring follow-ups in the existing audit and validation documents.
- Configure trusted production proxy CIDRs and choose shared/edge rate limiting before horizontal scaling; define cleanup/revocation operations for expired conversation data; reconcile backend README with actual frontend connectivity.

## Confirmed issues and decisions

- The metadata mismatch is resolved.
- Mobile performance improvement has not been quantified against the original profile.
- Keep this repository focused on the public frontend; backend systems remain outside its system-of-record scope.
- Backend conversation history and follow-up chats now require an expiring per-conversation capability; only its hash is persisted. Forwarded IPs are honored only from configured trusted proxies. Rate-limit counters remain per process.

## Last validation

- `npm run typecheck`: PASS. Backend Python AST parse: PASS (32 files). Backend pytest: NOT RUN (pytest unavailable); Ruff: NOT RUN (Ruff unavailable). No paid provider, runtime deployment, or production-data checks.

## Next action

- Configure trusted proxy CIDRs in production and decide on edge/shared rate limiting before adding workers or replicas; run backend security tests once dev dependencies are available.
