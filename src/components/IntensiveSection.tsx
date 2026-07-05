"use client";

import React from "react";

export default function IntensiveSection() {
  return (
    <section className="py-16 bg-[#faf8f5] text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c2272d] mb-6 tracking-tight uppercase leading-tight">
          Eight-days Intensive Hatha & Iyengar Yoga Program in India
        </h2>

        {/* Description Text */}
        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mb-4 font-light">
          We offer 8 days intensive Hatha and Iyengar yoga program. In this course, you will learn the basics of body alignment and breathing techniques. This course is suitable for beginners and intermediate yoga students who want to build a solid home practice or correct their posture.
        </p>

        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mb-8 font-light">
          You will practice twice daily, with dedicated time for posture correction, prop exploration (straps, blocks, wall-ropes), and restorative sessions under the guidance of alignment master teacher Alpesh Patel. The program helps you build strength, stability, flexibility, and awareness.
        </p>

        {/* Read More Button */}
        <a
          href="/goa/8-day-intensive"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#c2272d] hover:bg-[#a11f24] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow"
        >
          READ MORE
        </a>

      </div>
    </section>
  );
}
