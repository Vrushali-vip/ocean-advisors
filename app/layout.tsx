// import DocumentsForSailors from './components/DocumentsForSailors';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import InsuranceSection from './components/InsuranceSection';
// import MissionVisionSection from './components/MissionVisionSection';
// import Navbar from './components/Navbar';
// import OurServices from './components/Ourservice';
// import Service from './components/Service';
// import './globals.css'
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Oceanic Advisors',
//   description: 'Trusted maritime consultancy services worldwide.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <Navbar />
//       <Hero />
//       <body>{children}
//         <Service />
//         <InsuranceSection />
//         <OurServices />
//         <DocumentsForSailors />
//         <MissionVisionSection />
//         <Footer />
//       </body>
//     </html>
//   );
// }

// import Amenities from './components/Amenities';
// import ContactForm from './components/ContactForm';
// import DocumentsForSailors from './components/DocumentsForSailors';
// import Footer from './components/Footer';
// import Hero from './components/Hero';
// import InsuranceSection from './components/InsuranceSection';
// // import MissionVisionSection from './components/MissionVisionSection';
// import Navbar from './components/Navbar';
// import OurPartners from './components/OurPartners';
// import OurServices from './components/Ourservice';
// import Service from './components/Service';
// import './globals.css';
// import type { Metadata } from 'next';
// import { Montserrat } from 'next/font/google';
// import Testimonials from './components/Testimonials';
// import Plan from './components/Plan';

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'], // customize weights as needed
//   variable: '--font-montserrat',
// });

// export const metadata: Metadata = {
//   title: 'Oceanic Advisors',
//   description: 'Trusted maritime consultancy services worldwide.',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* You can add head elements like meta tags, links here */}
//       </head>
//       <body className={`${montserrat.className}`}>
//       {/* All your components should be inside the body */}
//         <Navbar />
//         <Hero />
//         {children} {/* This will render the child pages/components */}
//         <Service />
//         <InsuranceSection />
//         <OurServices />
//         <DocumentsForSailors />
//         <Amenities />
//         <OurPartners />
//         <ContactForm />
//         <Testimonials />
//         <Plan />
//         {/* <MissionVisionSection /> */}
//         <Footer />
//       </body>
//     </html>
//   );
// }

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // customize weights as needed
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Oceanic Advisors',
  description: 'Trusted maritime consultancy services worldwide.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* You can add head elements like meta tags, links here */}
      </head>
      <body className={`${montserrat.className}`}>
        {/* Only Navbar and Footer are common across all pages */}
        <Navbar />
        {children} {/* This will render the page content */}
        <Footer />
      </body>
    </html>
  );
}