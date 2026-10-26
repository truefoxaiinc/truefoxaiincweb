import { pageSlugs, site } from "@/data/site";
import { getCmsData, publishedBlogPosts } from "@/lib/content";

export const revalidate = 60;

export async function GET() {
  const posts = publishedBlogPosts(await getCmsData());
  const urls = [
    site.url,
    ...pageSlugs.map((slug) => `${site.url}/${slug}`),
    ...posts.map((post) => `${site.url}/blog/${post.slug}`)
  ];
  return new Response([...new Set(urls)].join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=60" }
  });
}
