'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Teacher",
    message: "I'm a lot happier now after I started talking to Monica. She helped me manage my work stress effectively.",
    image: "/images/testimonials/avatar-1.webp"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    message: "The daily mindfulness exercises have transformed how I handle anxiety. I feel more in control now.",
    image: "/images/testimonials/avatar-2.webp"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Student",
    message: "Monica's guidance helped me overcome my social anxiety. I'm more confident in social situations now.",
    image: "/images/testimonials/avatar-3.webp"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Healthcare Worker",
    message: "The personalized care and attention I received was incredible. It's like having a supportive friend available 24/7.",
    image: "/images/testimonials/avatar-4.webp"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Small Business Owner",
    message: "Managing business stress became easier with Monica's techniques. I'm sleeping better and feeling more balanced.",
    image: "/images/testimonials/avatar-5.webp"
  }
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPos = 0;

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPos += 1;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      
      scrollContainer.scrollLeft = scrollPos;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  // Duplicate testimonials to create seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full bg-gradient-to-b from-neutral-50 to-white py-8" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-center text-primary-500 mb-8">
          Transforming Lives Together
        </h2>
        <p className="text-center text-primary-600 mb-12 max-w-2xl mx-auto">
          Join thousands of people who have found their path to mental wellness with our AI companion
        </p> */}
        
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden whitespace-nowrap py-4"
          >
            {allTestimonials.map((testimonial) => (
              <div
                key={`${testimonial.id}-${Math.random()}`}
                className="inline-flex flex-none w-[300px] md:w-[400px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">{testimonial.name}</h3>
                      <p className="text-sm text-primary-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-primary-700 whitespace-normal">{testimonial.message}</p>
                  <div className="mt-4 flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
