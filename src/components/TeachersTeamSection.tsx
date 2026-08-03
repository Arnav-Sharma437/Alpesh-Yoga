"use client";

import React from "react";
import { teachers } from "@/config/teachers";

export default function TeachersTeamSection({
  limit,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const list = typeof limit === "number" ? teachers.slice(0, limit) : teachers;

  return (
    <section id="teachers" className="relative z-10 border-b border-gray-100 bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl text-center">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-saffron-500">
            Our Teachers
          </p>
          <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-charcoal-900 sm:text-4xl md:text-5xl">
            Meet Our Yoga Teachers
          </h2>
          <p className="font-sans text-base font-normal leading-relaxed text-charcoal-700 sm:text-lg">
            Learn from experienced Yoga Alliance certified teachers dedicated to authentic
            alignment, meditation, and holistic practice.
          </p>
        </div>

        <div className="mb-12 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((teacher) => (
            <div key={teacher.id} className="group flex flex-col items-center text-center">
              <div className="relative mb-5 h-44 w-44 overflow-hidden rounded-full border-4 border-saffron-500/15 shadow-md transition-colors group-hover:border-saffron-500/40 sm:h-48 sm:w-48">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-1 font-serif text-xl font-bold text-charcoal-900">{teacher.name}</h3>
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-saffron-600">
                {teacher.role}
              </p>
              <p className="font-sans text-base font-normal leading-relaxed text-charcoal-700 line-clamp-5">
                {teacher.bio}
              </p>
            </div>
          ))}
        </div>

        {showCta && (
          <a href="/about#teachers" className="btn-primary !text-xs !uppercase !tracking-wider">
            Read More About Our Team
          </a>
        )}
      </div>
    </section>
  );
}
