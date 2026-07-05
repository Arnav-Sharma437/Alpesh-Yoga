"use client";

import React from "react";
import { Compass, Eye, ListOrdered, Shuffle } from "lucide-react";
import LotusMotif from "@/components/LotusMotif";

const PRINCIPLES = [
  {
    title: "Precision & Alignment",
    description: "Every pose is taught with skeletal alignment in mind. Proper placement protects the joints, stretches muscles evenly, and prevents wear and tear, ensuring a sustainable, lifelong yoga practice.",
    icon: Compass,
  },
  {
    title: "Body Awareness",
    description: "Move from passive flexibility to active, conscious muscle engagement. We guide you to recognize subtle physical patterns, balance structural shifts, and deepen your mind-body connection.",
    icon: Eye,
  },
  {
    title: "Intelligent Sequencing",
    description: "Postures are grouped and sequenced systematically. This progressive flow systematically warms up target muscle groups, builds strength safely, opens the breath, and culminates in deep mental restoration.",
    icon: ListOrdered,
  },
  {
    title: "Props & Personalized Adjustments",
    description: "We use belts, blocks, blankets, and wall setups to make advanced alignments accessible. We adjust each pose to fit your unique anatomy, flexibility level, or therapeutic requirements.",
    icon: Shuffle,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-cream-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <LotusMotif className="w-12 h-12 mb-4" />
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-2 block">
            Why Alignment Matters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
            The Science of Hatha Alignment
          </h2>
          <p className="font-sans text-lg text-forest-600/80 leading-relaxed font-light">
            Alpesh Yoga is built on authentic, disciplined alignment-based practice. We do not just run through flows; we slow down, investigate the mechanics of each pose, and rebuild your posture from the ground up.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PRINCIPLES.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div 
                key={principle.title}
                className="bg-white p-8 rounded-2xl border border-sage-100 hover:border-terracotta-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="p-3.5 rounded-xl bg-sage-50 text-terracotta-600 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-forest-600">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-sm text-forest-600/70 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing philosophy block */}
        <div className="bg-sage-600 rounded-3xl p-8 md:p-12 text-cream-50 flex flex-col lg:flex-row gap-8 items-center shadow-lg">
          <div className="space-y-4 lg:w-2/3">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Building a Safer, Stronger Practice
            </h3>
            <p className="font-sans text-sm md:text-base text-cream-100/90 leading-relaxed font-light">
              Whether you are a complete beginner holding your first block or an experienced teacher refining your stance, our disciplined alignment approach transforms how you stand, breathe, and move. We focus heavily on therapeutic applications, helping you heal structural pain and imbalances safely under expert adjustment.
            </p>
          </div>
          <div className="shrink-0 lg:w-1/3 text-center lg:text-right w-full">
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream-50 hover:bg-terracotta-100 text-forest-700 font-sans text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 w-full lg:w-auto justify-center"
            >
              <span>See Daily Timetable</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
