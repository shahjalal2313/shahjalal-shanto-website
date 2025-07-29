// Constants for Shahjalal Shanto Website

export const SITE_CONFIG = {
  name: 'Shahjalal Shanto',
  title: 'Shahjalal Shanto - Software Engineer & Academic',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Professional academic portfolio showcasing technical expertise and innovative project development.',
  url: 'https://shahjalal-shanto.com', // Update with actual domain
  email: 'contact@shahjalal-shanto.com', // Update with actual email
  author: 'Shahjalal Shanto',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Learning', href: '/learning' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    platform: 'GitHub',
    url: 'https://github.com/shahjalal-shanto', // Update with actual GitHub
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/shahjalal-shanto', // Update with actual LinkedIn
    icon: 'linkedin',
  },
  {
    platform: 'Email',
    url: 'mailto:contact@shahjalal-shanto.com', // Update with actual email
    icon: 'email',
  },
] as const;

export const EXTERNAL_PROJECTS = {
  molecularAnalyzer: {
    title: 'Molecular Analyzer',
    description: 'Computational chemistry tool for molecular analysis',
    url: 'https://molecular-analyzer.streamlit.app', // Update with actual URL
    technologies: ['Python', 'Streamlit', 'RDKit', 'Chemistry'],
  },
} as const;
