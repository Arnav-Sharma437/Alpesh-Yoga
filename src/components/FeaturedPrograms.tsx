"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { programsCatalog } from "@/config/programs";

export default function FeaturedPrograms() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const COURSES = programsCatalog.filter((p) =>
    [
      "200-goa-alignment",
      "200-goa-multi",
      "200-dharamshala",
      "100-goa-alignment",
      "100-goa-multi",
      "100-dharamshala",
      "8day-goa",
      "8day-dharamshala",
    ].includes(p.id)
  );

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.85, 520);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="programs" className="relative overflow-hidden bg-[#F7F5F1] py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-olive-600">
              Programs
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-[#4A4540] sm:text-5xl md:text-[52px]">
              Choose the Training That&apos;s Right for You
            </h2>
          </div>
          <div className="flex max-w-md flex-col items-start gap-5 lg:items-end">
            <p className="font-sans text-[1.2rem] font-normal leading-[1.7] text-[#212121]">
              Immersive trainings in Goa and Dharamshala — from daily classes to 200-Hour Yoga
              Alliance certified teacher trainings.
            </p>
            <a href="/programs" className="btn-primary">
              Discover Our Programs
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous programs"
          className="absolute left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#212121] shadow-lg transition hover:bg-olive-500 hover:text-white sm:left-4 md:flex lg:left-8"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next programs"
          className="absolute right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#212121] shadow-lg transition hover:bg-olive-500 hover:text-white sm:right-4 md:flex lg:right-8"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 scrollbar-none sm:px-6 lg:px-16"
          style={{ scrollbarWidth: "none" }}
        >
          {COURSES.map((course) => (
            <a
              key={course.id}
              href={course.href}
              className="group relative w-[85vw] max-w-[420px] shrink-0 snap-center overflow-hidden rounded-[28px] sm:w-[380px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-7 sm:p-8">
                <p className="mb-2 font-sans text-sm font-medium uppercase tracking-wider text-white">
                  {course.location} · {course.duration}
                </p>
                <h3 className="mb-3 font-serif text-2xl font-normal leading-snug text-white md:text-[1.85rem]">
                  {course.category === "200hs"
                    ? "200 Hour Yoga TTC"
                    : course.category === "100hs"
                      ? "100 Hour Yoga TTC"
                      : course.category === "intensive"
                        ? "8-Day Intensive"
                        : course.title}
                </h3>
                <p className="font-sans text-lg font-medium text-white">From {course.priceLabel}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
