import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";

const relatedByCapability: Record<string, { href: string; label: string }[]> = {
  "ai-smart-security": [
    { href: "/biometric-intelligence", label: "Explore identity verification" },
    { href: "/iot-edge-ai", label: "Explore edge video processing" }
  ],
  "biometric-intelligence": [
    { href: "/ai-smart-security", label: "Explore video intelligence" }
  ],
  "private-ai-assistants": [
    { href: "/agentic-automation", label: "Explore governed AI agents" }
  ],
  "agentic-automation": [
    { href: "/private-ai-assistants", label: "Explore private AI assistants" }
  ],
  "iot-edge-ai": [
    { href: "/ai-smart-security", label: "Explore edge video analytics" }
  ],
  "custom-ai-ml": [
    { href: "/research-development", label: "Validate an AI concept" }
  ],
  "web-mobile-products": [
    { href: "/research-development", label: "Validate a product concept" }
  ],
  "research-development": [
    { href: "/custom-ai-ml", label: "Explore custom machine learning" },
    { href: "/web-mobile-products", label: "Explore AI product engineering" }
  ]
};

export const capabilitySlugs = new Set(Object.keys(relatedByCapability));

export default function CapabilityRelatedLinks({ slug }: { slug: string }) {
  const links = relatedByCapability[slug];
  if (!links) return null;

  return (
    <nav className="location-related-links" aria-label="Related capabilities and next steps">
      {links.map(link => <Link className="button button-ghost" href={link.href} key={link.href}>{link.label}<ArrowUpRight /></Link>)}
      <Link className="button button-primary" href="/request-quote">Discuss your project<ArrowUpRight /></Link>
    </nav>
  );
}
