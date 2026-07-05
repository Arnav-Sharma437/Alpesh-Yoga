"use client";

import React from "react";
import { Users } from "lucide-react";

export default function TeachersTeamSection() {
  const TEACHERS = [
    {
      name: "Alpesh",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400",
      role: "Founder & Master Alignment Teacher"
    },
    {
      name: "Vijay",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400",
      role: "Ashtanga & Vinyasa Flow Teacher"
    },
    {
      name: "Mira",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
      role: "Pranayama, Meditation & Philosophy"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7941D] mb-4 tracking-tight uppercase">
            Meet Our Yoga Teachers
          </h2>
          <div className="mb-4 text-[#F7941D]">
            <Users className="w-8 h-8" />
          </div>
          <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            Alpesh Yoga is a team of certified and highly experienced yoga teachers dedicated to helping you deepen your practice and align your mind, body, and soul.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 w-full max-w-4xl">
          {TEACHERS.map((teacher, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Image with circular framing / mandala border */}
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-[#F7941D]/10 group-hover:border-[#F7941D]/30 transition-colors duration-300 shadow-md">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name badge (Solid red box with white text like the layout image) */}
              <div className="bg-[#F7941D] text-white font-sans text-sm font-extrabold px-6 py-1.5 rounded-full shadow-sm mb-2 uppercase tracking-wide">
                {teacher.name}
              </div>

              {/* Role */}
              <p className="font-sans text-xs text-gray-500 font-medium">
                {teacher.role}
              </p>
            </div>
          ))}
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

