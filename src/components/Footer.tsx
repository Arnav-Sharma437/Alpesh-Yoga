"use client";

import React from "react";
import { MapPin, Phone, Mail, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-forest-600 text-cream-100/90 pt-16 pb-8 border-t border-forest-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Info Section */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-cream-50 block">
              Alpesh Yoga
            </span>
            <p className="font-sans text-sm text-cream-200/80 leading-relaxed">
              Precision-focused, alignment-based Hatha yoga studio in the tranquil Himalayas of Dharamshala. We teach you how to align your body, breathe, and deepen your practice safely.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com/alpeshyogaindia"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-forest-700 text-cream-100 hover:bg-terracotta-600 hover:text-cream-50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@alpeshyoga123"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-forest-700 text-cream-100 hover:bg-terracotta-600 hover:text-cream-50 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-6">Explore</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="#" className="hover:text-terracotta-100 hover:underline transition-all">Home</a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-terracotta-100 hover:underline transition-all">Our Philosophy</a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-terracotta-100 hover:underline transition-all">Daily Schedule</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-terracotta-100 hover:underline transition-all">Featured Courses</a>
              </li>
              <li>
                <a href="#setting" className="hover:text-terracotta-100 hover:underline transition-all">Himalayan Location</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-terracotta-100 hover:underline transition-all">Student Reviews</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-cream-50 mb-6">Contact & Location</h3>
            
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Upper Bhagsu (near Beetroot Café & Kibbutz Bhagsu), Dharamshala, Himachal Pradesh, 176219, India
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-terracotta-500 shrink-0" />
              <div className="flex flex-col">
                <a href="https://wa.me/917719878500" target="_blank" rel="noopener noreferrer" className="hover:text-cream-50 hover:underline">
                  +91 77198 78500 (Alpesh)
                </a>
                <a href="https://wa.me/919736463605" target="_blank" rel="noopener noreferrer" className="hover:text-cream-50 hover:underline">
                  +91 97364 63605 (Office)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-terracotta-500 shrink-0" />
              <a href="mailto:alpeshyoga@gmail.com" className="hover:text-cream-50 hover:underline">
                alpeshyoga@gmail.com
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-md h-56 border border-forest-500 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4093959146193!2d76.33129887627443!3d32.24716497388046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53dfdcd15d49%3A0xe1c028ea7c55cb85!2sAlpesh%20Yoga!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alpesh Yoga Location Map"
              className="absolute inset-0"
            ></iframe>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-forest-700 text-center text-xs text-cream-300/60 font-sans flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alpesh Yoga Studio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cream-100 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream-100 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
