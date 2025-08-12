// Global type definitions for Shahjalal Shanto Website

export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly technologies: readonly string[];
  readonly category: string;
  readonly status: string;
  readonly liveUrl?: string;
  readonly githubUrl: string;
  readonly featured: boolean;
  readonly timeline: string;
  readonly features: readonly string[];
  readonly achievements: readonly string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  description?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
}
