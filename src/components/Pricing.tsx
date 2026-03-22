import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-4">Find the right plan for you</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border-2 border-cc-navy">
            <h3 className="text-2xl font-bold mb-2">Basic</h3>
            <div className="text-4xl font-black mb-6">Free</div>
            <ul className="space-y-4 mb-8">
              {['Access to select courses', 'Limited practice', 'Community support'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cc-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 border-2 border-cc-navy font-bold hover:bg-cc-gray-50">
              Start for Free
            </button>
          </div>

          <div className="p-8 border-2 border-cc-navy bg-cc-navy text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-cc-pink text-white text-xs font-bold px-2 py-1 uppercase">Recommended</div>
            <h3 className="text-2xl font-bold mb-2">Plus</h3>
            <div className="text-4xl font-black mb-2">$17.49 <span className="text-lg font-normal">/mo</span></div>
            <p className="text-sm text-gray-400 mb-6">Billed annually</p>
            <ul className="space-y-4 mb-8">
              {['Unlimited courses & paths', 'Step-by-step guidance', 'Professional certificates', 'Interview prep', 'Priority support'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cc-teal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="btn-secondary w-full">
              Go Plus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;