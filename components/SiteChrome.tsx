"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import DeferredExperience from "@/components/DeferredExperience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PerformanceObserver from "@/components/PerformanceObserver";
import WhatsApp from "@/components/WhatsApp";
import AnalyticsInteractions from "@/components/AnalyticsInteractions";

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return children;

  return (
    <>
      <div className="noise-layer" aria-hidden="true" />
      <DeferredExperience />
      <Header />
      {children}
      <Footer />
      <WhatsApp />
      <AnalyticsInteractions />
      <PerformanceObserver />
    </>
  );
}
