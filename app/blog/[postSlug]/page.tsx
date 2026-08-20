import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "@/components/Icons";
import { BlogPostingEntityGraph } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { getCmsData, getPublishedBlogPost, publishedBlogPosts } from "@/lib/content";

type Props = { params: Promise<{ postSlug: string }> };

export const revalidate = 60;

export async function generateStaticParams() {
  return publishedBlogPosts(await getCmsData()).map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPublishedBlogPost((await params).postSlug);
  if (!post) return {};
  const canonical = `${site.url}/blog/${post.slug}`;
  const title = `${post.title} | ${site.name}`;
  return {
    title: { absolute: title }, description: post.excerpt,
    alternates: { canonical, languages: { "en-CA": canonical, "x-default": canonical } },
    openGraph: { title, description: post.excerpt, url: canonical, type: "article", locale: "en_CA", siteName: site.name, publishedTime: post.publishedAt, modifiedTime: post.updatedAt, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: post.title }] },
    twitter: { card: "summary_large_image", title, description: post.excerpt, images: ["/twitter-image"] }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPublishedBlogPost((await params).postSlug);
  if (!post) notFound();
  return <main id="main-content" className="blog-post-page">
    <BlogPostingEntityGraph post={post} />
    <article className="shell blog-post-article">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><b>{post.title}</b></nav>
      <span className="eyebrow">{post.category}</span>
      <h1>{post.title}</h1>
      <p className="blog-post-dek">{post.excerpt}</p>
      <div className="blog-post-meta"><span>{post.author}</span><time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-CA", { dateStyle: "long" })}</time><span>{post.readTime}</span></div>
      <div className="blog-post-copy">{post.content.split("\n").filter(Boolean).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
      {post.relatedLinks?.length ? <nav className="blog-post-related" aria-label="Related services">{post.relatedLinks.map((link) => <Link className="button button-ghost" href={link.href} key={link.href}>{link.label}<ArrowUpRight /></Link>)}</nav> : null}
      <Link className="button button-ghost" href="/blog">More perspectives<ArrowUpRight /></Link>
    </article>
  </main>;
}
