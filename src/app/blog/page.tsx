import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, formatDate, type BlogPostMeta } from '@/utils/blog';

// --- Metadata ---
export const metadata: Metadata = {
  title: 'Blog - Shahjalal Shanto',
  description: 'Technical articles and insights on computational chemistry, web development, and scientific computing.',
};

// --- Local, Reusable Components ---
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary';
}

const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "px-6 py-2 rounded-md font-semibold font-sans shadow-md hover:shadow-lg transition-all duration-300 text-center";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  };
  return <button className={`${baseClasses} ${variants[variant]}`}>{children}</button>;
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => (
  <article className={`bg-card border border-border rounded-lg shadow-md p-6 flex flex-col h-full transition-shadow hover:shadow-lg ${className}`}>{children}</article>
);

interface TagProps {
  children: string;
}

const Tag = ({ children }: TagProps) => (
  <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">{children}</span>
);

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-8">{children}</h2>
);

// --- Main Page Component ---
export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const featuredPosts = allPosts.filter((post) => post.featured);
  const otherPosts = allPosts.filter((post) => !post.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 my-16 md:my-24">
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-foreground mb-6">Blog</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted font-serif leading-relaxed">
          Technical articles and insights on software engineering, web development, and computational chemistry.
        </p>
      </section>

      {featuredPosts.length > 0 && (
        <section>
          <SectionTitle>Featured Articles</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => <PostCard key={post.slug} post={post} />)}
          </div>
        </section>
      )}

      {otherPosts.length > 0 && (
        <section>
          <SectionTitle>More Articles</SectionTitle>
          <div className="space-y-8">
            {otherPosts.map((post) => <PostCard key={post.slug} post={post} layout="horizontal" />)}
          </div>
        </section>
      )}

      {allPosts.length === 0 && (
        <section className="text-center">
            <p className="text-muted font-serif">No blog posts found. Check back soon!</p>
        </section>
      )}

      <NewsletterSignup />
    </div>
  );
}

// --- Sub-Components for the Page ---
interface PostCardProps {
  post: BlogPostMeta;
  layout?: 'vertical' | 'horizontal';
}

const PostCard = ({ post, layout = 'vertical' }: PostCardProps) => {
  if (layout === 'horizontal') {
    return (
      <Card className="md:flex-row md:items-center">
        <div className="flex-grow">
          <p className="text-sm text-muted font-sans mb-2">{formatDate(post.publishedAt)} • {post.readingTime} min read</p>
          <h3 className="text-xl font-sans font-semibold text-foreground mb-2">
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
          </h3>
          <p className="text-muted font-serif mb-4 text-sm">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
          </div>
        </div>
        <Link href={`/blog/${post.slug}`} className="mt-4 md:mt-0 md:ml-6 text-primary font-sans font-semibold hover:underline flex-shrink-0">Read More →</Link>
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex-grow">
        <p className="text-sm text-muted font-sans mb-2">{formatDate(post.publishedAt)} • {post.readingTime} min read</p>
        <h3 className="text-xl font-sans font-semibold text-foreground mb-3">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">{post.title}</Link>
        </h3>
        <p className="text-muted font-serif mb-4">{post.excerpt}</p>
      </div>
      <div className="mt-auto pt-4 border-t border-border">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <Link href={`/blog/${post.slug}`} className="text-primary font-sans font-semibold hover:underline">Read More →</Link>
      </div>
    </Card>
  );
};

const NewsletterSignup = () => (
  <Card className="items-center text-center p-8 md:p-12 bg-primary/5">
    <h3 className="text-2xl font-sans font-bold text-foreground mb-2">Stay Updated</h3>
    <p className="text-muted font-serif mb-6 max-w-md">Get notified when new articles are published. No spam, just quality content.</p>
    <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
      <input 
        type="email" 
        placeholder="Enter your email"
        className="flex-grow px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Email for newsletter"
      />
      <Button>Subscribe</Button>
    </form>
  </Card>
);
