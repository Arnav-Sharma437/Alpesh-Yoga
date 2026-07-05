"use client";

import React from "react";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const REVIEWS = [
    {
      quote: "Alpesh is a true master of skeletal alignment. I came to Dharamshala with chronic lower back compression, and within one week of his intensive classes, I understood the muscle engagements I was missing. His adjustments are sharp, strict, and incredibly healing.",
      name: "Sarah Jenkins",
      country: "United Kingdom",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150"
    },
    {
      quote: "I completed my 200-Hour YTTC with Alpesh. Unlike commercialized yoga programs in other cities, the training here is personal, disciplined, and rigorous. I left not just knowing the poses, but understanding how to teach them safely with proper adjustments.",
      name: "David Miller",
      country: "Germany",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150"
    },
    {
      quote: "The prop methodology here completely transformed my practice. Using belts, blocks, and wall setups allowed me to open my tight shoulders safely. Alpesh's deep understanding of anatomy and structural therapeutics is truly unmatched.",
      name: "Chloe Dupont",
      country: "France",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
    }
  ];

  return (
    <section className="py-20 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c2272d] mb-4 tracking-tight uppercase">
            What our students say...
          </h2>
          <div className="mb-4 text-[#c2272d]">
            <MessageSquare className="w-8 h-8" />
          </div>
          <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            Hear from our graduates and yoga practitioners who transformed their practice with Alpesh Yoga.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-1 text-[#f58220] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Quote */}
                <p className="font-sans text-sm text-gray-600 leading-relaxed italic mb-6 font-light">
                  "{review.quote}"
                </p>
              </div>
              
              {/* User Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-55">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="font-serif text-sm font-bold text-gray-800">
                    {review.name}
                  </h4>
                  <p className="font-sans text-xs text-gray-500 font-light">
                    {review.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Reviews Button */}
        <a
          href="/testimonials"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#c2272d] hover:bg-[#a11f24] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow"
        >
          SEE MORE REVIEWS
        </a>

      </div>
    </section>
  );
}
