// 'use client'; // Client component for animations

// import { motion } from 'framer-motion';
// import { Target, Handshake } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// const MissionVisionSection = () => {
//     return (
//         <><section className="relative w-full h-screen overflow-hidden">
//             {/* Background Image */}
//             <img
//                 src="/ves.jpg"
//                 alt="Ship Background"
//                 className="absolute inset-0 w-full h-full object-cover z-0" />

//             {/* Black Overlay */}
//             <div className="absolute inset-0 z-9" />

//             <div className="relative z-9 flex flex-col md:flex-row items-center justify-center h-full text-white px-4">
//                 <div className="flex flex-col items-center max-w-md text-center md:text-left md:mr-16">
//                     <Target className="w-16 h-16 mb-6" />

//                     <h2 className="text-3xl font-bold mb-4">Mission</h2>
//                     <p className="text-lg leading-relaxed">
//                         To empower the maritime industry with trusted guidance, cost-effective solutions, and comprehensive support, ensuring vessels operate at peak efficiency while adhering to the highest safety and environmental standards.
//                     </p>
//                 </div>

//                 <div className="flex flex-col items-center max-w-md text-center md:text-left md:ml-16 mt-10 md:mt-0">
//                     <Handshake className="w-16 h-16 mb-6" />

//                     <h2 className="text-3xl font-bold mb-4">Vision</h2>
//                     <p className="text-lg leading-relaxed">
//                         To empower the maritime industry with trusted guidance, cost-effective solutions, and comprehensive support, ensuring vessels operate at peak efficiency while adhering to the highest safety and environmental standards.
//                     </p>
//                 </div>
//             </div>
//         </section>
//         <section className="bg-[#203864] py-20 text-white text-center">
//                 <div className="px-4">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7 }}
//                         viewport={{ once: true }}
//                         className="text-3xl md:text-4xl font-bold"
//                     >
//                         Trusted by Industry Leaders
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3, duration: 0.7 }}
//                         viewport={{ once: true }}
//                         className="mt-6 text-lg max-w-2xl mx-auto"
//                     >
//                         With years of experience, international approvals, and affiliations with leading maritime bodies, we bring unparalleled expertise.
//                     </motion.p>
//                 </div>
//             </section></>
//     );
// };

// export default MissionVisionSection;


// 'use client'; // Client component for animations

// import { motion } from 'framer-motion';
// import { Target, Handshake } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// const MissionVisionSection = () => {
//     return (
//         <>
//             <section className="relative w-full h-screen overflow-hidden">
//                 {/* Background Image */}
//                 <img
//                     src="/ves.jpg"
//                     alt="Ship Background"
//                     className="absolute inset-0 w-full h-full object-cover z-0"
//                 />

//                 {/* Black Overlay */}
//                 <div className="absolute inset-0 z-1" />

//                 <div className="relative z-9 flex items-center justify-center h-full text-white px-4">
//                     <div className="flex flex-col items-center text-center max-w-md md:text-center md:mr-16">
//                         <Target className="w-16 h-16 mb-6" />
//                         <h2 className="text-3xl font-bold mb-4">Mission</h2>
//                         <p className="text-lg leading-relaxed">
//                             To empower the maritime industry with trusted guidance, cost-effective solutions, and comprehensive support, ensuring vessels operate at peak efficiency while adhering to the highest safety and environmental standards.
//                         </p>
//                     </div>

//                     <div className="flex flex-col items-center text-center max-w-md md:text-center md:ml-16 mt-10 md:mt-0">
//                         <Handshake className="w-16 h-16 mb-6" />
//                         <h2 className="text-3xl font-bold mb-4">Vision</h2>
//                         <p className="text-lg leading-relaxed">
//                             To empower the maritime industry with trusted guidance, cost-effective solutions, and comprehensive support, ensuring vessels operate at peak efficiency while adhering to the highest safety and environmental standards.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="bg-[#203864] py-20 text-white text-center">
//                 <div className="px-4">
//                     <motion.h2
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.7 }}
//                         viewport={{ once: true }}
//                         className="text-3xl md:text-4xl font-bold"
//                     >
//                         Trusted by Industry Leaders
//                     </motion.h2>
//                     <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 0.3, duration: 0.7 }}
//                         viewport={{ once: true }}
//                         className="mt-6 text-lg max-w-2xl mx-auto"
//                     >
//                         With years of experience, international approvals, and affiliations with leading maritime bodies, we bring unparalleled expertise.
//                     </motion.p>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default MissionVisionSection;

'use client'; 

import { motion } from 'framer-motion';
import { Target, Handshake } from 'lucide-react';
import React from 'react';

const MissionVisionSection = () => {
    return (
        <>
            <section className="relative w-full py-20 overflow-hidden bg-[#203864]">

                <div className="absolute inset-0 z-1 hidden md:block" />

                <div className="relative z-9 flex flex-col md:flex-row items-center justify-center h-full text-white px-4">
                    <div className="flex flex-col items-center text-center max-w-md md:mr-16 mb-16 md:mb-0">
                        <Target className="w-16 h-16 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Mission</h2>
                        <p className="text-lg leading-relaxed">
                            To empower the maritime industry with trusted guidance, cost-effective solutions, and comprehensive support, ensuring vessels operate at peak efficiency while adhering to the highest safety and environmental standards.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center max-w-md md:ml-16">
                        <Handshake className="w-16 h-16 mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Vision</h2>
                        <p className="text-lg leading-relaxed">
                            To empower the maritime industry with trusted guidance, cost-effective solutions, and comprehensive support, ensuring vessels operate at peak efficiency while adhering to the highest safety and environmental standards.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" py-20 text-[#203864] text-center">
                <div className="px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold"
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-6 text-lg max-w-2xl mx-auto"
                    >
                        With years of experience, international approvals, and affiliations with leading maritime bodies, we bring unparalleled expertise.
                    </motion.p>
                </div>
            </section>
        </>
    );
};

export default MissionVisionSection;