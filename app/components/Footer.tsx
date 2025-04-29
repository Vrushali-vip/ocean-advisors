// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="relative w-full h-64 overflow-hidden">
//       {/* Background image with ocean/ship */}
//       <div className="absolute inset-0">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       </div>

//       {/* Curved overlay shape */}
//       <div className="absolute inset-0 flex">
//         <div className="w-3/5 h-full"></div>
//         <div className="w-2/5 h-full bg-white relative">
//           <div className="absolute top-0 left-0 h-full w-24 overflow-hidden">
//             <div className="absolute h-full w-48 bg-white rounded-full transform -translate-x-24"></div>
//           </div>
//         </div>
//       </div>
      
//       {/* Content overlay */}
//       <div className="absolute inset-0 flex flex-col z-20">
//         {/* Top section with logo */}
//         <div className="flex justify-end p-4 pr-6">
//           <div className="flex flex-col items-center">
//             <div className="w-16 h-16 mb-1">
//               <img 
//                 src="/ocean-logo.png" 
//                 alt="Oceanic Advisors Logo" 
//                 className="w-full h-full object-contain"
//               />
//             </div>
//             <h2 className="text-xl font-bold text-black">OCEANIC ADVISORS</h2>
//             <p className="text-xs text-black">NAVIGATING EXCELLENCE, ENSURING COMPLIANCE</p>
//           </div>
//         </div>
        
//         {/* Middle section with CONNECT US */}
//         <div className="flex-1 flex items-center">
//           <h1 className="text-6xl font-bold text-white pl-8">CONNECT US</h1>
//         </div>
        
//         {/* Bottom section with contact info */}
//         <div className="flex justify-end p-6">
//           <div className="text-right">
//             <a href="mailto:admin@oceanicadvisors.org" className="block text-red-500 font-medium mb-2">admin@oceanicadvisors.org</a>
//             <p className="text-black mb-1">Westbury Tower 1,</p>
//             <p className="text-black mb-1">Business Bay,</p>
//             <p className="text-black mb-3">Dubai, UAE.</p>
//             <p className="text-black font-medium">+971 58 566 7234</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full h-[600px] overflow-hidden">
//       {/* Background Video or Image */}
//       <div className="absolute inset-0">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       </div>

//       {/* White Curved Shape */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-l-[200px] z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 flex items-center justify-between h-full px-8 md:px-20">
//         {/* Left Text */}
//         <div className="text-white text-[60px] md:text-[100px] font-extrabold leading-none">
//           CONNECT<br />US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-6 text-black max-w-sm">
//           {/* Logo */}
//           <Image
//             src="/ocean-logo.png" // 👈 your Oceanic Advisors logo
//             alt="Oceanic Advisors Logo"
//             width={150}
//             height={150}
//             className="mb-4"
//           />

//           {/* Tagline */}
//           <p className="text-sm text-gray-700">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           {/* Email */}
//           <Link href="mailto:admin@oceanicadvisors.org" className="text-red-600 font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           {/* Address */}
//           <p className="text-sm text-gray-800 leading-relaxed">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-black font-semibold text-md">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;

// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* White S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg viewBox="0 0 1440 700" className="w-full h-full">
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"  // Adjusted the "M" and "C" points
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex items-start justify-between h-full px-8 md:px-20">
//         <div className="text-white text-[80px] md:text-[140px] font-extrabold leading-tight">
//           CONNECT<br />US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 text-black max-w-sm mt-10">
//           {/* Logo */}
//           <Image
//             src="/ocean-logo.png"
//             alt="Oceanic Advisors Logo"
//             width={140}
//             height={140}
//             className="mb-2"
//           />

//           {/* Tagline */}
//           <p className="text-gray-700 text-sm">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           {/* Email */}
//           <Link href="mailto:admin@oceanicadvisors.org" className="text-red-600 font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           {/* Address */}
//           <p className="text-gray-800 text-sm">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-black font-semibold">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;

// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* White S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg viewBox="0 0 1440 700" className="w-full h-full">
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"  // Original S-curve path
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20 text-center md:text-left">
//         {/* Text Block */}
//         <div className="text-white text-[60px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0">
//           CONNECT<br />US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 text-black max-w-sm mt-10 md:mt-0">
//           {/* Logo */}
//           <Image
//             src="/ocean-logo.png"
//             alt="Oceanic Advisors Logo"
//             width={140}
//             height={140}
//             className="mb-2"
//           />

