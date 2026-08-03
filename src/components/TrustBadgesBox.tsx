"use client";

import React from "react";

export default function TrustBadgesBox() {
  return (
    <div className="relative -mt-16 z-20 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-50">
        
        {/* Left Text Content */}
        <div className="text-center md:text-left max-w-md">
          <p className="font-sans text-charcoal-500 text-sm md:text-base leading-relaxed font-light">
            We are a registered yoga school with Yoga Alliance, USA. Our certificates are valid internationally for you to teach yoga anywhere in the world.
          </p>
        </div>

        {/* Right Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 shrink-0">
          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center p-3 shadow-sm bg-gray-50">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Yoga_Alliance_logo.svg" 
                alt="Yoga Alliance 200 HR" 
                className="w-full h-auto opacity-70 grayscale"
                // Using a placeholder or generic YA logo approach
              />
            </div>
            <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest">RYS 200</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center p-3 shadow-sm bg-gray-50">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Yoga_Alliance_logo.svg" 
                alt="Yoga Alliance 300 HR" 
                className="w-full h-auto opacity-70 grayscale"
              />
            </div>
            <span className="font-sans text-[10px] font-bold text-gray-400 uppercase tracking-widest">RYS 300</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <a 
              href="/apply"
              className="btn-primary !px-8 !py-3 !text-xs !uppercase !tracking-wider"
            >
              Enroll Now
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
