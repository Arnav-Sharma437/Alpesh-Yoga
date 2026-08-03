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
          <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-200">
            Charity and Social Impact
          </p>
          <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl md:text-[52px]">
            Making a Difference Together
          </h2>
        </div>

        {/* Content Card overlapping image */}
        <div className="relative max-w-3xl overflow-hidden rounded-[24px] bg-white/95 p-8 shadow-2xl backdrop-blur-md md:p-12">
          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800"
                alt="Community Work"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <h3 className="mb-4 font-serif text-2xl font-normal text-charcoal-900">
                Giving Back to the Community
              </h3>
              <p className="mb-8 font-sans text-[1.1rem] font-normal leading-[1.7] text-charcoal-800">
                At Alpesh Yoga, we believe in the power of Karma Yoga (selfless action). A portion of
                our proceeds supports local community projects, providing education, meals, and
                resources to underserved areas in Goa and Dharamshala. Join us in making a tangible
                difference.
              </p>

              <a href="/about#karma-yoga" className="btn-primary self-start">
                Join our charity projects
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
