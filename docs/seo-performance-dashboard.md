# SEO performance baseline and dashboard

This is an offline, privacy-safe reporting workflow. It does not create a public analytics route and does not commit raw Google Search Console or GA4 exports.

## Data required

Export a table from Google Search Console with as many of these dimensions as the interface/API permits:

- Date
- Query
- Page
- Country
- Device
- Clicks
- Impressions
- CTR
- Position

Export GA4 data using:

- Landing page
- Session default channel group
- Country
- Device category
- Sessions
- Total users
- New users
- Engaged sessions
- Engagement rate
- Average engagement time
- Event name and event count
- `lead_type`, `form_name`, `page_path`, and `cta_location` where registered and available

GA4 organic reporting is filtered to `Session default channel group = Organic Search`. The report does not combine Direct, Referral, Paid Search or Organic Social with organic search.

## Import and run

Use separate traffic and lead-event exports so adding an event dimension cannot duplicate session metrics. Save them locally as:

```text
data/analytics-imports/gsc.csv
data/analytics-imports/ga4-traffic.csv
data/analytics-imports/ga4-leads.csv
```

`.xlsx` is also supported; the first sheet is imported and its actual name is recorded in the baseline. If an export contains several incompatible sheets, export the required combined table as CSV rather than assuming a sheet layout.

Then run:

```bash
npm run report:seo
```

The command rejects missing columns, empty imports, invalid numeric/date values, duplicate rows, duplicate configured URLs, impossible CTR/engagement values and missing lead-event fields. It never silently substitutes invented metrics. Country names are normalized to lowercase because standard exports use names rather than ISO codes.

## Generated private reports

- `baseline.json`: complete dated baseline and data-quality context
- `executive-overview.csv`: primary KPIs
- `query-opportunities.csv`: configurable query opportunity and ownership flags
- `landing-page-performance.csv`: GSC + GA4 landing-page metrics
- `canada-kitchener.csv`: Kitchener/Waterloo query monitoring
- `service-performance.csv`: service-page business performance

The output directory is ignored by Git.

## KPI formulas

- Organic CTR = GSC organic clicks / GSC organic impressions
- Average position = impression-weighted GSC position
- Organic conversion rate = Organic Search `generate_lead` / Organic Search sessions
- Lead rate per user, if required = Organic Search `generate_lead` / Organic Search users
- Brand/non-brand = editable literal brand patterns in `config/seo-reporting.json`
- Canada = country normalized to `canada`

Do not compare session-based and user-based conversion rates as if they were the same metric.

## Opportunity rules

Rules are editable in `config/seo-reporting.json`:

- High impression/low CTR: minimum impressions met and CTR below a configurable share of the weighted site CTR
- Position 4–10
- Position 8–20
- Position 20–50
- Zero-click: impressions greater than zero and clicks equal zero
- Wrong landing page: query matches an ownership cluster but another page receives the most impressions

Rules create review flags only. They do not automatically change content or recommend a new page.

## Migration handling

The baseline records the migration date and labels current, legacy, other, and mixed-period page data. URLs whose paths are unchanged across migrations, such as `/services`, must be separated by date rather than silently treated as different URLs.

Avoid comparing an incomplete current day with a complete prior day. For 28-day and three-month comparisons, export complete matching periods and exclude the current incomplete date.

## Dashboard sections

1. Executive overview
2. Search performance trends
3. Query opportunities
4. Landing-page performance
5. Canada/Kitchener
6. Service performance
7. Lead type distribution
8. Lead quality — `DATA UNAVAILABLE` until aggregated CRM quality data exists

## Recommended cadence

- Weekly: indexing, major traffic changes, leads and technical errors
- Monthly: queries, pages, Canada, non-brand, conversions and keyword ownership
- Quarterly: content priorities, authority/backlinks, AI-search visibility and case studies

## Manual GA4 setup

Register `lead_type`, `form_name`, `page_path`, and `cta_location` as event-scoped custom dimensions when needed. Mark `generate_lead` as a key event. GA4 may not backfill parameter dimensions, so record the registration date in the baseline notes.

Never export names, emails, telephone numbers, messages, form responses or chat content into this workflow.
