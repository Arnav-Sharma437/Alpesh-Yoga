"use client";

import React from "react";

export interface TeacherProfile {
  name: string;
  role: string;
  image: string;
}

interface TeachersSectionProps {
  teachers: TeacherProfile[];
}

export default function TeachersSection({ teachers }: TeachersSectionProps) {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-rust-500 font-bold mb-3">
            Our Team
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold tracking-tight mb-4">
            Meet Your Teachers
          </h2>
          <p className="font-sans text-sm md:text-base text-charcoal-500 max-w-2xl mx-auto font-light leading-relaxed">
            Learn from our experienced, certified instructors who are deeply passionate about sharing the authentic teachings of yoga.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="flex flex-col items-center group w-48">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-[3px] border-sand-50 group-hover:border-olive-200 transition-colors duration-300 shadow-sm">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="font-serif text-xl font-bold text-charcoal-900 mb-1">
                {teacher.name}
              </h4>
              <p className="font-sans text-xs uppercase tracking-widest text-rust-500 font-medium">
                {teacher.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
