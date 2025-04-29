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

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import HomeSections from "./components/HomeSections";
import MissionVisionSection from "./components/MissionVisionSection";
import Service from "./components/Service";
import InsuranceSection from "./components/InsuranceSection";
import OurServices from "./components/Ourservice";
import DocumentsForSailors from "./components/DocumentsForSailors";

export const metadata: Metadata = {
  title: {
    template: '%s | Ocean Advisors',
    default: 'Ocean Advisors - Trusted Maritime Consultancy',
  },
  icons: [
    {
      rel: 'icon',
      sizes: '32x32',
      href: "/favicon.png",
      url: "/favicon.png",
    }
  ],
  robots: {
    index: true,
    follow: true
  },
  description: "Tailored end-to-end implementation services for automation and Ai solutions. Alphalake Ai are specialists in health and human services.",
  openGraph: {
    title: {
      template: '%s | Ocean Advisors',
      default: 'Ocean Advisors - Trusted Maritime Consultancy',
    },
    description: "Tailored end-to-end implementation services for automation and Ai solutions. Alphalake Ai are specialists in health and human services.",
    type: "website",
    url: "https://alphalake.services",
    siteName: "Ocean Advisors",
    images: [
      {
        url: "/favicon.png",
        width: 500,
        height: 500
      }
    ],
    locale: "en_US"
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  keywords: "RPA, Automation, iPaaS, Workflow Management, Workato Solution, Microsoft Integration, UiPath Automation",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Introduction */}
      <HomeSections />  
      <Service />
      <InsuranceSection />
      <OurServices />
      <DocumentsForSailors />
      <MissionVisionSection />
    </main>
  );
}

