"use client";

import React from "react";
import { MapPin, Compass, ArrowRight, Waves } from "lucide-react";

export default function Locations() {
  const LOCS = [
    {
      title: "Dharamshala (Upper Bhagsu)",
      region: "Himachal Pradesh, North India",
      desc: "Our primary Himalayan sanctuary nestled in the serene heights of Upper Bhagsu. Practice with crisp mountain air, views of snow-capped peaks, and a peaceful environment ideal for alignment study.",
      features: [
        "Fully equipped shala with custom wall-ropes",
        "Quiet, traffic-free neighborhood near Bhagsu temple",
        "Mats and alignment props provided for free",
      ],
      href: "/dharamshala",
      icon: Compass,
      color: "border-terracotta-500/20 hover:border-terracotta-500/50",
      buttonStyle: "bg-terracotta-600 hover:bg-terracotta-500 text-cream-50",
    },
    {
      title: "Goa (Coastal Shala)",
      region: "South Goa Beaches, South India",
      desc: "Our upcoming coastal shala situated near the warm, healing breezes of the Arabian Sea. Enjoy a relaxing, tropical practice setting designed to release physical stress and stiffness.",
      features: [
        "Quiet tropical shala within walking distance of the beach",
        "Relaxed environment perfect for restorative therapy",
        "Enquire now for pre-registrations and dates",
      ],
      href: "/goa",
      icon: Waves,
      color: "border-sage-500/20 hover:border-sage-500/50",
      buttonStyle: "bg-forest-600 hover:bg-forest-500 text-cream-50",
      comingSoon: true,
    },
  ];

  return (
    <section id="locations" className="py-24 bg-cream-100/40 border-t border-b border-sage-100/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
            Where We Teach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
            Our Two Studio Locations
          </h2>
          <p className="font-sans text-lg text-forest-600/80 leading-relaxed font-light">
            Choose the environment that best supports your practice—the crisp heights of the Himalayas or the warm sands of coastal South India.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {LOCS.map((loc) => {
            const Icon = loc.icon;
            return (
              <div 
                key={loc.title}
                className={`bg-white rounded-3xl p-8 md:p-10 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${loc.color}`}
              >
                
                {loc.comingSoon && (
                  <div className="absolute top-0 right-0 bg-sage-600 text-cream-50 text-[9px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl">
                    Coming Soon
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header Title */}
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-cream-50 text-terracotta-600 rounded-2xl w-fit shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-600 leading-snug">
                        {loc.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-sage-600 font-sans">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{loc.region}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-sm text-forest-600/70 leading-relaxed font-light">
                    {loc.desc}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-4 border-t border-sage-50 text-xs font-sans text-forest-600/80">
                    {loc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Redirect button */}
                <div className="pt-8 mt-6">
                  <a
                    href={loc.href}
                    className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-full font-sans text-sm font-semibold transition-all duration-300 shadow-sm ${loc.buttonStyle}`}
                  >
                    <span>Explore {loc.title.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Inline replacement check helper since lucide can differ
function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
