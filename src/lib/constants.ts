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

export const PROJECTS_DATA = [
  {
    id: 'molecular-analyzer',
    title: 'Molecular Analyzer',
    shortDescription:
      'A comprehensive computational chemistry tool for molecular analysis, SMILES processing, and chemical data visualization.',
    fullDescription:
      'Advanced web application built with Streamlit that enables researchers and students to analyze molecular structures, process SMILES notation, visualize chemical compounds, and perform various molecular calculations. Features include molecular property prediction, structure visualization, and data export functionality for research applications.',
    technologies: ['Python', 'Streamlit', 'RDKit', 'Chemistry', 'Pandas', 'Plotly'],
    category: 'Computational Chemistry',
    status: 'Live Application',
    liveUrl: 'https://molecularanalyzer.shahjalal-shanto.com',
    githubUrl: 'https://github.com/shahjalal2313/molecular-analyzer',
    featured: true,
    timeline: '2024 - Present',
    features: [
      'SMILES notation processing and validation',
      'Molecular structure visualization',
      'Chemical property calculations',
      'Interactive data analysis tools',
      'Export functionality for research use'
    ],
    achievements: [
      'Successfully deployed on Streamlit Cloud',
      'Used by chemistry students and researchers',
      'Integrated multiple chemistry libraries (RDKit, Pandas)',
      'Responsive web application design'
    ]
  },
  {
    id: 'personal-website',
    title: 'Professional Academic Website',
    shortDescription:
      'This website - a professional academic portfolio built with modern web technologies and optimized for performance.',
    fullDescription:
      'A comprehensive academic portfolio website showcasing professional experience, educational background, projects, and technical expertise. Built using Next.js 15 with TypeScript, featuring responsive design, SEO optimization, blog system with MDX, contact form integration, and modern web development practices.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel', 'MDX'],
    category: 'Web Development',
    status: 'Live Website',
    liveUrl: 'https://shahjalal-shanto.com',
    githubUrl: 'https://github.com/shahjalal2313/shahjalal-shanto-website',
    featured: true,
    timeline: '2024 - Present',
    features: [
      'Responsive design across all devices',
      'Blog system with MDX content support',
      'Contact form with EmailJS integration',
      'SEO optimized with meta tags and sitemap',
      'Modern TypeScript and React architecture'
    ],
    achievements: [
      'Industry-leading performance scores',
      'Professional academic presentation',
      'Modern web development best practices',
      'Comprehensive project documentation',
      'Mobile-first responsive design'
    ]
  }
] as const;

export const EXTERNAL_PROJECTS = {
  molecularAnalyzer: {
    title: 'Molecular Analyzer',
    description: 'Computational chemistry tool for molecular analysis',
    url: 'https://molecularanalyzer.shahjalal-shanto.com',
    technologies: ['Python', 'Streamlit', 'RDKit', 'Chemistry'],
  },
} as const;
