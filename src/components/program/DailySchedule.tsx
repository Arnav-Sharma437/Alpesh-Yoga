"use client";

import React from "react";

export interface ScheduleItem {
  time: string;
  activity: string;
  image: string;
}

interface DailyScheduleProps {
  schedule: ScheduleItem[];
  note?: string;
}

export default function DailySchedule({ schedule, note }: DailyScheduleProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-rust-500 font-bold mb-3">
            Schedule
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold tracking-tight">
            A Typical Daily Schedule
          </h2>
        </div>

        <div className="space-y-8 md:space-y-12 max-w-3xl mx-auto">
          {schedule.map((item, idx) => {
            // Alternate layout: even index = image left, odd index = image right (on desktop)
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`flex flex-col md:flex-row items-center gap-6 md:gap-12 ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video md:aspect-[4/3] shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.activity} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <span className="font-sans text-sm font-bold text-rust-500 block mb-2">
                    {item.time}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900">
                    {item.activity}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {note && (
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="font-sans text-xs text-gray-400 italic font-light leading-relaxed">
              * {note}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
