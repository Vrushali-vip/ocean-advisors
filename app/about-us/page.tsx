// app/about.tsx

import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main>
      <Navbar />
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#203864]">About Oceanic Advisors</h2>
        <p className="mt-4 text-lg text-[#4A4A4A]">
          Oceanic Advisors is a leading provider of maritime solutions, offering comprehensive services to ensure regulatory compliance, fleet management, and legal support for businesses in the maritime industry.
        </p>
      </section>

      <section className="bg-[#F5F7FA] py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-[#203864]">Our Mission</h3>
            <p className="mt-4 text-[#4A4A4A]">To provide reliable, efficient, and expert maritime services, ensuring businesses thrive in an increasingly complex industry.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#203864]">Our Values</h3>
            <ul className="mt-4 text-[#4A4A4A] list-disc list-inside">
              <li>Integrity</li>
              <li>Excellence</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
