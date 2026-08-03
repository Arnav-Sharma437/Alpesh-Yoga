"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FeaturedPrograms() {
  const COURSES = [
    {
      title: "100 Hour Yoga TTC",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
      description: "Perfect for beginners looking to build a solid foundation in Hatha and Iyengar alignment yoga, or those with limited time.",
      link: "/goa/100-hour-ttc"
    },
    {
      title: "200 Hour Yoga TTC",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
      description: "Our flagship comprehensive training covering alignment, anatomy, philosophy, and teaching skills. Registered with Yoga Alliance.",
      link: "/goa/200-hour-yttc"
    },
    {
      title: "300 Hour Yoga TTC",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800",
      description: "Advanced training to deepen your alignment knowledge, learn advanced adjustments, and master therapeutic yoga techniques.",
      link: "/dates-prices"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="font-sans text-rust-500 font-bold uppercase tracking-widest text-xs mb-4">
              Explore Our Programs
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-[52px] leading-[1.1] font-medium text-charcoal-900 tracking-tight">
              Choose the Training That's Right for You
            </h2>
          </div>
          <p className="font-sans text-base text-charcoal-500 max-w-md font-light leading-relaxed">
            Discover a course that perfectly aligns with your goals and experience level, guided by our expert instructors in India.
          </p>
        </div>

        {/* Horizontal Scroll / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <a 
              key={idx}
              href={course.link}
              className="group block relative rounded-[24px] overflow-hidden bg-sand-50"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent"></div>
              </div>
              
              {/* Content Positioned over Image */}
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 tracking-wide">
                  {course.title}
                </h3>
                <p className="font-sans text-sm text-white/80 leading-relaxed font-light mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {course.description}
                </p>
                
                {/* Arrow Icon Indicator */}
                <div className="flex items-center gap-2 text-white/90 font-sans text-xs font-bold uppercase tracking-widest">
                  <span>Explore Course</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
