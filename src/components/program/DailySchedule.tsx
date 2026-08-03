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
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Schedule
          </p>
          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
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
                  <div className="aspect-[4/3] overflow-hidden rounded-[28px] shadow-sm sm:aspect-video md:aspect-[4/3]">
                    <img 
                      src={item.image} 
                      alt={item.activity} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <span className="mb-2 block font-sans text-[1.15rem] font-medium text-olive-500">
                    {item.time}
                  </span>
                  <h4 className="font-serif text-xl font-normal text-charcoal-500 sm:text-2xl">
                    {item.activity}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>

        {note && (
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="font-sans text-[1.15rem] font-normal italic leading-[1.7] text-charcoal-800">
              * {note}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
