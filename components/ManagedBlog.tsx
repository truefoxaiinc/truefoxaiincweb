import type { BlogPost } from "@/lib/cms";

export default function ManagedBlog({ posts }: { posts: BlogPost[] }) {
  const published = posts.filter((post) => post.status === "published").sort((a, b) => Date.parse(b.publishedAt || b.updatedAt) - Date.parse(a.publishedAt || a.updatedAt));
  return <div className="managed-blog"><div className="managed-blog-heading"><span className="eyebrow">LATEST PERSPECTIVES</span><h2>PUBLISHED ARTICLES</h2></div>{published.length ? <div className="managed-blog-grid">{published.map((post) => <article id={post.slug} key={post.id}><span>{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><div><small>{post.author} · {post.readTime}</small><time>{new Date(post.publishedAt || post.updatedAt).toLocaleDateString("en-CA", { dateStyle: "medium" })}</time></div><details><summary>Read article</summary><div className="managed-article-copy">{post.content.split("\n").filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></details></article>)}</div> : <p className="managed-empty-copy">New articles are being prepared. Published posts will appear here.</p>}</div>;
}
