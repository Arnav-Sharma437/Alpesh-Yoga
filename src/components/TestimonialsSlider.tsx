"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";

export default function TestimonialsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 420);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const id = window.setInterval(() => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) return;
      if (el.scrollLeft >= max - 8) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: Math.min(el.clientWidth * 0.8, 420), behavior: "smooth" });
      }
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="mx-auto mb-12 max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-olive-600">
          Testimonials
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-tight text-[#4A4540] sm:text-5xl md:text-[52px]">
          What Our Students Are Saying
        </h2>
        <p className="mt-4 font-sans text-[1.2rem] font-normal text-[#212121]">
          Real Google reviews from Alpesh Yoga students
        </p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Previous reviews"
          className="absolute left-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#212121] shadow-lg transition hover:bg-olive-500 hover:text-white md:flex lg:left-8"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Next reviews"
          className="absolute right-2 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#212121] shadow-lg transition hover:bg-olive-500 hover:text-white md:flex lg:right-8"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-16"
          style={{ scrollbarWidth: "none" }}
        >
          {testimonials.map((review) => (
            <article
              key={review.name + (review.date || "")}
              className="w-[88vw] max-w-[380px] shrink-0 snap-center rounded-[28px] border border-sand-200 bg-[#FAFAF8] p-7 shadow-sm sm:w-[360px]"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-olive-500 font-serif text-lg text-white">
                  {review.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="truncate font-sans text-base font-semibold text-[#212121]">
                    {review.name}
                  </h3>
                  <p className="font-sans text-sm text-[#5C5C5C]">
                    {review.reviewsCount
                      ? `${review.reviewsCount} ${review.reviewsCount === 1 ? "review" : "reviews"} · `
                      : ""}
                    {review.source || "Google"}
                  </p>
                </div>
              </div>

              <div className="mb-2 flex gap-0.5 text-[#F4B400]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              {review.date ? (
                <p className="mb-4 font-sans text-sm text-[#5C5C5C]">{review.date}</p>
              ) : null}

              <p className="font-sans text-[1.05rem] font-normal leading-[1.7] text-[#212121] line-clamp-7">
                &ldquo;{review.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="/testimonials" className="btn-primary">
          Read all reviews
        </a>
      </div>
    </section>
  );
}
