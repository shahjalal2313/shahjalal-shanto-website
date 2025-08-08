import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Shahjalal Shanto',
  description:
    'Graduate student with expertise in computational chemistry and web development. Pursuing advanced research opportunities in molecular analysis and scientific computing.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Graduate student passionate about computational chemistry and molecular analysis, 
          with proven expertise in web development and scientific computing. Currently preparing 
          for advanced research opportunities in MS/PhD programs.
        </p>
      </div>

      {/* Content Sections */}
      <div className="grid gap-12">
        {/* Academic Background */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Academic Background & Research Interests
          </h2>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300">
            <p>
              I am Shah Md. Jalal Uddin, a dedicated graduate student with a strong foundation in 
              computational chemistry and molecular analysis. My academic journey has been driven 
              by a deep fascination with the intersection of chemistry, mathematics, and computational 
              science, particularly in how these fields can be leveraged to solve complex molecular 
              problems and advance scientific understanding.
            </p>
            <p>
              My research interests center on computational chemistry, molecular modeling, and 
              scientific data analysis. I have developed expertise in SMILES molecular notation, 
              chemical data processing, and the development of analytical tools for molecular 
              research. Through projects like my Molecular Analyzer application, I have demonstrated 
              the ability to bridge theoretical chemistry concepts with practical computational 
              implementations.
            </p>
            <p>
              I am actively seeking opportunities to pursue advanced graduate studies (MS/PhD) 
              where I can contribute to cutting-edge research in computational chemistry, 
              molecular dynamics, or related interdisciplinary fields that combine chemistry 
              with computer science and data analysis.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Computational Chemistry & Scientific Computing
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• SMILES Molecular Notation & Analysis</li>
                <li>• Chemical Data Processing & Validation</li>
                <li>• Python Scientific Libraries (NumPy, Pandas, RDKit)</li>
                <li>• Molecular Modeling & Structure Analysis</li>
                <li>• Scientific Data Visualization (Matplotlib, Seaborn)</li>
                <li>• Research Methodology & Statistical Analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Software Development & Web Technologies
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Python Programming & Algorithm Development</li>
                <li>• Next.js & React for Scientific Applications</li>
                <li>• TypeScript & Modern JavaScript</li>
                <li>• Streamlit for Interactive Data Applications</li>
                <li>• Git Version Control & Collaborative Development</li>
                <li>• Database Design & Scientific Data Management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Philosophy */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Research Philosophy & Academic Values
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Scientific Rigor
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to maintaining the highest standards of scientific 
                methodology, data validation, and reproducible research practices 
                in all computational and experimental work.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Interdisciplinary Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Passionate about bridging chemistry, computer science, and mathematics 
                to create innovative solutions for complex molecular analysis and 
                scientific computing challenges.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Dedicated to staying current with emerging technologies and 
                methodologies in computational chemistry, always seeking to 
                expand knowledge and contribute to scientific advancement.
              </p>
            </div>
          </div>
        </section>

        {/* Academic Achievements & Future Goals */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Academic Achievements & Future Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Current Projects & Accomplishments
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Developed comprehensive Molecular Analyzer application using Python and Streamlit</li>
                <li>• Implemented SMILES molecular notation validation and analysis algorithms</li>
                <li>• Created scientific data visualization tools for molecular property analysis</li>
                <li>• Built professional academic website using modern web technologies</li>
                <li>• Demonstrated proficiency in scientific computing and data analysis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Graduate School Objectives
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Pursue MS/PhD in Computational Chemistry or related interdisciplinary field</li>
                <li>• Contribute to research in molecular dynamics and quantum chemistry</li>
                <li>• Develop novel computational methods for chemical analysis</li>
                <li>• Publish research in peer-reviewed scientific journals</li>
                <li>• Collaborate with research teams on cutting-edge projects</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
