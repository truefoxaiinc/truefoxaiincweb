# AGENTS.md

## Operating model

This repository is the public marketing and conversion frontend for Truefox AI Inc. It is not the backend system of record. Keep changes focused on the frontend, preserve current routes and brand language, and avoid speculative redesign work.

## Approved workflow

1. Read the current project documentation in `docs/` before making edits.
2. Prefer targeted file reads and narrow validations over repository-wide scans.
3. Preserve Next.js App Router conventions, existing metadata, and route structure unless evidence requires a change.
4. Update or add design notes in `docs/` whenever a recommendation or implementation change is approved.
5. Do not modify production source code during the audit phase without explicit approval.

## Project snapshot

- Framework: Next.js 16.2.12
- Router: App Router (`app/`)
- React: 19.2.0
- TypeScript: 5.9.0
- Styling: CSS in `app/globals.css` and component-scoped styles
- Data source: static page metadata in `data/site.ts`, plus CMS content from the backend API
- Routing pattern:
  - dynamic marketing pages in `app/[slug]/page.tsx`
  - blog posts in `app/blog/[postSlug]/page.tsx`
  - global metadata in `app/layout.tsx`
  - sitemap and robots in `app/sitemap.ts` and `app/robots.ts`
- Production configuration: `next.config.ts`

## Audit and implementation discipline

- Confirm the issue with code or build output before changing strategy.
- Separate confirmed findings from suspected findings in documentation.
- Prioritize user-facing impact: crawlability, conversion paths, security headers, structured data, and Core Web Vitals.
- Keep implementation tasks small, unambiguous, and tied to target files.

## Validation commands

- `npm run typecheck`
- `npm run validate:phase-one`
- `npm run build` before shipping code changes

## Escalation

If a task may affect SEO, metadata, redirects, or conversion flows, confirm the current evidence in the relevant page file and the validation scripts before implementing.
