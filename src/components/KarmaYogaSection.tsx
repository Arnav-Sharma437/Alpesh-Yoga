"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Supporting Local Families",
    desc: "A portion of course proceeds helps provide meals, education support, and essentials for families near our Goa and Dharamshala campuses.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800",
  },
  {
    title: "Community Education Days",
    desc: "We host joyful community days with local schools — sharing movement, creativity, and care beyond the yoga mat.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800",
  },
  {
    title: "Service as Practice",
    desc: "Karma Yoga is part of the path. Students are invited to join service projects that strengthen the communities hosting our trainings.",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800",
  },
];

export default function KarmaYogaSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Charity and Social Impact
          </p>
          <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-white sm:text-5xl md:text-[52px]">
            Making a Difference Together
          </h2>
          <p className="mt-5 font-sans text-[1.2rem] font-normal leading-[1.7] text-white">
            Charity is at the heart of Alpesh Yoga. We strive to create meaningful change in the
            communities that welcome our students.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous"
            className="absolute -left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#212121] shadow-lg md:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next"
            className="absolute -right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#212121] shadow-lg md:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="w-[88%] max-w-[520px] shrink-0 snap-center overflow-hidden rounded-[28px] bg-white p-5 shadow-2xl sm:w-[480px] sm:p-6"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:items-center">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-square">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="mb-3 font-serif text-2xl font-normal text-[#212121]">{p.title}</h3>
                    <p className="font-sans text-[1.05rem] font-normal leading-[1.7] text-[#2A2A2A]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a href="/about#karma-yoga" className="btn-primary">
            Join our charity projects
          </a>
        </div>
      </div>
    </section>
  );
}