//           {/* Tagline */}
//           <p className="text-gray-700 text-sm">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           {/* Email */}
//           <Link href="mailto:admin@oceanicadvisors.org" className="text-red-600 font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           {/* Address */}
//           <p className="text-gray-800 text-sm">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-black font-semibold">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;

// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Animated S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1440 700"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"
//             className="animate-sCurveSlide"
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20 text-center md:text-left">
//         {/* Text Block with Animation */}
//         <div className="text-white text-[60px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0 animate-fadeInUp delay-200">
//           CONNECT<br /> WITH US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 text-black max-w-sm mt-10 md:mt-0 animate-slideInRight delay-400">
//           {/* Logo */}
//           <Image
//             src="/ocean-logo.png"
//             alt="Oceanic Advisors Logo"
//             width={140}
//             height={140}
//             className="mb-2"
//           />

//           {/* Tagline */}
//           <p className="text-gray-700 text-sm">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           {/* Email */}
//           <Link href="mailto:admin@oceanicadvisors.org" className="text-red-600 font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           {/* Address */}
//           <p className="text-gray-800 text-sm">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-black font-semibold">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;


// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Animated S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1440 700"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"
//             className="animate-sCurveSlide"
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-20 text-center md:text-left">
//         {/* Text Block with Animation */}
//         <div className="text-white text-[40px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0 animate-fadeInUp delay-200">
//           CONNECT<br />WITH US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 max-w-sm mt-10 md:mt-0 animate-slideInRight delay-400">
//           {/* Logo */}
//           <Image
//             src="/logo.png"
//             alt="Oceanic Advisors Logo"
//             width={120}
//             height={120}
//             className="mb-2"
//           />

//           <p className="text-white text-sm md:text-base">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           <Link href="mailto:admin@oceanicadvisors.org" className="text-white font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           <p className="text-white text-sm md:text-base">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-white font-semibold text-sm md:text-base">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;

// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Animated S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1440 700"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"
//             className="animate-sCurveSlide"
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-8 md:px-20 text-center md:text-left">
//         {/* Text Block with Animation */}
//         <div className="text-white text-[40px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0 animate-fadeInUp delay-200">
//           CONNECT<br />WITH US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 max-w-sm mt-10 md:mt-0 animate-slideInRight delay-400">
//           {/* Logo */}
//           <div className="flex justify-center md:justify-start mb-2">
//             <Image
//               src="/logo.png"
//               alt="Oceanic Advisors Logo"
//               width={120}
//               height={120}
//             />
//           </div>

//           <p className="text-white text-sm md:text-base">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           <Link href="mailto:admin@oceanicadvisors.org" className="text-white font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           <p className="text-white text-sm md:text-base">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-white font-semibold text-sm md:text-base">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;
// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Animated S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1440 700"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"
//             className="animate-sCurveSlide"
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-8 md:px-20 text-center md:text-left">
//         {/* Left Text Block */}
//         <div className="text-white md:text-white text-[40px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0 animate-fadeInUp delay-200">
//           CONNECT<br />WITH US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 max-w-sm mt-10 md:mt-0 animate-slideInRight delay-400">
//           {/* Logo for Mobile and Laptop */}
//           <div className="flex justify-center md:justify-start mb-2">
//             {/* Mobile Logo */}
//             <Image
//               src="/logo.png" 
//               alt="Oceanic Advisors Logo"
//               width={120}
//               height={120}
//               className="md:hidden"
//             />
//             {/* Laptop Logo */}
//             <Image
//               src="/ocean-logo.png" // Laptop logo
//               alt="Oceanic Advisors Logo"
//               width={200}
//               height={200}
//               className="hidden md:block" // This will show only on laptop and larger screens
//             />
//           </div>

//           <p className="text-white md:text-black text-sm md:text-base">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           <Link href="mailto:admin@oceanicadvisors.org" className="text-white md:text-black font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           <p className="text-white md:text-black text-sm md:text-base">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-white md:text-black font-semibold text-sm md:text-base">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;

// import Image from 'next/image';
// import Link from 'next/link';

