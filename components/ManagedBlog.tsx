import Link from "next/link";
import type { BlogPost } from "@/lib/cms";
import { publishedBlogPosts } from "@/lib/content";

export default function ManagedBlog({ posts }: { posts: BlogPost[] }) {
  const published = publishedBlogPosts({ posts });
  return <div className="managed-blog"><div className="managed-blog-heading"><span className="eyebrow">LATEST PERSPECTIVES</span><h2>PUBLISHED ARTICLES</h2></div>{published.length ? <div className="managed-blog-grid">{published.map((post) => <article id={post.slug} key={post.id}><span>{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><div><small>{post.author} · {post.readTime}</small><time>{new Date(post.publishedAt).toLocaleDateString("en-CA", { dateStyle: "medium" })}</time></div><Link href={`/blog/${post.slug}`}>Read article</Link></article>)}</div> : <p className="managed-empty-copy">New articles are being prepared. Published posts will appear here.</p>}</div>;
}
