import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Journey - Shahjalal Shanto',
  description:
    'Professional development and continuous learning journey in computational chemistry, scientific computing, and academic research methodologies.',
};

// Learning categories and achievements
const learningCategories = [
  {
    category: 'Programming & Software Development',
    courses: [
      {
        title: 'Programming for Everybody (Getting Started with Python)',
        provider: 'Coursera (University of Michigan - Dr. Charles Severance)',
        status: 'Completed',
        completionDate: 'November 2020',
        description: 'This course was my introduction to the world of programming and laid the foundation for everything I\'ve learned since. Dr. Chuck\'s clear and encouraging teaching style made programming concepts accessible and enjoyable. I learned how to construct programs from simple instructions, understanding how computers use memory to store and calculate information. The course beautifully covered the four fundamental programming patterns: sequential execution, conditional logic, functions, and loops. What I appreciated most was how it avoided complex mathematics while still teaching solid programming fundamentals. This course gave me the confidence to pursue more advanced programming topics and sparked my passion for coding.',
        skills: ['Python Fundamentals', 'Basic Programming Logic', 'Variables & Data Types', 'Conditional Statements', 'Loops & Iteration', 'Functions', 'Sequential Programming', 'Computer Memory Concepts', 'Problem-Solving with Code', 'Basic Input/Output Operations'],
        certificateUrl: 'https://coursera.org/share/73646e350c82357bd9f783105aa382ac',
        courseUrl: 'https://www.coursera.org/learn/python',
      },
      {
        title: 'Python Data Structures',
        provider: 'Coursera (University of Michigan - Dr. Charles Severance)',
        status: 'Completed',
        completionDate: 'November 2020',
        description: 'Building on the solid foundation from the first Python course, this course took me deeper into Python\'s powerful built-in data structures. What I found most valuable was learning how to move beyond simple procedural programming to more sophisticated data manipulation and analysis. Dr. Chuck\'s teaching continued to be exceptional, making complex concepts like dictionaries and tuples feel intuitive and practical. The course perfectly bridged the gap between basic programming and real-world data handling - showing me how lists, dictionaries, and tuples work together to solve multi-step problems. The file handling sections were particularly useful, teaching me how to read and write data effectively. This course significantly expanded my ability to work with structured data and laid the groundwork for more advanced data science work.',
        skills: ['Python Lists', 'Python Dictionaries', 'Python Tuples', 'File Input/Output', 'String Manipulation', 'Data Structure Selection', 'Key-Value Pair Programming', 'Multi-step Data Processing', 'Data Sorting & Filtering', 'Complex Data Analysis', 'Structured Data Handling', 'Python Built-in Functions'],
        certificateUrl: 'https://coursera.org/share/17f68f6c8486854b1f63b73a5b6ff9e8',
        courseUrl: 'https://www.coursera.org/learn/python-data',
      },
      {
        title: '100 Days of Code: The Complete Python Pro Bootcamp',
        provider: 'Udemy (Dr. Angela Yu)',
        status: 'In Progress (58%)',
        completionDate: 'Started December 2022',
        description: 'This has been one of the best courses I\'ve ever taken - it significantly improved my Python skills through its project-based approach. What makes this course exceptional is learning by building 100 real projects, from simple scripts to complex applications. I\'ve completed days 1-44 covering Python fundamentals and intermediate concepts, plus days 70-80 focusing on data analysis and machine learning. The hands-on methodology has been invaluable for understanding how Python applies to real-world programming and data science challenges.',
        skills: ['Python Programming', 'Object-Oriented Programming', 'Data Structures & Algorithms', 'GUI Programming with Tkinter', 'Game Development', 'Automation Scripts', 'File Handling', 'Error Handling', 'Testing & Debugging', 'Pandas Data Analysis', 'Matplotlib Visualization', 'Seaborn Statistical Plots', 'Data Exploration', 'Machine Learning Concepts'],
        certificateUrl: null,
        courseUrl: 'https://www.udemy.com/course/100-days-of-code/',
      },
    ],
  },
  {
    category: 'Data Science & Analytics',
    courses: [
      {
        title: 'The Data Science Course: Complete Data Science Bootcamp',
        provider: 'Udemy (365 Careers)',
        status: 'In Progress (50%)',
        completionDate: 'Started September 2023',
        description: 'A comprehensive bootcamp that has significantly strengthened my statistical foundation for data science. What I appreciate most about this course is its systematic approach to building mathematical and statistical literacy from the ground up. I\'ve completed the foundational sections covering probability theory, descriptive and inferential statistics, and hypothesis testing. The course excellently bridges theoretical concepts with practical applications, helping me understand how statistical principles form the backbone of data science decision-making. The clear explanations and step-by-step approach have made complex statistical concepts much more accessible.',
        skills: ['Probability Theory', 'Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'Statistical Distributions', 'Central Tendency & Variability', 'Statistical Significance', 'Confidence Intervals', 'Statistical Sampling', 'Data Types & Scales', 'Statistical Measures', 'Python for Statistics'],
        certificateUrl: null,
        courseUrl: 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/',
      },
      {
        title: 'The Power of Statistics',
        provider: 'Coursera (Google Advanced Data Analytics Certificate)',
        status: 'Audited',
        completionDate: 'February 2024',
        description: 'Comprehensive exploration of statistical concepts essential for data analysis. This course strengthened my foundation in probability distributions, hypothesis testing, and statistical inference while providing hands-on experience with Python for statistical analysis. The practical approach helped me understand how statistics drive data-driven decision making in real-world scenarios.',
        skills: ['Statistical Analysis', 'Hypothesis Testing', 'Probability Distributions', 'Statistical Inference', 'Python Statistics', 'Descriptive Statistics', 'Sampling Methods', 'Confidence Intervals'],
        certificateUrl: null,
        courseUrl: 'https://www.coursera.org/learn/the-power-of-statistics',
      },
      {
        title: 'A Deep Understanding of Deep Learning (with Python intro)',
        provider: 'Udemy (Mike X Cohen)',
        status: 'In Progress (31%)',
        completionDate: 'Started April 2023',
        description: 'This course has been exceptional in providing a truly deep, scientific understanding of how and why deep learning works, rather than just surface-level implementation. What I value most is Mike Cohen\'s experimental approach that emphasizes the mathematical foundations and theoretical principles behind neural networks. I\'ve covered the core mathematical concepts including gradient descent, backpropagation mechanics, and the calculus underlying neural network optimization. The course excels at building intuition through visualizations and hands-on PyTorch implementations, helping me understand not just what to do, but why these techniques work and when to apply different architectures and hyperparameters.',
        skills: ['Deep Learning Theory', 'Neural Network Mathematics', 'PyTorch Framework', 'Gradient Descent Optimization', 'Backpropagation Algorithm', 'Loss Functions', 'Activation Functions', 'Feedforward Networks', 'Neural Network Architecture', 'Mathematical Foundations of DL', 'Scientific Approach to DL', 'Hyperparameter Understanding'],
        certificateUrl: null,
        courseUrl: 'https://www.udemy.com/course/deeplearning_x/',
      },
      {
        title: 'Complete Machine Learning and Data Science: Zero to Mastery',
        provider: 'Udemy (Daniel Bourke - Zero to Mastery)',
        status: 'In Progress (61%)',
        completionDate: 'Started July 2023',
        description: 'An incredibly comprehensive machine learning course that has transformed my understanding of data science from the ground up. What sets this course apart is its practical, hands-on approach using real-world datasets and industry-standard tools. I\'ve completed the foundational sections covering essential ML libraries, learned the systematic 6-step framework for approaching ML problems, and successfully built two milestone projects: a heart disease classifier and a bulldozer price predictor. The course brilliantly balances theory with practical application, making complex ML concepts accessible and immediately applicable.',
        skills: ['Machine Learning Fundamentals', 'NumPy for Data Science', 'Pandas for Data Analysis', 'Matplotlib Data Visualization', 'Scikit-learn ML Models', 'Exploratory Data Analysis (EDA)', 'Feature Engineering', 'Classification Algorithms', 'Regression Algorithms', 'Model Evaluation', 'Cross-Validation', 'Supervised Learning', 'Data Preprocessing', 'ML Project Workflow'],
        certificateUrl: null,
        courseUrl: 'https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/',
      },
      {
        title: 'The Ultimate Pandas Bootcamp: Advanced Python Data Analysis',
        provider: 'Udemy',
        status: 'Completed',
        completionDate: 'September 2023',
        description: 'A deep dive into the world of data analysis with Python\'s most powerful library. This comprehensive course took me through everything from basic data structures to advanced analytical techniques, real-world data cleaning challenges, and creating meaningful visualizations that tell compelling stories.',
        skills: ['Advanced Pandas', 'Data Manipulation', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Python Data Science'],
        certificateUrl: 'https://www.udemy.com/certificate/UC-5eb9b10c-9263-4287-b709-5c2255750896/',
        courseUrl: 'https://www.udemy.com/course/the-ultimate-pandas-bootcamp-advanced-python-data-analysis/',
      },
    ],
  },
];

// Learning statistics
const learningStats = {
  totalCourses: 8,
  completedCourses: 3, // Pandas + Programming for Everybody + Python Data Structures (all with certificates)
  inProgressCourses: 4, // 100 Days of Code (58%) + ML Zero to Mastery (61%) + Data Science Bootcamp (50%) + Deep Learning (31%)
  totalHours: 195, // Python Data Structures (~20) + Programming for Everybody (~20) + Pandas (~25) + Statistics (~25) + 100 Days (~40) + ML Course (~30) + Data Science Bootcamp (~15) + Deep Learning (~20 hours so far)
  certificatesEarned: 3, // Pandas + Programming for Everybody + Python Data Structures certificates
};

export default function LearningJourneyPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning Journey</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Continuous professional development and skill enhancement in computational chemistry, 
          scientific computing, and research methodologies to support academic and research goals.
        </p>
      </div>

      {/* Learning Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600 mb-2">{learningStats.totalCourses}</div>
          <div className="text-sm text-gray-600">Total Courses</div>
        </div>
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600 mb-2">{learningStats.completedCourses}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </div>
        <div className="text-center p-6 bg-yellow-50 rounded-lg">
          <div className="text-3xl font-bold text-yellow-600 mb-2">{learningStats.inProgressCourses}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </div>
        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600 mb-2">{learningStats.totalHours}+</div>
          <div className="text-sm text-gray-600">Learning Hours</div>
        </div>
        <div className="text-center p-6 bg-indigo-50 rounded-lg">
          <div className="text-3xl font-bold text-indigo-600 mb-2">{learningStats.certificatesEarned}</div>
          <div className="text-sm text-gray-600">Certificates</div>
        </div>
      </div>

      {/* Learning Categories */}
      <div className="space-y-12">
        {learningCategories.map((category, categoryIndex) => (
          <section key={categoryIndex}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.courses.map((course, courseIndex) => (
                <div
                  key={courseIndex}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">{course.provider}</p>
                      <p className="text-gray-600 mb-4">{course.description}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : course.status.includes('In Progress')
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {course.status}
                      </span>
                      <span className="text-gray-500 text-sm">{course.completionDate}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Skills Acquired:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course and Certificate Links */}
                  {(course.courseUrl || course.certificateUrl) && (
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-3">
                        {/* View Course Button */}
                        {course.courseUrl && (
                          <a
                            href={course.courseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-sm"
                          >
                            View Course
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
                        
                        {/* View Certificate Button */}
                        {course.certificateUrl && (
                          <a
                            href={course.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                          >
                            View Certificate
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
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Future Learning Goals */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Future Learning Goals
        </h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Short-term Goals (Next 6 months)
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Complete Quantum Chemistry Computational Methods certification</li>
                <li>• Advanced Machine Learning for Molecular Property Prediction</li>
                <li>• Scientific Writing and Publication Methods course</li>
                <li>• Molecular Dynamics Simulation specialized training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Long-term Goals (1-2 years)
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advanced Graduate-level Quantum Chemistry courses</li>
                <li>• Research Methods and Academic Writing specialization</li>
                <li>• High-Performance Computing for Scientific Applications</li>
                <li>• Grant Writing and Research Proposal Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-16 p-8 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Committed to Lifelong Learning
        </h3>
        <p className="text-gray-600 mb-6">
          My learning journey reflects a commitment to staying current with cutting-edge research 
          methods and technologies in computational chemistry and scientific computing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Applied Projects
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Discuss Learning Opportunities
          </a>
        </div>
      </div>
    </div>
  );
}