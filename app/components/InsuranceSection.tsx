import React from 'react';
import Image from 'next/image';

export default function InsuranceSection() {
  return (
    <div className=" py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Yacht Insurance Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <Image
              src="/yacht.jpg" // replace with actual image path
              alt="Yacht Insurance"
              width={800}
              height={500}
              className="rounded-md w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#203864] mb-4">Yacht Insurance</h2>
            <p className="text-gray-700 mb-4">
              We work closely with insurance institutions that provide Marine Insurance, which covers cargo losses or damage to ships, cargo vessels, terminals, and any transportation involved in the transfer of goods from their origin to their final destination.
            </p>
            <p className="text-gray-700 mb-6">
              You can select coverage options tailored to your specific trade. Since coverage needs can vary, shipping businesses have the flexibility to choose an insurance plan that fits their unique requirements. We help you select the right coverage based on the size of your ship and the routes you take.
            </p>
            <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition">
              Know more
            </button>
          </div>
        </div>

        {/* Marine Insurance Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#203864] mb-4">Marine Insurance</h2>
            <p className="text-gray-700 mb-6">
              We will help you experience Mykonos life in its true sense. From living among the residents to eating authentic delicacies you are sure to walk home with memories and wonderful moments.
            </p>
            <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition">
              Know more
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/marine.jpg" // replace with actual image path
              alt="Marine Insurance"
              width={800}
              height={500}
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
