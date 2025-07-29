'use client';

import { useState } from 'react';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/shahjalal-shanto',
    icon: 'github',
    description: 'Open source projects and code repositories',
    color: 'hover:text-gray-900',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/shahjalal-shanto',
    icon: 'linkedin',
    description: 'Professional network and career updates',
    color: 'hover:text-blue-700',
  },
  {
    platform: 'Email',
    url: 'mailto:Shahjalal2313@gmail.com',
    icon: 'email',
    description: 'Direct professional contact',
    color: 'hover:text-red-600',
  },
  {
    platform: 'ORCID',
    url: 'https://orcid.org/0000-0000-0000-0000', // Update with actual ORCID
    icon: 'orcid',
    description: 'Academic publications and research identity',
    color: 'hover:text-green-600',
  },
];

const SocialIcon = ({ icon, className }: { icon: string; className?: string }) => {
  const iconComponents = {
    github: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" clipRule="evenodd" />
      </svg>
    ),
    linkedin: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    email: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    orcid: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 01-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.675-1.575 3.675-3.722 0-2.162-1.309-3.722-3.675-3.722h-2.297z"/>
      </svg>
    ),
  };

  return iconComponents[icon as keyof typeof iconComponents] || null;
};

interface SocialLinksProps {
  layout?: 'horizontal' | 'vertical' | 'grid';
  showDescriptions?: boolean;
  className?: string;
}

export default function SocialLinks({ 
  layout = 'horizontal', 
  showDescriptions = false,
  className = '' 
}: SocialLinksProps) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const getLayoutClasses = () => {
    switch (layout) {
      case 'vertical':
        return 'flex flex-col space-y-4';
      case 'grid':
        return 'grid grid-cols-2 gap-4';
      default:
        return 'flex flex-wrap gap-6';
    }
  };

  const getLinkClasses = (link: SocialLink) => {
    if (showDescriptions) {
      return `group p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 ${link.color}`;
    }
    return `group p-3 text-gray-600 ${link.color} transition-colors duration-200`;
  };

  return (
    <div className={`${className}`}>
      <div className={getLayoutClasses()}>
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target={link.platform === 'Email' ? '_self' : '_blank'}
            rel={link.platform === 'Email' ? '' : 'noopener noreferrer'}
            className={getLinkClasses(link)}
            onMouseEnter={() => setHoveredLink(link.platform)}
            onMouseLeave={() => setHoveredLink(null)}
            aria-label={`${link.platform} - ${link.description}`}
          >
            <div className="flex items-center">
              <SocialIcon 
                icon={link.icon} 
                className={`w-6 h-6 ${showDescriptions ? 'mr-3' : ''}`} 
              />
              {showDescriptions && (
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 group-hover:text-current">
                    {link.platform}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {link.description}
                  </p>
                </div>
              )}
              {showDescriptions && (
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-current transform group-hover:translate-x-1 transition-all duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              )}
            </div>
            
            {!showDescriptions && hoveredLink === link.platform && (
              <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-900 rounded-md shadow-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                {link.platform}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            )}
          </a>
        ))}
      </div>

      {!showDescriptions && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Connect with me for research collaboration, academic discussions, and professional opportunities.
          </p>
        </div>
      )}
    </div>
  );
}