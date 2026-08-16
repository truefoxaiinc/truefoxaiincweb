# Private analytics imports

Place manual Google Search Console and GA4 exports here. Everything in this directory except this guide is ignored by Git.

Accepted files:

- `gsc.csv` or `gsc.xlsx`
- `ga4-traffic.csv` or `ga4-traffic.xlsx`
- `ga4-leads.csv` or `ga4-leads.xlsx`

The importer accepts common export header variations and validates required fields before producing a report. Raw exports must remain local and must not contain form responses or other PII.

Run:

```bash
npm run report:seo
```

Generated aggregate files are written to `reports/seo-performance/`, which is also ignored by Git.
