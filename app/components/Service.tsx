
// import React from 'react';

// export default function Service() {
//   return (
//     <div className="bg-[#F5F7FA] min-width-screen">
//     <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-center text-[#203864] mb-16">
//         What makes us special
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* 24/7 Reliable */}
//         <div className="bg-[#8FAADC] rounded-lg p-6 flex flex-col items-start">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
//               <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
//               <line x1="12" y1="19" x2="12" y2="22"></line>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">24/7 Reliable</h2>
//           <p className="mt-2 text-white">Help and Support</p>
//         </div>

//         {/* 22 Years */}
//         <div className="bg-[#203864] rounded-lg p-6 flex flex-col items-start">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//               <line x1="16" y1="2" x2="16" y2="6"></line>
//               <line x1="8" y1="2" x2="8" y2="6"></line>
//               <line x1="3" y1="10" x2="21" y2="10"></line>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">22 Years</h2>
//           <p className="mt-2 text-white">Experience in the field of Oceanic<br />Advisors shipping</p>
//         </div>

//         {/* 10+ Flags */}
//         <div className="bg-[#8FAADC] rounded-lg p-6 flex flex-col items-start">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
//               <line x1="4" y1="22" x2="4" y2="15"></line>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">10+ Flags</h2>
//           <p className="mt-2 text-white">Official representation</p>
//         </div>

//         {/* Unique */}
//         <div className="bg-[#203864] rounded-lg p-6 flex flex-col items-start">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//               <circle cx="9" cy="7" r="4"></circle>
//               <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//               <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">Unique</h2>
//           <p className="mt-2 text-white">Multifunctional maritime center</p>
//         </div>

//         {/* Registration */}
//         <div className="bg-[#8FAADC] rounded-lg p-6 flex flex-col items-start">
//           <div className="mb-4 text-white">
//             <div className="w-8 h-8 rounded-full bg-white text-[#8FAADC] flex items-center justify-center font-bold">
//               R
//             </div>
//           </div>
//           <h2 className="text-xl font-bold text-white">Registration</h2>
//           <p className="mt-2 text-white">First hand</p>
//         </div>

//         {/* Staff */}
//         <div className="bg-[#203864] rounded-lg p-6 flex flex-col items-start">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">Staff</h2>
//           <p className="mt-2 text-white">Competent and Experienced</p>
//         </div>

//         {/* 3+ Class Societies */}
//         <div className="bg-[#8FAADC] rounded-lg p-6 flex flex-col items-start col-span-1 md:col-span-1 lg:col-span-1">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="12" cy="12" r="10"></circle>
//               <line x1="2" y1="12" x2="22" y2="12"></line>
//               <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">3+ Class Societies</h2>
//           <p className="mt-2 text-white">Approved by over 40 Maritime Administrations</p>
//         </div>

//         {/* Smart Service */}
//         <div className="bg-[#203864] rounded-lg p-6 flex flex-col items-start col-span-1 md:col-span-1 lg:col-span-2">
//           <div className="mb-4 text-white">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="12" cy="12" r="10"></circle>
//               <line x1="2" y1="12" x2="22" y2="12"></line>
//               <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//             </svg>
//           </div>
//           <h2 className="text-xl font-bold text-white">Smart Service</h2>
//           <p className="mt-2 text-white">All over the world</p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }


// import React from 'react';
// import {
//   Mic,
//   CalendarDays,
//   Flag,
//   Users,
//   BadgeCheck,
//   MessageSquare,
//   Globe2,
//   Rocket
// } from 'lucide-react';

// export default function Service() {
//   return (
//     <div className="bg-[#F5F7FA] min-w-screen">
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <h1 className="text-4xl font-bold text-center text-[#203864] mb-16">
//           What makes us special
//         </h1>

