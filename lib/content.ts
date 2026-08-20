import { apiUrl } from "@/lib/api";
import type { BlogPost, CmsData } from "@/lib/cms";
import localCms from "@/data/cms.json";

export async function getCmsData(): Promise<CmsData | undefined> {
  try {
    const response = await fetch(apiUrl("/api/v1/content"), { next: { revalidate: 60 } });
    if (response.ok) {
      const remote = await response.json() as CmsData;
      const localPosts = localCms.posts as BlogPost[];
      return { ...remote, posts: [...remote.posts, ...localPosts.filter((post) => !remote.posts.some((remotePost) => remotePost.id === post.id))] };
    }
  } catch { /* Fall back to the checked-in published content below. */ }
  return localCms as CmsData;
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
