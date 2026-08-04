import type { MetadataRoute } from "next";
import { pageSlugs, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date(`${site.lastUpdated}T00:00:00.000Z`);
  return [
    { url: site.url, lastModified: modified, changeFrequency: "weekly", priority: 1 },
    ...pageSlugs.map(slug => ({
      url: `${site.url}/${slug}`,
      lastModified: modified,
      changeFrequency: (["blog", "careers", "resources"] as string[]).includes(slug) ? "weekly" as const : "monthly" as const,
      priority: slug === "products" || slug === "services" || slug === "contact" ? 0.9 : 0.7
    }))
  ];
}
