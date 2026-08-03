"use client";

import React from "react";

export default function Locations() {
  const locations = [
    {
      name: "Goa",
      keywords: "TROPICAL • ALIGNMENT • FREEDOM",
      href: "/goa",
      description:
        "If you’re drawn to ocean air, warm breezes, and deep alignment practice, Arambol Beach offers the perfect setting for your teacher training — intensive study balanced with coastal calm.",
      blurb: "Arambol Beach sanctuary for multi-style & alignment trainings by the Arabian Sea.",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1400",
      gallery: [
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
      ],
    },
    {
      name: "Dharamshala",
      keywords: "TRADITION • DEPTH • DEVOTION",
      href: "/dharamshala",
      description:
        "If you’re drawn to the roots of yoga and Himalayan stillness, Dharamkot offers authentic learning in mountain air — focused meditation, alignment, and traditional ashram rhythm.",
      blurb: "Dharamkot mountain shala for immersive Hatha alignment and teacher training.",
      image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1400",
      gallery: [
        "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=600",
        "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=600",
      ],
    },
  ];

  return (
    <section id="locations" className="relative overflow-hidden border-t border-gray-100 bg-white py-24">
      <div className="mb-16 text-center">
        <h2 className="font-serif text-4xl font-normal tracking-tight text-charcoal-500 sm:text-5xl md:text-[52px]">
          Our Locations
        </h2>
      </div>

      <div className="mx-auto max-w-6xl space-y-28 px-4 sm:px-6 lg:px-8">
        {locations.map((loc) => (
          <div key={loc.name} className="space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-3 font-serif text-4xl font-normal text-olive-500 sm:text-5xl">
                {loc.name}
              </h3>
              <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-charcoal-500">
                {loc.keywords}
              </p>
              <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                {loc.description}
              </p>
            </div>

            <a href={loc.href} className="group relative block overflow-hidden rounded-[32px]">
              <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                  <h4 className="mb-2 font-serif text-3xl font-normal text-white sm:text-4xl">
                    {loc.name}
                  </h4>
                  <p className="max-w-xl font-sans text-base text-white/85 sm:text-lg">
                    {loc.blurb}
                  </p>
                </div>
              </div>
            </a>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {loc.gallery.map((src) => (
                <div key={src} className="aspect-[16/10] overflow-hidden rounded-[24px]">
                  <img
                    src={src}
                    alt={`${loc.name} campus`}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
