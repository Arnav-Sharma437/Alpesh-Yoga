"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner Section */}
      <section className="relative h-[85vh] min-h-[550px] flex items-center justify-center overflow-hidden pt-28">
        
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920')`,
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center">
          
          {/* Logo Icon in Center */}
          <div className="mb-6 bg-white/95 p-3 rounded-full shadow-lg inline-flex items-center justify-center">
            <img 
              src="/logo/alpesh-logo.jpeg" 
              alt="Alpesh Yoga Logo" 
              className="w-16 h-16 rounded-full object-contain" 
            />
          </div>

          {/* Heading */}
          <h1 className="font-serif font-extrabold tracking-tight text-white mb-2 leading-tight uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Best Yoga Teacher Training In India
          </h1>
          
          {/* Highlight Subheading */}
          <h2 className="font-sans font-bold uppercase tracking-widest text-[#F7941D] text-xl sm:text-2xl md:text-3xl mb-6">
            Goa & Rishikesh
          </h2>

          {/* Subtext */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed mb-8 max-w-3xl font-light">
            200-Hour, 300-Hour & 500-Hour Yoga Alliance Certified Ashtanga & Vinyasa Flow Yoga Teacher Training Courses in India.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <span>APPLY NOW</span>
            </a>

            <a
              href="/dates-prices"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md border-2 border-white hover:border-gray-200 bg-transparent text-white hover:bg-white/10 font-sans text-sm font-bold transition-all duration-300 w-full sm:w-auto"
            >
              <span>VIEW DATES & PRICES</span>
            </a>
          </div>

        </div>
      </section>

      {/* View All Dates Pill Section below Banner */}
      <div className="bg-white py-6 border-b border-gray-150 flex justify-center items-center">
        <a 
          href="/dates-prices"
          className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:text-[#F7941D] hover:border-[#F7941D] hover:bg-gray-50 font-sans text-xs font-bold transition-all duration-300"
        >
          <span>VIEW ALL DATES & PRICES</span>
        </a>
      </div>
    </div>
  );
}


