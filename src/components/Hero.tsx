"use client";

import React from "react";
import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920')`,
          }}
        >
          {/* Subtle gradient overlay to ensure text pops but feels natural */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center mt-16">
          
          {/* Heading */}
          <h1 className="font-serif text-white mb-6 leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] tracking-tight max-w-4xl">
            Best Yoga Teacher Training In India
          </h1>
          
          {/* Subtext */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl font-light">
            200-Hour, 300-Hour & 500-Hour Yoga Alliance Certified Ashtanga & Vinyasa Flow Yoga Teacher Training Courses in Goa & Dharamshala.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/apply"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-olive-500 hover:bg-olive-600 text-white font-sans text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 w-full sm:w-auto"
            >
              Apply Now
            </a>

            <a
              href="#video"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full border border-white text-white hover:bg-white hover:text-charcoal-900 font-sans text-sm font-bold uppercase tracking-wider transition-all duration-300 w-full sm:w-auto"
            >
              <PlayCircle className="w-5 h-5" />
              <span>Watch Video</span>
            </a>
          </div>

        </div>
        
        {/* Bottom Trust Indicators (Optional placeholder for the floating badges in House of Om) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 text-white/70 text-sm font-medium">
          <div className="flex items-center gap-2">
             <span>★★★★★</span>
             <span>Trustpilot</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-white/40"></div>
          <div className="flex items-center gap-2">
             <span>★★★★★</span>
             <span>Google Reviews</span>
          </div>
        </div>
      </section>
    </div>
  );
}
