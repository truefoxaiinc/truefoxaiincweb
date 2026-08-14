# Truefox AI — Next.js Frontend

The production frontend for Truefox AI Inc. It is built with the Next.js App Router, React, TypeScript, Motion, CSS, and a deferred Three.js experience, and is designed for deployment on Vercel.

All operational backend functionality lives in the separate Python/FastAPI service:

- Frontend: `https://www.truefoxaiinc.com`
- Backend API: `https://api.truefoxaiinc.com`
- Backend health: `https://api.truefoxaiinc.com/health`
- Backend repository: `https://github.com/truefoxaiinc/truefoxaiincweb-backend`

This repository does not contain API routes, database access, backend authentication, OpenAI keys, or backend secrets.

## Features

- Responsive corporate website and cinematic adaptive media
- Accessible navigation, reduced-motion support, and static fallbacks
- Deferred Three.js neural field on capable desktop devices
- Next.js metadata, canonical URLs, Open Graph, Twitter images, sitemap, robots, and JSON-LD
- Lead, demonstration, quotation, and career application forms connected to FastAPI
- RAG-powered website assistant with cited answers
- Administrator dashboard for leads, applications, jobs, blog posts, and site records
- Public jobs and blog content loaded from the FastAPI service

## Architecture

The browser and server-rendered pages use `NEXT_PUBLIC_API_URL` to communicate with FastAPI:

```env
NEXT_PUBLIC_API_URL=https://api.truefoxaiinc.com
```

FastAPI owns administrator authentication, validation, rate limiting, CMS CRUD, audit logging, lead delivery, career applications, persisted conversations, knowledge ingestion, embeddings, retrieval, and LLM responses.

Backend credentials and service secrets must be configured only in AWS. Never add `OPENAI_API_KEY`, `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`, database credentials, or private webhook URLs to this frontend repository or to `NEXT_PUBLIC_*` variables.

## Local development

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run lint:content
npm run dev
```

Open `http://localhost:3000`. The example configuration connects to the hosted API. Change `NEXT_PUBLIC_API_URL` in the ignored `.env.local` only when running FastAPI locally.

## Production build

```bash
npm run typecheck
npm run lint:content
npm run build
npm start
```

## Vercel configuration

```env
NEXT_PUBLIC_SITE_URL=https://www.truefoxaiinc.com
NEXT_PUBLIC_API_URL=https://api.truefoxaiinc.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919074897768
NEXT_PUBLIC_LINKEDIN_URL=https://ca.linkedin.com/company/truefox-ai-inc
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_X_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_WEB_VITALS_ENDPOINT=
```

Use the WhatsApp number in international format without `+`, spaces, or punctuation. Unverified social channels are not shown.

## Administrator dashboard

- Dashboard: `https://www.truefoxaiinc.com/admin`
- Login: `https://www.truefoxaiinc.com/admin/login`

Administrator credentials are checked by FastAPI. Configure `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` in the AWS backend environment, not Vercel.

The dashboard manages contact leads, job applications, jobs, blog posts, and general site records. Only published jobs, posts, and public records are returned by the public content endpoint.

## Backend API connections

- `GET /health`
- `GET /api/v1/content`
- `POST /api/v1/leads`
- `POST /api/v1/applications`
- `POST /api/v1/chat`
- `POST /api/v1/admin/login`
- `GET|POST|PATCH|DELETE /api/v1/admin/data`

API schemas, database operations, tests, and AWS deployment instructions are maintained in the backend repository.

## Content and launch verification

- Confirm official social URLs and WhatsApp number
- Publish only approved career openings and editorial content
- Verify leadership, partner, client, award, and certification claims
- Have privacy and legal materials reviewed by qualified counsel
- Validate structured data and monitor production Core Web Vitals
- Keep the AWS API CORS allowlist synchronized with production and preview domains
