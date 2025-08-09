'use client';

import { useState, useEffect } from 'react';

interface Course {
  title: string;
  provider: string;
  status: string;
  completionDate: string;
  description: string;
  skills: string[];
  certificateUrl: string | null;
  courseUrl: string;
}

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
        title: 'Intro to Machine Learning',
        provider: 'Kaggle Learn (Dan Becker)',
        status: 'Completed',
        completionDate: 'February 2024',
        description: 'This course provided an excellent practical introduction to machine learning fundamentals through hands-on coding exercises. What I appreciated most was the focus on building actual models rather than just theory - working with the Iowa housing dataset to predict home prices gave me concrete experience with the entire ML pipeline. Dan Becker\'s teaching approach was perfect for getting started, breaking down complex concepts like overfitting and model validation into digestible lessons. The progression from simple decision trees to random forests helped me understand how ML models can be improved iteratively. The course struck the right balance between conceptual understanding and practical implementation, giving me confidence to tackle real-world ML problems.',
        skills: ['Decision Trees', 'Random Forests', 'Model Validation', 'Cross-Validation', 'Overfitting & Underfitting', 'Pandas Data Exploration', 'Predictive Modeling', 'Feature Selection', 'Model Performance Evaluation', 'Kaggle Competitions', 'Scikit-learn Basics'],
        certificateUrl: null,
        courseUrl: 'https://www.kaggle.com/learn/intro-to-machine-learning',
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
  {
    category: 'Others',
    courses: [
      {
        title: 'Excel Skills for Business: Essentials',
        provider: 'Coursera (Macquarie University)',
        status: 'Completed',
        completionDate: 'November 2020',
        description: 'This foundational course gave me comprehensive training in Microsoft Excel\'s core business applications. What I found most valuable was the structured approach to learning essential Excel skills through real-world business scenarios. The course excellently covered Excel user interface navigation, formula construction, and professional spreadsheet formatting. I particularly appreciated the hands-on approach with downloadable workbooks and practical challenge exercises that simulated actual business problems. The systematic progression from basic data entry to advanced calculations built my confidence in using Excel as a powerful business tool. The professional formatting techniques I learned have been invaluable for creating clear, presentable data visualizations and reports. This course established my foundation in Excel, making me comfortable with data manipulation, automated calculations, and creating meaningful business insights from raw data.',
        skills: ['Excel Navigation & Interface', 'Formula Writing & Functions', 'Cell References (Relative & Absolute)', 'Professional Spreadsheet Formatting', 'Data Entry & Manipulation', 'Charts & Data Visualization', 'Business Calculations', 'Excel Styles & Themes', 'Data Analysis Fundamentals', 'Spreadsheet Design', 'Number Formatting', 'Excel Best Practices'],
        certificateUrl: 'https://coursera.org/share/1adf4483166f86a45160ce8565cf13ca',
        courseUrl: 'https://www.coursera.org/learn/excel-essentials',
      },
      {
        title: 'Meta Social Media Marketing',
        provider: 'Coursera (Meta - Facebook)',
        status: 'Completed',
        completionDate: 'January 2021',
        description: 'This comprehensive Meta Social Media Marketing course provided me with essential skills for digital marketing in the modern social media landscape. What I found most valuable was learning directly from Meta\'s experts about the strategic approach to building engaged communities across Facebook, Instagram, and other social platforms. The course gave me hands-on experience with Meta Ads Manager, teaching me how to structure effective campaigns by selecting appropriate ad objectives, target audiences, budgets, and placements. I particularly appreciated the practical approach to content creation and brand development using the EPIC brand framework. The course equipped me with the ability to create compelling social media posts, manage content calendars, and analyze performance data for continuous optimization. This training has been invaluable for understanding how to establish a professional social media presence, engage audiences effectively, and measure campaign success through key performance indicators.',
        skills: ['Social Media Strategy', 'Facebook Ads Manager', 'Instagram Marketing', 'Content Creation & Management', 'Social Media Analytics', 'Brand Development (EPIC Framework)', 'Target Audience Analysis', 'Campaign Optimization', 'Social Media Calendar Management', 'Content Moderation', 'KPI Measurement', 'Digital Marketing Strategy', 'Community Engagement', 'Social Media Advertising'],
        certificateUrl: 'https://coursera.org/share/2676e5b0169cf9a01f4d10b3015e9857',
        courseUrl: 'https://www.coursera.org/professional-certificates/facebook-social-media-marketing',
      },
    ],
  },
];

// Learning statistics
const learningStats = {
  totalCourses: 11,
  completedCourses: 6, // Meta Social Media + Excel + Pandas + Programming for Everybody + Python Data Structures + Kaggle Intro to ML (5 with certificates)
  inProgressCourses: 4, // 100 Days of Code (58%) + ML Zero to Mastery (61%) + Data Science Bootcamp (50%) + Deep Learning (31%)
  totalHours: 253, // Meta Social Media (~30) + Excel (~25) + Kaggle Intro ML (~3) + Python Data Structures (~20) + Programming for Everybody (~20) + Pandas (~25) + Statistics (~25) + 100 Days (~40) + ML Course (~30) + Data Science Bootcamp (~15) + Deep Learning (~20 hours so far)
  certificatesEarned: 5, // Meta Social Media + Excel + Pandas + Programming for Everybody + Python Data Structures certificates (Kaggle course completed but no certificate mentioned)
};

