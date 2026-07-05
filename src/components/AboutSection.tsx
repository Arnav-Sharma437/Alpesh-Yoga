"use client";

import React from "react";
import { Check } from "lucide-react";

export default function AboutSection() {
  const PROGRAMS = [
    "100 Hour Yoga Teacher Training Course in India",
    "200 Hour Yoga Teacher Training Course in India",
    "300 Hour Yoga Teacher Training Course in India",
    "Yoga Retreats in Goa & Rishikesh"
  ];

  return (
    <section className="py-20 bg-white text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7941D] mb-6 tracking-tight uppercase">
          About Alpesh Yoga
        </h2>

        {/* Paragraph 1 */}
        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mb-4 font-light">
          Alpesh Yoga is a registered yoga school with Yoga Alliance, USA. We have been training yoga students in the art of yoga and meditation for more than a decade. Our teaching is based on Iyengar alignment principles, combined with Hatha, Ashtanga, and Vinyasa Flow styles, to provide a comprehensive and deep understanding of yoga.
        </p>

        {/* Paragraph 2 */}
        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mb-8 font-light">
          We offer Hatha Yoga, Ashtanga Yoga, Vinyasa Yoga, Pranayama, Meditation, Anatomy, Philosophy, Teaching Methodology and Adjustment techniques in our courses. We offer yoga courses and retreats in three beautiful locations in India: Dharamshala (Himalayas), Goa (Beaches) and Rishikesh (Ganges).
        </p>

        {/* Bullet List */}
        <div className="w-full max-w-lg mb-8 text-left bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <ul className="space-y-3">
            {PROGRAMS.map((prog, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="p-0.5 rounded-full bg-[#F7941D]/10 text-[#F7941D] mt-1 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="font-sans text-sm text-gray-700 font-medium">{prog}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Read More Button */}
        <a
          href="/about"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow"
        >
          READ MORE
        </a>

      </div>
    </section>
  );
}

