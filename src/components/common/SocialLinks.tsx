'use client';

import { useState } from 'react';

// --- Component Data ---
const socialLinks = [
  { platform: 'GitHub', url: 'https://github.com/shahjalal-shanto', icon: 'github', description: 'Open source projects and code repositories' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/shahjalal-shanto', icon: 'linkedin', description: 'Professional network and career updates' },
  { platform: 'Email', url: 'mailto:Shahjalal2313@gmail.com', icon: 'email', description: 'Direct professional contact for inquiries' },
  { platform: 'ORCID', url: 'https://orcid.org/0000-0000-0000-0000', icon: 'orcid', description: 'Academic publications and research identity' },
];

// --- SVG Icon Component ---
const SocialIcon = ({ icon, className = '' }) => {
  const icons = {
    github: <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604C9.27 14.51 6.464 13.58 6.464 8.65c0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.939-2.807 5.86-5.479 6.17.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12 24 5.373 18.627 0 12 0z" />,
    linkedin: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    orcid: <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.675-1.575 3.675-3.722 0-2.162-1.309-3.722-3.675-3.722h-2.297z" />,
  };
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24">{icons[icon]}</svg>;
};

// --- Main Component ---
export default function SocialLinks({ layout = 'horizontal', showDescriptions = false }) {
  const layoutClasses = {
    horizontal: 'flex flex-wrap gap-4',
    vertical: 'flex flex-col space-y-4',
    grid: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
  };

  return (
    <div className={layoutClasses[layout]}>
      {socialLinks.map((link) => (
        <SocialLinkItem key={link.platform} link={link} showDescription={showDescriptions} />
      ))}
    </div>
  );
}

// --- Sub-Component for each link ---
const SocialLinkItem = ({ link, showDescription }) => {
  if (showDescription) {
    return (
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="group bg-card border border-border rounded-lg p-4 flex items-center gap-4 transition-all hover:border-primary hover:shadow-md">
        <SocialIcon icon={link.icon} className="w-6 h-6 text-muted group-hover:text-primary transition-colors" />
        <div className="flex-grow">
          <h3 className="font-sans font-semibold text-foreground group-hover:text-primary transition-colors">{link.platform}</h3>
          <p className="text-sm text-muted font-serif">{link.description}</p>
        </div>
        <svg className="w-5 h-5 text-muted transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </a>
    );
  }

  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="group relative text-muted hover:text-primary transition-colors p-2">
      <span className="sr-only">{link.platform}</span>
      <SocialIcon icon={link.icon} className="w-6 h-6" />
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-foreground text-background text-xs font-sans rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {link.platform}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
      </div>
    </a>
  );
};
