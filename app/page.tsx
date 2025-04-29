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


import HomeSections from "./components/HomeSections";

export default function Home() {
  return (
    <main>
      <HomeSections />  
    </main>
  );
}

