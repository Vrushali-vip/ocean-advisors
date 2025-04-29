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

import DocumentsForSailors from './components/DocumentsForSailors';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InsuranceSection from './components/InsuranceSection';
import MissionVisionSection from './components/MissionVisionSection';
import Navbar from './components/Navbar';
import OurServices from './components/Ourservice';
import Service from './components/Service';
import './globals.css';
import type { Metadata } from 'next';

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
      <body>
        {/* All your components should be inside the body */}
        <Navbar />
        <Hero />
        {children} {/* This will render the child pages/components */}
        <Service />
        <InsuranceSection />
        <OurServices />
        <DocumentsForSailors />
        <MissionVisionSection />
        <Footer />
      </body>
    </html>
  );
}
