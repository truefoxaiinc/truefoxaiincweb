# Performance audit

## Summary

The site has a polished front-end experience and uses deferred loading patterns for some heavy experiences. The current architecture is likely acceptable for many marketing workloads, but it is not yet clear that the site is tuned to an aggressive performance budget for mobile and low-bandwidth users.

## Confirmed strengths

- `next.config.ts` enables gzip/brotli-style compression and static image output with AVIF/WebP image formats.
- `components/DeferredExperience.tsx` defers the chat widget and cursor glow until the browser is idle.
- `VideoHero` and other media experiences appear to be intentionally staged rather than loaded immediately on every page.

## Confirmed findings

### PERF-01 — Interactive and animation-heavy home experience adds client-side cost
- Severity: Medium
- File path: `components/SiteChrome.tsx`, `components/HomePage.tsx`, `components/DeferredExperience.tsx`
- Affected URL: `https://truefoxaiinc.com/`
- Evidence: the home page includes client-side motion animations, scroll-linked transforms, and multiple browser-side interactions (`useScroll`, `useTransform`, `motion`, `requestIdleCallback`), while `SiteChrome` mounts a global set of UI features including `DeferredExperience`, `Header`, `Footer`, `WhatsApp`, `AnalyticsInteractions`, and `PerformanceObserver` for the public app.
- Expected impact: higher JS execution cost, slower interaction responsiveness, and greater risk of mobile Core Web Vitals degradation.
- Recommended solution: continue deferring non-critical UI, trim animation complexity on mobile, and validate LCP and INP against the real production budget.
- Verification procedure: run a production build and a Lighthouse or Web Vitals capture on mobile with the site under a representative network profile.

### PERF-02 — Third-party measurement and marketing scripts should be audited for unnecessary overhead
- Severity: Medium
- File path: `components/GoogleAnalytics.tsx`, `components/AnalyticsInteractions.tsx`
- Affected URL: all public pages
- Evidence: the site loads Google Tag Manager script with `afterInteractive` and attaches analytics event listeners to click events across the document.
- Expected impact: additional script parsing cost and possible tracking overhead without a clear budget or measurement threshold.
- Recommended solution: confirm the actual analytics strategy, use the minimum required metrics, and ensure scripts are loaded only when the corresponding consent or business requirement is satisfied.
- Verification procedure: inspect page network waterfall and confirm script payload and execution timing against the analysis goals.

## Suspected issues

### PERF-S1 — Media and hero strategy may be more expensive than needed on lower-end devices
- Severity: Low
- File path: `components/HomePage.tsx`, `components/SiteChrome.tsx`, `public/media/`
- Affected URL: `https://truefoxaiinc.com/`
- Evidence: the home page uses a cinematic visual layout and several media-heavy elements, which can increase initial render cost.
- Expected impact: degraded mobile perception, especially on slower devices or constrained networks.
- Recommended solution: verify video poster images and lazy-load patterns against actual viewport behavior.
- Verification procedure: use Lighthouse and Chrome devtools to confirm reduced motion, video thresholds, and LCP timing.

## Performance validation approach

- Use real production data rather than estimated performance budgets.
- Measure LCP, INP, CLS, and TTFB on mobile and desktop.
- Keep performance improvements tied to page value: above-the-fold hero, service cards, and lead forms.

## Recommended next performance actions

1. Validate a mobile Web Vitals budget for the home page and top service pages.
2. Review animation complexity on the first viewport.
3. Confirm analytics script load and click tracking necessity.
4. Keep deferred, idle-based interactivity for non-critical enhancements.
