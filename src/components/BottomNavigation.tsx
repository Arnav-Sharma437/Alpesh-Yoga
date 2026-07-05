"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Calendar, ClipboardList, MapPin, Phone, X, Award, Waves, Compass } from "lucide-react";

export default function BottomNavigation() {
  const pathname = usePathname();
  const [showLocationsModal, setShowLocationsModal] = useState(false);

  // Active status checks
  const isHomeActive = pathname === "/";
  const isCoursesActive = pathname === "/dates-prices" || pathname.includes("/100-hour-ttc") || pathname.includes("/200-hour-yttc") || pathname.includes("/8-day-intensive") || pathname.includes("/therapeutic-yoga");
  const isApplyActive = pathname === "/apply";
  const isLocationsActive = pathname === "/dharamshala" || pathname === "/goa" || pathname === "/daily-classes";

  const getWhatsAppLink = () => {
    return "https://wa.me/917719878500?text=Hi%20Alpesh%2520Yoga%2C%20I'm%20inquiring%20via%2520mobile%20app.";
  };

  return (
    <>
      {/* 1. Bottom Nav Container (only visible below 768px) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-forest-850 h-16 md:hidden flex items-center justify-around px-2 pb-safe">
        
        {/* Tab 1: Home */}
        <a 
          href="/" 
          className={`flex flex-col items-center justify-center w-12 h-12 active:scale-90 transition-transform ${
            isHomeActive ? "text-terracotta-500" : "text-white/60 hover:text-white"
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] font-sans font-medium tracking-tight">Home</span>
        </a>

        {/* Tab 2: Courses */}
        <a 
          href="/dates-prices" 
          className={`flex flex-col items-center justify-center w-12 h-12 active:scale-90 transition-transform ${
            isCoursesActive ? "text-terracotta-500" : "text-white/60 hover:text-white"
          }`}
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] font-sans font-medium tracking-tight">Courses</span>
        </a>

        {/* Tab 3: Center Highlighted Apply CTA */}
        <a 
          href="/apply" 
          className={`relative -top-4 flex flex-col items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-terracotta-600 to-terracotta-500 text-white shadow-lg active:scale-95 transition-transform border-4 border-black z-50`}
        >
          <ClipboardList className="w-5.5 h-5.5" />
          <span className="text-[8px] font-sans font-bold uppercase tracking-wider mt-0.5">Apply</span>
        </a>

        {/* Tab 4: Locations Bottom-sheet trigger */}
        <button 
          onClick={() => setShowLocationsModal(true)}
          className={`flex flex-col items-center justify-center w-12 h-12 active:scale-90 transition-transform cursor-pointer ${
            isLocationsActive ? "text-terracotta-500" : "text-white/60 hover:text-white"
          }`}
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] font-sans font-medium tracking-tight">Locations</span>
        </button>

        {/* Tab 5: Native WhatsApp Chat */}
        <a 
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-12 h-12 text-white/60 hover:text-white active:scale-90 transition-transform"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[9px] font-sans font-medium tracking-tight">WhatsApp</span>
        </a>

      </div>

      {/* 2. Native-Style Locations Bottom Sheet */}
      {showLocationsModal && (
        <div className="fixed inset-0 z-50 md:hidden flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          
          {/* Dismissible Backdrop */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setShowLocationsModal(false)}
          />

          {/* Bottom Sheet Card */}
          <div className="relative z-10 w-full bg-forest-900 border-t border-forest-850 rounded-t-3xl p-6 pb-8 space-y-5 animate-in slide-in-from-bottom-10 duration-300">
            
            {/* Header indicators */}
            <div className="flex items-center justify-between border-b border-forest-800 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-terracotta-500" />
                <h4 className="font-serif font-bold text-base text-white">Select Training Location</h4>
              </div>
              <button 
                onClick={() => setShowLocationsModal(false)}
                className="p-1 rounded-full bg-forest-850 text-white/60 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Selection Grid */}
            <div className="grid grid-cols-1 gap-4">
              
              {/* Option A: Dharamshala */}
              <a 
                href="/dharamshala"
                onClick={() => setShowLocationsModal(false)}
                className="flex items-center gap-4 p-4 rounded-2xl bg-forest-850 hover:bg-forest-800 border border-forest-800 hover:border-terracotta-500/30 transition-all group"
              >
                <div className="p-3 bg-terracotta-500/10 text-terracotta-500 rounded-xl group-hover:bg-terracotta-500/20">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-sm text-white">Dharamshala Studio</h5>
                  <p className="font-sans text-[10px] text-white/60">Himachal Pradesh (Summer Season)</p>
                </div>
              </a>

              {/* Option B: Goa */}
              <a 
                href="/goa"
                onClick={() => setShowLocationsModal(false)}
                className="flex items-center gap-4 p-4 rounded-2xl bg-forest-850 hover:bg-forest-800 border border-forest-800 hover:border-terracotta-500/30 transition-all group"
              >
                <div className="p-3 bg-sage-500/10 text-sage-500 rounded-xl group-hover:bg-sage-500/20">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-sm text-white">Goa Studio</h5>
                  <p className="font-sans text-[10px] text-white/60">Arambol Beach (Winter Season)</p>
                </div>
              </a>

            </div>

            {/* Quick close button */}
            <button 
              onClick={() => setShowLocationsModal(false)}
              className="w-full py-3 rounded-xl bg-forest-850 hover:bg-forest-800 text-white font-sans text-xs font-semibold"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </>
  );
}
