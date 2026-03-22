import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CourseGrid />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;