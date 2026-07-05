"use client";

import React from "react";
import { MapPin, Phone, Mail, Youtube, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-forest-700 text-cream-100/90 pt-16 pb-8 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About */}
          <div className="space-y-5">
            <a href="/" className="block">
              <img 
                src="/logo/alpesh-logo.jpeg" 
                alt="Alpesh Yoga Logo" 
                className="h-16 w-auto object-contain rounded-lg bg-transparent"
              />
            </a>
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b-2 border-terracotta-500/30 pb-2 w-fit">
              About Our Company
            </h4>
            <p className="font-sans text-xs sm:text-sm text-cream-200/70 leading-relaxed font-light">
              Alpesh Yoga is a Yoga Alliance registered yoga school in Goa and Dharamshala, India, training yoga students in the art of yoga and meditation for over a decade.
            </p>
            <div>
              <a 
                href="/about" 
                className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta-500 hover:text-terracotta-600 transition-colors"
              >
                <span>Read More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b-2 border-terracotta-500/30 pb-2 w-fit">
              Useful Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans font-light text-cream-200/70">
              <li>
                <a href="/" className="hover:text-terracotta-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-terracotta-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-terracotta-500 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="/about#gallery" className="hover:text-terracotta-500 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/apply" className="hover:text-terracotta-500 transition-colors">Apply Now</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-terracotta-500 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-terracotta-500 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Goa Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b-2 border-terracotta-500/30 pb-2 w-fit">
              Goa Address
            </h4>
            <div className="space-y-3 font-sans text-xs sm:text-sm font-light text-cream-200/70">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Alpesh Yoga Center, Opposite Arcan Bar, Before Piya Guest House, Madhlo Waddo, Arambol Beach, North Goa 403524
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-terracotta-500 shrink-0" />
                <a href="tel:+917719878500" className="hover:text-terracotta-500 transition-colors">
                  +91 77198 78500
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-terracotta-500 shrink-0" />
                <a href="mailto:alpeshyoga@gmail.com" className="hover:text-terracotta-500 transition-colors">
                  alpeshyoga@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Dharamshala Address */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b-2 border-terracotta-500/30 pb-2 w-fit">
              Dharamshala Address
            </h4>
            <div className="space-y-3 font-sans text-xs sm:text-sm font-light text-cream-200/70">
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 text-terracotta-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Alpesh Yoga, Baldev House, 50 meters from Track n Dine Restaurant and before Bodhi Greens Restaurant, Dharamkot 176219, Dharamshala, Himachal Pradesh
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-terracotta-500 shrink-0" />
                <a href="tel:+917719878500" className="hover:text-terracotta-500 transition-colors">
                  +91 77198 78500
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="w-4 h-4 text-terracotta-500 shrink-0" />
                <a href="mailto:alpeshyoga@gmail.com" className="hover:text-terracotta-500 transition-colors">
                  alpeshyoga@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Social Icons Links */}
        <div className="pt-8 border-t border-forest-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-cream-200/50">
          <div className="flex space-x-6 items-center">
            <a 
              href="https://instagram.com/alpeshyogaindia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-forest-800 text-cream-200 hover:bg-terracotta-500 hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com/alpeshyoga123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-forest-800 text-cream-200 hover:bg-terracotta-500 hover:text-white transition-colors"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 text-[11px] font-sans text-cream-200/30">
          &copy; {new Date().getFullYear()} Alpesh Yoga India. All Rights Reserved. Registered with Yoga Alliance USA.
        </div>

      </div>
    </footer>
  );
}
