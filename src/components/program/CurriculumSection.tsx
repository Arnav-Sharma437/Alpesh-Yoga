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
          <p className="font-sans text-xs uppercase tracking-widest text-rust-500 font-bold mb-3">
            Syllabus
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold tracking-tight">
            What you will learn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left List */}
          <div className="md:col-span-7">
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 p-1 bg-rust-50 rounded-full shrink-0">
                    <Check className="w-4 h-4 text-rust-500" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-sm md:text-base text-charcoal-700 font-medium">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action Box */}
          <div className="md:col-span-5 relative mt-8 md:mt-0">
            {/* Dark Blue / Forest Box */}
            <div className="bg-charcoal-950 rounded-[32px] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
              {/* Subtle background mandala */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-mandala-pattern bg-contain bg-no-repeat opacity-10 transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
              
              <div className="relative z-10 text-center">
                <p className="font-sans text-sm text-white/80 font-light mb-6">
                  Want to see the complete curriculum, reading list, and daily breakdown?
                </p>
                <a
                  href={brochureLink || "#"}
                  className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-full bg-olive-500 hover:bg-olive-600 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Curriculum</span>
                </a>
              </div>
            </div>

            {/* Yoga Alliance Badge */}
            <div className="mt-8 text-center flex flex-col items-center">
              <p className="font-sans text-xs text-charcoal-500 mb-4 font-medium uppercase tracking-widest">
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
