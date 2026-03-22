import React from 'react';

const testimonials = [
  {
    quote: "Codecademy changed my life. I went from a retail job to a Software Engineer in less than a year.",
    author: "Sarah Jenkins",
    role: "Software Engineer at TechFlow",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    quote: "The interactive environment is what makes it. You don't just watch videos, you actually DO.",
    author: "Marcus Thorne",
    role: "Data Analyst",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    quote: "The projects helped me build a portfolio that got me hired. Best investment I've made in my career.",
    author: "Elena Rodriguez",
    role: "Frontend Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-cc-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Loved by millions of learners</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 border border-cc-gray-200">
              <p className="text-lg italic mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border border-cc-gray-200" />
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;