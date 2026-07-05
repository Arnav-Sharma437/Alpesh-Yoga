"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const REVIEWS = [
  {
    quote: "Alpesh is a true master of skeletal alignment. I came to Dharamshala with chronic lower back compression, and within one week of his intensive classes, I understood the muscle engagements I was missing. His adjustments are sharp, strict, and incredibly healing.",
    name: "Sarah Jenkins",
    origin: "United Kingdom",
    badge: "Intensive Course Student",
  },
  {
    quote: "I completed my 200-Hour YTTC with Alpesh. Unlike commercialized yoga programs in other cities, the training here is personal, disciplined, and rigorous. I left not just knowing the poses, but understanding how to teach them safely with adjustments.",
    name: "David Miller",
    origin: "Germany",
    badge: "200-Hour Graduate",
  },
  {
    quote: "The prop methodology here completely transformed my practice. Using blocks, straps, and wall setups allowed me to open my tight shoulders safely. Alpesh's deep understanding of anatomy and structural therapeutics is unmatched.",
    name: "Chloe Dupont",
    origin: "France",
    badge: "Therapeutic Practitioner",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % REVIEWS.length);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    }
    if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-cream-100/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
            Student Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
            Trusted by Practitioners Globally
          </h2>
        </div>

        {/* Carousel Window */}
        <div 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative bg-white rounded-3xl p-8 md:p-16 border border-sage-100/50 shadow-md max-w-4xl mx-auto active:scale-[0.99] transition-transform duration-350 select-none cursor-grab active:cursor-grabbing"
        >
          
          {/* Quote icon watermark */}
          <Quote className="absolute top-8 left-8 w-16 h-16 text-sage-100/40 pointer-events-none" />

          {/* Testimonial item */}
          <div className="relative z-10 space-y-8 min-h-[220px] flex flex-col justify-between">
            
            {/* Stars */}
            <div className="flex gap-1 text-terracotta-500">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="font-serif text-lg md:text-xl text-forest-600 leading-relaxed italic">
              "{REVIEWS[current].quote}"
            </blockquote>

            {/* Student Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-sage-50">
              <div>
                <h4 className="font-serif text-lg font-bold text-forest-600">
                  {REVIEWS[current].name}
                </h4>
                <p className="font-sans text-xs text-sage-600">
                  {REVIEWS[current].origin}
                </p>
              </div>
              <span className="text-xs font-semibold text-terracotta-600 bg-terracotta-500/10 px-3 py-1 rounded-full w-fit">
                {REVIEWS[current].badge}
              </span>
            </div>

          </div>

          {/* Left/Right Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1 sm:-left-4 md:-left-6 z-20">
            <button
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-full bg-white border border-sage-100 text-forest-600 hover:text-terracotta-600 hover:shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-1 sm:-right-4 md:-right-6 z-20">
            <button
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-full bg-white border border-sage-100 text-forest-600 hover:text-terracotta-600 hover:shadow-md transition-all duration-200 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>

        {/* Slide Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                current === idx ? "bg-terracotta-600 w-6" : "bg-sage-200 hover:bg-sage-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}
