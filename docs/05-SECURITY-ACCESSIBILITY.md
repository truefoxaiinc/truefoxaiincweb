# Security and accessibility audit

## Summary

The site already includes a respectable baseline of security headers and accessible design considerations. No obvious secret leakage or dangerously broad permissions were found in the frontend repository. The remaining work is mainly about hardening script policy and verifying the accessibility of interaction patterns and lead flows.

## Confirmed strengths

- `next.config.ts` includes `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, and `Cross-Origin-Opener-Policy` headers.
- `app/manifest.ts` uses a branded standalone app manifest and a constrained theme color.
- `app/layout.tsx` provides a skip-link anchor for keyboard users.
- The site uses semantic HTML patterns and a clear heading hierarchy across page sections.

## Confirmed findings

### SEC-01 — External script policies should be checked against the actual analytics requirements
- Severity: Medium
- File path: `components/GoogleAnalytics.tsx`, `next.config.ts`
- Affected URLs: all public pages
- Evidence: the site loads a third-party GTM script and attaches click listeners; the project does not appear to define a strict data minimization policy or consent handling around the tag.
- Expected impact: possible privacy and compliance risk, as well as unbounded measurement overhead.
- Recommended solution: document the exact analytics use case, minimize the payload, and consider consent-aware script loading when required.
- Verification procedure: inspect the script source, confirm the measurement ID, and validate the analytics policy against the company’s marketing operations guidelines.

### SEC-02 — The social and commercial CTA flow is extensive but should be reviewed for abuse and form-safety assumptions
- Severity: Medium
- File path: `components/LeadForm.tsx`, `components/WhatsApp.tsx`, `components/AnalyticsInteractions.tsx`
- Affected URLs: contact, book-demo, request-quote, all public pages
- Evidence: the site contains contact funnels, WhatsApp CTAs, and lead-capture flows. The frontend itself is not an authentication layer, but the conversion flow should be checked for abuse-resistance and validation quality.
- Expected impact: low direct vulnerability in the frontend, but a moderate conversion/operational risk if form input or bot-protection rules are insufficient.
- Recommended solution: validate field constraints, rate limiting, and backend validation on the associated API/service layer.
- Verification procedure: review the form submissions and backend service contracts for accepted values, abuse protection, and server-side validation.

## Accessibility findings

### A11Y-01 — Interactive controls should be validated against keyboard-focus quality and reduced-motion behavior
- Severity: Medium
- File path: `components/HomePage.tsx`, `components/PageRenderer.tsx`, `components/SiteChrome.tsx`
- Affected URLs: home page and key conversion pages
- Evidence: the site uses multiple animated and hover-heavy elements; keyboard focus behavior and motion reductions should be verified in browser testing.
- Expected impact: reduced usability for keyboard and low-motion users if focus indicators or reduced-motion behavior are incomplete.
- Recommended solution: review focus-visible styling, ensure CTA buttons are keyboard reachable, and verify motion is reduced for users who prefer reduced motion.
- Verification procedure: do a tab-through on navigation and contact flows, confirm visible focus, and test with system reduced-motion preferences enabled.

## Recommended actions

1. Review all third-party analytics scripts and document the business purpose for each.
2. Validate form handling on the backend side, not just on the client.
3. Verify keyboard accessibility and focus visibility on the primary conversion flows.
4. Keep security headers current with any new deployments or CDN changes.
