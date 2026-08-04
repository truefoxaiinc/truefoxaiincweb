# Truefox AI — Cinematic Next.js Website

A performance-first, cinematic corporate website for Truefox AI Inc., built with the Next.js App Router, TypeScript, Motion and a deferred Three.js neural-field experience.

## Design system

- Full-screen cinematic 4K hero with adaptive 4K, 1440p, 1080p and portrait-mobile sources
- Deferred Three.js neural field on capable desktop devices
- Motion-based reveals, kinetic typography, orbital interfaces and scroll-linked movement
- Full reduced-motion support and static fallbacks
- Responsive layouts for desktop, tablet and mobile
- Global chatbot, WhatsApp action, social footer and lead forms
- 22 company, solution, trust, legal, marketing and support pages

## Search, answer and generative-engine foundations

- Next.js Metadata API, canonical URLs, Open Graph and Twitter images
- Organization, WebSite, WebPage, BreadcrumbList, ItemList and FAQPage JSON-LD
- Semantic answer-first summaries and crawlable FAQ content
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `llms.txt`, `llms-full.txt` and `humans.txt`
- Canada headquarters entity data, India delivery context and international area served
- Clear headings, descriptive copy, internal linking and accessible navigation

Search visibility is never guaranteed by code alone. Publish verified original content, maintain accurate company facts, earn relevant references and monitor Search Console after launch.

## Performance architecture

The project is designed to avoid visible lag rather than claiming impossible zero-lag performance on every device or network.

- Three.js is imported only after hydration and is disabled below 981px or when reduced motion is enabled
- WebGL uses no post-processing, capped pixel ratio, shared geometry/materials, a 45fps frame budget and visibility/intersection pausing
- Video starts after the critical content, uses a poster first and selects media by viewport
- Animations primarily use `transform` and `opacity`
- Server-rendered content remains available without JavaScript
- Static media receives immutable caching headers
- No externally hosted web fonts are required
- Optional long-task telemetry endpoint is included

## Run locally

```bash
npm install
cp .env.example .env.local
npm run typecheck
npm run lint:content
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Required configuration

Set these values in `.env.local` or your deployment platform:

```env
NEXT_PUBLIC_SITE_URL=https://truefoxaiinc.com
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_LINKEDIN_URL=https://ca.linkedin.com/company/truefox-ai-inc
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_FACEBOOK_URL=
NEXT_PUBLIC_X_URL=
NEXT_PUBLIC_YOUTUBE_URL=
NEXT_PUBLIC_WEB_VITALS_ENDPOINT=
LEADS_WEBHOOK_URL=
```

Use the WhatsApp number in international format without `+`, spaces or punctuation. The interface falls back to the contact page until a verified number is supplied. Unverified social channels are not shown.

## Lead endpoint

`POST /api/lead` validates and sanitizes input, includes a honeypot field, limits payload size and forwards leads to `LEADS_WEBHOOK_URL`. Add rate limiting, CAPTCHA/Turnstile, consent logging and your approved CRM or email integration before a high-volume production launch.

## Content verification before launch

- Confirm official social URLs and WhatsApp number
- Replace sample career openings and draft editorial concepts with approved content
- Verify leadership, partner, client, award and certification claims before publishing
- Have privacy and terms templates reviewed by qualified counsel
- Validate structured data with supported testing tools
- Measure real-user Core Web Vitals on production hosting

## Media

- `public/media/truefox-ai-4k.mp4` — 3840×2160, 20-second loop
- `public/media/truefox-ai-1440.mp4` — 2560×1440
- `public/media/truefox-ai-1080.mp4` — 1920×1080
- `public/media/truefox-ai-mobile.mp4` — 720×1280 portrait
- `public/media/video-poster-4k.webp` — fast poster fallback
