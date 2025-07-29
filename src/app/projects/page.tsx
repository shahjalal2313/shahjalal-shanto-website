import type { Metadata } from 'next';
import Link from 'next/link';
import { EXTERNAL_PROJECTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Projects - Shahjalal Shanto',
  description:
    'Academic and professional project portfolio showcasing computational chemistry research, scientific computing applications, and technical expertise in molecular analysis.',
};

// Sample project data - will be replaced with dynamic content later
const projects = [
  {
    id: 'molecular-analyzer',
    title: 'Molecular Analyzer',
    description:
      'A comprehensive computational chemistry tool for molecular analysis, SMILES processing, and chemical data visualization.',
    technologies: ['Python', 'Streamlit', 'RDKit', 'Chemistry'],
    liveUrl: EXTERNAL_PROJECTS.molecularAnalyzer.url,
    featured: true,
  },
  {
    id: 'personal-website',
    title: 'Personal Academic Website',
    description:
      'This website - a professional academic portfolio built with modern web technologies and optimized for performance.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    featured: true,
  },
  {
    id: 'scientific-data-visualization',
    title: 'Scientific Data Visualization Suite',
    description:
      'Advanced analytics platform for visualizing chemical and molecular data with interactive plots, 3D molecular structures, and statistical analysis tools designed for research applications.',
    technologies: ['Python', 'Matplotlib', 'Plotly', 'Seaborn', 'Streamlit'],
    featured: false,
  },
  {
    id: 'quantum-chemistry-toolkit',
    title: 'Quantum Chemistry Computational Toolkit',
    description:
      'Collection of Python tools for quantum chemical calculations, molecular orbital analysis, and electronic structure computations with integration for popular quantum chemistry software packages.',
    technologies: ['Python', 'NumPy', 'SciPy', 'PySCF', 'RDKit'],
    featured: false,
  },
  {
    id: 'chemical-database-scraper',
    title: 'Chemical Database Web Scraper',
    description:
      'Automated tool for extracting chemical compound data from public databases, with intelligent parsing and validation of molecular structures and properties for research applications.',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'RDKit', 'Pandas'],
    featured: false,
  },
  {
    id: 'scientific-api-gateway',
    title: 'Scientific Computing API Gateway',
    description:
      'RESTful API service for accessing computational chemistry calculations, molecular data processing, and scientific computing resources with secure authentication and rate limiting for research collaborations.',
    technologies: ['FastAPI', 'Python', 'Redis', 'Docker', 'PostgreSQL'],
    featured: false,
  },
  {
    id: 'molecular-ml-pipeline',
    title: 'Molecular Property Prediction ML Pipeline',
    description:
      'Machine learning framework for predicting molecular properties from chemical structures using deep learning models, with automated feature extraction from SMILES notation and model validation.',
    technologies: ['Python', 'TensorFlow', 'RDKit', 'Scikit-learn', 'Keras'],
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive portfolio showcasing research and development projects 
          in computational chemistry, scientific computing, and academic applications 
          that demonstrate technical expertise and innovative problem-solving capabilities.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Live
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
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Research Collaboration & Academic Opportunities
        </h3>
        <p className="text-gray-600 mb-6">
          I&apos;m actively seeking research collaboration opportunities, graduate program 
          positions, and innovative projects in computational chemistry and scientific computing. 
          Let&apos;s discuss how we can advance scientific knowledge together.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Connect for Research
        </Link>
      </div>
    </div>
  );
}
