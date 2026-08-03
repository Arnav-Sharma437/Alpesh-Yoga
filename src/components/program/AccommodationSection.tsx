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
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Stay with Us
          </p>
          <h2 className="mb-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
            Accommodation & Food
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
            {FOOD_POLICY}
          </p>
        </div>

        {/* Amenities */}
        <div className="mb-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ACCOMMODATION_AMENITIES.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-sand-200 bg-sand-50 px-5 py-4 text-center font-sans text-[1.15rem] font-normal text-charcoal-800"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Meal inclusion */}
        <div className="mb-12 rounded-[28px] border border-olive-100 bg-olive-50/40 p-6 text-center sm:p-8">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Meal Inclusion
          </p>
          <ul className="mx-auto max-w-xl space-y-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
            <li>{MEAL_INCLUSION.weekdays}</li>
            <li>{MEAL_INCLUSION.saturday}</li>
            <li>{MEAL_INCLUSION.sunday}</li>
          </ul>
          <p className="mt-4 font-sans text-[1.15rem] font-normal text-charcoal-800">
            {MEAL_INCLUSION.note}
          </p>
        </div>

        {/* Food menus */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-500">Breakfast</h3>
            <ul className="space-y-2">
              {BREAKFAST_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  <span className="text-olive-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-500">Lunch & Dinner</h3>
            <ul className="space-y-2">
              {LUNCH_DINNER_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  <span className="text-olive-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-500">Drinks</h3>
            <ul className="space-y-2">
              {DRINKS_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  <span className="text-olive-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="group aspect-square overflow-hidden rounded-[28px]">
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive-500 px-4 py-1.5 font-sans text-sm font-medium uppercase tracking-[0.2em] text-white">
                  Most Popular
                </div>
              )}
              
              <h3 className="mb-2 font-serif text-2xl font-normal text-charcoal-500">{pkg.title}</h3>
              <div className="mb-8 flex items-baseline gap-1">
                <span className="font-serif text-4xl font-normal text-olive-500">{pkg.price}</span>
                <span className="font-sans text-[1.15rem] text-charcoal-800">/ course</span>
              </div>

              <ul className="mb-10 space-y-4">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <span className="mt-0.5 text-olive-500">✔</span>
                    <span className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/apply?location=${encodeURIComponent(locationName)}&package=${encodeURIComponent(pkg.title)}`}
                className={`block w-full text-center ${
                  pkg.isPopular
                    ? "btn-primary !w-full"
                    : "btn-primary-outline !w-full text-charcoal-900"
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
