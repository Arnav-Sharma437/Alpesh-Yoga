"use client";

import React from "react";

export default function PromoGallerySection() {
  const LEFT_IMAGES = [
    "/gallery/IMG-20181217-WA0045.jpg",
    "/gallery/IMG_20181218_213938.jpg",
    "/gallery/alpesh-yoga-school-india-1.jpg",
    "/gallery/IMG-20181217-WA0046.jpg"
  ];

  const RIGHT_IMAGES = [
    "/gallery/alpesh-yoga-teacher-training-goa-india-1.jpg",
    "/gallery/IMG_20181218_111130.jpg",
    "/gallery/IMG-20181217-WA0034.jpg",
    "/gallery/IMG-20181217-WA0043.jpg"
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
            <h4 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-widest text-[#F7941D] mb-4">
              Dates & Prices
            </h4>
            <p className="font-sans text-xs md:text-sm text-gray-300 mb-8 font-light leading-relaxed max-w-[240px]">
              To Secure Your Spot & Begin Your Transformation
            </p>
            <a
              href="/dates-prices"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
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