//         {/* Top Grid: 6 cards in 2 rows of 3 */}
//         <div className="flex flex-wrap justify-center gap-6">
//           {[
//             {
//               icon: <Mic className="w-8 h-8" />,
//               title: '24/7 Reliable',
//               description: 'Help and Support',
//               bg: '#8FAADC'
//             },
//             {
//               icon: <CalendarDays className="w-8 h-8" />,
//               title: '22 Years',
//               description: 'Experience in the field of Oceanic\nAdvisors shipping',
//               bg: '#203864'
//             },
//             {
//               icon: <Flag className="w-8 h-8" />,
//               title: '10+ Flags',
//               description: 'Official representation',
//               bg: '#8FAADC'
//             },
//             {
//               icon: <Users className="w-8 h-8" />,
//               title: 'Unique',
//               description: 'Multifunctional maritime center',
//               bg: '#203864'
//             },
//             {
//               icon: <BadgeCheck className="w-8 h-8" />,
//               title: 'Registration',
//               description: 'First hand',
//               bg: '#8FAADC'
//             },
//             {
//               icon: <MessageSquare className="w-8 h-8" />,
//               title: 'Staff',
//               description: 'Competent and Experienced',
//               bg: '#203864'
//             }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="w-80 rounded-lg p-6 flex flex-col items-start"
//               style={{ backgroundColor: item.bg }}
//             >
//               <div className="mb-4 text-white">{item.icon}</div>
//               <h2 className="text-xl font-bold text-white">{item.title}</h2>
//               <p className="mt-2 text-white whitespace-pre-line">{item.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Centered Row: 2 Cards */}
//         <div className="flex justify-center gap-6 mt-6 flex-wrap">
//           {[
//             {
//               icon: <Globe2 className="w-8 h-8" />,
//               title: '3+ Class Societies',
//               description: 'Approved by over 40 Maritime Administrations',
//               bg: '#8FAADC'
//             },
//             {
//               icon: <Rocket className="w-8 h-8" />,
//               title: 'Smart Service',
//               description: 'All over the world',
//               bg: '#203864'
//             }
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="w-80 rounded-lg p-6 flex flex-col items-start"
//               style={{ backgroundColor: item.bg }}
//             >
//               <div className="mb-4 text-white">{item.icon}</div>
//               <h2 className="text-xl font-bold text-white">{item.title}</h2>
//               <p className="mt-2 text-white">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import {
  Mic,
  CalendarDays,
  Flag,
  Users,
  BadgeCheck,
  MessageSquare,
  Globe2,
  Rocket
} from 'lucide-react';

export default function Service() {
  return (
    <div className="bg-[#F5F7FA] overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#203864] mb-16">
          What makes us special
        </h1>

        {/* Top Grid: 6 cards in 2 rows of 3 */}
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              icon: <Mic className="w-8 h-8" />,
              title: '24/7 Reliable',
              description: 'Help and Support',
              bg: '#8FAADC'
            },
            {
              icon: <CalendarDays className="w-8 h-8" />,
              title: '22 Years',
              description: 'Experience in the field of Oceanic\nAdvisors shipping',
              bg: '#203864'
            },
            {
              icon: <Flag className="w-8 h-8" />,
              title: '10+ Flags',
              description: 'Official representation',
              bg: '#8FAADC'
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Unique',
              description: 'Multifunctional maritime center',
              bg: '#203864'
            },
            {
              icon: <BadgeCheck className="w-8 h-8" />,
              title: 'Registration',
              description: 'First hand',
              bg: '#8FAADC'
            },
            {
              icon: <MessageSquare className="w-8 h-8" />,
              title: 'Staff',
              description: 'Competent and Experienced',
              bg: '#203864'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="w-full max-w-sm rounded-lg p-8 flex flex-col items-start"
              style={{ backgroundColor: item.bg }}
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-white whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Centered Row: 2 Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            {
              icon: <Globe2 className="w-8 h-8" />,
              title: '3+ Class Societies',
              description: 'Approved by over 40 Maritime Administrations',
              bg: '#8FAADC'
            },
            {
              icon: <Rocket className="w-8 h-8" />,
              title: 'Smart Service',
              description: 'All over the world',
              bg: '#203864'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="w-full max-w-sm rounded-lg p-8 flex flex-col items-start"
              style={{ backgroundColor: item.bg }}
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <h2 className="text-2xl font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
