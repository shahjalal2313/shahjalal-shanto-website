import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogSlugs, formatDate } from '@/utils/blog';

// --- Metadata Generation ---
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} - Shahjalal Shanto`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags,
      authors: [post.author.name],
    },
  };
}

// --- Local, Reusable Components ---
const Tag = ({ children }: { children: string }) => (
  <Link href={`/blog/tag/${children.toLowerCase()}`} className="inline-block px-3 py-1 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-full text-xs font-medium transition-colors hover:bg-secondary/20">
    #{children}
  </Link>
);

// --- Main Page Component ---
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24">
      <header className="text-center mb-12">
        <div className="mb-4">
          <Link href="/blog" className="text-primary font-sans font-semibold hover:underline">← Back to Blog</Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4 leading-tight">
          {post.title}
        </h1>
        <div className="flex justify-center items-center gap-x-6 gap-y-2 flex-wrap text-sm text-muted font-sans">
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span>by {post.author.name}</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
      </header>

      <div 
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-muted font-sans">Share this article</p>
        {/* Add social share links here if needed */}
      </footer>
    </article>
  );
}