'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '@/lib/constants';
import GitHubRepos from '@/components/common/GitHubRepos';

interface Project {
  readonly id: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly technologies: readonly string[];
  readonly category: string;
  readonly status: string;
  readonly liveUrl?: string;
  readonly githubUrl: string;
  readonly featured: boolean;
  readonly timeline: string;
  readonly features: readonly string[];
  readonly achievements: readonly string[];
}

// --- Local, Reusable Components ---
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'link' | 'button';
  [key: string]: React.HTMLAttributes<HTMLButtonElement> | string | React.ReactNode;
}

const Button = ({ href, children, variant = 'primary', as = 'link', ...props }: ButtonProps) => {
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

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-md p-6 flex flex-col h-full ${className}`}>
      {children}
    </div>
  );
};

interface TagProps {
  children: string;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
      {children}
    </span>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-8">
      {children}
    </h2>
  );
};

// --- Main Page Component ---
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
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

      {/* Call to Action - Strategic Learning & Contact Navigation */}
      <section className="text-center bg-card border border-border rounded-lg p-10">
        <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
          Interested in My Skills & Journey?
        </h2>
        <p className="text-xl text-muted font-serif mb-8 max-w-2xl mx-auto">
          These projects represent continuous learning and growth. Explore my educational journey and let&apos;s discuss how we can collaborate on innovative solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/learning">📚 View Learning Journey</Button>
          <Button href="/contact" variant="secondary">🤝 Let&apos;s Collaborate</Button>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

// --- Sub-Components for the Page ---
interface ProjectCardProps {
  project: Project;
  onSelect: () => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
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
          {project.technologies.slice(0, 4).map((tech: string) => (
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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
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
                {project.features.map((feature: string, i: number) => <li key={i}>{feature}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-semibold text-foreground mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => <Tag key={tech}>{tech}</Tag>)}
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