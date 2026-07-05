"use client";

import React, { useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Popover Card */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[calc(100vw-3rem)] sm:w-80 bg-cream-50 rounded-2xl shadow-2xl border border-sage-100 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-forest-600 p-4 text-cream-50 flex items-center justify-between">
            <div>
              <h4 className="font-serif font-bold text-base">Chat with Alpesh Yoga</h4>
              <p className="text-[11px] text-cream-200/80">Typically replies within a few hours</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-forest-700 transition-colors text-cream-100"
              aria-label="Close chat window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-xs text-forest-600/80 leading-relaxed mb-1">
              Select one of our lines to book a class, register for a course, or ask questions:
            </p>

            {/* Link 1 */}
            <a
              href="https://wa.me/917719878500?text=Hello%20Alpesh,%20I%20would%20like%20to%20inquire%20about%20your%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-sage-100 bg-white hover:border-terracotta-500 hover:bg-terracotta-50/20 group transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-forest-600 group-hover:text-terracotta-600 transition-colors">
                  Alpesh (Lead Instructor)
                </span>
                <span className="text-[11px] text-sage-600">Daily Alignment Classes</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-sage-500 group-hover:text-terracotta-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Link 2 */}
            <a
              href="https://wa.me/919736463605?text=Hello%20Alpesh%20Yoga,%20I%20would%20like%20to%20register%20for%20one%20of%20your%20upcoming%20teacher%20training%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-sage-100 bg-white hover:border-terracotta-500 hover:bg-terracotta-50/20 group transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-forest-600 group-hover:text-terracotta-600 transition-colors">
                  Office & Course Bookings
                </span>
                <span className="text-[11px] text-sage-600">TTC & Workshops Info</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-sage-500 group-hover:text-terracotta-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Footer banner */}
          <div className="bg-sage-50 px-4 py-2 border-t border-sage-100 text-center">
            <span className="text-[10px] text-sage-600 font-medium">Upper Bhagsu, Dharamshala, India</span>
          </div>
        </div>
      )}

      {/* Main floating circle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 relative cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing glow under */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        
        {isOpen ? (
          <X className="w-6 h-6 z-10" />
        ) : (
          <svg
            className="w-7 h-7 z-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
      </button>
    </div>
  );
}
