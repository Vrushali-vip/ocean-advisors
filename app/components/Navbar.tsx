// // components/Navbar.tsx

// import React from 'react';

// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 left-0 w-full bg-[#203864] shadow-lg z-10">
//             <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//                 {/* Logo */}
//                 <div className="text-white text-xl font-bold">
//                     <div className="flex items-center">
//                         <a href="/">
//                             <img
//                                 src="/ocean-logo.png"
//                                 alt="Oceanic Advisors Logo"
//                                 className="h-14 w-auto"
//                             />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="flex space-x-8 text-white text-lg font-medium">
//                     <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Home</a>
//                     <a href="/about-us" className="hover:text-[#B4C7E7] transition-colors duration-300">About</a>

//                 </div>

//                 <div className="flex space-x-8 text-white text-lg font-medium">
//                     <a href="services" className="hover:text-[#B4C7E7] transition-colors duration-300">Services</a>
//                     <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Contact</a>
//                 </div>

//                 <div>
//                     <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//                         Get Started
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// 'use client'; // if you're using Next.js 13/14 with app directory

// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
//         scrolled ? 'bg-[#203864] shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <div className="flex items-center">
//             <a href="/">
//               <img
//                 src="/logo.png"
//                 alt="Oceanic Advisors Logo"
//                 className="h-14 w-auto"
//               />
//             </a>
//           </div>
//         </div>

//         <div className="flex space-x-8 text-white text-xl font-medium ml-24">
//           <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Home</a>
//           <a href="/about-us" className="hover:text-[#B4C7E7] transition-colors duration-300">About</a>
//         </div>

//         <div className="flex space-x-8 text-white text-xl font-medium">
//           <a href="/services" className="hover:text-[#B4C7E7] transition-colors duration-300">Services</a>
//           <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Contact</a>
//         </div>

//         <div>
//           <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// 'use client'; // if you're using Next.js 13/14 with app directory

// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
//         scrolled ? 'bg-[#203864] shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <div className="flex items-center">
//             <a href="/">
//               <img
//                 src="/logo.png"
//                 alt="Oceanic Advisors Logo"
//                 className="h-10 sm:h-14 w-auto"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Mobile menu button */}
//         <button 
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className="h-6 w-6" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             {mobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8 text-white text-xl font-medium ml-0 lg:ml-24">
//           <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Home</a>
//           <a href="/about-us" className="hover:text-[#B4C7E7] transition-colors duration-300">About</a>
//         </div>

//         <div className="hidden md:flex space-x-8 text-white text-xl font-medium">
//           <a href="/services" className="hover:text-[#B4C7E7] transition-colors duration-300">Services</a>
//           <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Contact</a>
//         </div>

//         <div className="hidden md:block">
//           <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`md:hidden bg-[#203864] w-full ${
//           mobileMenuOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-4 space-y-3">
//           <a 
//             href="#" 
//             className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//           >
//             Home
//           </a>
//           <a 
//             href="/about-us" 
//             className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//           >
//             About
//           </a>
//           <a 
//             href="/services" 
//             className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//           >
//             Services
//           </a>
//           <a 
//             href="#" 
//             className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//           >
//             Contact
//           </a>
//           <div className="pt-2">
//             <button className="w-full bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// 'use client'; // if you're using Next.js 13/14 with app directory

// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const toggleSubmenu = (submenu) => {
//     if (activeSubmenu === submenu) {
//       setActiveSubmenu(null);
//     } else {
//       setActiveSubmenu(submenu);
//     }
//   };

//   // Close submenu when clicking outside
//   useEffect(() => {
//     const closeSubmenu = () => setActiveSubmenu(null);
//     document.addEventListener('click', closeSubmenu);
//     return () => document.removeEventListener('click', closeSubmenu);
//   }, []);

//   // Prevent closing when clicking inside submenu
//   const handleSubmenuClick = (e) => {
//     e.stopPropagation();
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
//         scrolled ? 'bg-[#203864] shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <div className="flex items-center">
//             <a href="/">
//               <img
//                 src="/logo.png"
//                 alt="Oceanic Advisors Logo"
//                 className="h-10 sm:h-14 w-auto"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Mobile menu button */}
//         <button 
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className="h-6 w-6" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             {mobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8 text-white text-xl font-medium ml-0 lg:ml-24">
//           <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Home</a>
          
//           {/* About Submenu */}
//           <div className="relative" onClick={handleSubmenuClick}>
//             <button 
//               className="flex items-center hover:text-[#B4C7E7] transition-colors duration-300"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleSubmenu('about');
//               }}
//             >
//               About
//               <svg 
//                 className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === 'about' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'about' && (
//               <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#203864] ring-1 ring-black ring-opacity-5 py-1">
//                 <a href="/about-us/team" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Our Team</a>
//                 <a href="/about-us/history" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">History</a>
//                 <a href="/about-us/values" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Values</a>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="hidden md:flex space-x-8 text-white text-xl font-medium">
//           {/* Services Submenu */}
//           <div className="relative" onClick={handleSubmenuClick}>
//             <button 
//               className="flex items-center hover:text-[#B4C7E7] transition-colors duration-300"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleSubmenu('services');
//               }}
//             >
//               Services
//               <svg 
//                 className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === 'services' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'services' && (
//               <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#203864] ring-1 ring-black ring-opacity-5 py-1">
//                 <a href="/services/consulting" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Consulting</a>
//                 <a href="/services/strategy" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Strategy</a>
//                 <a href="/services/finance" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Financial Services</a>
//               </div>
//             )}
//           </div>
          
//           {/* Contact Submenu */}
//           <div className="relative" onClick={handleSubmenuClick}>
//             <button 
//               className="flex items-center hover:text-[#B4C7E7] transition-colors duration-300"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleSubmenu('contact');
//               }}
//             >
//               Contact
//               <svg 
//                 className={`ml-1 h-4 w-4 transition-transform ${activeSubmenu === 'contact' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'contact' && (
//               <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#203864] ring-1 ring-black ring-opacity-5 py-1">
//                 <a href="/contact/locations" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Locations</a>
//                 <a href="/contact/support" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Support</a>
//                 <a href="/contact/careers" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Careers</a>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="hidden md:block">
//           <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`md:hidden bg-[#203864] w-full ${
//           mobileMenuOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-4 space-y-1">
//           <a 
//             href="#" 
//             className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//           >
//             Home
//           </a>
          
//           {/* Mobile About Submenu */}
//           <div>
//             <button 
//               className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//               onClick={() => toggleSubmenu('mobile-about')}
//             >
//               About
//               <svg 
//                 className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-about' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'mobile-about' && (
//               <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
//                 <a href="/about-us/team" className="block text-white text-md hover:text-[#B4C7E7] py-2">Our Team</a>
//                 <a href="/about-us/history" className="block text-white text-md hover:text-[#B4C7E7] py-2">History</a>
//                 <a href="/about-us/values" className="block text-white text-md hover:text-[#B4C7E7] py-2">Values</a>
//               </div>
//             )}
//           </div>
          
//           {/* Mobile Services Submenu */}
//           <div>
//             <button 
//               className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//               onClick={() => toggleSubmenu('mobile-services')}
//             >
//               Services
//               <svg 
//                 className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-services' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'mobile-services' && (
//               <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
//                 <a href="/services/consulting" className="block text-white text-md hover:text-[#B4C7E7] py-2">Consulting</a>
//                 <a href="/services/strategy" className="block text-white text-md hover:text-[#B4C7E7] py-2">Strategy</a>
//                 <a href="/services/finance" className="block text-white text-md hover:text-[#B4C7E7] py-2">Financial Services</a>
//               </div>
//             )}
//           </div>
          
//           {/* Mobile Contact Submenu */}
//           <div>
//             <button 
//               className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//               onClick={() => toggleSubmenu('mobile-contact')}
//             >
//               Contact
//               <svg 
//                 className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-contact' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'mobile-contact' && (
//               <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
//                 <a href="/contact/locations" className="block text-white text-md hover:text-[#B4C7E7] py-2">Locations</a>
//                 <a href="/contact/support" className="block text-white text-md hover:text-[#B4C7E7] py-2">Support</a>
//                 <a href="/contact/careers" className="block text-white text-md hover:text-[#B4C7E7] py-2">Careers</a>
//               </div>
//             )}
//           </div>
          
//           <div className="pt-2">
//             <button className="w-full bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// 'use client'; // if you're using Next.js 13/14 with app directory

// import React, { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };
  
//   // For mobile only
//   const [activeSubmenu, setActiveSubmenu] = useState(null);
  
//   const toggleSubmenu = (submenu) => {
//     if (activeSubmenu === submenu) {
//       setActiveSubmenu(null);
//     } else {
//       setActiveSubmenu(submenu);
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
//         scrolled ? 'bg-[#203864] shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <div className="flex items-center">
//             <a href="/">
//               <img
//                 src="/logo.png"
//                 alt="Oceanic Advisors Logo"
//                 className="h-10 sm:h-14 w-auto"
//               />
//             </a>
//           </div>
//         </div>

//         {/* Mobile menu button */}
//         <button 
//           className="md:hidden text-white focus:outline-none"
//           onClick={toggleMobileMenu}
//         >
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className="h-6 w-6" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             {mobileMenuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-8 text-white text-xl font-medium ml-0 lg:ml-24">
//           <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Home</a>
          
//           {/* About Submenu */}
//           <div className="relative group">
//             <a href="/about-us" className="hover:text-[#B4C7E7] transition-colors duration-300">
//               About
//             </a>
            
//             <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-[#203864] ring-1 ring-black ring-opacity-5 py-1 hidden group-hover:block">
//               <a href="/about-us/team" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Our Team</a>
//               <a href="/about-us/history" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">History</a>
//               <a href="/about-us/values" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Values</a>
//             </div>
//           </div>
//         </div>

//         <div className="hidden md:flex space-x-8 text-white text-xl font-medium">
//           {/* Services Submenu */}
//           <div className="relative group">
//             <a href="/services" className="hover:text-[#B4C7E7] transition-colors duration-300">
//               Services
//             </a>
            
//             <div className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-[#203864] ring-1 ring-black ring-opacity-5 py-1 hidden group-hover:block">
//               <a href="/services/maintenance" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Maintenance planning and oversight</a>
//               <a href="/services/inspections" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Onboard inspections and audits</a>
//               <a href="/services/monitoring" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Performance monitoring and analysis</a>
//               <a href="/services/dry-docking" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Dry-docking management</a>
//               <a href="/services/compliance" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Regulatory compliance verification</a>
//               <a href="/services/assessments" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Vessel condition assessments</a>
//             </div>
//           </div>
          
//           {/* Contact Submenu */}
//           <div className="relative group">
//             <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">
//               Contact
//             </a>
            
//             <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#203864] ring-1 ring-black ring-opacity-5 py-1 hidden group-hover:block">
//               <a href="/contact/locations" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Locations</a>
//               <a href="/contact/support" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Support</a>
//               <a href="/contact/careers" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998] hover:text-[#B4C7E7]">Careers</a>
//             </div>
//           </div>
//         </div>

//         <div className="hidden md:block">
//           <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div 
//         className={`md:hidden bg-[#203864] w-full ${
//           mobileMenuOpen ? 'block' : 'hidden'
//         }`}
//       >
//         <div className="px-4 pt-2 pb-4 space-y-1">
//           <a 
//             href="#" 
//             className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//           >
//             Home
//           </a>
          
//           {/* Mobile About Submenu */}
//           <div>
//             <button 
//               className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//               onClick={() => toggleSubmenu('mobile-about')}
//             >
//               About
//               <svg 
//                 className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-about' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'mobile-about' && (
//               <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
//                 <a href="/about-us/team" className="block text-white text-md hover:text-[#B4C7E7] py-2">Our Team</a>
//                 <a href="/about-us/history" className="block text-white text-md hover:text-[#B4C7E7] py-2">History</a>
//                 <a href="/about-us/values" className="block text-white text-md hover:text-[#B4C7E7] py-2">Values</a>
//               </div>
//             )}
//           </div>
          
//           {/* Mobile Services Submenu */}
//           <div>
//             <button 
//               className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//               onClick={() => toggleSubmenu('mobile-services')}
//             >
//               Services
//               <svg 
//                 className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-services' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'mobile-services' && (
//               <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
//                 <a href="/services/maintenance" className="block text-white text-md hover:text-[#B4C7E7] py-2">Maintenance planning and oversight</a>
//                 <a href="/services/inspections" className="block text-white text-md hover:text-[#B4C7E7] py-2">Onboard inspections and audits</a>
//                 <a href="/services/monitoring" className="block text-white text-md hover:text-[#B4C7E7] py-2">Performance monitoring and analysis</a>
//                 <a href="/services/dry-docking" className="block text-white text-md hover:text-[#B4C7E7] py-2">Dry-docking management</a>
//                 <a href="/services/compliance" className="block text-white text-md hover:text-[#B4C7E7] py-2">Regulatory compliance verification</a>
//                 <a href="/services/assessments" className="block text-white text-md hover:text-[#B4C7E7] py-2">Vessel condition assessments</a>
//               </div>
//             )}
//           </div>
          
//           {/* Mobile Contact Submenu */}
//           <div>
//             <button 
//               className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
//               onClick={() => toggleSubmenu('mobile-contact')}
//             >
//               Contact
//               <svg 
//                 className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-contact' ? 'rotate-180' : ''}`} 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 viewBox="0 0 20 20" 
//                 fill="currentColor"
//               >
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
            
//             {activeSubmenu === 'mobile-contact' && (
//               <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
//                 <a href="/contact/locations" className="block text-white text-md hover:text-[#B4C7E7] py-2">Locations</a>
//                 <a href="/contact/support" className="block text-white text-md hover:text-[#B4C7E7] py-2">Support</a>
//                 <a href="/contact/careers" className="block text-white text-md hover:text-[#B4C7E7] py-2">Careers</a>
//               </div>
//             )}
//           </div>
          
//           <div className="pt-2">
//             <button className="w-full bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client'; // if you're using Next.js 13/14 with app directory

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// Define a type for submenu identifiers
type SubmenuId = 'mobile-about' | 'mobile-services' | 'mobile-contact' | null;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  // For mobile only
  const [activeSubmenu, setActiveSubmenu] = useState<SubmenuId>(null);
  
  const toggleSubmenu = (submenu: SubmenuId) => {
    if (activeSubmenu === submenu) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(submenu);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        scrolled ? 'bg-[#203864] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Oceanic Advisors Logo"
                className="h-16 sm:h-26 w-auto"
              />
            </Link>
          </div>
        </div>

        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-white text-xl font-medium ml-0 ">
          <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">Home</a>
          
          {/* About Submenu */}
          <div className="relative group">
            <a href="/about-us" className="hover:text-[#B4C7E7] transition-colors duration-300">
              About
            </a>
            
            <div className="absolute left-0 w-48 rounded-md bg-[#203864] py-1 hidden group-hover:block">
              <a href="/about-us/team" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Our Team</a>
              <a href="/about-us/history" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">History</a>
              <a href="/about-us/values" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Values</a>
            </div>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 text-white text-xl font-medium">
          {/* Services Submenu */}
          <div className="relative group">
            <a href="/services" className="hover:text-[#B4C7E7] transition-colors duration-300">
              Services
            </a>
            
            <div className="absolute left-0 w-72 rounded-md shadow-lg bg-[#203864] py-1 hidden group-hover:block">
              <a href="/services/maintenance" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Maintenance planning and oversight</a>
              <a href="/services/inspections" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Onboard inspections and audits</a>
              <a href="/services/monitoring" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Performance monitoring and analysis</a>
              <a href="/services/dry-docking" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Dry-docking management</a>
              <a href="/services/compliance" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Regulatory compliance verification</a>
              <a href="/services/assessments" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Vessel condition assessments</a>
            </div>
          </div>
          
          {/* Contact Submenu */}
          <div className="relative group">
            <a href="#" className="hover:text-[#B4C7E7] transition-colors duration-300">
              Contact
            </a>
            
            <div className="absolute right-0 w-48 rounded-md shadow-lg bg-[#203864] py-1 hidden group-hover:block">
              <a href="/contact/locations" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Locations</a>
              <a href="/contact/support" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Support</a>
              <a href="/contact/careers" className="block px-4 py-2 text-sm text-white hover:bg-[#3A5998]">Careers</a>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <button className="bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
            Let&apos;s Talk
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[#203864] w-full ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <a 
            href="#" 
            className="block text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
          >
            Home
          </a>
          
          {/* Mobile About Submenu */}
          <div>
            <button 
              className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
              onClick={() => toggleSubmenu('mobile-about')}
            >
              About
              <svg 
                className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-about' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeSubmenu === 'mobile-about' && (
              <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
                <a href="/about-us/team" className="block text-white text-md hover:text-[#B4C7E7] py-2">Our Team</a>
                <a href="/about-us/history" className="block text-white text-md hover:text-[#B4C7E7] py-2">History</a>
                <a href="/about-us/values" className="block text-white text-md hover:text-[#B4C7E7] py-2">Values</a>
              </div>
            )}
          </div>
          
          {/* Mobile Services Submenu */}
          <div>
            <button 
              className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
              onClick={() => toggleSubmenu('mobile-services')}
            >
              Services
              <svg 
                className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-services' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeSubmenu === 'mobile-services' && (
              <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
                <a href="/services/maintenance" className="block text-white text-md hover:text-[#B4C7E7] py-2">Maintenance planning and oversight</a>
                <a href="/services/inspections" className="block text-white text-md hover:text-[#B4C7E7] py-2">Onboard inspections and audits</a>
                <a href="/services/monitoring" className="block text-white text-md hover:text-[#B4C7E7] py-2">Performance monitoring and analysis</a>
                <a href="/services/dry-docking" className="block text-white text-md hover:text-[#B4C7E7] py-2">Dry-docking management</a>
                <a href="/services/compliance" className="block text-white text-md hover:text-[#B4C7E7] py-2">Regulatory compliance verification</a>
                <a href="/services/assessments" className="block text-white text-md hover:text-[#B4C7E7] py-2">Vessel condition assessments</a>
              </div>
            )}
          </div>
          
          {/* Mobile Contact Submenu */}
          <div>
            <button 
              className="flex items-center justify-between w-full text-white text-lg hover:text-[#B4C7E7] transition-colors duration-300 py-2"
              onClick={() => toggleSubmenu('mobile-contact')}
            >
              Contact
              <svg 
                className={`h-4 w-4 transition-transform ${activeSubmenu === 'mobile-contact' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeSubmenu === 'mobile-contact' && (
              <div className="pl-4 py-2 space-y-1 bg-[#1A2D50]">
                <a href="/contact/locations" className="block text-white text-md hover:text-[#B4C7E7] py-2">Locations</a>
                <a href="/contact/support" className="block text-white text-md hover:text-[#B4C7E7] py-2">Support</a>
                <a href="/contact/careers" className="block text-white text-md hover:text-[#B4C7E7] py-2">Careers</a>
              </div>
            )}
          </div>
          
          <div className="pt-2">
            <button className="w-full bg-[#B4C7E7] text-[#203864] py-2 px-6 rounded-full hover:bg-[#8FAADC] transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;