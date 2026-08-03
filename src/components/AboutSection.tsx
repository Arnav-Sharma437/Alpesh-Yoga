"use client";

import React from "react";

export default function AboutSection() {
  const cards = [
    {
      title: "Hatha & Alignment Mastery",
      description: "Our teaching is deeply rooted in Iyengar alignment principles, combined with Hatha, Ashtanga, and Vinyasa Flow styles for a comprehensive understanding.",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800"
    },
    {
      title: "Community & Connection",
      description: "Join an international family of yogis. Practice, eat, and grow together in a supportive environment that fosters lifelong friendships and spiritual growth.",
      image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800"
    },
    {
      title: "Transformative Locations",
      description: "Whether in the serene Himalayan mountains of Dharamshala or the vibrant beaches of Goa, our ashrams provide the perfect sanctuary for deep practice.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
    }
  ];

  return (
    <section id="about" className="py-24 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[56px] leading-[1.1] font-medium text-charcoal-900 tracking-tight text-rust-500">
            Where Your Practice Finds Purpose
          </h2>
          <div className="flex flex-col justify-center">
            <p className="font-sans text-base md:text-lg text-charcoal-500 leading-relaxed font-light mb-4">
              Alpesh Yoga is a registered yoga school with Yoga Alliance, USA. We have been training yoga students in the art of yoga and meditation for more than a decade. 
            </p>
            <p className="font-sans text-base md:text-lg text-charcoal-500 leading-relaxed font-light">
              Our holistic approach combines physical alignment with deep spiritual immersion, offering a truly life-changing experience in the heart of India.
            </p>
          </div>
        </div>

        {/* 3 Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="overflow-hidden rounded-3xl mb-6 shadow-sm aspect-[4/3]">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-3">{card.title}</h3>
              <p className="font-sans text-sm text-charcoal-500 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Centered Action Button */}
        <div className="flex justify-center">
          <a
            href="/about"
            className="btn-primary"
          >
            Read Our Story
          </a>
        </div>

      </div>
    </section>
  );
}
