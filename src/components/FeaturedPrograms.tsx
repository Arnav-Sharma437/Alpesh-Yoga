"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function FeaturedPrograms() {
  const COURSES = [
    {
      title: "100 Hour Yoga TTC",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
      description: "Alpesh Yoga offers 100 Hour Yoga Teacher Training Course in India. This course is perfect for beginners who want to build a solid foundation of Hatha and Iyengar alignment yoga, or those with limited time.",
      link: "/goa/100-hour-ttc"
    },
    {
      title: "200 Hour Yoga TTC",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
      description: "Our flagship 200 Hour Yoga Teacher Training Course in Goa and Rishikesh. Registered with Yoga Alliance USA, this comprehensive training covers alignment, adjustment, anatomy, philosophy, and teaching skills.",
      link: "/goa/200-hour-yttc"
    },
    {
      title: "300 Hour Yoga TTC",
      image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600",
      description: "Advanced 300 Hour Yoga Teacher Training Course for teachers who have completed their 200-hour training. Deepen your alignment knowledge, learn advanced adjustments, and master therapeutic yoga techniques.",
      link: "/dates-prices"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c2272d] mb-4 tracking-tight uppercase">
            Our Yoga Teacher Training Courses
          </h2>
          <div className="mb-4 text-[#c2272d]">
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed font-light">
            Alpesh Yoga offers Yoga Alliance Registered Yoga Teacher Training Courses in India (Goa & Rishikesh).
          </p>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-lg md:text-xl font-bold text-[#c2272d] uppercase tracking-wide">
                    {course.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                    {course.description}
                  </p>
                </div>
              </div>
              
              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <a
                  href={course.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 rounded bg-[#c2272d] hover:bg-[#a11f24] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm"
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
