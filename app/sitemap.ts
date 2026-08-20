import type { MetadataRoute } from "next";
import { pageSlugs, site } from "@/data/site";
import { getCmsData, publishedBlogPosts } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = publishedBlogPosts(await getCmsData());
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    ...pageSlugs.map(slug => ({
      url: `${site.url}/${slug}`,
      changeFrequency: (["blog", "careers", "resources"] as string[]).includes(slug) ? "weekly" as const : "monthly" as const,
      priority: slug === "products" || slug === "services" || slug === "contact" ? 0.9 : 0.7
    })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