// const ConnectUs = () => {
//   return (
//     <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         style={{ objectPosition: 'top' }}
//       >
//         <source src="/Media2.mov" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Animated S-Curve Overlay */}
//       <div className="absolute inset-0 z-10">
//         <svg
//           className="w-full h-full"
//           viewBox="0 0 1440 700"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <path
//             fill="white"
//             d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"
//             className="animate-sCurveSlide"
//           />
//         </svg>
//       </div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-8 md:px-20 text-center md:text-left">
//         {/* Left Text Block */}
//         <div className="text-white md:text-white text-[40px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0 animate-fadeInUp delay-200">
//           CONNECT<br />WITH US
//         </div>

//         {/* Right Info Block */}
//         <div className="flex flex-col gap-5 max-w-sm mt-8 animate-slideInRight delay-400">
//           {/* Logo for Mobile and Laptop */}
//           <div className="flex justify-center md:justify-start mb-2">
//             {/* Mobile Logo */}
//             <Image
//               src="/logo.png" // Mobile logo
//               alt="Oceanic Advisors Logo"
//               width={120}
//               height={120}
//               className="md:hidden"
//             />
//             {/* Laptop Logo */}
//             <Image
//               src="/ocean-logo.png" // Laptop logo
//               alt="Oceanic Advisors Logo"
//               width={200}
//               height={200}
//               className="hidden md:block" // This will show only on laptop and larger screens
//             />
//           </div>

//           <p className="text-white md:text-black text-sm md:text-base">
//             NAVIGATING EXCELLENCE, ENSURING COMPLIANCE
//           </p>

//           <Link href="mailto:admin@oceanicadvisors.org" className="text-white md:text-black font-semibold text-md">
//             admin@oceanicadvisors.org
//           </Link>

//           <p className="text-white md:text-black text-sm md:text-base">
//             Westbury Tower 1,<br />
//             Business Bay,<br />
//             Dubai, UAE.
//           </p>

//           {/* Phone */}
//           <p className="text-white md:text-black font-semibold text-sm md:text-base">
//             +971 58 566 7234
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConnectUs;
import Image from 'next/image';
import Link from 'next/link';

const ConnectUs = () => {
  return (
    <section className="relative w-full min-h-[680px] overflow-hidden bg-black z-9">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'top' }}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Animated S-Curve Overlay */}
      <div className="absolute inset-0 z-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            fill="white"
            d="M880,0 C1040,150 720,550 880,700 L1440,700 L1440,0 Z"
            className="animate-sCurveSlide"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between h-full px-8 md:px-20 text-center md:text-left">
        {/* Left Text Block */}
        <div className="text-white md:text-white text-[40px] md:text-[140px] font-extrabold leading-tight mb-8 md:mb-0 animate-fadeInUp delay-200">
          CONNECT<br />WITH US
        </div>

        {/* Right Info Block */}
        <div className="flex flex-col gap-5 max-w-sm md:mt-8 animate-slideInRight delay-400">
          {/* Logo for Mobile and Laptop */}
          <div className="flex justify-center md:justify-start mb-2">
            {/* Mobile Logo */}
            <Image
              src="/logo.png" // Mobile logo
              alt="Oceanic Advisors Logo"
              width={120}
              height={120}
              className="md:hidden"
            />
            {/* Laptop Logo */}
            <Image
              src="/ocean-logo.png" // Laptop logo
              alt="Oceanic Advisors Logo"
              width={200}
              height={200}
              className="hidden md:block" // This will show only on laptop and larger screens
            />
          </div>

          <p className="text-white md:text-black text-sm md:text-base">
          A goal that is precise, measurable, achievable, relevant and has a defined end result, Approved by over 40 Oceanic Advisors Administrations
          </p>


          {/* Additional Contact Info */}
          <div className="flex flex-col md:flex-row justify-between w-full md:gap-10 mt-14">
            {/* Left side: Contact Info */}
            <div className="flex flex-col space-y-0 md:w-1/2 text-white md:text-black">
              <p className="font-semibold text-sm md:text-lg">Contact Info</p>
              <p className="text-sm md:text-base">+971 50 804 8685</p>
              <p className="text-sm md:text-base">+971 50 750 2353</p>
              <Link href="mailto:admin@oceanicadvisors.org" className="text-white md:text-black text-sm md:text-base">
                admin@oceanicadvisors.org
              </Link>
            </div>

            {/* Right side: Address */}
            <div className="mt-8 md:mt-0 md:w-1/2 text-white md:text-black">
              <p className="font-semibold text-sm md:text-lg">Address</p>
              <p className="text-sm md:text-base">
                Westburry Tower 1, Near Emaar Square,
                Business Bay, Dubai, UAE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectUs;
