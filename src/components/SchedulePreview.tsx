"use client";

import React from "react";
import { Clock, Users, ShieldCheck, HelpCircle } from "lucide-react";

const CLASSES = [
  {
    time: "8:30 AM – 10:00 AM",
    title: "Intensive Hatha Alignment",
    level: "Intermediate & Advanced",
    focus: "Deep adjustments, structural anatomy, prop-supported postures, inversion prep.",
    color: "border-l-4 border-terracotta-500",
  },
  {
    time: "10:15 AM – 11:45 AM",
    title: "Beginner Friendly Alignment",
    level: "All Levels & Beginners",
    focus: "Fundamentals of standing poses, basic prop usage (belts/blocks), core alignment cues.",
    color: "border-l-4 border-sage-500",
  },
  {
    time: "4:00 PM – 5:30 PM",
    title: "Evening Therapeutic Alignment",
    level: "All Levels",
    focus: "Restorative postures, shoulder/back relief, pranayama introduction, gentle alignment.",
    color: "border-l-4 border-forest-500",
  },
];

export default function SchedulePreview() {
  return (
    <section id="schedule" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
            Weekly Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
            Daily Drop-In Classes
          </h2>
          <p className="font-sans text-lg text-forest-600/80 leading-relaxed font-light">
            Practice with us from **Monday through Saturday** (Sundays are rest days). Our fully-equipped studio in Upper Bhagsu provides all props (blocks, belts, blankets, bolsters, and chairs).
          </p>
        </div>

        {/* Schedule Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {CLASSES.map((cls) => (
            <div 
              key={cls.time}
              className={`bg-cream-50 p-8 rounded-2xl border border-sage-100/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between ${cls.color}`}
            >
              <div className="space-y-6">
                
                {/* Time Badge */}
                <div className="flex items-center gap-2.5 text-terracotta-600 font-mono text-sm font-semibold tracking-wide bg-terracotta-500/10 px-3 py-1.5 rounded-lg w-fit">
                  <Clock className="w-4 h-4" />
                  <span>{cls.time}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl font-bold text-forest-600 leading-tight">
                    {cls.title}
                  </h3>
                  
                  {/* Level indicator */}
                  <div className="flex items-center gap-2 text-xs text-sage-600 font-medium">
                    <Users className="w-3.5 h-3.5" />
                    <span>{cls.level}</span>
                  </div>

                  <p className="font-sans text-sm text-forest-600/70 leading-relaxed pt-2">
                    {cls.focus}
                  </p>
                </div>

              </div>

              {/* Card Footer Points */}
              <div className="pt-6 mt-6 border-t border-sage-100/60 flex items-center justify-between text-xs font-sans text-forest-600/60">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Props Provided
                </span>
                <span>Drop-in Welcome</span>
              </div>

            </div>
          ))}
        </div>

        {/* Informative Help note & CTA */}
        <div className="max-w-3xl mx-auto text-center border border-sage-100 rounded-2xl p-6 bg-cream-50/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-3 text-left">
            <HelpCircle className="w-5 h-5 text-sage-500 shrink-0 mt-0.5" />
            <p className="font-sans text-xs text-forest-600/70 leading-relaxed">
              <strong>Need a different schedule?</strong> Check out our multi-day courses, intensives, and custom therapeutic sessions. We offer individual adjustments for alignment and injuries.
            </p>
          </div>
          
          <a
            href="https://wa.me/917719878500?text=Hello%20Alpesh,%20I%20would%20like%20to%20know%20more%20details%20about%20the%20daily%20drop-in%20class%20schedule."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-600 hover:bg-terracotta-600 text-cream-50 font-sans text-xs font-semibold shadow-sm hover:shadow transition-all duration-300 whitespace-nowrap"
          >
            <span>Ask via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