export default function LearningJourneyPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Learning Journey - Shahjalal Shanto';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional development and continuous learning journey in computational chemistry, scientific computing, and academic research methodologies.');
    }
  }, []);

  const openCourseModal = (course: Course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCourseModal = () => {
    setSelectedCourse(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeCourseModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen]);

  const truncateText = (text: string, limit: number = 150) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Learning Journey</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {category.category}
            </h2>
            {/* Mobile: Enhanced Horizontal Carousel, Desktop: Vertical stack */}
            <div className="relative">
              <div 
                id={`category-${categoryIndex}`}
                className="flex overflow-x-auto gap-4 pb-4 md:flex-col md:space-y-6 md:overflow-x-visible md:gap-0 md:pb-0 scroll-smooth snap-x snap-mandatory"
              >
                {category.courses.map((course, courseIndex) => {
                  return (
                    <div
                      key={courseIndex}
                      className="bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl dark:shadow-lg dark:hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[85vw] max-w-sm md:w-full md:max-w-none snap-center flex flex-col"
                      style={{ minHeight: '60vh', maxHeight: '65vh' }}
                    >
                      {/* Header Section */}
                      <div className="flex-shrink-0 mb-3">
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 leading-tight">
                          {course.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-2">{course.provider}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              course.status === 'Completed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                : course.status.includes('In Progress')
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            }`}
                          >
                            {course.status}
                          </span>
                          <span className="text-gray-500 text-xs">{course.completionDate}</span>
                        </div>
                      </div>

                      {/* Description Section */}
                      <div className="flex-grow mb-3 overflow-hidden flex flex-col">
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 flex-grow">
                          {truncateText(course.description, 120)}
                        </p>
                        <button
                          onClick={() => openCourseModal(course)}
                          className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mt-2 hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex-shrink-0"
                        >
                          Read Full Description →
                        </button>
                      </div>

                      {/* Skills Section */}
                      <div className="flex-shrink-0 mb-4">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-1 max-h-16 overflow-hidden">
                          {course.skills.slice(0, 6).map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-[10px] sm:text-xs leading-tight"
                            >
                              {skill}
                            </span>
                          ))}
                          {course.skills.length > 6 && (
                            <button
                              onClick={() => openCourseModal(course)}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 text-[10px] sm:text-xs font-medium"
                            >
                              +{course.skills.length - 6}
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Course and Certificate Links - Always visible */}
                      <div className="mt-auto pt-3 border-t border-gray-300 dark:border-gray-600 flex-shrink-0">
                        <div className="flex gap-2">
                          {/* View Course Button */}
                          {course.courseUrl && (
                            <a
                              href={course.courseUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-2 py-2 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-[10px] sm:text-xs font-medium"
                            >
                              View Course
                            </a>
                          )}
                          
                          {/* View Certificate Button */}
                          {course.certificateUrl && (
                            <a
                              href={course.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-2 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-[10px] sm:text-xs font-medium"
                            >
                              View Certificate
                            </a>
                          )}
                          
                          {/* Placeholder if no links */}
                          {!course.courseUrl && !course.certificateUrl && (
                            <div className="flex-1 text-center px-2 py-2 bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg text-[10px] sm:text-xs">
                              In Progress
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Mobile Navigation Arrows */}
              <div className="flex justify-center mt-4 gap-2 md:hidden">
                <button
                  onClick={() => {
                    const container = document.getElementById(`category-${categoryIndex}`);
                    if (container) {
                      container.scrollBy({ left: -320, behavior: 'smooth' });
                    }
                  }}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous course"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const container = document.getElementById(`category-${categoryIndex}`);
                    if (container) {
                      container.scrollBy({ left: 320, behavior: 'smooth' });
                    }
                  }}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next course"
                >
                  <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Future Learning Goals */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          Future Learning Goals
        </h2>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Short-term Goals (Next 6 months)
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Complete Quantum Chemistry Computational Methods certification</li>
                <li>• Advanced Machine Learning for Molecular Property Prediction</li>
                <li>• Scientific Writing and Publication Methods course</li>
                <li>• Molecular Dynamics Simulation specialized training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Long-term Goals (1-2 years)
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
      <div className="text-center mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Committed to Lifelong Learning
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          My learning journey reflects a commitment to staying current with cutting-edge research 
          methods and technologies in computational chemistry and scientific computing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            View Applied Projects
          </a>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            Discuss Learning Opportunities
          </a>
        </div>
      </div>

      {/* Course Details Modal */}
      {isModalOpen && selectedCourse && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeCourseModal}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedCourse.title}
                </h2>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                  {selectedCourse.provider}
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedCourse.status === 'Completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : selectedCourse.status.includes('In Progress')
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}
                  >
                    {selectedCourse.status}
                  </span>
                  <span className="text-gray-500 text-sm">{selectedCourse.completionDate}</span>
                </div>
              </div>
              <button
                onClick={closeCourseModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Course Description</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedCourse.description}
                </p>
              </div>

              {/* All Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Skills Acquired ({selectedCourse.skills.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {selectedCourse.courseUrl && (
                  <a
                    href={selectedCourse.courseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium"
                  >
                    View Course
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                
                {selectedCourse.certificateUrl && (
                  <a
                    href={selectedCourse.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium"
                  >
                    View Certificate
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}