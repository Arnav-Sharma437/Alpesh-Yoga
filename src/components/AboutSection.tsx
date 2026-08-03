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
    <section id="about" className="relative overflow-hidden bg-sand-50 py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="mb-4 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
              Teaching with heart, rooted in tradition
            </p>
            <h2 className="font-serif text-4xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-5xl md:text-[52px]">
              Where Your Practice Finds Purpose
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <p className="font-sans text-[1.2rem] font-normal leading-[1.7] text-charcoal-800">
              Alpesh Yoga is a registered yoga school with Yoga Alliance, USA. We have been
              training yoga students in the art of yoga and meditation for more than two decades.
            </p>
            <p className="font-sans text-[1.2rem] font-normal leading-[1.7] text-charcoal-800">
              We believe the world needs teachers who honor the origins of yoga while meeting the
              modern world with compassion, integrity, and authentic alignment.
            </p>
            <a href="/about" className="btn-primary mt-2 w-fit">
              How we began
            </a>
          </div>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="group flex flex-col">
              <div className="mb-6 aspect-[4/3] overflow-hidden rounded-[28px] shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 font-serif text-2xl font-normal text-charcoal-900">
                {card.title}
              </h3>
              <p className="font-sans text-[1.1rem] font-normal leading-[1.7] text-charcoal-800">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
