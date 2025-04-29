// app/contact.tsx

import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-[#203864]">Contact Us</h2>
        <p className="mt-4 text-lg text-[#4A4A4A]">Get in touch with us for more information or inquiries. We’d love to hear from you.</p>
      </section>

      <section className="py-16 text-center">
        <div>
          <h3 className="text-2xl font-semibold text-[#203864]">Our Location</h3>
          <p className="mt-4 text-[#4A4A4A]">123 Oceanic Road, Maritime City, Oceania</p>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-[#203864]">Get in Touch</h3>
          <form className="mt-4">
            <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-md mb-4 w-full max-w-md" />
            <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-md mb-4 w-full max-w-md" />
            <textarea placeholder="Your Message" className="p-3 border border-gray-300 rounded-md mb-4 w-full max-w-md" />
            <button type="submit" className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
