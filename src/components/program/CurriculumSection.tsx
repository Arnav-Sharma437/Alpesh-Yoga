"use client";

import React from "react";
import { Check, Download } from "lucide-react";

export interface CurriculumItem {
  title: string;
}

interface CurriculumSectionProps {
  items: CurriculumItem[];
  brochureLink?: string;
}

export default function CurriculumSection({ items, brochureLink }: CurriculumSectionProps) {
  return (
    <section className="py-24 bg-sand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Syllabus
          </p>
          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
            What you will learn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left List */}
          <div className="md:col-span-7">
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 rounded-full bg-olive-50 p-1">
                    <Check className="h-4 w-4 text-olive-500" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action Box */}
          <div className="md:col-span-5 relative mt-8 md:mt-0">
            {/* Dark Blue / Forest Box */}
            <div className="relative overflow-hidden rounded-[32px] bg-charcoal-950 p-8 text-white shadow-xl sm:p-10">
              <div className="relative z-10 text-center">
                <p className="mb-6 font-sans text-[1.15rem] font-normal leading-[1.7] text-white/85">
                  Want to see the complete curriculum, reading list, and daily breakdown?
                </p>
                <a
                  href={brochureLink || "#"}
                  className="btn-primary w-full gap-3"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Curriculum</span>
                </a>
              </div>
            </div>

            {/* Yoga Alliance Badge */}
            <div className="mt-8 text-center flex flex-col items-center">
              <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
                Certified By
              </p>
              <div className="w-32 h-auto opacity-70 grayscale">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Yoga_Alliance_logo.svg" 
                  alt="Yoga Alliance" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
