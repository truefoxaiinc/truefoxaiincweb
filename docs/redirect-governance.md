# Redirect and canonical governance

## Current redirect rules

`next.config.ts` keeps legacy `/about-us`, `/contact-us`, and historic terms URLs on their current canonical destinations. The trailing-slash redirect is permanent and preserves path segments. Production HTTP and non-www canonicalization are handled by the hosting layer.

Do not add redirect chains, generic redirect rules, or bulk destination changes without first confirming the source URL, destination, response status, and canonical target in production.

## Search Console validation

The historic Search Console export used during the audit is not a live monitoring source. A fresh export must be joined to a fresh crawl (source URL, final URL, HTTP status, canonical target, impressions, clicks, and date range) before redirect actions are prioritized.

Prioritize only source URLs with meaningful current impressions/clicks, an incorrect final destination, a redirect chain, or a canonical mismatch. Do not treat old alternate/redirected rows as evidence that a new redirect is required.

## Sitemap dates

Marketing routes intentionally omit `lastmod` unless a trustworthy per-page update date exists. Published CMS articles use their persisted `updatedAt` value. Never update sitemap dates merely to imply freshness.
