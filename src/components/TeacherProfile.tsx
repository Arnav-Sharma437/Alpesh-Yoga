"use client";

import React from "react";

export default function TeacherProfile() {
  return (
    <section className="py-20 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7941D] uppercase tracking-tight">
              Alpesh - Yoga Teacher
            </h2>
            
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              Alpesh Patel is a certified Yoga teacher, trained under world-famous Gurus at the Ramamani Iyengar Memorial Yoga Institute in Pune. He has been teaching yoga for more than 20 years to international students. His teaching style is focused on body alignment, precision, prop usage, therapeutic benefits, and hands-on adjustments.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              Alpesh’s unique alignment methodology helps yoga practitioners identify postural deviations, correct structural imbalances, and deepen their understanding of Hatha, Iyengar, and Ashtanga yoga. He teaches with deep compassion, discipline, and attention to individual needs, making complex alignments accessible to students of all levels.
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

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600"
                alt="Alpesh Patel Yoga Guru"
                className="w-full h-auto object-cover aspect-[4/3] md:aspect-square"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

