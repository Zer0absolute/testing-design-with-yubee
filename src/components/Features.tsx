import React from 'react';
import { PlayCircle, Target, Users } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Learning that works</h2>
          <p className="text-xl text-gray-600">Designed for anyone who wants to learn, from beginner to advanced.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-cc-teal mx-auto mb-6 flex items-center justify-center">
              <PlayCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Interactive learning</h3>
            <p className="text-gray-600">
              You\'ll be writing real code from your very first lesson. No heavy setups, just your browser.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cc-pink mx-auto mb-6 flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Job-ready skills</h3>
            <p className="text-gray-600">
              Build portfolios that get you noticed. Our Career Paths are designed to take you from zero to hired.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cc-yellow mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4">Vibrant community</h3>
            <p className="text-gray-600">
              Never learn alone. Join millions of learners to get help, share projects, and find inspiration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;