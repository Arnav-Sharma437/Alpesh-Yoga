"use client";

import React from "react";

export default function PromoGallerySection() {
  const LEFT_IMAGES = [
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=300",
    "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=300",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=300"
  ];

  const RIGHT_IMAGES = [
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=300",
    "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=300",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=300",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=300"
  ];

  return (
    <section className="py-16 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 2x2 Image Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {LEFT_IMAGES.map((url, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src={url} 
                  alt={`Alpesh Yoga Student Gallery ${i + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Center: Call-to-action Gradient Card */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#1b1e36] via-[#2f1b4a] to-[#0d59cc] rounded-2xl shadow-xl flex flex-col justify-center items-center text-center p-8 md:p-12 text-white border border-gray-800">
            <h3 className="font-serif text-lg md:text-xl font-bold uppercase tracking-wider mb-2 leading-relaxed">
              View Our
            </h3>
            <h4 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest text-[#f58220] mb-4">
              Dates & Prices
            </h4>
            <p className="font-sans text-xs md:text-sm text-gray-300 mb-8 font-light leading-relaxed max-w-[240px]">
              To Secure Your Spot & Begin Your Transformation
            </p>
            <a
              href="/dates-prices"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#f58220] hover:bg-[#d46d14] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              DATES & PRICES
            </a>
          </div>

          {/* Right: 2x2 Image Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {RIGHT_IMAGES.map((url, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-200">
                <img 
                  src={url} 
                  alt={`Alpesh Yoga Class Gallery ${i + 5}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
