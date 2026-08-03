"use client";

import React from "react";
import Link from "next/link";

interface ProgramHeroProps {
  title: string;
  subtitle: string;
  image: string;
  location: string;
}

export default function ProgramHero({ title, subtitle, image, location }: ProgramHeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-20">
        <h1 className="font-serif text-white text-5xl md:text-7xl font-medium tracking-tight mb-6 drop-shadow-md">
          {title}
        </h1>
        <p className="font-sans text-white/90 text-lg md:text-xl font-light mb-10 drop-shadow">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <Link
            href={`/apply?location=${location}&program=${encodeURIComponent(title)}`}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-olive-500 hover:bg-olive-600 text-white font-sans text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}
