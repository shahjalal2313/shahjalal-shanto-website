export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Allow all search engines to crawl the site
User-agent: *
Disallow:

# Sitemap location
Sitemap: https://shahjalal-shanto.com/sitemap.xml

# Crawl-delay for being respectful to servers
Crawl-delay: 1

# Allow specific paths for academic content
Allow: /about
Allow: /projects
Allow: /blog
Allow: /learning
Allow: /contact

# Allow blog posts
Allow: /blog/*

# Allow static assets
Allow: /public/*
Allow: /_next/static/*`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}