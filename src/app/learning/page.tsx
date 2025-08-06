import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learning Journey - Shahjalal Shanto',
  description:
    'Professional development and continuous learning journey in computational chemistry, scientific computing, and academic research methodologies.',
};

// Learning categories and achievements
const learningCategories = [
  {
    category: 'Data Science & Analytics',
    courses: [
      {
        title: 'The Ultimate Pandas Bootcamp: Advanced Python Data Analysis',
        provider: 'Udemy',
        status: 'Completed',
        completionDate: 'September 2023',
        description: 'A deep dive into the world of data analysis with Python\'s most powerful library. This comprehensive course took me through everything from basic data structures to advanced analytical techniques, real-world data cleaning challenges, and creating meaningful visualizations that tell compelling stories.',
        skills: ['Advanced Pandas', 'Data Manipulation', 'Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Python Data Science'],
        certificateUrl: 'https://www.udemy.com/certificate/UC-5eb9b10c-9263-4287-b709-5c2255750896/',
      },
    ],
  },
];

// Learning statistics
const learningStats = {
  totalCourses: 1,
  completedCourses: 1,
  inProgressCourses: 0,
  totalHours: 25, // Typical comprehensive Pandas bootcamp duration
  certificatesEarned: 1,
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

                  {/* Certificate Link */}
                  {course.certificateUrl && (
                    <div className="pt-4 border-t border-gray-100">
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
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