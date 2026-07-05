"use client";

import React from "react";
import { Play, Youtube } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-20 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Subscribing message */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3 text-[#F7941D]">
              <Youtube className="w-8 h-8" />
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                Watch Our Students' Reviews
              </h2>
            </div>
            
            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              See what our global graduates say about their alignment yoga experience under Alpesh Patel. Learn about our daily schedules, hands-on corrections, props, adjustment courses, and life at our Goa & Rishikesh shalas.
            </p>

            <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              We regularly upload tutorials on Iyengar alignment techniques, Hatha yoga postures, adjustments, and student transformation journeys. Subscribe to our YouTube channel to start learning online.
            </p>

            <div className="pt-2">
              <a
                href="https://youtube.com/alpeshyoga123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow"
              >
                <Youtube className="w-4 h-4 fill-white" />
                <span>SUBSCRIBE</span>
              </a>
            </div>
          </div>

          {/* Right Column: Video Play Card */}
          <div className="flex justify-center">
            <a 
              href="https://youtube.com/alpeshyoga123"
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full max-w-lg aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 block group"
            >
              {/* Thumbnail Image */}
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=600" 
                alt="Alpesh Yoga YouTube Video Review Thumbnail" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                <div className="w-16 h-16 rounded-full bg-white text-[#F7941D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Red play label bar at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-[#F7941D] text-white py-2 px-4 text-center font-sans text-xs font-bold uppercase tracking-wide">
                Play Student Reviews
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

