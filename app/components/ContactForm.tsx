'use client';

import { useState } from 'react';
import { Button } from './ui/Button';

const ContactForm = () => {
  const [captchaInput, setCaptchaInput] = useState('');

  const isCaptchaValid = () => parseInt(captchaInput) === 18;

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-4"
      style={{ backgroundImage: "url('/ship.jpg')" }} // Replace with your actual path
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-10">
        {/* Form (on right side for lg screens) */}
        <div className="space-y-4 w-full max-w-lg bg-white/90 text-[#203864] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-left">Submit an Application</h2>

          <input
            type="text"
            placeholder="Enter Your Full Name"
            className="w-full px-4 py-3 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#203864]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#203864]"
          />
          <input
            type="text"
            placeholder="🇮🇳 Enter Your Number"
            className="w-full px-4 py-3 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#203864]"
          />
          <textarea
            placeholder="Enquiry according to your needs..."
            rows={5}
            maxLength={100}
            className="w-full px-4 py-3 rounded-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-[#203864]"
          />
          <p className="text-sm text-gray-600">0 of 100 max characters.</p>

          <div className="flex items-center gap-3">
            <span className="whitespace-nowrap">6 * 3 =</span>
            <input
              type="text"
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              placeholder="Enter the answer"
              className="flex-1 px-4 py-2 rounded-sm bg-white text-black"
            />
          </div>

          <Button
            onClick={() => {
              if (!isCaptchaValid()) alert('Wrong answer!');
              else alert('Submitted!');
            }}
            className="bg-[#203864] hover:bg-[#B4C7E7] hover:text-[#203864] px-6 py-3 mt-2 text-white font-semibold rounded-sm w-full"
          >
            SUBMIT AN APPLICATION
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
