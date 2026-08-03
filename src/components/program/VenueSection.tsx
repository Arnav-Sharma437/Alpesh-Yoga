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
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-white/85">
            Location
          </p>
          <h2 className="mb-10 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[52px]">
            {locationName}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-olive-500" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-normal">{stats.duration}</span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white/70">Duration</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Users className="h-6 w-6 text-olive-500" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-normal">{stats.graduates}</span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white/70">Graduates</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Globe2 className="h-6 w-6 text-olive-500" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-normal">{stats.language}</span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white/70">Language</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <BookOpen className="h-6 w-6 text-olive-500" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-normal">{stats.style}</span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white/70">Style</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Venue Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        <div className="text-center mb-16">
          <h3 className="mb-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
            {aboutTitle}
          </h3>
          <div className="w-16 h-1 bg-olive-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Text */}
          <div className="space-y-6">
            {aboutText.map((paragraph, idx) => (
              <p key={idx} className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Masonry Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-[28px]">
                <img src={galleryImages[0]} alt="Venue" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[28px]">
                <img src={galleryImages[1]} alt="Venue" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square overflow-hidden rounded-[28px]">
                <img src={galleryImages[2]} alt="Venue" className="w-full h-full object-cover" />
              </div>
              {galleryImages[3] && (
                <div className="aspect-[4/5] overflow-hidden rounded-[28px]">
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
