"use client";

import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";

export default function Testimonials({
  limit = 6,
  showCta = true,
}: {
  limit?: number;
  showCta?: boolean;
}) {
  const list = testimonials.slice(0, limit);

  return (
    <section id="testimonials" className="relative z-10 border-b border-gray-100 bg-sand-50 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl text-center">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-saffron-500">
            Testimonials
          </p>
          <h2 className="mb-3 font-serif text-3xl font-medium tracking-tight text-charcoal-900 sm:text-4xl md:text-5xl">
            What Our Students Are Saying
          </h2>
          <p className="font-sans text-base font-normal text-charcoal-700 sm:text-lg">
            Real Google reviews from students of Alpesh Yoga · 5.0 rating based on 109+ reviews
          </p>
        </div>

        <div className="mb-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((review) => (
            <div
              key={review.name + (review.date || "")}
              className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div>
                <div className="mb-4 flex gap-1 text-saffron-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 font-sans text-base font-normal leading-relaxed text-charcoal-700">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-serif text-sm font-bold text-charcoal-900">{review.name}</h4>
                <p className="font-sans text-xs text-charcoal-500">
                  {[review.source, review.date].filter(Boolean).join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {showCta && (
          <a href="/testimonials" className="btn-primary !text-xs !uppercase !tracking-wider">
            See More Reviews
          </a>
        )}
      </div>
    </section>
  );
}
