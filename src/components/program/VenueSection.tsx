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
  galleryImages,
}: VenueSectionProps) {
  return (
    <section className="bg-white">
      <div className="relative h-[400px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${bannerImage}')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="text-on-dark relative z-10 flex h-full flex-col items-center justify-center px-4 pt-10 text-center">
          <p className="mb-3 font-sans text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Location
          </p>
          <h2 className="mb-10 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[52px]">
            {locationName}
          </h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3 text-white">
              <Clock className="h-6 w-6 text-olive-400" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-semibold text-white">
                  {stats.duration}
                </span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white">
                  Duration
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Users className="h-6 w-6 text-olive-400" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-semibold text-white">
                  {stats.graduates}
                </span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white">
                  Graduates
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Globe2 className="h-6 w-6 text-olive-400" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-semibold text-white">
                  {stats.language}
                </span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white">
                  Language
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <BookOpen className="h-6 w-6 text-olive-400" />
              <div className="text-left">
                <span className="block font-sans text-[1.15rem] font-semibold text-white">
                  {stats.style}
                </span>
                <span className="block font-sans text-sm uppercase tracking-wider text-white">
                  Style
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h3 className="mb-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#212121] sm:text-4xl md:text-[52px]">
            {aboutTitle}
          </h3>
          <div className="mx-auto h-1 w-16 rounded-full bg-olive-500" />
        </div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <div className="space-y-6">
            {aboutText.map((paragraph, idx) => (
              <p
                key={idx}
                className="font-sans text-[1.15rem] font-normal leading-[1.7] text-[#212121]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden rounded-[28px]">
                <img src={galleryImages[0]} alt="Venue" className="h-full w-full object-cover" />
              </div>
              <div className="aspect-square overflow-hidden rounded-[28px]">
                <img src={galleryImages[1]} alt="Venue" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square overflow-hidden rounded-[28px]">
                <img src={galleryImages[2]} alt="Venue" className="h-full w-full object-cover" />
              </div>
              {galleryImages[3] && (
                <div className="aspect-[4/5] overflow-hidden rounded-[28px]">
                  <img src={galleryImages[3]} alt="Venue" className="h-full w-full object-cover" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
