"use client";

import { useCallback, useEffect, useRef } from "react";
import { useReportWebVitals } from "next/web-vitals";
import { trackEvent } from "@/lib/analytics";

type WebVitalMetric = { id: string; name: string; value: number; rating: "good" | "needs-improvement" | "poor"; navigationType?: string };

function templateFor(path: string) {
  if (path === "/") return "home";
  if (path.startsWith("/blog/")) return "blog_article";
  if (path.startsWith("/blog")) return "blog_index";
  if (path.startsWith("/services")) return "services";
  if (path.startsWith("/products")) return "products";
  return "marketing_page";
}

export default function PerformanceObserver() {
  const sent = useRef(new Set<string>());
  const reportVital = useCallback((metric: WebVitalMetric) => {
    if (process.env.NODE_ENV !== "production" || !["LCP", "INP", "CLS"].includes(metric.name) || sent.current.has(metric.id)) return;
    sent.current.add(metric.id);
    const payload = { name: metric.name, value: Math.round(metric.value * 1000) / 1000, rating: metric.rating, navigation_type: metric.navigationType || "unknown", page_template: templateFor(location.pathname), path: location.pathname };
    const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
    if (endpoint) {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) navigator.sendBeacon(endpoint, new Blob([body], { type: "application/json" }));
      else void fetch(endpoint, { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } });
    } else trackEvent("web_vital", payload);
  }, []);
  useReportWebVitals(reportVital);
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("PerformanceObserver" in window)) return;
    const endpoint = process.env.NEXT_PUBLIC_WEB_VITALS_ENDPOINT;
    if (!endpoint) return;
    const send = (payload: unknown) => {
      const body = JSON.stringify(payload);
      if (navigator.sendBeacon) navigator.sendBeacon(endpoint, body);
      else void fetch(endpoint, { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } });
    };
    try {
      const observer = new window.PerformanceObserver((list) => {
        for (const entry of list.getEntries()) send({ name: entry.entryType, value: entry.duration || entry.startTime, path: location.pathname });
      });
      observer.observe({ type: "longtask", buffered: true });
      return () => observer.disconnect();
    } catch { return; }
  }, []);
  return null;
}
