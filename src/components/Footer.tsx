"use client";

import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col space-y-6">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo/alpesh-logo.png" alt="Alpesh Yoga" className="h-12 w-auto object-contain" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Alpesh Yoga
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-charcoal-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/alpeshyogaindia" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-charcoal-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/alpeshyoga123" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-charcoal-900 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="p-2 border border-gray-700 rounded-full hover:bg-white hover:text-charcoal-900 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="flex flex-col">
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><a href="/programs" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">All Programs</a></li>
              <li><a href="/goa/200-hour-yttc" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">200-Hour YTTC Goa</a></li>
              <li><a href="/dharamshala/200-hour-yttc" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">200-Hour YTTC Dharamshala</a></li>
              <li><a href="/goa/100-hour-ttc" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">100-Hour TTC</a></li>
              <li><a href="/retreats" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Yoga Retreats</a></li>
              <li><a href="/daily-classes" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Daily Classes</a></li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col">
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white mb-6">Links</h4>
            <ul className="space-y-4">
              <li><a href="/about" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/testimonials" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/dates-prices" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Dates & Prices</a></li>
              <li><a href="/contact" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/apply" className="font-sans text-xs text-gray-400 hover:text-white transition-colors">Apply Now</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="flex flex-col">
            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block font-sans text-xs text-white mb-1">Arambol, Goa</span>
                <span className="font-sans text-[11px] text-gray-400">Near Magic Park, Arambol Beach</span>
              </li>
              <li>
                <span className="block font-sans text-xs text-white mb-1">Dharamshala</span>
                <span className="font-sans text-[11px] text-gray-400">Dharamkot, Kangra, HP</span>
              </li>
              <li>
                <a href="mailto:alpeshyoga@gmail.com" className="font-sans text-[11px] text-gray-400 hover:text-white transition-colors">alpeshyoga@gmail.com</a>
              </li>
              <li>
                <a href="tel:+917719878500" className="font-sans text-[11px] text-gray-400 hover:text-white transition-colors">+91 77198 78500</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] text-gray-500 uppercase tracking-widest">
            © {currentYear} Alpesh Yoga. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="font-sans text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="/terms" className="font-sans text-[10px] text-gray-500 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
