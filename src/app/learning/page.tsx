'use client';

import { useState, useEffect } from 'react';

// --- MOCK DATA (as provided in the original file) ---
const learningCategories = [
  {
    category: 'Programming & Software Development',
    courses: [
      { title: 'Programming for Everybody (Getting Started with Python)', provider: 'Coursera (University of Michigan)', status: 'Completed', completionDate: 'Nov 2020', description: 'A foundational course on Python programming, covering variables, conditional logic, functions, and loops.', skills: ['Python', 'Programming Logic', 'Functions'], certificateUrl: 'https://coursera.org/share/73646e350c82357bd9f783105aa382ac', courseUrl: 'https://www.coursera.org/learn/python' },
      { title: 'Python Data Structures', provider: 'Coursera (University of Michigan)', status: 'Completed', completionDate: 'Nov 2020', description: 'An exploration of Python’s core data structures, including lists, dictionaries, and tuples.', skills: ['Data Structures', 'Dictionaries', 'Tuples'], certificateUrl: 'https://coursera.org/share/17f68f6c8486854b1f63b73a5b6ff9e8', courseUrl: 'https://www.coursera.org/learn/python-data' },
      { title: '100 Days of Code: The Complete Python Pro Bootcamp', provider: 'Udemy', status: 'In Progress (58%)', completionDate: 'Ongoing', description: 'A project-based bootcamp covering a wide range of Python applications from web development to data science.', skills: ['Python', 'OOP', 'Pandas', 'Matplotlib'], certificateUrl: null, courseUrl: 'https://www.udemy.com/course/100-days-of-code/' },
    ],
  },
  {
    category: 'Data Science & Analytics',
    courses: [
      { title: 'The Data Science Course: Complete Data Science Bootcamp', provider: 'Udemy', status: 'In Progress (50%)', completionDate: 'Ongoing', description: 'A comprehensive bootcamp covering the full data science stack, from statistics to machine learning.', skills: ['Statistics', 'Probability', 'Hypothesis Testing'], certificateUrl: null, courseUrl: 'https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/' },
      { title: 'A Deep Understanding of Deep Learning', provider: 'Udemy', status: 'In Progress (31%)', completionDate: 'Ongoing', description: 'A course focusing on the mathematical and theoretical foundations of deep learning and neural networks.', skills: ['Deep Learning', 'PyTorch', 'Backpropagation'], certificateUrl: null, courseUrl: 'https://www.udemy.com/course/deeplearning_x/' },
      { title: 'Complete Machine Learning and Data Science: Zero to Mastery', provider: 'Udemy', status: 'In Progress (61%)', completionDate: 'Ongoing', description: 'A hands-on course focused on building real-world machine learning models with Scikit-learn.', skills: ['Machine Learning', 'Scikit-learn', 'Pandas'], certificateUrl: null, courseUrl: 'https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/' },
    ],
  },
];
const learningStats = { totalCourses: 11, completedCourses: 6, inProgressCourses: 4, totalHours: 253, certificatesEarned: 5 };

// --- Local, Reusable Components ---
const Button = ({ href, children, variant = 'primary' }) => {
  const baseClasses = "inline-block px-6 py-3 rounded-md font-semibold font-sans shadow-md hover:shadow-lg transition-all duration-300 text-center";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-card text-card-foreground border border-border hover:bg-background",
  };
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses} ${variants[variant]}`}>{children}</a>;
};

const Card = ({ children, className = '' }) => (
  <div className={`bg-card border border-border rounded-lg shadow-md p-6 flex flex-col h-full ${className}`}>{children}</div>
);

const Tag = ({ children }) => (
  <span className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">{children}</span>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-8">{children}</h2>
);

// --- Main Page Component ---
export default function LearningJourneyPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && setSelectedCourse(null);
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 my-16 md:my-24">
      <section className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-foreground mb-6">Learning Journey</h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted font-serif leading-relaxed">
          A commitment to continuous professional development in computational chemistry, data science, and scientific computing.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard value={learningStats.totalCourses} label="Total Courses" />
        <StatCard value={learningStats.completedCourses} label="Completed" />
        <StatCard value={learningStats.inProgressCourses} label="In Progress" />
        <StatCard value={`${learningStats.totalHours}+`} label="Learning Hours" />
        <StatCard value={learningStats.certificatesEarned} label="Certificates" />
      </section>

      {learningCategories.map((category) => (
        <section key={category.category}>
          <SectionTitle>{category.category}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.courses.map((course) => (
              <CourseCard key={course.title} course={course} onSelect={() => setSelectedCourse(course)} />
            ))}
          </div>
        </section>
      ))}

      {selectedCourse && <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
}

// --- Sub-Components for the Page ---
const StatCard = ({ value, label }) => (
  <Card className="text-center items-center justify-center p-4">
    <div className="text-3xl font-sans font-bold text-primary">{value}</div>
    <div className="text-sm text-muted font-sans mt-1">{label}</div>
  </Card>
);

const CourseCard = ({ course, onSelect }) => (
  <Card>
    <div className="flex-grow">
      <p className="text-sm font-sans text-muted mb-1">{course.provider}</p>
      <h3 className="text-lg font-sans font-semibold text-foreground mb-2">{course.title}</h3>
      <span className={`text-xs font-sans font-medium px-2 py-1 rounded-full ${course.status === 'Completed' ? 'bg-green-500/10 text-green-700' : 'bg-yellow-500/10 text-yellow-700'}`}>
        {course.status}
      </span>
      <p className="font-serif text-muted mt-4 mb-4 text-sm leading-relaxed min-h-[60px]">
        {course.description}
      </p>
      <button onClick={onSelect} className="text-sm font-sans font-semibold text-primary hover:underline mb-4">
        View Details →
      </button>
    </div>
    <div className="mt-auto pt-4 border-t border-border">
      <div className="flex flex-wrap gap-2">
        {course.skills.slice(0, 3).map(skill => <Tag key={skill}>{skill}</Tag>)}
        {course.skills.length > 3 && <Tag>+{course.skills.length - 3} more</Tag>}
      </div>
    </div>
  </Card>
);

const CourseModal = ({ course, onClose }) => (
  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
    <div className="bg-card rounded-xl shadow-2xl max-w-2xl max-h-[90vh] w-full flex flex-col animate-slide-up" onClick={(e) => e.stopPropagation()}>
      <div className="p-6 border-b border-border flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-sans font-bold text-foreground">{course.title}</h2>
          <p className="text-md font-sans text-muted">{course.provider}</p>
        </div>
        <button onClick={onClose} className="text-muted hover:text-foreground transition-colors p-2 rounded-full">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="p-6 overflow-y-auto space-y-6">
        <div>
          <h3 className="font-sans font-semibold text-foreground mb-2">Description</h3>
          <p className="font-serif text-muted leading-relaxed">{course.description}</p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-foreground mb-2">Skills Acquired</h3>
          <div className="flex flex-wrap gap-2">
            {course.skills.map(skill => <Tag key={skill}>{skill}</Tag>)}
          </div>
        </div>
      </div>
      <div className="p-6 border-t border-border mt-auto bg-background/50 rounded-b-xl flex gap-4">
        {course.courseUrl && <Button href={course.courseUrl} variant="primary">View Course</Button>}
        {course.certificateUrl && <Button href={course.certificateUrl} variant="secondary">View Certificate</Button>}
      </div>
    </div>
  </div>
);
