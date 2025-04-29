// app/services.tsx

import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <main>
      <Navbar />
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#203864]">Our Services</h2>
        <p className="mt-4 text-lg text-[#4A4A4A]">Explore our full range of maritime services to find the right solution for your business needs.</p>
      </section>

      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#203864]">Ship Registration</h3>
          <p className="mt-4 text-[#4A4A4A]">Ensure your vessels meet international standards and regulations. <a href="/services/ship-registration" className="text-[#2F5597]">Learn more</a></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#203864]">Technical Management</h3>
          <p className="mt-4 text-[#4A4A4A]">Maximize fleet performance and ensure compliance. <a href="/services/technical-management" className="text-[#2F5597]">Learn more</a></p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#203864]">Legal Advisory</h3>
          <p className="mt-4 text-[#4A4A4A]">Expert legal advice on maritime contracts and disputes. <a href="/services/legal-advisory" className="text-[#2F5597]">Learn more</a></p>
        </div>
      </section>
    </main>
  );
}
