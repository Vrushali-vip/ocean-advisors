// import Hero from "./components/Hero";

// export default function HomePage() {
//   return (
//     <>
//       <Hero />
//     </>
//   );
// }

// import Hero from "./components/Hero";

// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       {/* Other sections */}
//     </main>
//   );
// }

// app/page.tsx (or your Home.tsx)

// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <Hero />
//     </main>
//   );
// }


// app/home.tsx


// import HomeSections from "./components/HomeSections";

// export default function Home() {
//   return (
//     <main>
//       <HomeSections />  
//     </main>
//   );
// }


import Hero from './components/Hero';
import Service from './components/Service';
import InsuranceSection from './components/InsuranceSection';
import OurServices from './components/Ourservice';
import DocumentsForSailors from './components/DocumentsForSailors';
import Amenities from './components/Amenities';
import OurPartners from './components/OurPartners';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import Plan from './components/Plan';

export default function Home() {
  return (
    <main>
      {/* All homepage-specific components */}
      <Hero />
      <Service />
      <InsuranceSection />
      <OurServices />
      <DocumentsForSailors />
      <Amenities />
      <OurPartners />
      <ContactForm />
      <Testimonials />
      <Plan />
    </main>
  );
}