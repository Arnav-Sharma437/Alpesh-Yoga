"use client";

import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-10000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1920')`,
        }}
      >
        {/* Dark earthy overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-700/90 via-forest-600/75 to-transparent md:bg-gradient-to-b"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50 via-transparent to-forest-700/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10 w-full text-left">
        <div className="max-w-3xl">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-500/20 border border-terracotta-200/30 text-terracotta-100 font-sans text-xs uppercase tracking-widest font-semibold mb-6 animate-fade-in">
            <span>Iyengar-Based Practice • Dharamshala</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Most yoga classes teach you <span className="text-terracotta-200 italic font-medium">what</span> pose to do. <br className="hidden sm:inline" />
            At Alpesh Yoga, we teach you <span className="text-terracotta-200 italic font-medium">how</span> to do it correctly.
          </h1>

          {/* Subtext */}
          <p className="font-sans text-lg sm:text-xl text-cream-100/90 leading-relaxed mb-10 max-w-2xl font-light">
            Develop precision, body awareness, and safe alignment under the guidance of expert Iyengar instructors. Located in the peaceful heights of Upper Bhagsu, Himachal Pradesh.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            
            <a
              href="https://wa.me/917719878500?text=Hello%20Alpesh,%20I%20would%20like%20to%20book%20a%20yoga%20class%20at%20your%20studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 font-sans text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Book a Class</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#schedule"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-cream-100/30 hover:border-cream-100 bg-white/5 hover:bg-white/10 text-white font-sans text-base font-semibold hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar className="w-5 h-5 text-terracotta-200" />
              <span>View Schedule</span>
            </a>

          </div>

          {/* Location highlight badge */}
          <div className="mt-16 flex items-center gap-3 text-cream-200/70 text-sm font-sans">
            <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-ping"></span>
            <span>Studio open daily in Upper Bhagsu (near Beetroot Café)</span>
          </div>

        </div>
      </div>

    </section>
  );
}
