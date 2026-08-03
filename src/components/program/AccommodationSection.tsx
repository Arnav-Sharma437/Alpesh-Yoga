"use client";

import React from "react";
import Link from "next/link";
import {
  ACCOMMODATION_AMENITIES,
  BREAKFAST_MENU,
  DRINKS_MENU,
  FOOD_POLICY,
  LUNCH_DINNER_MENU,
  MEAL_INCLUSION,
} from "@/config/courseContent";

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
            {FOOD_POLICY}
          </p>
        </div>

        {/* Amenities */}
        <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ACCOMMODATION_AMENITIES.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-sand-200 bg-sand-50 px-5 py-4 text-center font-sans text-sm font-medium text-charcoal-800"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Meal inclusion */}
        <div className="mb-12 rounded-3xl border border-saffron-100 bg-saffron-50/50 p-6 text-center sm:p-8">
          <p className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-saffron-600">
            Meal Inclusion
          </p>
          <ul className="mx-auto max-w-xl space-y-2 font-sans text-sm text-charcoal-700">
            <li>{MEAL_INCLUSION.weekdays}</li>
            <li>{MEAL_INCLUSION.saturday}</li>
            <li>{MEAL_INCLUSION.sunday}</li>
          </ul>
          <p className="mt-4 font-sans text-xs font-semibold text-charcoal-500">
            {MEAL_INCLUSION.note}
          </p>
        </div>

        {/* Food menus */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-bold text-charcoal-900">Breakfast</h3>
            <ul className="space-y-2">
              {BREAKFAST_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-sm text-charcoal-600">
                  <span className="text-saffron-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-bold text-charcoal-900">Lunch & Dinner</h3>
            <ul className="space-y-2">
              {LUNCH_DINNER_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-sm text-charcoal-600">
                  <span className="text-saffron-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-bold text-charcoal-900">Drinks</h3>
            <ul className="space-y-2">
              {DRINKS_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-sm text-charcoal-600">
                  <span className="text-saffron-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
                  ? "border-saffron-500 shadow-xl relative mt-0 md:-mt-4" 
                  : "border-gray-100 shadow-sm"
              }`}
            >
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-saffron-500 text-white font-sans text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
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
                    <span className="text-saffron-500 text-sm mt-0.5">✔</span>
                    <span className="font-sans text-sm text-charcoal-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/apply?location=${encodeURIComponent(locationName)}&package=${encodeURIComponent(pkg.title)}`}
                className={`block w-full text-center py-3.5 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  pkg.isPopular
                    ? "bg-saffron-500 hover:bg-saffron-600 text-white shadow-md"
                    : "border border-gray-300 hover:border-saffron-500 text-charcoal-900 hover:text-saffron-600"
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
