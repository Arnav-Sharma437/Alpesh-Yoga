"use client";

import React from "react";

export default function Locations() {
  return (
    <section id="locations" className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="mb-20 text-center">
        <h2 className="font-serif text-4xl font-normal tracking-tight text-[#4A4540] sm:text-5xl md:text-[52px]">
          Our Locations
        </h2>
      </div>

      <div className="mx-auto max-w-6xl space-y-28 px-4 sm:px-6 lg:px-8">
        {/* Goa */}
        <div>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="mb-3 font-serif text-4xl font-normal text-[#6B5B4A] sm:text-5xl">Goa</h3>
            <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.28em] text-[#6B5B4A]">
              Tropical · Alignment · Freedom
            </p>
            <p className="font-sans text-[1.2rem] font-normal leading-[1.75] text-[#212121]">
              If you’re drawn to ocean air, warm breezes, and deep alignment practice, Arambol Beach
              offers the perfect setting for your teacher training — intensive study balanced with
              coastal calm.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:auto-rows-[260px] md:grid-cols-3">
            <div className="overflow-hidden rounded-[24px] md:col-span-2 md:row-span-2">
              <img
                src="/gallery/alpesh-yoga-goa-india-1.jpg"
                alt="Goa yoga campus"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/gallery/alpesh-yoga-teacher-training-rishikesh-india-1.jpg"
                alt="Goa practice"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/gallery/DSC_7392.jpg"
                alt="Goa beach shala"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Dharamshala */}
        <div>
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h3 className="mb-3 font-serif text-4xl font-normal text-[#6B5B4A] sm:text-5xl">
              Dharamshala
            </h3>
            <p className="mb-5 font-sans text-xs font-bold uppercase tracking-[0.28em] text-[#6B5B4A]">
              Tradition · Depth · Devotion
            </p>
            <p className="font-sans text-[1.2rem] font-normal leading-[1.75] text-[#212121]">
              If you’re drawn to the roots of yoga and Himalayan stillness, Bhagsu Nag offers
              authentic learning in mountain air — focused meditation, alignment, and traditional
              ashram rhythm.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-3">
            <div className="overflow-hidden rounded-[24px] md:row-span-2">
              <img
                src="/gallery/alpesh-yoga-school-dharamshala-india-1.jpg"
                alt="Dharamshala mountains"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px] md:col-span-2">
              <img
                src="/gallery/alpesh-yoga-200hrs-yttc-dharamshala-india-1.jpg"
                alt="Dharamshala yoga"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/gallery/IMG_20181219_123719.jpg"
                alt="Meditation"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="/gallery/alpesh-yoga-classes-dharamshala-india-1.jpg"
                alt="Alignment class"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
