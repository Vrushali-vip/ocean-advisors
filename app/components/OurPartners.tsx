'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import Image from 'next/image';

const logos = [
    '/partners/p1.png',
    '/partners/p2.png',
    '/partners/p3.png',
    '/partners/p4.png',
    '/partners/p5.png',
    '/partners/p6.png',
    '/partners/p7.png',
    '/partners/p8.png',
    '/partners/p9.png',
];

const OurPartners = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 5,
            spacing: 16,
        },
        slideChanged(s) {
            setCurrentSlide(s.track.details.rel);
        },
        created(s) {
            setInterval(() => {
                s.next();
            }, 3000);
        },
    });

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#203864]">
                        Our Partners
                    </h2>
                </div>

                <div ref={sliderRef} className="keen-slider">
                    {logos.map((logo, index) => (
                        <div key={index} className="keen-slider__slide flex justify-center items-center p-4 border rounded">
                            <Image
                                src={logo}
                                alt={`Partner ${index + 1}`}
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {logos.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-[#203864]' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
