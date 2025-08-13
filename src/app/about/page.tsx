import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - Shah Md. Jalal Uddin | Global Chemistry Professional',
  description:
    'Chemistry professional with MS Physical Chemistry, 3+ years industry Experience at BSRM Steel, proven international collaboration across 11+ clients, and computational chemistry innovation. Seeking advanced research opportunities.',
};

// Reusable components defined locally for this page
interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const Button = ({ href, children, variant = 'primary' }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-md font-semibold font-sans shadow-md hover:shadow-lg transition-all duration-300 text-center";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-card text-card-foreground border border-border hover:bg-background",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Link>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-card border border-border rounded-lg shadow-md p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
};

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-12 text-center">
      {children}
    </h2>
  );
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 my-16 md:my-24">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 flex justify-center">
          <Card className="p-4">
            <Image
              src="/images/professional-graduation.jpg"
              alt="Shah Md. Jalal Uddin - Professional graduation photo"
              width={320}
              height={384}
              className="rounded-md w-full h-full object-cover"
              priority
              sizes="(max-width: 768px) 300px, 320px"
            />
          </Card>
        </div>
        <div className="lg:col-span-3">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-4">
            Shah Md. Jalal Uddin
          </h1>
          <p className="text-xl md:text-2xl font-sans font-semibold text-primary mb-6">
            Bridging Chemistry, Industry, and Innovation
          </p>
          <p className="font-serif text-lg text-muted leading-relaxed mb-8">
            I am a chemistry professional at the intersection of academic theory, industrial application, and computational innovation. My journey through physical chemistry, steel manufacturing, and AI-assisted development has given me a unique, multidisciplinary approach to solving complex problems.
          </p>
          <div className="flex justify-center">
            <Button href="/contact">📄 Request CV</Button>
          </div>
        </div>
      </section>

      {/* Professional Journey Section */}
      <section>
        <SectionTitle>My Professional Journey</SectionTitle>
        <div className="grid md:grid-cols-1 gap-8">
          <Card>
            <h3 className="text-2xl font-sans font-semibold text-foreground mb-2">Academic Foundation</h3>
            <p className="font-serif text-muted leading-relaxed">
              My academic journey in Chemistry at the University of Chittagong (BSc and MS) provided me with a strong foundation in research methodologies, analytical thinking, and scientific rigor. My graduate research focused on determining pKa values using conductometric measurements, honing my skills in precise data collection and interpretation.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-sans font-semibold text-foreground mb-2">Industry Leadership</h3>
            <p className="font-serif text-muted leading-relaxed">
              As an Assistant Executive at BSRM Steel, I gained over three years of experience in quality assurance, managing complex shift operations and implementing international standards like ASTM and ISO. This role taught me how to apply theoretical chemistry to large-scale industrial applications and developed my leadership and problem-solving abilities.
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-sans font-semibold text-foreground mb-2">AI-Enhanced Innovation</h3>
            <p className="font-serif text-muted leading-relaxed">
              Driven by a passion for innovation, I taught myself modern software development by strategically leveraging AI tools. I built the Molecular Analyzer, a Python-based tool for chemists, and this professional website using Next.js and TypeScript. This demonstrates my commitment to an AI-enhanced research methodology, a critical skill in modern science.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section>
        <SectionTitle>Core Competencies</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-sans font-semibold text-foreground mb-4">🔬 Research & Analysis</h3>
            <ul className="space-y-2 font-serif text-muted">
              <li>✓ 3+ years industrial analytical experience</li>
              <li>✓ Advanced chemical & spectrometric analysis</li>
              <li>✓ Statistical analysis & data interpretation</li>
              <li>✓ International standards (ASTM, ISO)</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-sans font-semibold text-foreground mb-4">🤖 AI-Enhanced Development</h3>
            <ul className="space-y-2 font-serif text-muted">
              <li>✓ AI-assisted development (Claude, Copilot)</li>
              <li>✓ Python (RDKit, Pandas, Streamlit)</li>
              <li>✓ Next.js, TypeScript & React</li>
              <li>✓ Molecular modeling & SMILES notation</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-xl font-sans font-semibold text-foreground mb-4">🌐 Digital Communication</h3>
            <ul className="space-y-2 font-serif text-muted">
              <li>✓ 11+ international clients managed</li>
              <li>✓ 20+ successful marketing projects</li>
              <li>✓ Cross-cultural communication</li>
              <li>✓ Digital content strategy</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Vision Section */}
      <section>
        <SectionTitle>Research Philosophy & Vision</SectionTitle>
        <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <p className="font-serif text-xl text-muted leading-relaxed">
              My vision is to be at the forefront of computational chemistry, developing innovative tools and methodologies that accelerate scientific discovery. I believe in a future where AI and traditional research are seamlessly integrated, and I am dedicated to building that future through interdisciplinary collaboration and continuous learning.
            </p>
        </div>
      </section>

      {/* Call to Action - Strategic Project Navigation */}
      <section className="text-center bg-card border border-border rounded-lg p-10">
        <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
          See My Work in Action
        </h2>
        <p className="text-xl text-muted font-serif mb-8 max-w-2xl mx-auto">
          Ready to explore how I apply these skills and experiences? Discover my projects that bridge chemistry, technology, and innovation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/projects">🚀 Explore My Projects</Button>
          <Button href="/contact" variant="secondary">Connect for Collaboration</Button>
        </div>
      </section>

    </div>
  );
}