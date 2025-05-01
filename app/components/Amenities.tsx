'use client';

import React from 'react';
import {
    Ship,
    BadgeCheck,
    Flag,
    ClipboardList,
    FileText,
    Search,
    FileCheck2,
    Lock
} from 'lucide-react';
import { Button } from './ui/Button';
import { JSX } from 'react/jsx-dev-runtime';

type Amenity = {
    title: string;
    description: string;
    icon: JSX.Element;
};

const amenities: Amenity[] = [
    {
        title: 'Safety Inspection for Pleasure Yachts',
        description:
            'Ensure your yacht’s safety with a thorough inspection, covering all essential systems for a worry-free voyage.',
        icon: <Ship className="w-8 h-8 text-[#203864]" />,
    },
    {
        title: 'Seafarer Certificate Liquidity Check',
        description:
            'Assess the validity and acceptability of seafarer certificates, ensuring compliance and readiness for maritime operations.',
        icon: <BadgeCheck className="w-8 h-8 text-[#203864]" />,
    },
    {
        title: 'Flag Selection Consultation',
        description:
            'Get expert advice on choosing the most convenient flag for your vessel, tailored to your operational needs.',
        icon: <Flag className="w-8 h-8 text-[#203864]" />,
    },
    {
        title: 'Vessel/Yacht Technical Supervision',
        description:
            'Ensure optimal performance and safety through comprehensive technical supervision of your vessel or yacht.',
        icon: <ClipboardList className="w-8 h-8 text-[#203864]" />,
    },
    {
        title: 'Ultrasonic Leakproofness Testing of Holds',
        description:
            'Conduct precise ultrasonic tests to verify the leakproofness of holds, ensuring vessel integrity and preventing cargo damage.',
        icon: <Lock className="w-8 h-8 text-[#203864]" />,
    },
    {
        title: 'Documentation Process for Yacht Transactions',
        description:
            'Handle all necessary paperwork for buying or selling a vessel or yacht ensuring a smooth transaction process.',
        icon: <FileText className="w-8 h-8 text-[#203864]" />,
    },
    {
        title: 'Independent Marine Casualty Investigation',
        description:
            'Conduct impartial investigations into marine casualties and incidents to determine causes and prevent future occurrences.',
        icon: <Search className="w-8 h-8 text-[#203864]" />,
    },
    {
        title:
            'Obtaining WRC 2007, BCC 2001, CLC, and BCLC Certificates',
        description:
            'Secure the necessary WRC 2007, BCC 2001, CLC, and BCLC certificates to meet regulatory requirements.',
        icon: <FileCheck2 className="w-8 h-8 text-[#203864]" />,
    },
];

const Amenities = () => {
    return (
        <div className="bg-[#F5F7FA]">
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#203864]">Amenities & Facilities</h2>
                    </div>

                    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {amenities.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col justify-between h-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div>
                                    {item.icon}
                                    <h3 className="text-lg font-semibold text-gray-900 mt-4">{item.title}</h3>
                                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                                </div>
                                <Button className="bg-[#203864] hover:bg-[#B4C7E7] hover:text-[#203864] px-6 py-3 mt-2 text-white font-semibold rounded-sm mt-4">
                                    GET CONSULTATION
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center mt-10">

                        <Button className="bg-[#203864] hover:bg-[#B4C7E7] hover:text-[#203864] px-6 py-3 mt-2 text-white font-semibold rounded-sm ">CONTACT US</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Amenities;
