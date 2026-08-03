"use client";

import React from "react";

export interface HighlightItem {
  title: string;
  image: string;
}

interface CourseHighlightsProps {
  description: string;
  highlights: HighlightItem[];
}

export default function CourseHighlights({ description, highlights }: CourseHighlightsProps) {
  return (
    <section className="relative bg-sand-50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="font-sans text-[1.2rem] font-normal leading-[1.7] text-charcoal-800 sm:text-[1.34rem]">
            {description}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[16/9] overflow-hidden rounded-[28px] sm:aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-normal tracking-wide text-white sm:text-3xl">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
