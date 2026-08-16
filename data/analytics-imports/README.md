# Private analytics imports

Place manual Google Search Console and GA4 exports here. Everything in this directory except this guide is ignored by Git.

Accepted files:

- A standard Search Console multi-file export in `gsc-export/` containing
  `Chart.csv`, `Queries.csv`, `Pages.csv`, `Countries.csv`, `Devices.csv`,
  `Filters.csv`, and `Search appearance.csv`
- Or a combined `gsc.csv` / `gsc.xlsx` export containing query, page, country,
  clicks, impressions, CTR, and position columns
- `ga4-traffic.csv` or `ga4-traffic.xlsx`
- `ga4-leads.csv` or `ga4-leads.xlsx`

The importer accepts common export header variations and validates required fields before producing a report. A native Search Console export can generate a GSC-only baseline when GA4 files are absent. Sessions, users, leads, and conversion rate remain `DATA UNAVAILABLE` until both GA4 exports are supplied.

The standard Search Console UI exports each dimension separately. It cannot prove which query led to which landing page. Query-to-page ownership checks require a Search Console API or Looker Studio export containing both dimensions. The report states this limitation instead of guessing.

Raw exports must remain local and must not contain form responses or other PII.

Run:

```bash
npm run report:seo
```

Generated aggregate files are written to `reports/seo-performance/`, which is also ignored by Git.
