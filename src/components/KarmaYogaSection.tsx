"use client";

import React from "react";

export default function KarmaYogaSection() {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal-900">
      
      {/* Full Width Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-charcoal-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        
        {/* Top Header */}
        <div className="mb-12">
          <p className="font-sans text-olive-200 font-bold uppercase tracking-widest text-xs mb-4">
            Karma Yoga
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium text-white tracking-tight">
            Make a Difference Together
          </h2>
        </div>

        {/* Content Card overlapping image */}
        <div className="bg-white/95 backdrop-blur-md rounded-[24px] p-8 md:p-12 max-w-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle Decorative Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-mandala-pattern opacity-30 transform translate-x-1/4 -translate-y-1/4 pointer-events-none rounded-full"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="rounded-xl overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800" 
                alt="Community Work" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-4">
                Giving Back to the Community
              </h3>
              <p className="font-sans text-charcoal-500 text-sm leading-relaxed font-light mb-8">
                At Alpesh Yoga, we believe in the power of Karma Yoga (selfless action). A portion of our proceeds supports local community projects, providing education, meals, and resources to underserved areas in Goa and Dharamshala. Join us in making a tangible difference.
              </p>
              
              <a
                href="/about#karma-yoga"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-olive-500 hover:bg-olive-600 text-white font-sans text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 self-start"
              >
                Learn More
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
