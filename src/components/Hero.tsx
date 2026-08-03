"use client";

import React from "react";
import { Award, Globe2, GraduationCap, Flower2, Mouse } from "lucide-react";

const highlights = [
  {
    icon: Award,
    label: "Yoga Alliance Certified",
  },
  {
    icon: Globe2,
    label: "Goa & Dharamshala",
  },
  {
    icon: GraduationCap,
    label: "Thousands of Graduates",
  },
  {
    icon: Flower2,
    label: "Alignment-Based Training",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Full-bleed cinematic background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/70" />
      </div>

      {/* Centered hero content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-36 pb-40 sm:pb-44 text-center flex flex-col items-center">
        <h1 className="font-serif text-white text-[2.15rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-tight mb-6 max-w-4xl">
          Life Changing Community and Holistic Yoga School
        </h1>

        <p className="font-sans text-sm sm:text-base md:text-lg text-white/85 leading-relaxed mb-10 max-w-2xl font-light">
          Welcome to Alpesh Yoga, where Yoga Alliance certified teacher trainings
          are rooted in precision alignment, compassion, and real human connection.
        </p>

        <a
          href="/#programs"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-olive-500 hover:bg-olive-600 text-white font-sans text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          Explore Our Programs
        </a>

        {/* Glass feature strip */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2.5 px-3 py-4 sm:py-5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/90" strokeWidth={1.5} />
              <span className="font-sans text-[10px] sm:text-xs font-medium tracking-wide text-center leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="/#why-choose"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-medium">
          Scroll to explore
        </span>
        <Mouse className="w-5 h-5 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
