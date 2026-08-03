"use client";

import React from "react";
import Link from "next/link";

export interface PackageOption {
  title: string;
  features: string[];
  price: string;
  isPopular?: boolean;
}

interface AccommodationSectionProps {
  locationName: string;
  galleryImages: string[];
  packages: PackageOption[];
}

export default function AccommodationSection({ locationName, galleryImages, packages }: AccommodationSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-rust-500 font-bold mb-3">
            Stay with Us
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold tracking-tight mb-4">
            Accommodation & Food
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal-500 max-w-2xl mx-auto font-light leading-relaxed">
            Experience comfortable, clean, and peaceful ashram living. We serve three nutritious vegetarian/vegan meals daily to support your intensive practice.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="aspect-square rounded-2xl overflow-hidden group">
              <img 
                src={img} 
                alt="Accommodation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`rounded-[32px] p-8 border ${
                pkg.isPopular 
                  ? "border-olive-500 shadow-xl relative mt-0 md:-mt-4" 
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-olive-500 text-white font-sans text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2">{pkg.title}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-serif text-4xl font-bold text-rust-500">{pkg.price}</span>
                <span className="font-sans text-xs text-charcoal-500">/ course</span>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <span className="text-olive-500 text-sm mt-0.5">✔</span>
                    <span className="font-sans text-sm text-charcoal-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/apply?location=${encodeURIComponent(locationName)}&package=${encodeURIComponent(pkg.title)}`}
                className={`block w-full text-center py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pkg.isPopular
                    ? "bg-olive-500 hover:bg-olive-600 text-white shadow-md"
                    : "border border-gray-300 hover:border-olive-500 text-charcoal-900 hover:text-olive-600"
                }`}
              >
                Select Package
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
