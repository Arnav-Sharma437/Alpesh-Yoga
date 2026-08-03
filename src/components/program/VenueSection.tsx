"use client";

import React from "react";
import { Clock, Users, Globe2, BookOpen } from "lucide-react";

interface VenueSectionProps {
  locationName: string;
  bannerImage: string;
  stats: {
    duration: string;
    graduates: string;
    language: string;
    style: string;
  };
  aboutTitle: string;
  aboutText: string[];
  galleryImages: string[];
}

export default function VenueSection({ 
  locationName, 
  bannerImage, 
  stats, 
  aboutTitle, 
  aboutText, 
  galleryImages 
}: VenueSectionProps) {
  return (
    <section className="bg-white">
      
      {/* Venue Banner */}
      <div className="relative w-full h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        >
          <div className="absolute inset-0 bg-charcoal-900/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-10">
          <p className="font-sans text-xs uppercase tracking-widest text-white/80 font-bold mb-3">
            Location
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white font-bold tracking-wide mb-10">
            {locationName}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-6 h-6 text-rust-500" />
              <div className="text-left">
                <span className="block font-sans text-sm font-bold">{stats.duration}</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-white/70">Duration</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Users className="w-6 h-6 text-rust-500" />
              <div className="text-left">
                <span className="block font-sans text-sm font-bold">{stats.graduates}</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-white/70">Graduates</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Globe2 className="w-6 h-6 text-rust-500" />
              <div className="text-left">
                <span className="block font-sans text-sm font-bold">{stats.language}</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-white/70">Language</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <BookOpen className="w-6 h-6 text-rust-500" />
              <div className="text-left">
                <span className="block font-sans text-sm font-bold">{stats.style}</span>
                <span className="block font-sans text-[10px] uppercase tracking-wider text-white/70">Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Venue Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold mb-4">
            {aboutTitle}
          </h3>
          <div className="w-16 h-1 bg-olive-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Text */}
          <div className="space-y-6">
            {aboutText.map((paragraph, idx) => (
              <p key={idx} className="font-sans text-sm md:text-base text-charcoal-500 leading-relaxed font-light">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Masonry Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img src={galleryImages[0]} alt="Venue" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={galleryImages[1]} alt="Venue" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img src={galleryImages[2]} alt="Venue" className="w-full h-full object-cover" />
              </div>
              {galleryImages[3] && (
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src={galleryImages[3]} alt="Venue" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      
    </section>
  );
}
