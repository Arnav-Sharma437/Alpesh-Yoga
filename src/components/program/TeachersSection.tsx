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
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Our Team
          </p>
          <h2 className="mb-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
            Meet Your Teachers
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
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
              <h4 className="mb-1 font-serif text-xl font-normal text-charcoal-500">
                {teacher.name}
              </h4>
              <p className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
                {teacher.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
