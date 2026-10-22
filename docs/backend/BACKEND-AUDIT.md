# Private AI backend audit

Scope: targeted static review and P0 remediation of `private-ai-backend/` and relevant frontend callers. Runtime behavior, live AWS/Vercel configuration, deployed proxy ranges, and production performance were not independently verified.

## Confirmed findings

### Resolved — Conversation history and follow-up access required only an ID

Root cause: chat IDs were accepted by follow-up and history routes without an ownership credential. The chatbot has anonymous users and no visitor account identity, so a per-conversation capability was selected.

`POST /api/v1/chat`, `/chat/stream`, and `GET /conversations/{id}` now require `X-Conversation-Capability` whenever an existing ID is supplied. New anonymous conversations receive a 256-bit random token once in the non-streaming response or the SSE `meta` event. Both chat responses use `Cache-Control: no-store`. SQLite stores only its SHA-256 digest plus a fixed, non-sliding 24-hour expiry; comparison uses `secrets.compare_digest`. Missing, incorrect, expired, and unknown conversations return the same generic 404. Existing rows without a capability fail closed. The frontend keeps the token in React memory and sends it in a header; it is not put in URLs, analytics, logs, or error responses. CORS permits the header. Admin authentication is unchanged. There is no capability rotation or revocation endpoint; expiry is the automatic limit, and direct database deletion is the current administrative revocation path. Expired conversation/message rows are not automatically purged and remain subject to the existing database retention/backup controls.

### Partially resolved — Rate limiting trusted arbitrary forwarding headers

Root cause: the limiter used the first caller-provided `X-Forwarded-For` entry. It now ignores forwarded values unless the direct peer belongs to configured `TRUSTED_PROXY_IPS` CIDRs; when trusted, it walks the chain from the right and selects the first non-trusted address. Invalid proxy CIDR configuration fails settings validation. With no trust configured, the peer address is used, which is safe from spoofing but can put all users behind one proxy in the same bucket. Configure the actual proxy CIDRs before production traffic.

The rate-limit counter remains in process memory, now synchronized for threads in a worker. It does not coordinate across worker processes, replicas, or restarts. Keep one worker/replica or enforce a shared limit at the trusted edge until a shared store is explicitly adopted; no database or Redis dependency was added.

### P2 — “Streaming” currently waits for a complete model answer

The SSE route is exposed (`app/api/chat.py:17-19`), but `LLMService.stream()` awaits `answer()` and yields one completed string (`app/services/llm.py`, `stream`); it does not consume provider streaming events. The route therefore has SSE framing without token-time latency benefits. Either implement provider streaming with disconnect handling or describe/remove the streaming contract.

### P2 — Retrieval cost grows linearly with every stored chunk

Each query loads all chunk rows and embeddings from SQLite (`services/repository.py:all_chunks`) and scores them in Python (`services/retrieval.py:retrieve`). This is simple and appropriate for a small corpus, but query work and memory grow with the full knowledge base. Establish a corpus/latency threshold and migrate to indexed/vector retrieval if measured production growth requires it.

### P2 — Deployment and frontend connection guidance is inconsistent

Backend README says the frontend proxies through `/api/chat` using server-only `AI_BACKEND_URL` (`private-ai-backend/README.md`), but no matching Next route was found in targeted `app/` discovery. Actual frontend callers use `NEXT_PUBLIC_API_URL` from `lib/api.ts` to call the FastAPI origin directly; `.env.example` and `AWS-DEPLOYMENT.md` agree on that public variable. Update the README to describe the implemented direct-origin/CORS path, or implement and document the proxy in a separately approved code task.

## Verified strengths and boundaries

- FastAPI exposes health, public content/forms/chat, and admin-protected knowledge and CMS routes. Pydantic constrains chat input; lead/application handlers validate required fields and consent; knowledge uploads cap size and URL ingestion blocks private addresses and redirects (`app/api/*`, `app/services/ingestion.py`).
- Admin sessions use HS256 JWT with issuer, audience, expiry, token ID, HttpOnly cookie, and production Secure flag (`app/admin_auth.py`, `app/api/website.py`). CORS origins are configured from environment plus the company apex/www domains (`app/config.py`, `app/main.py`). Production docs disable `/docs`.
- The LLM client uses `store=False`, limits history/context, retries transient failures once, and returns safe fallbacks. Embedding provider errors fall back to local feature-hash embeddings, which preserves availability but can reduce retrieval quality (`services/llm.py`, `services/embeddings.py`). Existing unit tests cover representative auth, forms, RAG, CORS, provider retry, and fallback behavior; they were not run in this audit.
- SQLite is the configured store. Deployment documentation correctly limits the proposed ECS/EFS layout to one task and recommends PostgreSQL before horizontal scaling. Docker Compose has a persistent data mount and restart policy but no container healthcheck; the Docker image has no explicit non-root user. Confirm runtime hardening, backups/restore, TLS, secret provisioning, alerting, and actual task topology before production sign-off.
- `/health` reports database integrity and whether provider credentials are configured, but returns HTTP success when the LLM is unavailable (`app/api/health.py`). It is a useful diagnostic, not by itself a complete readiness check for chat functionality.

## Validation

- `python.exe -m pytest -q`: NOT RUN; pytest is not installed in the available Python runtime. Test fixtures now use per-test temporary SQLite files, but dependencies were not installed.
- Ruff: NOT RUN; Ruff is unavailable.
- Python AST parse: PASS, 32 backend app/test files parsed without syntax errors.
- `npm run typecheck`: PASS (`tsc --noEmit`).
- No paid provider calls, live API, deployment, or production-data checks were run.

## Remediation files and regression coverage

- Backend: `app/config.py`, `app/database.py`, `app/security.py`, `app/schemas.py`, `app/api/chat.py`, `app/main.py`, `app/services/repository.py`, and `app/services/chat.py`.
- Frontend: `components/Chatbot.tsx` keeps the capability in memory and clears stale credentials after authorization failure.
- Tests: `tests/conftest.py`, `tests/test_api.py`, `tests/test_conversation.py`, `tests/test_conversation_security.py`, and `tests/test_rate_limit_security.py` cover unauthorized/authorized access, mismatched credentials, expiry, hashed-at-rest storage, streaming, CORS, spoofed XFF, trusted proxy chain handling, and limit enforcement.
- Documentation checkpoint: `docs/DEVELOPMENT-STATE.md`.

## Prioritized next actions

1. Configure `TRUSTED_PROXY_IPS` to the actual production proxy CIDRs; confirm direct-peer behavior at the deployed edge.
2. Choose a production-wide rate-limit control or continue to constrain the service to one worker/replica; current counters are process-local.
3. Run backend pytest and Ruff in an environment with the declared dev dependencies, without making provider calls.
4. Reconcile README and actual frontend API connectivity; verify production CORS origins and API URL at runtime.
5. Retain existing deployment-readiness work: LLM readiness, SQLite backup/restore, non-root container execution, health checks, and measured retrieval scaling.
