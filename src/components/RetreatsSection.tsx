"use client";

import React from "react";

export default function RetreatsSection() {
  const RETREATS = [
    {
      title: "Yoga Retreat In Goa",
      image: "/gallery/IMG-20181216-WA0027.jpg",
      description: "Enjoy a rejuvenating yoga retreat on the beautiful beaches of Goa. Relax, destress, and deepen your practice with daily alignment yoga classes, organic meals, and beachside sunset meditation.",
      link: "/retreats#goa"
    },
    {
      title: "Yoga Retreat In Rishikesh",
      image: "/gallery/IMG-20181217-WA0044.jpg",
      description: "Experience the spiritual energy of Rishikesh. Join our alignment yoga retreat on the banks of the sacred Ganges river, surrounded by majestic mountains, traditional ashrams, and temple bells.",
      link: "/retreats#rishikesh"
    },
    {
      title: "Sound Healing Courses",
      image: "/gallery/IMG-20181216-WA0034.jpg",
      description: "Learn the ancient art of sound healing. This intensive course covers Tibetan sound bowls, singing bowl massage, gong therapy, and chakra sound alignment to heal the body, mind, and spirit.",
      link: "/retreats"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Retreats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RETREATS.map((retreat, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={retreat.image} 
                    alt={retreat.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#F7941D] uppercase tracking-wide">
                    {retreat.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {retreat.description}
                  </p>
                </div>
              </div>
              
              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <a
                  href={retreat.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

