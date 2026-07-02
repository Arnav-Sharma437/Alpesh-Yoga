"use client";

import React from "react";
import { MapPin, Trees, Mountain, Sunrise } from "lucide-react";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
    caption: "Snowy Dhauladhar ranges above Bhagsu",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
    caption: "Conscious yoga alignment posture",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
    caption: "Quiet space for morning alignment",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=600",
    caption: "Misty pine forests of McLeod Ganj",
    size: "md:col-span-1 md:row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600",
    caption: "Alignment adjustments using wall ropes",
    size: "md:col-span-2 md:row-span-1",
  },
];

export default function HimalayanSetting() {
  return (
    <section id="setting" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout: Content on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
              The Himalayan Setting
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
              Practice in the Sacred Heights of Bhagsu
            </h2>
            
            <p className="font-sans text-base text-forest-600/80 leading-relaxed font-light">
              Alpesh Yoga is located in the peaceful neighborhood of **Upper Bhagsu**, Dharamshala. Situated above McLeod Ganj, our studio is shielded from tourist traffic while remaining highly accessible.
            </p>
            
            <p className="font-sans text-base text-forest-600/80 leading-relaxed font-light">
              Practicing alignment-based yoga at an elevation of 2,000 meters in the fresh air of the pine forests accelerates muscle healing and deepens breath awareness.
            </p>

            {/* Quick Geo Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-sans text-sm text-forest-700">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span>Near Beetroot Café & Kibbutz</span>
              </div>
              <div className="flex items-center gap-2">
                <Trees className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span>Pine Forest Trails</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span>Views of Dhauladhar Range</span>
              </div>
              <div className="flex items-center gap-2">
                <Sunrise className="w-5 h-5 text-terracotta-500 shrink-0" />
                <span>Serene Morning Ambient</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {/* Masonry Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
              {GALLERY_IMAGES.map((img, i) => (
                <div 
                  key={i}
                  className={`relative rounded-2xl overflow-hidden shadow-sm group border border-sage-100/50 ${img.size}`}
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Title overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-700/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-cream-50 font-sans text-xs font-medium">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
