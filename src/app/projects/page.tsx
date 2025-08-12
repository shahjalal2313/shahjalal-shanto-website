'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '@/lib/constants';
import GitHubRepos from '@/components/common/GitHubRepos';

// --- Local, Reusable Components ---
const Button = ({ href, children, variant = 'primary', as = 'link', ...props }) => {
  const baseClasses = "inline-block px-6 py-3 rounded-md font-semibold font-sans shadow-md hover:shadow-lg transition-all duration-300 text-center";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-card text-card-foreground border border-border hover:bg-background",
  };

  if (as === 'link') {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-md p-6 flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
};

const Tag = ({ children }) => {
  return (
    <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
      {children}
    </span>
  );
};

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-8">
      {children}
    </h2>
  );
};

// --- Main Page Component ---
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const otherProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 my-16 md:my-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-foreground mb-6">
          Projects
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted font-serif leading-relaxed">
          A portfolio of research and development projects in computational chemistry, scientific computing, and web applications that showcase my technical expertise.
        </p>
      </section>

      {/* Featured Projects */}
      <section>
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <SectionTitle>Other Projects</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={() => setSelectedProject(project)} />
            ))}
          </div>
        </section>
      )}

      {/* GitHub Repos */}
      <section>
        <SectionTitle>Open Source Contributions</SectionTitle>
        <Card><GitHubRepos username="shahjalal-shanto" maxRepos={6} /></Card>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

// --- Sub-Components for the Page ---
const ProjectCard = ({ project, onSelect }) => {
  return (
    <Card>
      <div className="flex-grow">
        <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">
          {project.title}
        </h3>
        <p className="text-muted font-serif mb-4 flex-grow">
          {project.shortDescription}
        </p>
        <button onClick={onSelect} className="text-sm font-sans font-semibold text-primary hover:underline mb-4">
          Read Full Details →
        </button>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-auto pt-4 border-t border-border">
        {project.liveUrl && <Button href={project.liveUrl} variant="primary">View Live</Button>}
        {project.githubUrl && <Button href={project.githubUrl} variant="secondary">GitHub</Button>}
      </div>
    </Card>
  );
};

const ProjectModal = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-card rounded-xl shadow-2xl max-w-4xl max-h-[90vh] w-full flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-2xl font-sans font-bold text-foreground">
            {project.title}
          </h2>
          <button onClick={onClose} className="text-muted hover:text-foreground transition-colors p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-foreground mb-2">Overview</h3>
              <p className="font-serif text-muted leading-relaxed">{project.fullDescription}</p>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-foreground mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 font-serif text-muted">
                {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-foreground mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => <Tag key={tech}>{tech}</Tag>)}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border mt-auto bg-background/50 rounded-b-xl flex gap-4">
          {project.liveUrl && <Button href={project.liveUrl} variant="primary">View Live Project</Button>}
          {project.githubUrl && <Button href={project.githubUrl} variant="secondary">View Source Code</Button>}
        </div>
      </div>
    </div>
  );
};