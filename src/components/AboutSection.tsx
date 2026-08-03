"use client";

import React from "react";

export default function AboutSection() {
  const cards = [
    {
      title: "Practice that Honors Alignment",
      description:
        "At Alpesh Yoga, we teach yoga as a way of living — precise Hatha alignment, loving our bodies, and meeting practice with clarity, safety, and compassion.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800",
    },
    {
      title: "Community that Holds Us",
      description:
        "Students from around the world practice, eat, and grow together in Goa and Dharamshala — welcomed without judgment into a lifelong yoga family.",
      image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800",
    },
    {
      title: "Growth Guided by Presence",
      description:
        "From teaching practicums to daily check-ins, we turn insight into action so alignment, philosophy, and breath show up in real life.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Soft mandala watermark like HoO */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='100' cy='100' r='90' fill='none' stroke='%2391A271' stroke-width='1'/%3E%3Ccircle cx='100' cy='100' r='70' fill='none' stroke='%2391A271' stroke-width='1'/%3E%3Ccircle cx='100' cy='100' r='50' fill='none' stroke='%2391A271' stroke-width='1'/%3E%3Ccircle cx='100' cy='100' r='30' fill='none' stroke='%2391A271' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-[0.22em] text-olive-600">
              Teaching with heart, rooted in tradition
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-[#4A4540] sm:text-5xl md:text-[52px]">
              Where Your Practice Finds Purpose
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="font-sans text-[1.2rem] font-normal leading-[1.75] text-[#212121]">
              At Alpesh Yoga, we believe the world needs teachers who honor the origins of yoga while
              meeting the needs of the modern world with compassion, integrity and authenticity.
            </p>
            <p className="font-sans text-[1.2rem] font-normal leading-[1.75] text-[#212121]">
              We are a registered yoga school with Yoga Alliance, USA — training students in Goa and
              Dharamshala for more than two decades.
            </p>
            <a href="/about" className="btn-primary mt-2 w-fit">
              How we began
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="group flex flex-col">
              <div className="mb-6 aspect-square overflow-hidden rounded-[24px]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-normal text-[#212121]">{card.title}</h3>
              <p className="font-sans text-[1.1rem] font-normal leading-[1.7] text-[#2A2A2A]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
