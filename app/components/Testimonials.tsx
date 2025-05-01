'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useState } from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah B.",
    location: "Miami, USA",
    rating: 5,
    text: "Engaging Oceanic Advisors for court and arbitration services was the best decision. Their dedication and expertise led to a favorable outcome in our maritime dispute."
  },
  {
    name: "James K.",
    location: "Wellington, New Zealand",
    rating: 5,
    text: "Oceanic Advisors' legal advisory services were instrumental in maintaining compliance for our vessels. Their team is highly professional and knowledgeable in maritime law."
  },
  {
    name: "Fatima A.",
    location: "Dubai, UAE",
    rating: 4,
    text: "The Oceanic Advisors team guided us through a complex vessel construction project. Their attention to detail and understanding of regulations ensured everything was on track."
  },
  {
    name: "Michael L.",
    location: "Rotterdam, Netherlands",
    rating: 5,
    text: "Working with Oceanic Advisors changed our approach to maritime compliance. Their strategic advice helped us navigate complex international regulations with confidence."
  },
  {
    name: "Chen W.",
    location: "Singapore",
    rating: 5,
    text: "The expertise provided by Oceanic Advisors in our shipping dispute was exceptional. Their team's thorough understanding of maritime law made all the difference."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-6 rounded shadow-lg h-full flex flex-col justify-between">
      <div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              fill={i < testimonial.rating ? "#203864" : "none"}
              color={i < testimonial.rating ? "#203864" : "#D1D5DB"}
            />
          ))}
        </div>
        <p className=" mb-4">{testimonial.text}</p>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <p className="font-semibold text-[#203864]">{testimonial.name}</p>
          <p className="text-sm">{testimonial.location}</p>
        </div>
        <div className="text-[#203864] text-5xl font-montserrat">
          ❞
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(max-width: 640px)": {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setInterval(() => {
        s.next();
      }, 5000);
    },
  });

  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#203864]">
            What People Are Saying About Us
          </h2>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="keen-slider__slide">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? 'bg-[#203864]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;