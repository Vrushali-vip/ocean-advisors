'use client';

import { Phone } from 'lucide-react';

const Plan = () => {
  return (
    <section className="py-20 bg-[#203864] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Plan an Unforgettable Experience in<br />
            Oceanic Advisors Today!
          </h2>

          <div className="mt-10">
            <p className="text-sm uppercase tracking-wider mb-6">
              GET CONSULTATION NOW
            </p>
            
            <div className="flex flex-col items-center space-y-4">
              <a 
                href="tel:+97150750235" 
                className="flex items-center justify-center space-x-2 text-xl md:text-2xl font-semibold hover:opacity-80 transition-opacity"
              >
                <Phone size={24} className="text-white" />
                <span>+971 50 750 2353</span>
              </a>
              
              <a 
                href="tel:+97150804868" 
                className="flex items-center justify-center space-x-2 text-xl md:text-2xl font-semibold hover:opacity-80 transition-opacity"
              >
                <Phone size={24} className="text-white" />
                <span>+971 50 804 8685</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;