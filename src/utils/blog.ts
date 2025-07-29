import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  author: {
    name: string;
    email: string;
  };
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  author: {
    name: string;
    email: string;
  };
}

// Ensure blog directory exists
export function ensureBlogDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// Get all blog post slugs
export function getAllBlogSlugs(): string[] {
  ensureBlogDirectory();
  
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => name.replace(/\.mdx$/, ''));
  } catch (error) {
    console.warn('Blog directory not found, returning empty array');
    return [];
  }
}

// Calculate reading time based on word count
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Get blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  ensureBlogDirectory();
  
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown content
    const processedContent = await remark()
      .use(remarkGfm)
      .process(content);
    
    const readingTime = calculateReadingTime(content);
    
    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content: processedContent.toString(),
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime,
      author: data.author || {
        name: 'SHAH MD. JALAL UDDIN',
        email: 'Shahjalal2313@gmail.com',
      },
    };
  } catch {
    console.error(`Error reading blog post ${slug}`);
    return null;
  }
}

// Get all blog posts metadata
export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const slugs = getAllBlogSlugs();
  
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPost(slug);
      if (!post) return null;
      
      // Return only metadata, not full content
      const { content: _, ...meta } = post;
      return meta;
    })
  );
  
  return posts
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

// Get featured blog posts
export async function getFeaturedBlogPosts(): Promise<BlogPostMeta[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.featured);
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => 
    post.tags.some((postTag) => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  );
}

// Get all unique tags
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllBlogPosts();
  const allTags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(allTags)).sort();
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}