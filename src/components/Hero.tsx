"use client";

import React from "react";
import { Award, Globe2, GraduationCap, Flower2, Mouse } from "lucide-react";

const highlights = [
  { icon: Award, label: "Yoga Alliance Certified" },
  { icon: Globe2, label: "Goa & Dharamshala" },
  { icon: GraduationCap, label: "Thousands of Graduates" },
  { icon: Flower2, label: "20+ Years Teaching" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 pb-40 pt-36 text-center sm:px-8 sm:pb-44">
        <h1 className="mb-6 max-w-4xl font-serif text-[2.5rem] font-normal leading-[1.35] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.55rem] lg:leading-[1.4]">
          Life Changing Community and Holistic Yoga School
        </h1>

        <p className="mb-10 max-w-3xl font-sans text-[1.15rem] font-normal leading-[1.7] text-white sm:text-[1.34rem]">
          Welcome to Alpesh Yoga, where Yoga Alliance certified teacher trainings are rooted in
          precision alignment, compassion, and real human connection.
        </p>

        <a href="/programs" className="btn-primary">
          Explore our programs
        </a>

        <div className="mt-14 grid w-full max-w-4xl grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-2.5 rounded-2xl border border-white/40 bg-white/15 px-3 py-5 text-white backdrop-blur-md sm:py-6"
            >
              <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
              <span className="text-center font-sans text-xs font-semibold leading-snug tracking-wide text-white sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="/#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white transition-opacity hover:opacity-80"
        aria-label="Scroll to explore"
      >
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
          Scroll to explore
        </span>
        <Mouse className="h-5 w-5 animate-bounce text-white" strokeWidth={1.5} />
      </a>
    </section>
  );
}
