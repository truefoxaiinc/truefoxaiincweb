"use client";

type LeadType = "contact" | "quote" | "demo";
type FormName = "contact_form" | "request_quote_form" | "book_demo_form";

type AnalyticsValue = string | number | boolean;
type AnalyticsParameters = Record<string, AnalyticsValue | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const analyticsEnabled =
  process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_GA_DEBUG === "true";

function currentPagePath(): string {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

export function trackEvent(eventName: string, parameters: AnalyticsParameters = {}): void {
  if (!analyticsEnabled || typeof window === "undefined" || typeof window.gtag !== "function") return;

  const safeParameters: Record<string, AnalyticsValue> = {};
  for (const [key, value] of Object.entries({ ...parameters, page_path: currentPagePath() })) {
    if (value !== undefined) safeParameters[key] = value;
  }

  window.gtag("event", eventName, safeParameters);
}

export function trackLead(leadType: LeadType, ctaLocation = "lead_form"): void {
  const formNames: Record<LeadType, FormName> = {
    contact: "contact_form",
    quote: "request_quote_form",
    demo: "book_demo_form",
  };

  trackEvent("generate_lead", {
    lead_type: leadType,
    form_name: formNames[leadType],
    cta_location: ctaLocation,
  });
}

export function trackCta(ctaName: string, ctaLocation: string, destination: string): void {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
    destination,
  });
}

export function trackApplication(): void {
  trackEvent("submit_application", {
    form_name: "career_application_form",
    lead_type: "career",
    cta_location: "career_application",
  });
}
