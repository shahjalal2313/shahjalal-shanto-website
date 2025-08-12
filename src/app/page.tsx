'use client';

import Link from 'next/link';
import { EXTERNAL_PROJECTS } from '@/lib/constants';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
      {/* Hero Section - Professional Full Width Layout */}
      <section className="py-12 md:py-20">
        {/* Full-width header content */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Chemistry Meets Code
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Innovation Begins Here</span>
          </h1>
        </div>

        {/* Main description - Full width */}
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 px-2 sm:px-0">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6 leading-relaxed">
            I&apos;m{' '}
            <span className="font-bold text-gray-900 dark:text-white">Shah Md. Jalal Uddin</span>
            {' '}— transforming complex scientific challenges into elegant digital solutions.
            From molecular analysis to modern web applications, I bridge the gap between 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> rigorous science</span> and 
            <span className="font-semibold text-indigo-600 dark:text-indigo-400"> cutting-edge technology</span>.
          </p>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            <strong className="text-gray-700 dark:text-gray-300">Ready for advanced research?</strong> 
            With proven industry leadership, computational chemistry expertise, 
            and AI-enhanced problem-solving skills, I&apos;m positioned to make significant 
            contributions to advanced research and scientific computing.
          </p>
        </div>

        {/* Full-width credibility indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto mb-8 md:mb-12 px-2 sm:px-0">
          <div className="text-center p-3 md:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 interactive-stat">
            <div className="font-bold text-lg md:text-xl text-blue-600 dark:text-blue-400">MS</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Physical Chemistry</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 interactive-stat">
            <div className="font-bold text-lg md:text-xl text-green-600 dark:text-green-400">3+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Years Industrial Experience</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 interactive-stat">
            <div className="font-bold text-lg md:text-xl text-purple-400 dark:text-purple-400">Project</div>
            <div className="font-bold text-xs md:text-sm text-gray-600 dark:text-gray-300">Molecular Analyzer</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 interactive-stat">
            <div className="font-bold text-lg md:text-xl text-orange-600 dark:text-orange-400">500+</div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-300">Learning Hours</div>
          </div>
        </div>
        
        {/* Full-width call-to-action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="btn-primary text-center"
            >
              🚀 Explore My Innovation
            </Link>
            <button
              className="btn-secondary text-center"
              onClick={() => {
                // Download CV functionality can be added here
                alert('CV download functionality will be implemented soon!');
              }}
            >
              📄 Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Preview - From Laboratory to Leading-Edge Technology */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-2 sm:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            From Laboratory to Leading-Edge Technology
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
            <strong>What makes a chemistry professional successful in tech?</strong> 
            My unique journey from MS Physical Chemistry through 3+ years of industrial 
            leadership at BSRM Steel to creating innovative digital solutions demonstrates 
            the power of <span className="text-blue-600 dark:text-blue-400">analytical thinking</span>, 
            <span className="text-green-600 dark:text-green-400"> problem-solving precision</span>, 
            and <span className="text-purple-600 dark:text-purple-400"> interdisciplinary innovation</span>.
          </p>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
            My secret weapon? <strong>AI-enhanced methodology</strong> combined with rigorous 
            scientific training. From building the -
            <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
              Molecular Analyzer
            </Link> to creating this professional website with zero formal web development background, 
            I leverage modern AI tools to accelerate learning and deliver exceptional results. 
            This approach is <em>essential</em> for contemporary academic research and industry innovation.
          </p>
          <Link
            href="/about"
            className="btn-secondary inline-flex items-center justify-center"
          >
            🎯 My Academic Journey
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center px-2 sm:px-0">
          Featured Projects
        </h2>
        <div className="flex overflow-x-auto gap-3 md:gap-4 pb-4 md:grid md:grid-cols-2 md:overflow-x-visible md:gap-8 md:pb-0 scroll-smooth snap-x snap-mandatory px-2 sm:px-0">
          {/* Molecular Analyzer */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {EXTERNAL_PROJECTS.molecularAnalyzer.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
              {EXTERNAL_PROJECTS.molecularAnalyzer.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {EXTERNAL_PROJECTS.molecularAnalyzer.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 text-xs md:text-sm rounded-full"
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
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Personal Academic Website
            </h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
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

      {/* Technical Expertise & Skills - Professional Matrix */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center mb-8 md:mb-12 px-2 sm:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise & Core Competencies
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill matrix demonstrating proven expertise across scientific computing, 
            AI-enhanced development, and international collaboration.
          </p>
        </div>

        {/* MOBILE ONLY: Horizontal scrolling cards */}
        <div className="lg:hidden px-2">
          <div 
            id="technical-expertise-scroll"
            className="flex overflow-x-auto gap-3 pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {/* Scientific Excellence - Mobile */}
            <div className="skill-card p-4 flex-shrink-0 w-[85vw] max-w-sm snap-center">
              <h4 className="font-bold text-sm text-blue-700 dark:text-blue-300 mb-3 flex items-center text-center justify-center">
                🧪 Scientific Excellence
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>Analytical Chemistry</strong> - 3+ years</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>Spectrometric Analysis</strong> - Advanced</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>Quality Assurance</strong> - 3+ years</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>International Standards</strong> - ASTM, ISO</span>
                </li>
              </ul>
            </div>

            {/* AI-Enhanced Development - Mobile */}
            <div className="skill-card p-4 flex-shrink-0 w-[85vw] max-w-sm snap-center">
              <h4 className="font-bold text-sm text-green-700 dark:text-green-300 mb-3 flex items-center text-center justify-center">
                🤖 AI-Enhanced Development
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>Python (RDKit, Pandas)</strong> - Expert</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>Next.js + TypeScript</strong> - Proficient</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>Streamlit Applications</strong> - Advanced</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>GitHub Collaboration</strong> - Active</span>
                </li>
              </ul>
            </div>

            {/* Global Communication - Mobile */}
            <div className="skill-card p-4 flex-shrink-0 w-[85vw] max-w-sm snap-center">
              <h4 className="font-bold text-sm text-purple-700 dark:text-purple-300 mb-3 flex items-center text-center justify-center">
                🌐 Global Communication
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>11+ International Clients</strong> - Success</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>Cross-cultural Success</strong> - Proven</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>Digital Marketing</strong> - 20+ Projects</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>Project Management</strong> - 5-star rated</span>
                </li>
              </ul>
            </div>

            {/* Research Methodologies - Mobile */}
            <div className="skill-card p-4 flex-shrink-0 w-[85vw] max-w-sm snap-center">
              <h4 className="font-bold text-sm text-orange-700 dark:text-orange-300 mb-3 flex items-center text-center justify-center">
                📊 Research Methodologies
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Statistical Analysis</strong> - Advanced</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Exploratory Data Analysis</strong> - Pandas</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Data Visualization</strong> - Matplotlib, Seaborn, Ploty</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Machine Learning</strong> - Scikit-Learn</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={() => {
                const container = document.getElementById('technical-expertise-scroll');
                if (container) {
                  container.scrollBy({ left: -320, behavior: 'smooth' });
                }
              }}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous competency"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const container = document.getElementById('technical-expertise-scroll');
                if (container) {
                  container.scrollBy({ left: 320, behavior: 'smooth' });
                }
              }}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next competency"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Technology Proficiency */}
          <div className="mt-8 px-2">
            <div className="skill-card p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 text-center">
                💻 Technology Proficiency
              </h3>
              
              {/* Expert Level - Mobile */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                  Expert Level
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 text-sm font-semibold rounded-lg border border-blue-200 dark:border-blue-700">
                    RDKit
                  </span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200 text-sm font-semibold rounded-lg border border-green-200 dark:border-green-700">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 text-sm font-semibold rounded-lg border border-purple-200 dark:border-purple-700">
                    SMILES
                  </span>
                </div>
              </div>

              {/* Intermediate Level - Mobile */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                  Intermediate Level
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 text-xs font-medium rounded-full">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-teal-100 dark:bg-teal-900/20 text-teal-800 dark:text-teal-300 text-xs font-medium rounded-full">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 text-xs font-medium rounded-full">
                    Streamlit
                  </span>
                  <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs font-medium rounded-full">
                    Pandas
                  </span>
                </div>
              </div>

              {/* Developing Level - Mobile */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                  Developing
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    Machine Learning
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    React
                  </span>
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                    Linux
                  </span>
                </div>
              </div>

              {/* AI Tools - Mobile */}
              <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-lg border border-indigo-200 dark:border-indigo-800">
                <h4 className="text-xs font-semibold text-indigo-800 dark:text-indigo-300 mb-2 uppercase tracking-wide">
                  🤖 AI-Enhanced Methodology
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Proficient in leveraging Claude, GitHub Copilot, and other AI tools for 
                  accelerated learning and development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP ONLY: Professional 2-column layout */}
        <div className="hidden lg:block px-4">
          <div className="grid grid-cols-2 gap-12 mb-12">
            {/* Core Competencies Matrix */}
            <div className="skill-card p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                🔬 Core Competencies Matrix
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {/* Scientific Excellence */}
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-4 flex items-center">
                    🧪 Scientific Excellence
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>Analytical Chemistry</strong> - 3+ years</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>Spectrometric Analysis</strong> - Advanced</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>Quality Assurance</strong> - 3+ years</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      <span><strong>International Standards</strong> - ASTM, ISO</span>
                </li>
              </ul>
            </div>

                {/* AI-Enhanced Development */}
                <div>
                  <h4 className="font-bold text-green-700 dark:text-green-300 mb-4 flex items-center">
                    🤖 AI-Enhanced Development
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>Python (RDKit, Pandas)</strong> - Expert</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>Next.js + TypeScript</strong> - Proficient</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>Streamlit Applications</strong> - Advanced</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      <span><strong>GitHub Collaboration</strong> - Active</span>
                </li>
              </ul>
            </div>

                {/* Global Communication */}
                <div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4 flex items-center">
                    🌐 Global Communication
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>11+ International Clients</strong> - Success</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>Cross-cultural Success</strong> - Proven</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>Digital Marketing</strong> - 20+ Projects</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                      <span><strong>Project Management</strong> - 5-star rated</span>
                </li>
              </ul>
            </div>

                {/* Research Methodologies */}
                <div>
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-4 flex items-center">
                    📊 Research Methodologies
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Statistical Analysis</strong> - Advanced</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Exploratory Data Analysis</strong> - Pandas</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Data Visualization</strong> - Matplotlib, Seaborn, Ploty</span>
                </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      <span><strong>Machine Learning</strong> - Scikit-Learn</span>
                </li>
              </ul>
            </div>
              </div>
            </div>

            {/* Technology Proficiency Cloud */}
            <div className="skill-card p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              💻 Technology Proficiency
            </h3>
            
            {/* Expert Level */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                Expert Level
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 text-base font-semibold rounded-lg border border-blue-200 dark:border-blue-700">
                  RDKit
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200 text-base font-semibold rounded-lg border border-green-200 dark:border-green-700">
                  Python
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 text-base font-semibold rounded-lg border border-purple-200 dark:border-purple-700">
                  SMILES Notation
                </span>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                Intermediate Level
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 text-sm font-medium rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/20 text-teal-800 dark:text-teal-300 text-sm font-medium rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 text-sm font-medium rounded-full">
                  Streamlit
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-sm font-medium rounded-full">
                  Pandas
                </span>
              </div>
            </div>

            {/* Developing Level */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                Developing
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  Linux
                </span>
              </div>
            </div>

            {/* AI Tools */}
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 rounded-lg border border-indigo-200 dark:border-indigo-800">
              <h4 className="text-sm font-semibold text-indigo-800 dark:text-indigo-300 mb-2 uppercase tracking-wide">
                🤖 AI-Enhanced Methodology
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Proficient in leveraging Claude, GitHub Copilot, and other AI tools for 
                accelerated learning, problem-solving, and development — essential skills 
                for modern scientific research.
              </p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Learning Journey - Featured Courses */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning & Skill Development
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Committed to staying at the forefront of computational chemistry and data science
            through structured learning and professional development.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-3 md:overflow-x-visible md:gap-6 md:pb-0 scroll-smooth snap-x snap-mandatory mb-8">
          {/* Programming Foundations */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🐍</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Python Programming</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">University of Michigan</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Comprehensive Python foundation including data structures, algorithms, 
              and the complete 100 Days of Code bootcamp focusing on practical applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                Python
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-xs rounded-full">
                Data Structures
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-xs rounded-full">
                Algorithms
              </span>
            </div>
          </div>

          {/* Data Science & ML */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">📊</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Science & ML</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Multiple Providers</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Advanced data science bootcamps, machine learning fundamentals, 
              and deep learning theory with hands-on PyTorch implementation.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 text-xs rounded-full">
                Pandas
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 text-xs rounded-full">
                Scikit-learn
              </span>
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300 text-xs rounded-full">
                PyTorch
              </span>
            </div>
          </div>

          {/* Statistics & Analysis */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">📈</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Statistics & Analytics</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Google & 365 Careers</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
              Statistical foundations, hypothesis testing, probability theory, 
              and advanced analytics for data-driven research and decision making.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300 text-xs rounded-full">
                Statistics
              </span>
              <span className="px-2 py-1 bg-pink-100 dark:bg-pink-900/20 text-pink-800 dark:text-pink-300 text-xs rounded-full">
                Hypothesis Testing
              </span>
              <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-300 text-xs rounded-full">
                Analytics
              </span>
            </div>
          </div>
        </div>

        {/* Learning Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">11+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Courses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Learning Hours</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">5</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Certificates</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">2025</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Active Learning</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/learning"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            📚 Explore My Learning Journey
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
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-700">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Latest Articles
        </h2>
        <div className="relative">
          <div 
            id="blog-articles-scroll"
            className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-3 md:gap-6 md:overflow-x-visible md:pb-0 scroll-smooth snap-x snap-mandatory"
          >
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
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center"
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
          
          {/* Mobile Navigation Arrows */}
          <div className="flex justify-center mt-4 gap-2 md:hidden">
            <button
              onClick={() => {
                const container = document.getElementById('blog-articles-scroll');
                if (container) {
                  container.scrollBy({ left: -320, behavior: 'smooth' });
                }
              }}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Previous article"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                const container = document.getElementById('blog-articles-scroll');
                if (container) {
                  container.scrollBy({ left: 320, behavior: 'smooth' });
                }
              }}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Next article"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
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
