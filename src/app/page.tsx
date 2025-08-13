'use client';

import Link from 'next/link';
import { EXTERNAL_PROJECTS } from '@/lib/constants';

// A simple, reusable Button component for this page
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  as?: 'link' | 'button';
}

const Button = ({ href, children, variant = 'primary', as = 'link' }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-md font-semibold font-sans shadow-md hover:shadow-lg transition-all duration-300 text-center";
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
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
};

// A reusable Card component
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 ${className}`}>
      {children}
    </div>
  );
};

// A reusable Tag component
interface TagProps {
  children: string;
}

const Tag = ({ children }: TagProps) => {
  return (
    <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
      {children}
    </span>
  );
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 my-16 md:my-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-foreground mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Chemistry Meets Code
          </span>
          <br />
          <span className="text-foreground">Innovation Begins Here</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted font-serif leading-relaxed mb-8">
          I&apos;m <span className="font-bold text-foreground">Shah Md. Jalal Uddin</span> — transforming complex scientific challenges into elegant digital solutions. From molecular analysis to modern web applications, I bridge the gap between rigorous science and cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/projects">🚀 Explore My Work</Button>
          <Button href="/contact" variant="secondary">📞 Get in Touch</Button>
        </div>
      </section>

      {/* Education & Experience */}
      <section>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <div className="font-sans font-bold text-2xl text-primary mb-2">BSc</div>
            <div className="text-lg font-medium text-foreground mb-1">Chemistry</div>
            <div className="text-sm text-muted">Academic Foundation</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-sans font-bold text-2xl text-primary mb-2">MS</div>
            <div className="text-lg font-medium text-foreground mb-1">Physical Chemistry</div>
            <div className="text-sm text-muted">Advanced Research</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-sans font-bold text-2xl text-primary mb-2">3+</div>
            <div className="text-lg font-medium text-foreground mb-1">Years Experience</div>
            <div className="text-sm text-muted">Industry & Research</div>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-lg text-muted font-serif mb-6 max-w-2xl mx-auto">
            Combining strong academic foundations in chemistry with practical industry experience in computational modeling and scientific computing.
          </p>
          <Button href="/about">Learn More About Me</Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-8 text-center">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">
              {EXTERNAL_PROJECTS.molecularAnalyzer.title}
            </h3>
            <p className="text-muted font-serif mb-4">
              {EXTERNAL_PROJECTS.molecularAnalyzer.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {EXTERNAL_PROJECTS.molecularAnalyzer.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <Button href={EXTERNAL_PROJECTS.molecularAnalyzer.url} variant="secondary">View Live App</Button>
          </Card>
          <Card>
            <h3 className="text-xl md:text-2xl font-sans font-semibold text-foreground mb-3">
              Personal Academic Website
            </h3>
            <p className="text-muted font-serif mb-4">
              This website - a professional academic portfolio built with modern web technologies, optimized for performance and accessibility.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Next.js', 'TypeScript', 'Tailwind CSS', 'React'].map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
            <Button href="/projects" variant="secondary">View Project Details</Button>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-lg text-muted font-serif mb-6 max-w-2xl mx-auto">
            From computational chemistry tools to modern web applications, I create solutions that bridge scientific research with cutting-edge technology.
          </p>
          <Button href="/projects">Explore All Projects</Button>
        </div>
      </section>

      {/* Learning Journey */}
      <section>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-8 text-center">
          Continuous Learning
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <Card className="text-center p-6">
            <div className="font-sans font-bold text-2xl text-primary mb-2">Programming & Development</div>
            <div className="text-sm text-muted">Python, JavaScript, TypeScript, Web Development</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-sans font-bold text-2xl text-primary mb-2">Data Science & ML</div>
            <div className="text-sm text-muted">Machine Learning, Deep Learning, Statistical Analysis</div>
          </Card>
          <Card className="text-center p-6">
            <div className="font-sans font-bold text-2xl text-primary mb-2">Professional Skills</div>
            <div className="text-sm text-muted">Digital Marketing, Excel, Business Analytics</div>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-lg text-muted font-serif mb-6 max-w-2xl mx-auto">
            500+ learning hours across 11 courses with 5 verified certificates. Committed to staying current with industry trends and emerging technologies.
          </p>
          <Button href="/learning">View Learning Journey</Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-card border border-border rounded-lg p-10">
        <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
          Let&apos;s Collaborate
        </h2>
        <p className="text-xl text-muted font-serif mb-8 max-w-2xl mx-auto">
          I am actively seeking opportunities to contribute to innovative research and development projects. If you&apos;re looking for a dedicated and skilled professional, let&apos;s connect.
        </p>
        <Button href="/contact">Get in Touch</Button>
      </section>
    </div>
  );
}