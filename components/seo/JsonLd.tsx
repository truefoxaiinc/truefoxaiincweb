import { site } from "@/data/site";
import type { Card, PageData } from "@/data/site";

type JsonValue = Record<string, unknown> | Record<string, unknown>[];

const servicePageSlugs = new Set([
  "ai-smart-security",
  "biometric-intelligence",
  "private-ai-assistants",
  "agentic-automation",
  "iot-edge-ai",
  "custom-ai-ml",
  "web-mobile-products",
  "research-development"
]);

// Product structured data is opt-in. Several capability pages use the
// "products" presentation style but represent professional services, not
// standalone products eligible for Product rich results.
const productPageSlugs = new Set([
  "attention-minder"
]);

function safeJson(data: JsonValue) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: JsonValue }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />;
}

export function GlobalEntityGraph() {
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const logoId = `${site.url}/#logo`;
  const canadaOfficeId = `${site.url}/#canada-office`;
  const indiaOfficeId = `${site.url}/#india-office`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: site.url,
        logo: { "@id": logoId },
        image: { "@id": logoId },
        email: site.email,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "general enquiries",
          email: site.email,
          availableLanguage: "English"
        },
        location: [
          { "@id": canadaOfficeId },
          { "@id": indiaOfficeId }
        ],
        areaServed: [
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "India" },
          "International"
        ],
        knowsAbout: [
          "Artificial intelligence",
          "Computer vision",
          "Machine learning",
          "Generative AI",
          "Agentic AI",
          "Biometric systems",
          "IoT and edge AI",
          "Web and mobile software"
        ]
      },
      {
        "@type": "ImageObject",
        "@id": logoId,
        url: `${site.url}/images/truefox-logo.webp`,
        contentUrl: `${site.url}/images/truefox-logo.webp`,
        caption: `${site.name} logo`
      },
      {
        "@type": "Place",
        "@id": canadaOfficeId,
        name: `${site.name} Canada office`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country
        }
      },
      {
        "@type": "Place",
        "@id": indiaOfficeId,
        name: `${site.name} India office`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Olangattu Tower, Chittethukara, Kakkanad",
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          postalCode: "682037",
          addressCountry: "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": organizationId },
        inLanguage: "en-CA"
      }
    ]
  };
  return <JsonLd data={data} />;
}

export function HomeEntityGraph() {
  const pageId = `${site.url}/#webpage`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: site.url,
        name: "Enterprise AI, Computer Vision and Automation | Truefox AI Inc.",
        description: site.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        dateModified: site.lastUpdated,
        inLanguage: "en-CA"
      },
      {
        "@type": "ItemList",
        name: "Truefox AI solution areas",
        itemListElement: [
          "AI Smart Security",
          "Biometric Intelligence",
          "Private AI Assistants",
          "Agentic Automation",
          "IoT and Edge AI",
          "Custom AI and Machine Learning"
        ].map((name, index) => ({ "@type": "ListItem", position: index + 1, name }))
      }
    ]
  };
  return <JsonLd data={data} />;
}

export function PageEntityGraph({
  slug,
  title,
  description,
  eyebrow,
  kind,
  cards,
  sections
}: {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  kind?: PageData["kind"];
  cards?: Card[];
  sections?: PageData["sections"];
}) {
  const url = `${site.url}/${slug}`;
  const pageId = `${url}#webpage`;
  const breadcrumbId = `${url}#breadcrumb`;
  const isServicePage = slug === "services" || servicePageSlugs.has(slug);
  const pageAboutId = slug === "kitchener"
    ? `${site.url}/#canada-office`
    : slug === "kochi"
      ? `${site.url}/#india-office`
      : `${site.url}/#organization`;
  const visibleFaqs = kind === "faq"
    ? sections
    : sections?.filter((section) => section.eyebrow?.trim().toUpperCase() === "FAQ");
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": pageAboutId },
      breadcrumb: { "@id": breadcrumbId },
      dateModified: site.lastUpdated,
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: eyebrow, item: url }
      ]
    }
  ];
  if (visibleFaqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": pageId },
      mainEntity: visibleFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: { "@type": "Answer", text: faq.text }
      }))
    });
  }
  if (isServicePage) {
    const serviceId = `${url}#service`;
    const serviceName = slug === "services" ? "Applied AI and Software Engineering Services" : eyebrow;
    (graph[0] as Record<string, unknown>).mainEntity = { "@id": serviceId };
    graph.push({
      "@type": "Service",
      "@id": serviceId,
      name: serviceName,
      description,
      url,
      mainEntityOfPage: { "@id": pageId },
      provider: { "@id": `${site.url}/#organization` },
      areaServed: ["Canada", "India", "International"],
      ...(slug === "services" && {
        serviceType: cards?.map((card) => card.title) || ["AI development", "Software engineering", "Cloud engineering"]
      })
    });
  }
  if (productPageSlugs.has(slug)) {
    graph.push({
      "@type": "Product",
      "@id": `${url}#product`,
      name: title,
      description,
      brand: { "@type": "Brand", name: site.shortName },
      manufacturer: { "@id": `${site.url}/#organization` },
      url
    });
  }
  if (slug === "products" && cards?.length) {
    graph.push({
      "@type": "ItemList",
      name: "Truefox AI products",
      itemListElement: cards.map((card, index) => ({
        "@type": "ListItem", position: index + 1, name: card.title,
        url: card.href ? `${site.url}${card.href}` : url
      }))
    });
  }
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
