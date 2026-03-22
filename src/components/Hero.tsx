import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6">
              Join the world's <br />
              <span className="text-cc-blue">largest learning</span> <br />
              community.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Start learning to code for free today. Our interactive platform and AI-powered learning system will help you build your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-secondary text-lg px-8 py-4">
                Start learning for free
              </button>
              <button className="btn-primary text-lg px-8 py-4 bg-cc-navy">
                Help me choose
              </button>
            </div>
            <p className="mt-6 text-sm font-medium text-gray-500">
              Not sure where to start? <a href="#" className="text-cc-blue underline underline-offset-4">Take our quiz</a>
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-cc-navy p-8 rounded-lg shadow-2xl relative z-10"
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm sm:text-base space-y-2">
                <div className="text-cc-teal"># Learn Python with AI</div>
                <div className="text-white"><span className="text-cc-pink">def</span> <span className="text-cc-teal">greet_student</span>(name):</div>
                <div className="text-white pl-4">message = <span className="text-cc-yellow">f"Welcome to Codecademy, {name}!"</span></div>
                <div className="text-white pl-4"><span className="text-cc-pink">return</span> message</div>
                <div className="text-white"></div>
                <div className="text-white">print(greet_student(<span className="text-cc-yellow">"Future Coder"</span>))</div>
                <div className="text-cc-gray-200 mt-4">{'>'} Welcome to Codecademy, Future Coder!</div>
              </div>
            </motion.div>
            
            {/* Decorative boxes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cc-yellow -z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-cc-blue -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;