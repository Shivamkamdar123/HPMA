"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for testimonials
export type Testimonial = {
  id: number;
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The music classes have been amazing for my daughter. She’s grown so much in confidence!",
    author: "Priya Sharma",
    role: "Parent",
  },
  {
    id: 2,
    quote: "Learning guitar here has been the best experience. The teachers are so supportive.",
    author: "Aarav Mehta",
    role: "Student",
  },
  {
    id: 3,
    quote: "I love the way lessons are interactive and fun. My son actually looks forward to practice!",
    author: "Neha Kapoor",
    role: "Parent",
  },
  {
    id: 4,
    quote: "Piano lessons have helped me not only in music but also in concentration and discipline.",
    author: "Rohan Verma",
    role: "Student",
  },
  {
    id: 5,
    quote: "The teachers are patient and encouraging. My daughter now plays confidently in school events.",
    author: "Sneha Iyer",
    role: "Parent",
  },
  {
    id: 6,
    quote: "Drum classes are super fun! I’ve learned to play my favorite songs already.",
    author: "Kabir Nair",
    role: "Student",
  },
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <Slider {...settings}>
        {testimonials.map((t) => (
          <div key={t.id} className="px-8">
            <div className="rounded-2xl bg-white/50 p-6 shadow-xl shadow-yellow-600 transition-shadow duration-300">
              <p className="text-lg italic text-gray-700">“{t.quote}”</p>
              <div className="mt-4 text-right">
                <h4 className="text-base font-semibold text-gray-900">{t.author}</h4>
                {t.role && (
                  <p className="text-sm text-gray-500">{t.role}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
