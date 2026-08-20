import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageRenderer from "@/components/PageRenderer";
import { pageSlugs, pages, site } from "@/data/site";
import { getCmsData } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return pageSlugs.map(slug => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  const canonical = `${site.url}/${slug}`;
  const title = page.seoTitle || page.navLabel;
  const socialTitle = title.includes("|") ? title : `${title} | ${site.name}`;
  return {
    title: title.includes("|") ? { absolute: title } : title,
    description: page.description,
    alternates: { canonical, languages: { "en-CA": canonical, "x-default": canonical } },
    openGraph: {
      title: socialTitle,
      description: page.description,
      url: canonical,
      type: "website",
      locale: "en_CA",
      siteName: site.name,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${page.navLabel} — Truefox AI` }]
    },
    twitter: { card: "summary_large_image", title: socialTitle, description: page.description, images: ["/twitter-image"] }
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  let managed;
  if (slug === "careers" || slug === "blog") {
    managed = await getCmsData();
  }
  return <PageRenderer page={page} managed={managed ? { jobs: managed.jobs, posts: managed.posts } : undefined} />;
}
