// app/resources.tsx

import Navbar from "../components/Navbar";

export default function Resources() {
  return (
    <main>
      <Navbar />
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#203864]">Resources & Insights</h2>
        <p className="mt-4 text-lg text-[#4A4A4A]">Stay up to date with the latest news, circulars, and case studies from the maritime world.</p>
      </section>

      <section className="py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#203864]">News & Industry Updates</h3>
          <p className="mt-4 text-[#4A4A4A]">The latest happenings and trends in the maritime industry.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#203864]">Maritime Circulars</h3>
          <p className="mt-4 text-[#4A4A4A]">Access essential circulars to stay compliant with international maritime regulations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#203864]">Case Studies</h3>
          <p className="mt-4 text-[#4A4A4A]">Discover successful projects and how we’ve helped businesses like yours.</p>
        </div>
      </section>
    </main>
  );
}
