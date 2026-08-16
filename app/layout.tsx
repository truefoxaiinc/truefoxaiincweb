import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { GlobalEntityGraph } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Enterprise AI Engineering Company | Truefox AI Inc.",
    template: "%s | Truefox AI Inc."
  },
  description: "Truefox AI is a Canada-headquartered AI engineering company building computer vision, private AI, governed agents, biometrics, edge systems and digital products.",
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Artificial intelligence",
  keywords: [
    "enterprise AI engineering company",
    "Canada-headquartered AI engineering",
    "computer vision",
    "private AI",
    "AI agents",
    "edge AI",
    "biometrics"
  ],
  alternates: { canonical: "/", languages: { "en-CA": "/", "x-default": "/" } },
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Truefox AI — applied AI engineering" }]
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/twitter-image"]
  },
  icons: { icon: "/images/truefox-logo.webp", apple: "/images/truefox-logo.webp" },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>
        <GoogleAnalytics />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <GlobalEntityGraph />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
