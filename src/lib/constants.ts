// Constants for Shahjalal Shanto Website

export const SITE_CONFIG = {
  name: 'SHAH MD. JALAL UDDIN',
  title: 'SHAH MD. JALAL UDDIN - Computational Chemistry Researcher',
  description:
    'Graduate student in computational chemistry specializing in molecular modeling, web applications, and scientific computing.',
  url: 'https://shahjalal-shanto.com',
  email: 'Shahjalal2313@gmail.com',
  author: 'SHAH MD. JALAL UDDIN',
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
    url: 'mailto:Shahjalal2313@gmail.com',
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
