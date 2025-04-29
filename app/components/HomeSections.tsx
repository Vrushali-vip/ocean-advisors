'use client'; // Only this component is client-side

import { motion } from 'framer-motion';
import React from 'react';

const HomeSections = () => {
  return (
    <div>
      {/* Welcome Section */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="max-w-7xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#203864]"
          >
            Welcome to Oceanic Advisors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-6 text-lg text-[#4A4A4A] max-w-2xl mx-auto"
          >
            We provide trusted maritime solutions to guide your business through the complexities of the maritime world.
          </motion.p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">
          {[
            {
              title: "Ship Registration",
              description: "Comprehensive ship registration services to ensure your vessels are compliant and operational."
            },
            {
              title: "Technical Management",
              description: "Expert management of your fleet to optimize performance and compliance with maritime standards."
            },
            {
              title: "Legal Advisory",
              description: "Professional legal services for maritime-related disputes, contracts, and regulations."
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F9FAFB] p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold text-[#203864] mb-4">{service.title}</h3>
              <p className="text-[#4A4A4A]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
    </div>
  );
};

export default HomeSections;
