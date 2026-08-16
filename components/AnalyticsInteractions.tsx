"use client";

import { useEffect } from "react";
import { trackCta, trackEvent } from "@/lib/analytics";

const commercialPaths: Record<string, string> = {
  "/request-quote": "request_quote",
  "/book-demo": "book_demo",
  "/contact": "contact_sales",
};

function linkLocation(link: HTMLAnchorElement): string {
  if (link.closest("header")) return "navigation";
  if (link.closest("footer")) return "footer";
  if (link.closest(".cinematic-hero")) return "hero";
  if (link.closest(".page-cta")) return "page_cta";
  if (link.closest(".location-related-links")) return "related_links";
  if (link.closest(".lead-form")) return "lead_form";
  return "page_content";
}

export default function AnalyticsInteractions() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href") || "";
      const location = linkLocation(link);

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { link_location: location });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_location: location });
        return;
      }

      if (href.startsWith("https://wa.me/")) {
        trackEvent("chat_start", { chat_type: "whatsapp", link_location: location });
        return;
      }

      if (!link.classList.contains("button")) return;

      try {
        const destination = new URL(link.href, window.location.origin);
        const ctaName = commercialPaths[destination.pathname];
        if (destination.origin === window.location.origin && ctaName) {
          trackCta(ctaName, location, destination.pathname);
        }
      } catch {
        // Ignore malformed or non-navigation href values.
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
