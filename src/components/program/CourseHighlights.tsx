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
    <section className="py-24 bg-sand-50 relative">
      {/* Subtle mandala watermark in background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mandala-pattern bg-contain bg-no-repeat opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="font-sans text-charcoal-500 text-lg md:text-xl font-light leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, idx) => (
            <div key={idx} className="relative aspect-[16/9] sm:aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
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
