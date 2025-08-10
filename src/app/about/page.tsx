import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About - Shah Md. Jalal Uddin | Global Chemistry Professional',
  description:
    'Chemistry professional with MS Physical Chemistry, 3+ years industry leadership at BSRM Steel, proven international collaboration across 11+ clients, and computational chemistry innovation. Seeking advanced research opportunities.',
  keywords: [
    'computational chemistry',
    'international collaboration',
    'steel quality assurance',
    'cross-cultural communication',
    'molecular analysis',
    'graduate research',
    'PhD applications',
    'global partnerships'
  ],
  openGraph: {
    title: 'Shah Md. Jalal Uddin - Global Chemistry Professional',
    description: 'Bridging Chemistry, Industry, Innovation & Global Collaboration for Advanced Research',
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Enhanced Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Professional Photo */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-80 h-96 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/professional-graduation.jpg"
                alt="Shah Md. Jalal Uddin - Professional graduation photo"
                width={320}
                height={384}
                className="professional-hero-image w-full h-full object-contain"
                priority
                sizes="(max-width: 768px) 300px, 320px"
              />
            </div>
            {/* Global availability indicator */}
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              🌍 Open to International Opportunities
            </div>
          </div>
        </div>
        
        {/* Enhanced Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Shah Md. Jalal Uddin
            </h1>
            <p className="text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
              Bridging Chemistry, Industry, Innovation & Digital Communication
            </p>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            Chemistry professional uniquely positioned at the intersection of academic theory, 
            industrial application, computational innovation, and digital marketing expertise. 
            With MS Physical Chemistry, 3+ years quality assurance leadership at BSRM Steel, 
            and successful social media marketing experience with 11+ international clients, I bring 
            cross-cultural communication skills alongside technical excellence to advanced research.
          </p>
          
          {/* Credibility Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-3 interactive-stat bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="font-bold text-lg text-blue-600">MS</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Physical Chemistry</div>
            </div>
            <div className="text-center p-3 interactive-stat bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="font-bold text-lg text-green-600">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years Industry</div>
            </div>
            <div className="text-center p-3 interactive-stat bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="font-bold text-lg text-purple-600">11+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Marketing Clients</div>
            </div>
            <div className="text-center p-3 interactive-stat bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="font-bold text-lg text-orange-600">5⭐</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">20+ Projects</div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn-primary">
              Explore Research Interests
            </button>
            <button className="btn-secondary">
              Connect for Collaboration
            </button>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid gap-12">
        {/* Professional Journey */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Professional Journey
          </h2>
          
          {/* Academic Foundation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Academic Foundation & Research Excellence
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                My journey began with a deep fascination for physical chemistry at the University of Chittagong, 
                where I completed my MS in Physical Chemistry. I conducted research on &quot;Determination of pKa value 
                of Weak Acid (Acetic acid) Using Conductometric measurement at different Temperature&quot; under the 
                supervision of Associate Professor Mohammad Ashraf Uddin.
              </p>
              <p>
                This rigorous academic experience provided essential research methodologies, analytical thinking skills, 
                and a deep appreciation for scientific rigor and ethical research practices.
              </p>
            </div>
          </div>
          
          {/* Industry Leadership */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Industry Leadership & Advanced Practical Application
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                Since July 2022, I have served as Assistant Executive at BSRM Steel, where my role has evolved into 
                comprehensive leadership over <strong>3+ years</strong>. I lead quality assurance programs through 
                advanced chemical and spectrometric analysis, manage complex shift operations, and successfully 
                implement international standards (ASTM, ISO) ensuring global compliance.
              </p>
              <p>
                This extensive industrial experience has provided deep insight into how theoretical chemistry principles 
                scale from laboratory to large-scale industrial applications, while developing my leadership competencies 
                and analytical problem-solving abilities.
              </p>
            </div>
          </div>
          
          {/* International Collaboration */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Digital Communication & International Client Management
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                Complementing my technical expertise, I developed valuable digital communication and project management skills 
                through social media marketing and strategy work with <strong>11+ international clients</strong> across diverse 
                cultural and business backgrounds. Successfully delivered <strong>20+ marketing projects</strong> with consistent 
                <strong>5-star client satisfaction</strong>, demonstrating adaptability and professional excellence in global digital environments.
              </p>
              <p>
                This experience cultivated essential modern academic skills: cross-cultural communication, digital content strategy, 
                project management, and international collaboration—all increasingly valuable for research dissemination, 
                grant writing, academic networking, and engaging with global scientific communities.
              </p>
            </div>
          </div>
          
          {/* Technical Innovation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              AI-Enhanced Problem Solving & Technical Innovation
            </h3>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                Driven by innovation, I developed two significant technical projects that showcase modern research capabilities. 
                The <strong>Molecular Analyzer</strong> application—a comprehensive Python and Streamlit tool for SMILES notation 
                processing and molecular visualization—demonstrates my ability to integrate chemistry with computational technology.
              </p>
              <p>
                Equally significant is this <strong>professional academic website</strong>, which I designed and developed despite 
                having no formal web development background. By strategically leveraging AI tools (Claude, GitHub Copilot) combined 
                with systematic problem-solving approaches, I created a modern Next.js application with TypeScript, responsive design, 
                and professional presentation standards. This project exemplifies the <strong>AI-enhanced research methodology</strong> 
                increasingly essential in modern academic environments.
              </p>
            </div>
          </div>
        </section>

        {/* Enhanced Skills Matrix */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Competencies & Evidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Research & Analytical Excellence */}
            <div className="skill-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🔬</span>
                Research & Analytical Excellence
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span><strong>3+ years</strong> industrial analytical experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Advanced chemical & spectrometric analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Statistical analysis & data interpretation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>International standards (ASTM, ISO) implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">✓</span>
                  <span>Graduate-level research methodology</span>
                </li>
              </ul>
            </div>
            
            {/* Technical & Computational Skills */}
            <div className="skill-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🤖</span>
                AI-Enhanced Technical Skills
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>AI-assisted development</strong> (Claude, GitHub Copilot)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Python (NumPy, Pandas, RDKit, Streamlit)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>Next.js, TypeScript & React (AI-enhanced learning)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>SMILES notation & molecular modeling</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">✓</span>
                  <span><strong>Two major projects:</strong> Molecular Analyzer & This Website</span>
                </li>
              </ul>
            </div>
            
            {/* Digital Communication & Project Management */}
            <div className="skill-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">📱</span>
                Digital Communication & Marketing
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span><strong>Social media marketing</strong> strategy & execution</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span><strong>11+ international clients</strong> across diverse markets</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span><strong>20+ marketing projects</strong> (5-star client satisfaction)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Digital content strategy & campaign management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-purple-600">✓</span>
                  <span>Cross-cultural communication & project delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Philosophy & Global Readiness */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Research Philosophy & Global Readiness
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 gradient-blue rounded-xl skill-card">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Scientific Rigor
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Committed to maintaining the highest standards of scientific 
                methodology, data validation, and reproducible research practices.
              </p>
            </div>
            
            <div className="text-center p-6 gradient-green rounded-xl skill-card">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Cross-Cultural Communication
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proven ability to work effectively across cultural boundaries 
                through international marketing client relationships and digital communication.
              </p>
            </div>
            
            <div className="text-center p-6 gradient-purple rounded-xl skill-card">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Interdisciplinary Innovation
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Passionate about bridging chemistry, industry, and technology 
                to create innovative solutions for complex challenges.
              </p>
            </div>
            
            <div className="text-center p-6 gradient-orange rounded-xl skill-card">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Continuous Growth
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Dedicated to lifelong learning and staying current with emerging 
                technologies in computational chemistry and research methods.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-xl skill-card">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                AI-Enhanced Methodology
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Proficient in leveraging AI tools for research acceleration, problem-solving, 
                and technical development—essential skills for modern scientific research.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements & Future Vision */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Future Research Vision
          </h2>
          
          {/* Achievement Highlights */}
          <div className="achievement-card p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Professional Excellence Across Domains
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">MS</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Physical Chemistry<br />University of Chittagong
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Years Industry Leadership<br />BSRM Steel Quality Assurance
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">11+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  International Marketing Clients<br />Cross-Cultural Success
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Marketing Projects<br />5-Star Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Technical Projects<br />AI-Enhanced Development
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">📱</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Digital Communication<br />Cross-Cultural Skills
                </div>
              </div>
            </div>
          </div>
          
          {/* Future Research Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="skill-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🎯</span>
                Immediate Research Interests
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 text-lg">•</span>
                  <span><strong>AI-Enhanced Computational Chemistry</strong> leveraging modern ML tools</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 text-lg">•</span>
                  <span><strong>Digital Research Methodologies</strong> combining AI tools with traditional methods</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 text-lg">•</span>
                  <span><strong>Scientific Tool Development</strong> using AI-assisted programming approaches</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 text-lg">•</span>
                  <span><strong>International Research Collaborations</strong> in computational chemistry</span>
                </li>
              </ul>
            </div>
            
            <div className="skill-card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-3 text-2xl">🚀</span>
                Long-term Academic Vision
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600 text-lg">•</span>
                  <span><strong>Graduate Research Excellence</strong> in computational chemistry PhD programs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600 text-lg">•</span>
                  <span><strong>International Research Partnerships</strong> leveraging proven collaboration skills</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600 text-lg">•</span>
                  <span><strong>Innovative Tool Development</strong> for the global scientific community</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600 text-lg">•</span>
                  <span><strong>Knowledge Bridge Building</strong> between academia and industry applications</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready for Global Research Collaboration
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              My unique combination of academic excellence, industry leadership, international collaboration 
              success, and technical innovation positions me to contribute meaningfully to advanced research 
              in computational chemistry and materials science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Discuss Research Opportunities
              </button>
              <button className="btn-primary" style={{background: 'linear-gradient(135deg, #10b981, #059669)'}}>
                Download CV
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
