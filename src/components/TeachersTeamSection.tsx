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
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Our Teachers
          </p>
          <h2 className="mb-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
            Meet Our Yoga Teachers
          </h2>
          <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
            Learn from experienced Yoga Alliance certified teachers dedicated to authentic
            alignment, meditation, and holistic practice.
          </p>
        </div>

        <div className="mb-12 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((teacher) => (
            <div key={teacher.id} className="group flex flex-col items-center text-center">
              <div className="relative mb-5 h-44 w-44 overflow-hidden rounded-full border-4 border-olive-500/15 shadow-md transition-colors group-hover:border-olive-500/40 sm:h-48 sm:w-48">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-1 font-serif text-xl font-normal text-charcoal-500">{teacher.name}</h3>
              <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
                {teacher.role}
              </p>
              <p className="line-clamp-5 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                {teacher.bio}
              </p>
            </div>
          ))}
        </div>

        {showCta && (
          <a href="/about#teachers" className="btn-primary">
            Read More About Our Team
          </a>
        )}
      </div>
    </section>
  );
}
