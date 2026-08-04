"use client";

import { useEffect } from "react";

export default function PerformanceObserver() {
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
