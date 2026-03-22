import React from 'react';
import { Code2, Database, Layout, BrainCircuit, Terminal, Globe } from 'lucide-react';

const courses = [
  {
    title: 'Python',
    description: 'Learn one of today\'s most popular languages.',
    icon: <Terminal className="w-6 h-6" />,
    color: 'bg-cc-yellow',
    tag: 'Free Course'
  },
  {
    title: 'Web Development',
    description: 'Build your first website with HTML, CSS, and JS.',
    icon: <Layout className="w-6 h-6" />,
    color: 'bg-cc-blue',
    tag: 'Career Path',
    dark: true
  },
  {
    title: 'AI & Data Science',
    description: 'The fundamentals of machine learning.',
    icon: <BrainCircuit className="w-6 h-6" />,
    color: 'bg-cc-teal',
    tag: 'Skill Path'
  },
  {
    title: 'Java',
    description: 'Build enterprise-level applications.',
    icon: <Code2 className="w-6 h-6" />,
    color: 'bg-cc-pink',
    tag: 'Free Course'
  },
  {
    title: 'SQL',
    description: 'Master the language of databases.',
    icon: <Database className="w-6 h-6" />,
    color: 'bg-cc-gray-800',
    tag: 'Free Course',
    dark: true
  },
  {
    title: 'Cybersecurity',
    description: 'Protect systems and networks from threats.',
    icon: <Globe className="w-6 h-6" />,
    color: 'bg-white',
    tag: 'Career Path'
  }
];

const CourseGrid: React.FC = () => {
  return (
    <section className="py-20 bg-cc-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Explore our catalog</h2>
            <p className="text-gray-600">Start with the basics or jump into advanced topics.</p>
          </div>
          <button className="hidden sm:block text-cc-blue font-bold hover:underline">View full catalog →</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className={`card-border p-6 cursor-pointer group hover:-translate-y-1 transition-transform ${
                course.dark ? 'bg-cc-navy text-white' : 'bg-white text-cc-navy'
              }`}
            >
              <div className={`w-12 h-12 ${course.color} flex items-center justify-center mb-6 border-2 border-cc-navy ${
                course.dark ? 'border-white' : 'border-cc-navy'
              }`}>
                {course.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider mb-2 block">{course.tag}</span>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-cc-blue transition-colors">{course.title}</h3>
              <p className={course.dark ? 'text-gray-400' : 'text-gray-600'}>{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;