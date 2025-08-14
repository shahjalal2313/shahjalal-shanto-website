import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogSlugs, formatDate } from '@/utils/blog';
import MDXRenderer from '@/components/MDXRenderer';

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
  <Link href={`/blog/tag/${children.toLowerCase()}`} className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium transition-colors hover:bg-primary/20">
    #{children}
  </Link>
);

// --- Main Page Component ---
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-16 md:my-24">
      <header className="text-center mb-8 sm:mb-12">
        <div className="mb-4">
          <Link href="/blog" className="text-primary font-sans font-semibold hover:underline">← Back to Blog</Link>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-4 leading-tight px-2 sm:px-0">
          {post.title}
        </h1>
        <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 flex-wrap text-xs sm:text-sm text-muted font-sans px-2 sm:px-0">
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.readingTime} min read</span>
          <span>•</span>
          <span>by {post.author.name}</span>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mt-4 sm:mt-6 px-2 sm:px-0">
          {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
        
        {post.interactive && (
          <div className="mt-4 text-center px-2 sm:px-0">
            <span className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
              🚀 Interactive Content
            </span>
          </div>
        )}
        
        {post.difficulty && (
          <div className="mt-2 text-center px-2 sm:px-0">
            <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
              post.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              post.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {post.difficulty.charAt(0).toUpperCase() + post.difficulty.slice(1)} Level
            </span>
          </div>
        )}
      </header>

      <div className="px-2 sm:px-0">
        <MDXRenderer content={post.content} />
      </div>

      <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center px-2 sm:px-0">
        <p className="text-muted font-sans">Share this article</p>
        {/* Add social share links here if needed */}
      </footer>
    </article>
  );
}