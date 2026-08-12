import { site } from "@/data/site";
import type { Card, PageData } from "@/data/site";

type JsonValue = Record<string, unknown> | Record<string, unknown>[];

function safeJson(data: JsonValue) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: JsonValue }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(data) }} />;
}

export function GlobalEntityGraph() {
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/truefox-logo.webp`,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country
        },
        areaServed: [
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "International" }
        ],
        sameAs: Object.values(site.social).filter(Boolean),
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
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
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
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          ["What does Truefox AI build?", "Applied AI systems including computer vision, machine learning, generative AI, private assistants, agentic workflows, biometric intelligence, IoT and custom web or mobile products."],
          ["Can Truefox AI solutions run on-premise or at the edge?", "Yes. Architecture can be cloud, private cloud, on-premise, edge or hybrid depending on latency, privacy, bandwidth, resilience and integration requirements."],
          ["Where is Truefox AI located?", "Truefox AI is headquartered in Kitchener, Ontario, Canada, with engineering delivery in India and international client support."],
          ["How does a Truefox AI engagement begin?", "Engagements typically begin by defining the operational problem, users, data, systems, constraints and success criteria before selecting discovery, prototype, pilot or production delivery."]
        ].map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } }))
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
  faqs
}: {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  kind?: PageData["kind"];
  cards?: Card[];
  faqs?: { title: string; text: string }[];
}) {
  const url = `${site.url}/${slug}`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      breadcrumb: { "@id": `${url}/#breadcrumb` },
      dateModified: site.lastUpdated,
      inLanguage: "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: eyebrow, item: url }
      ]
    }
  ];
  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: { "@type": "Answer", text: faq.text }
      }))
    });
  }
  if (slug === "services") {
    graph.push({
      "@type": "Service",
      "@id": `${url}/#service`,
      name: "Applied AI and Software Engineering Services",
      description,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: ["Canada", "India", "International"],
      serviceType: cards?.map((card) => card.title) || ["AI development", "Software engineering", "Cloud engineering"]
    });
  }
  if (kind === "products" && slug !== "products") {
    graph.push({
      "@type": "Product",
      "@id": `${url}/#product`,
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
