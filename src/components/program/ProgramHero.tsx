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
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
      </div>

      <div className="text-on-dark relative z-10 mx-auto mt-16 max-w-4xl px-4 text-center sm:px-6">
        <h1 className="mb-6 font-serif text-4xl font-normal leading-[1.3] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          {title}
        </h1>
        <p className="mb-10 font-sans text-[1.2rem] font-normal leading-[1.7] text-white sm:text-[1.34rem]">
          {subtitle}
        </p>
        <div className="flex justify-center">
          <Link
            href={`/apply?location=${location}&program=${encodeURIComponent(title)}`}
            className="btn-primary"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}
