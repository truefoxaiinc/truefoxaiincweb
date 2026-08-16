"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __truefoxGaInitialized?: boolean;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-2PQNGLPVKR";

export default function GoogleAnalytics() {
  const enabled = process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_GA_DEBUG === "true";

  useEffect(() => {
    if (!enabled || window.__truefoxGaInitialized) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", measurementId);
    window.__truefoxGaInitialized = true;
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Script
      id="google-analytics"
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
    />
  );
}
