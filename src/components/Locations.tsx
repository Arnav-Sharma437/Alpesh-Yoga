"use client";

import React from "react";

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-sand-50 relative overflow-hidden border-t border-gray-100">
      
      {/* Global Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-[52px] font-medium text-charcoal-900 tracking-tight">
          Our Locations
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Goa Location */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl sm:text-4xl text-rust-500 font-bold tracking-wide italic mb-4">
              Goa
            </h3>
            <p className="font-sans text-charcoal-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-light">
              Experience tropical living, warm ocean breezes, and deep spiritual practice near the peaceful shores of Arambol beach. Our Goa ashram perfectly balances intensive training with relaxing coastal vibes.
            </p>
          </div>
          
          {/* Goa Masonry Grid Simulation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800" alt="Goa Yoga" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600" alt="Goa Retreat" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600" alt="Goa Sunset" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

        {/* Dharamshala Location */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-serif text-3xl sm:text-4xl text-rust-500 font-bold tracking-wide italic mb-4">
              Dharamshala
            </h3>
            <p className="font-sans text-charcoal-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-light">
              Nestled in the quiet heights of the Himalayas, our mountain shala offers crisp air, spectacular snow-capped views, and a traditional ashram environment perfect for focused meditation.
            </p>
          </div>
          
          {/* Dharamshala Masonry Grid Simulation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-2 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=600" alt="Dharamshala Mountains" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-1 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=800" alt="Dharamshala Yoga" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=600" alt="Meditation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="col-span-1 md:col-span-1 row-span-1 md:row-span-1 rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=600" alt="Meditation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
