import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "@/components/PageRenderer";
import { pageSlugs, pages, site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return pageSlugs.map(slug => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  const canonical = `${site.url}/${slug}`;
  return {
    title: page.navLabel,
    description: page.description,
    alternates: { canonical, languages: { "en-CA": canonical, "x-default": canonical } },
    keywords: [page.navLabel, page.eyebrow, "Truefox AI", "applied AI Canada", "AI engineering India"],
    openGraph: {
      title: `${page.navLabel} | ${site.name}`,
      description: page.description,
      url: canonical,
      type: "website",
      locale: "en_CA",
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${page.navLabel} — Truefox AI` }]
    },
    twitter: { card: "summary_large_image", title: `${page.navLabel} | ${site.name}`, description: page.description, images: ["/twitter-image"] }
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
