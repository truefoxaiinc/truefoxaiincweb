import { apiUrl } from "@/lib/api";
import type { BlogPost, CmsData } from "@/lib/cms";

export async function getCmsData(): Promise<CmsData | undefined> {
  try {
    const response = await fetch(apiUrl("/api/v1/content"), { next: { revalidate: 60 } });
    return response.ok ? await response.json() as CmsData : undefined;
  } catch {
    return undefined;
  }
}

export function publishedBlogPosts(data: Pick<CmsData, "posts"> | undefined): BlogPost[] {
  const slugs = new Set<string>();
  const titles = new Set<string>();
  return (data?.posts ?? []).filter((post) => {
    const slug = post.slug.trim().toLowerCase();
    const title = post.title.trim().toLowerCase();
    const valid = post.status === "published" && slug && title && post.excerpt.trim() && post.content.trim() && post.author.trim() && !Number.isNaN(Date.parse(post.publishedAt));
    if (!valid || slugs.has(slug) || titles.has(title)) return false;
    slugs.add(slug);
    titles.add(title);
    return true;
  }).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export async function getPublishedBlogPost(slug: string) {
  return publishedBlogPosts(await getCmsData()).find((post) => post.slug === slug);
}
