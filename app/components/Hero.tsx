// "use client"; // must be at the very top

// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="h-screen bg-blue-950 flex items-center justify-center text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-center"
//       >
//         <h1 className="text-5xl font-bold mb-4">Oceanic Advisors</h1>
//         <p className="text-lg">Your trusted maritime consultancy partner.</p>
//       </motion.div>
//     </section>
//   );
// }

// 'use client';

// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media1.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Text Overlay */}
//       <div className="relative z-10 flex items-center justify-center h-full">
//         <h1 className="text-white text-[8vw] font-extrabold uppercase text-center mix-blend-lighten leading-tight">
//           Oceanic <br /> Advisors
//         </h1>
//       </div>

//       {/* Dark overlay for better contrast (optional) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5"></div>
//     </div>
//   );
// };

// export default Hero;

// 'use client';

// import React from 'react';

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media1.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Text Overlay */}
//       <div className="relative z-9 flex items-center justify-center h-full">
//         <h1 className="text-white text-[12vw] font-extrabold uppercase text-center mix-blend-lighten leading-tight opacity-75">
//           Oceanic <br /> Advisors
//         </h1>
//       </div>

//       {/* Dark overlay for better contrast (optional) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-5"></div>
//     </div>
//   );
// };

// export default Hero;

// 'use client';

// import { useEffect, useState } from 'react';

// const Hero = () => {
//   const [showMainHero, setShowMainHero] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowMainHero(true), 5000); // change duration as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Video Background */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media1.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Cutout Text Overlay */}
//       {!showMainHero && (
//         <div className="absolute inset-0 z-10">
//           <svg
//             className="w-full h-full"
//             viewBox="0 0 1920 1080"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <defs>
//               <mask id="mask">
//                 <rect width="100%" height="100%" fill="white" />
//                 <text
//                   x="50%"
//                   y="45%"
//                   textAnchor="middle"
//                   fill="black"
//                   fontSize="200"
//                   fontWeight="900"
//                   className="animate-slideInLeft"
//                 >
//                   OCEANIC
//                 </text>
//                 <text
//                   x="50%"
//                   y="70%"
//                   textAnchor="middle"
//                   fill="black"
//                   fontSize="200"
//                   fontWeight="900"
//                   className="animate-slideInRight delay-300"
//                 >
//                   ADVISORS
//                 </text>
//               </mask>
//             </defs>
//             <rect
//               width="100%"
//               height="100%"
//               fill="white"
//               mask="url(#mask)"
//             />
//           </svg>
//         </div>
//       )}

//       {showMainHero && (
//         <div className="absolute inset-0 z-9 flex items-center justify-center text-white text-[10vw] font-extrabold uppercase text-center leading-tight">
//           Oceanic <br /> Advisors
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;

'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [showMainHero, setShowMainHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMainHero(true), 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/Media1.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cutout Text Overlay */}
      {!showMainHero && (
        <div className="absolute inset-0 z-10">
          <svg
            className="w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="mask">
                <rect width="100%" height="100%" fill="white" />
                <text
                  x="50%"
                  y="45%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="120"
                  fontWeight="900"
                  className="animate-slideInLeft"
                  fontFamily="sans-serif"
                >
                  <tspan className="sm:text-[120px] md:text-[160px] lg:text-[200px]">OCEANIC</tspan>
                </text>
                <text
                  x="50%"
                  y="70%"
                  textAnchor="middle"
                  fill="black"
                  fontSize="120"
                  fontWeight="900"
                  className="animate-slideInRight delay-300"
                  fontFamily="sans-serif"
                >
                  <tspan className="sm:text-[120px] md:text-[160px] lg:text-[200px]">ADVISORS</tspan>
                </text>
              </mask>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="white"
              mask="url(#mask)"
            />
          </svg>
        </div>
      )}

      {showMainHero && (
        <div className="absolute inset-0 z-9 flex flex-col items-center justify-center text-white font-extrabold uppercase text-center leading-tight px-4">
          <div className="text-[14vw] sm:text-[12vw] md:text-[10vw]">
            Oceanic <br className="block" /> Advisors
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;