import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-cc-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-8">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-cc-navy mr-2 flex items-center justify-center text-white font-black italic text-xl">C</div>
              <span className="font-bold text-xl tracking-tight hidden sm:block">codecademy</span>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <button className="flex items-center text-sm font-semibold hover:text-cc-blue">
                Catalog <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <button className="flex items-center text-sm font-semibold hover:text-cc-blue">
                Resources <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <button className="flex items-center text-sm font-semibold hover:text-cc-blue">
                Community <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <a href="#" className="text-sm font-semibold hover:text-cc-blue">Pricing</a>
              <a href="#" className="text-sm font-semibold hover:text-cc-blue">Business</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search our catalog"
                className="pl-10 pr-4 py-1.5 bg-cc-gray-100 rounded text-sm focus:outline-none focus:ring-2 focus:ring-cc-blue w-48 lg:w-64"
              />
            </div>
            <button className="text-sm font-bold hover:text-cc-blue">Log in</button>
            <button className="bg-cc-navy text-white px-4 py-2 text-sm font-bold rounded hover:bg-opacity-90">Join for Free</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-cc-gray-200 p-4 space-y-4">
          <a href="#" className="block font-bold">Catalog</a>
          <a href="#" className="block font-bold">Resources</a>
          <a href="#" className="block font-bold">Pricing</a>
          <div className="pt-4 border-t border-cc-gray-100">
            <button className="w-full mb-2 bg-cc-gray-100 py-2 font-bold rounded">Log in</button>
            <button className="w-full bg-cc-navy text-white py-2 font-bold rounded">Join for Free</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;