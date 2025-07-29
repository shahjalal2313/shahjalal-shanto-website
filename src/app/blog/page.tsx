import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts, getFeaturedBlogPosts, formatDate } from '@/utils/blog';

export const metadata: Metadata = {
  title: 'Blog - Shahjalal Shanto',
  description:
    'Technical articles and insights on computational chemistry, web development, and scientific computing. Sharing knowledge from the intersection of technology and science.',
  keywords: [
    'computational chemistry',
    'web development',
    'scientific computing',
    'technical writing',
    'research',
    'next.js',
    'molecular modeling'
  ],
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();
  const featuredPosts = await getFeaturedBlogPosts();
  const otherPosts = allPosts.filter((post) => !post.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Technical articles and insights on software engineering, web
          development, and computational chemistry. Sharing knowledge and
          experiences from the intersection of technology and science.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <time>{formatDate(post.publishedAt)}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Other Posts */}
      {otherPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            More Articles
          </h2>
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <time>{formatDate(post.publishedAt)}</time>
                      <span className="mx-2">•</span>
                      <span>{post.readingTime} min read</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-600 mb-6">
          Get notified when new articles are published. No spam, just quality
          content about technology and science.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
