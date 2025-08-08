import Link from 'next/link';
import { EXTERNAL_PROJECTS } from '@/lib/constants';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to my digital space
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
          I&apos;m{' '}
          <span className="font-semibold text-gray-900 dark:text-white">Shahjalal Shanto</span>,
          a passionate software engineer specializing in web development and
          computational chemistry.
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I create innovative solutions that bridge technology and science,
          building tools and applications that make a meaningful impact.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae. Mauris viverra veniam sit amet massa
              convallis, in tempor nisl tincidunt. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Learn more about me
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
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Web Development
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Next.js & React</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Node.js</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Computational Chemistry
                </h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Molecular Analysis</li>
                  <li>• Python & RDKit</li>
                  <li>• Data Visualization</li>
                  <li>• Scientific Computing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Molecular Analyzer */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {EXTERNAL_PROJECTS.molecularAnalyzer.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {EXTERNAL_PROJECTS.molecularAnalyzer.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {EXTERNAL_PROJECTS.molecularAnalyzer.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={EXTERNAL_PROJECTS.molecularAnalyzer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View Live App
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* This Website */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Personal Academic Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This website - a professional academic portfolio built with modern
              web technologies, optimized for performance and accessibility.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'React'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Advanced Lorem Ipsum Development Techniques',
              excerpt:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              date: '2024-12-01',
              tags: ['Development', 'Technical'],
            },
            {
              title: 'Modern Web Architecture Best Practices',
              excerpt:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              date: '2024-11-28',
              tags: ['Web Dev', 'Architecture'],
            },
            {
              title: 'Data Visualization and User Experience',
              excerpt:
                'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
              date: '2024-11-25',
              tags: ['UX', 'Data Science'],
            },
          ].map((post, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
          >
            Read All Articles
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
        >
          Get in Touch
          <svg
            className="ml-2 w-5 h-5"
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
      </section>
    </div>
  );
}
