import React from 'react';
import { Github, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cc-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
             <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white mr-2 flex items-center justify-center text-cc-navy font-black italic text-xl">C</div>
              <span className="font-bold text-xl tracking-tight">codecademy</span>
            </div>
            <div className="flex space-x-4 mb-6">
              <Twitter className="w-5 h-5 cursor-pointer hover:text-cc-teal" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-cc-pink" />
              <Youtube className="w-5 h-5 cursor-pointer hover:text-cc-yellow" />
              <Github className="w-5 h-5 cursor-pointer hover:text-cc-teal" />
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Cheatsheets</li>
              <li className="hover:text-white cursor-pointer">Articles</li>
              <li className="hover:text-white cursor-pointer">Projects</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Forums</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-4">Mobile</h4>
             <div className="space-y-3">
                <div className="border border-gray-600 px-4 py-2 text-xs font-bold text-center cursor-pointer hover:bg-white hover:text-cc-navy">App Store</div>
                <div className="border border-gray-600 px-4 py-2 text-xs font-bold text-center cursor-pointer hover:bg-white hover:text-cc-navy">Google Play</div>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
          <p>© 2024 Codecademy Clone. Built with love by AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;