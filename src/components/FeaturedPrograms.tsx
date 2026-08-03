"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { programsCatalog } from "@/config/programs";

export default function FeaturedPrograms() {
  const COURSES = programsCatalog.filter((p) =>
    ["200-goa", "200-dharamshala", "100-goa"].includes(p.id)
  );

  return (
    <section id="programs" className="relative bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-saffron-500">
              Programs
            </p>
            <h2 className="font-serif text-4xl font-medium leading-[1.1] tracking-tight text-charcoal-900 sm:text-5xl md:text-[52px]">
              Choose the Training That&apos;s Right for You
            </h2>
          </div>
          <div className="flex max-w-md flex-col items-start gap-4 md:items-end">
            <p className="font-sans text-base font-light leading-relaxed text-charcoal-500">
              Immersive trainings in Goa and Dharamshala — from daily classes to
              200-Hour Yoga Alliance certified teacher trainings.
            </p>
            <a href="/programs" className="btn-primary !px-6 !py-3 text-xs">
              Discover Our Programs
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {COURSES.map((course) => (
            <a
              key={course.id}
              href={course.href}
              className="group relative block overflow-hidden rounded-[24px] bg-sand-50"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-8">
                <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-wider text-saffron-400">
                  {course.location} · {course.duration}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-bold tracking-wide text-white md:text-3xl">
                  {course.category === "200hs"
                    ? "200 Hour Yoga TTC"
                    : course.category === "100hs"
                      ? "100 Hour Yoga TTC"
                      : course.title}
                </h3>
                <p className="mb-4 font-serif text-lg text-white/90">
                  From {course.priceLabel}
                </p>
                <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-white/90">
                  <span>Explore Course</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
