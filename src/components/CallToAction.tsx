"use client";

import React from "react";
import { MessageSquare, PhoneCall } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-cream-100/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-br from-terracotta-700 to-terracotta-600 p-8 md:p-16 text-center text-cream-50 overflow-hidden shadow-2xl border border-terracotta-800">
          
          {/* Subtle background circles */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-terracotta-500/20 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-terracotta-500/20 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta-100 font-semibold bg-terracotta-800/40 px-3 py-1 rounded-full w-fit mx-auto">
              Join Alpesh Yoga
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              See you on the mat!
            </h2>

            <p className="font-sans text-sm sm:text-base text-cream-100/90 leading-relaxed font-light">
              Experience the depth of Hatha alignment yoga in Upper Bhagsu, Dharamshala. Drop in for a class or secure your spot in our upcoming teacher training modules. Contact us below to get started.
            </p>

            {/* Direct Booking Buttons Container */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 pt-6 max-w-lg mx-auto">
              
              <a
                href="https://wa.me/917719878500?text=Hello%20Alpesh,%20I%20would%20like%20to%20book%20a%20yoga%20session%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-cream-50 hover:bg-terracotta-100 text-terracotta-700 font-sans text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-terracotta-700" />
                <span>Alpesh: +91 77198 78500</span>
              </a>

              <a
                href="https://wa.me/919736463605?text=Hello%20Alpesh%20Yoga,%20I%20would%20like%20to%20register%20for%20an%20upcoming%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-forest-600 hover:bg-forest-500 text-cream-50 font-sans text-sm font-semibold border border-forest-700 shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Office: +91 97364 63605</span>
              </a>

            </div>

            <p className="font-sans text-[11px] text-terracotta-100/70 pt-2">
              Instant responses via WhatsApp. We speak English, Hindi, and accommodate practitioners worldwide.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
