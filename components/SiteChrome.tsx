"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";
import CursorGlow from "@/components/CursorGlow";
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
      <CursorGlow />
      <Header />
      {children}
      <Footer />
      <WhatsApp />
      <Chatbot />
      <AnalyticsInteractions />
      <PerformanceObserver />
    </>
  );
}
