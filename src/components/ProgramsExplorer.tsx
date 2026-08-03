"use client";

import React, { useMemo, useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import {
  PROGRAM_FILTERS,
  ProgramCategory,
  programsCatalog,
} from "@/config/programs";

export default function ProgramsExplorer() {
  const [filter, setFilter] = useState<ProgramCategory>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return programsCatalog;
    return programsCatalog.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div className="relative z-10">
      {/* Filters */}
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {PROGRAM_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`btn-filter ${filter === f.id ? "is-active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <a
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-olive-200 bg-white px-5 py-3 font-sans text-[1.15rem] font-normal text-charcoal-800 shadow-md transition hover:-translate-y-0.5 hover:border-olive-500 hover:shadow-lg"
        >
          <MessageCircle className="h-4 w-4 text-olive-500" />
          Help me choose the best for me
        </a>
      </div>

      {/* Program cards grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filtered.map((program) => (
          <a
            key={program.id}
            href={program.href}
            className="group block overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-sans text-sm font-medium text-charcoal-800 backdrop-blur">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-olive-500" />
                  {program.location}
                </span>
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-sans text-sm font-medium text-charcoal-800 backdrop-blur">
                {program.duration}
              </div>
            </div>

            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-xl font-normal leading-snug text-charcoal-500 sm:text-2xl">
                  {program.title}
                </h3>
                {program.dates.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {program.dates.slice(0, 3).map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-sand-200 bg-sand-50 px-2.5 py-1 font-sans text-sm font-normal text-charcoal-800"
                      >
                        {d}
                      </li>
                    ))}
                    {program.dates.length > 3 && (
                      <li className="rounded-full border border-olive-200 bg-olive-50 px-2.5 py-1 font-sans text-sm font-medium text-olive-600">
                        +{program.dates.length - 3}
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div className="shrink-0 text-left sm:text-right">
                <p className="font-sans text-sm text-charcoal-800">From</p>
                <p className="font-serif text-2xl font-normal text-charcoal-500">
                  {program.priceLabel}
                </p>
                {program.allInclusive && (
                  <p className="font-sans text-sm font-medium text-olive-500">All Inclusive</p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
          No programs in this category yet.{" "}
          <a href="/contact" className="font-medium text-olive-500 underline">
            Contact us
          </a>{" "}
          for guidance.
        </p>
      )}
    </div>
  );
}
