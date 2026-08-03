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
                src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200"
                alt="Goa yoga campus"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=700"
                alt="Goa practice"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=700"
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
              If you’re drawn to the roots of yoga and Himalayan stillness, Dharamkot offers
              authentic learning in mountain air — focused meditation, alignment, and traditional
              ashram rhythm.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:auto-rows-[240px] md:grid-cols-3">
            <div className="overflow-hidden rounded-[24px] md:row-span-2">
              <img
                src="https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800"
                alt="Dharamshala mountains"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px] md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1000"
                alt="Dharamshala yoga"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=700"
                alt="Meditation"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=700"
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
