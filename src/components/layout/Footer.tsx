import Link from 'next/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Software Engineer passionate about web development, computational
              chemistry, and creating innovative solutions that bridge
              technology and science.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={`Visit ${link.platform}`}
                >
                  <span className="sr-only">{link.platform}</span>
                  {/* Icon placeholder - will be replaced with proper icons */}
                  <div className="w-6 h-6 bg-gray-600 rounded"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
