"use client";

import React from "react";
import { Award } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#faf8f5] text-center border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c2272d] mb-4 tracking-tight uppercase">
          YTTC in India & Intensive Yoga Retreats
        </h2>

        {/* Medal/Award Icon */}
        <div className="mb-6 text-[#c2272d]">
          <Award className="w-12 h-12" />
        </div>

        {/* Main Paragraph */}
        <p className="font-sans text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl mb-8 font-light">
          Alpesh Yoga is a registered yoga school with Yoga Alliance USA. We offer 100 Hour, 200 Hour, 300 Hour and 500 Hour Yoga Teacher Training Courses in Goa, Rishikesh and Dharamshala, India. Also, we offer intensive Hatha & Iyengar alignment yoga retreats in India. If you want to become a certified yoga teacher or want to deepen your practice under structural alignment expert teacher, Alpesh Patel, then Alpesh Yoga is the best place for you.
        </p>

        {/* Block Quote / Boxed Highlight */}
        <div className="border-l-4 border-[#c2272d] bg-white p-6 rounded-r-xl shadow-sm text-left max-w-3xl mb-8">
          <p className="font-sans text-sm sm:text-base text-gray-800 leading-relaxed italic font-normal">
            "Alpesh Yoga offers Yoga Alliance Registered Yoga Teacher Training Courses in India (Goa & Rishikesh) and Hatha Alignment Intensive Yoga Retreats. Under the direction of alignment master teacher Alpesh Patel, you will learn the exact science of body alignment, prop usage, adjustments, and sequencing to establish a safe and therapeutic yoga practice."
          </p>
        </div>

        {/* Read More Button */}
        <a
          href="/about"
          className="inline-flex items-center justify-center px-6 py-2.5 rounded bg-[#c2272d] hover:bg-[#a11f24] text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow"
        >
          READ MORE
        </a>

      </div>
    </section>
  );
}
