# Project context

## Overview

This repository is the public marketing website for Truefox AI Inc. It is built with Next.js App Router and serves brand, service, resource, and conversion pages for a B2B AI engineering company based in Kitchener, Ontario with an India delivery presence.

## Product and business intent

The website is designed to:

- establish trust and brand authority for enterprise AI engineering work
- explain service and product capabilities in plain language
- convert visitors into project enquiries, demos, or inbound quotes
- support local and topic-based search intent in Canada and internationally
- provide structured entity data for search engines and answer engines

## Architecture summary

- Framework: Next.js 16.2.12
- Runtime: React 19
- TypeScript: enabled with strict mode
- Routing: App Router inside `app/`
- Static generation: page metadata and most pages are statically defined via `generateStaticParams()` and page manifest data
- Content model: `data/site.ts` contains page content, SEO metadata, navigation, and capability definitions
- CMS integration: blog and job content are loaded from the backend/content API via `lib/content`
- Analytics/marketing scripts: client-side Google Analytics and commercial event tracking

## Main directories

- `app/` – routing, metadata, robots, sitemap, manifest, page entrypoints
- `components/` – reusable UI, hero layouts, forms, interactive experiences, structured-data components
- `data/` – canonical site metadata and page content definitions
- `lib/` – CMS content access and analytics helpers
- `public/` – static assets, PDFs, media, and `llms.txt`
- `scripts/` – SEO validation and reporting scripts

## Current route architecture

- `/` – home page
- `/[slug]` – content pages generated from `data/site.ts`
- `/blog/[postSlug]` – blog article pages
- `/admin` – admin dashboard app
- `/not-found` – custom 404 page

## Production-facing metadata setup

The current app uses:

- `app/layout.tsx` for global metadata, canonical defaults, viewport, and social images
- `app/sitemap.ts` for XML sitemap generation
- `app/robots.ts` for crawler rules
- `components/seo/JsonLd.tsx` for Organization, WebSite, WebPage, BlogPosting, FAQ, Product, and Service JSON-LD

## Expected state

This is a modern static marketing website with sound production metadata foundations and strong route architecture. The highest-value work is not a rewrite; it is targeted refinement in metadata consistency, page intent alignment, performance budget management, and validation discipline.
