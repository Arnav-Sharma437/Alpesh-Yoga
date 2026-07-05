"use client";

import React from "react";
import { ArrowRight, BookOpen, Star, Sparkles, HeartPulse } from "lucide-react";

const PROGRAMS = [
  {
    title: "8-Day Intensive Course",
    badge: "Most Popular",
    description: "A transformative deep-dive into Hatha alignment. Ideal for students wanting to correct posture habits, understand prop mechanics, and establish a solid, safe home practice.",
    duration: "8 Days (3 Hours Daily)",
    focus: "Postural mechanics, core stability, prop integration.",
    icon: Sparkles,
  },
  {
    title: "100-Hour Yoga TTC",
    badge: "Foundation Level",
    description: "The first half of our comprehensive teacher training. Focuses on anatomy, building physical stamina, learning adjustment logic, and basic teaching instructions.",
    duration: "12 Days (Intensive Curriculum)",
    focus: "Instructional clarity, adjustment methodology, anatomy.",
    icon: BookOpen,
  },
  {
    title: "200-Hour Yoga YTTC",
    badge: "Certified Teacher Training",
    description: "Our flagship certification program registered with Yoga Alliance. Become a certified alignment instructor equipped with adjustment techniques, philosophy, and anatomy.",
    duration: "24 Days (Fully Immersive)",
    focus: "Intelligent sequencing, philosophy, career ethics.",
    icon: Star,
  },
  {
    title: "Therapeutic Yoga",
    badge: "Specialized Healing",
    description: "Tailored private and small group adjustments for physical healing. Ideal for addressing chronic back pain, scoliosis, neck stiffness, joint rehabilitation, and alignment errors.",
    duration: "Custom Schedules",
    focus: "Scoliosis correction, back pain relief, joint therapy.",
    icon: HeartPulse,
  },
];

export default function FeaturedPrograms() {
  const [scrollIndex, setScrollIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const itemWidth = containerRef.current.clientWidth * 0.85; // 85vw width of mobile items
      const newIndex = Math.round(scrollLeft / (itemWidth + 24)); // itemWidth + gap (24px)
      setScrollIndex(Math.min(Math.max(newIndex, 0), PROGRAMS.length - 1));
    }
  };
  return (
    <section id="programs" className="py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
            Deepen Your Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
            Featured Courses & TTC
          </h2>
          <p className="font-sans text-lg text-forest-600/80 leading-relaxed font-light">
            Go beyond daily drop-in classes. Join our intensive alignment courses and internationally recognized Teacher Training programs in the high Himalayas.
          </p>
        </div>

        {/* Programs Grid */}
        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 px-4 -mx-4 md:grid md:grid-cols-2 md:gap-8 md:px-0 md:mx-0 scrollbar-none"
        >
          {PROGRAMS.map((prog) => {
            const IconComp = prog.icon;
            return (
              <div 
                key={prog.title}
                className="shrink-0 w-[85vw] md:w-auto snap-center bg-white rounded-3xl p-8 border border-sage-100/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden active:scale-[0.98] cursor-pointer"
              >
                {/* Visual Accent Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta-500 to-sage-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-6">
                  {/* Badges & Icon */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-terracotta-600 bg-terracotta-500/10 px-2.5 py-1 rounded-full">
                      {prog.badge}
                    </span>
                    <IconComp className="w-6 h-6 text-sage-500 group-hover:text-terracotta-600 transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-forest-600">
                      {prog.title}
                    </h3>
                    <p className="font-sans text-sm text-forest-600/70 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 bg-cream-50/50 p-4 rounded-xl text-xs font-sans text-forest-600/80 border border-sage-50">
                    <div>
                      <strong className="text-forest-700">Duration:</strong> {prog.duration}
                    </div>
                    <div>
                      <strong className="text-forest-700">Core Focus:</strong> {prog.focus}
                    </div>
                  </div>
                </div>

                {/* Learn More link */}
                <div className="pt-8 mt-6 border-t border-sage-50 flex items-center justify-between">
                  <a
                    href={`/apply?program=${encodeURIComponent(prog.title)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta-600 hover:text-terracotta-700 group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire & Register</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <span className="text-[11px] text-sage-600/70">Certified Yoga Alliance</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mobile Swipe indicators (dots) */}
        <div className="flex md:hidden justify-center items-center gap-1.5 mt-4 mb-8">
          {PROGRAMS.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                scrollIndex === idx ? "w-4 bg-terracotta-500" : "w-1.5 bg-sage-200"
              }`}
            />
          ))}
        </div>

        {/* Certificate notice */}
        <div className="text-center">
          <p className="font-sans text-xs text-sage-600 max-w-xl mx-auto leading-relaxed">
            *All Alpesh Yoga courses are fully registered and meet the stringent requirements of the international <strong>Yoga Alliance USA</strong>. Upon completion, students are eligible to register as certified RYT-100 or RYT-200.
          </p>
        </div>

      </div>
    </section>
  );
}
