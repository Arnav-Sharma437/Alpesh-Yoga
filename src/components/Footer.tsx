"use client";

import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071624] text-gray-300 pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Quick Links */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 w-fit">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-sans font-light text-gray-400">
              <li>
                <a href="/" className="hover:text-[#F7941D] transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#F7941D] transition-colors">About Us</a>
              </li>
              <li>
                <a href="/dates-prices" className="hover:text-[#F7941D] transition-colors">Courses &amp; Dates</a>
              </li>
              <li>
                <a href="/retreats" className="hover:text-[#F7941D] transition-colors">Retreats</a>
              </li>
              <li>
                <a href="/about#gallery" className="hover:text-[#F7941D] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/#blog" className="hover:text-[#F7941D] transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#F7941D] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Courses */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 w-fit">
              Our Courses
            </h4>
            <ul className="space-y-2.5 text-sm font-sans font-light text-gray-400">
              <li>
                <a href="/goa/100-hour-ttc" className="hover:text-[#F7941D] transition-colors">100 Hour Yoga TTC</a>
              </li>
              <li>
                <a href="/goa/200-hour-yttc" className="hover:text-[#F7941D] transition-colors">200 Hour Yoga TTC</a>
              </li>
              <li>
                <a href="/dates-prices" className="hover:text-[#F7941D] transition-colors">300 Hour Yoga TTC</a>
              </li>
              <li>
                <a href="/dates-prices" className="hover:text-[#F7941D] transition-colors">500 Hour Yoga TTC</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-2 w-fit">
              Contact Details
            </h4>
            <div className="space-y-4 font-sans text-sm font-light text-gray-400">
              
              {/* Goa address */}
              <div className="space-y-1">
                <span className="font-bold text-white text-xs block uppercase tracking-wider">Goa Shala:</span>
                <div className="flex gap-2 items-start text-xs">
                  <MapPin className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
                  <p>Madhlo Waddo, Arambol Beach, North Goa 403524</p>
                </div>
              </div>

              {/* Dharamshala address */}
              <div className="space-y-1">
                <span className="font-bold text-white text-xs block uppercase tracking-wider">Dharamshala Shala:</span>
                <div className="flex gap-2 items-start text-xs">
                  <MapPin className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
                  <p>Baldev House, Dharamkot, McLeod Ganj 176219</p>
                </div>
              </div>

              {/* General contact */}
              <div className="space-y-1.5 pt-2 border-t border-gray-800/50 text-xs">
                <div className="flex gap-2 items-center">
                  <Phone className="w-4 h-4 text-[#F7941D] shrink-0" />
                  <a href="tel:+917719878500" className="hover:text-[#F7941D] transition-colors">+91 77198 78500</a>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="w-4 h-4 text-[#F7941D] shrink-0" />
                  <a href="mailto:alpeshyoga@gmail.com" className="hover:text-[#F7941D] transition-colors">alpeshyoga@gmail.com</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-gray-850 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Alpesh Yoga India. All Rights Reserved.
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#F7941D] hover:text-white transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/alpeshyogaindia" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#F7941D] hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/alpeshyoga123" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#F7941D] hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-[#F7941D] hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

