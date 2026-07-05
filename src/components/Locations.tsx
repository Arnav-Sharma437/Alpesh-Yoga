"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Locations() {
  const LOCATIONS = [
    {
      title: "Yoga School in Goa",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
      description: "Our school in Goa is located near the peaceful shores of Arambol beach. Enjoy a tropical climate, warm ocean breezes, and coastal living while learning alignment-based yoga in our beachside shala.",
      link: "/goa",
      buttonText: "GOA SCHOOL"
    },
    {
      title: "Yoga School in Rishikesh",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600",
      description: "Located in the spiritual capital of the world, our Rishikesh school offers an authentic, traditional ashram environment near the banks of the sacred Ganges river, surrounded by temples.",
      link: "/dates-prices",
      buttonText: "RISHIKESH SCHOOL"
    },
    {
      title: "Yoga School in Dharamshala",
      image: "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=600",
      description: "Nestled in the quiet heights of Dharamkot and Upper Bhagsu, our mountain shala offers crisp Himalayan air and spectacular views of the snow-capped peaks, perfect for focused meditation.",
      link: "/dharamshala",
      buttonText: "DHARAMSHALA SCHOOL"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#F7941D] mb-4 tracking-tight uppercase">
            Our Locations
          </h2>
          <div className="mb-4 text-[#F7941D]">
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            Alpesh Yoga offers Yoga teacher training in three beautiful cities in India: Goa, Rishikesh, and Dharamshala.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={loc.image} 
                    alt={loc.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-gray-800 uppercase tracking-wide">
                    {loc.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {loc.description}
                  </p>
                </div>
              </div>
              
              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <a
                  href={loc.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
                >
                  {loc.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

