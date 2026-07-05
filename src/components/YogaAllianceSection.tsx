"use client";

import React from "react";

export default function YogaAllianceSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7941D] uppercase tracking-tight leading-tight">
              Yoga Alliance Certification & Yoga Federation
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              Alpesh Yoga is registered and certified by **Yoga Alliance, USA** and the **World Yoga Federation**. Our syllabus complies strictly with the international standards set for Hatha, Iyengar alignment, Ashtanga, and Vinyasa yoga teachings.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              Upon successful completion of our 100 Hour, 200 Hour, or 300 Hour Teacher Training courses, students receive a globally valid yoga teaching credential. This certification allows you to register as a Registered Yoga Teacher (RYT) and teach yoga in any country across the globe.
            </p>

            <div className="pt-2">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow"
              >
                READ MORE
              </a>
            </div>
          </div>

          {/* Right Column: Logos / Accreditation badging */}
          <div className="flex justify-center items-center gap-8 bg-gray-50 p-8 rounded-2xl border border-gray-100">
            {/* Logo 1: Yoga Alliance */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-24 h-24 rounded-full border-4 border-amber-600/20 bg-white flex items-center justify-center p-3 shadow-sm">
                <svg className="w-full h-full text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </div>
              <span className="font-sans text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">
                RYS 200 / RYS 300
              </span>
              <span className="font-sans text-[9px] text-gray-400">
                Yoga Alliance USA
              </span>
            </div>

            {/* Divider */}
            <div className="h-20 w-px bg-gray-200"></div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-24 h-24 rounded-full border-4 border-[#F7941D]/20 bg-white flex items-center justify-center p-3 shadow-sm">
                <svg className="w-full h-full text-[#F7941D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <span className="font-sans text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest">
                Certified School
              </span>
              <span className="font-sans text-[9px] text-gray-400">
                World Yoga Federation
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

