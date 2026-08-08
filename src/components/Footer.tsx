"use client";

import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useApplyHref } from "@/hooks/useApplyHref";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const applyHref = useApplyHref();

  return (
    <footer className="bg-charcoal-950 pt-20 pb-10 text-white">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        
        <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col space-y-6">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo/alpesh-logo.png" alt="Alpesh Yoga" className="h-12 w-auto object-contain" />
              <span className="font-serif text-2xl font-normal tracking-tight text-white">
                Alpesh Yoga
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-700 p-2 transition-colors hover:border-olive-500 hover:bg-olive-500 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com/alpeshyogaindia" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-700 p-2 transition-colors hover:border-olive-500 hover:bg-olive-500 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com/alpeshyoga123" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-700 p-2 transition-colors hover:border-olive-500 hover:bg-olive-500 hover:text-white">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://twitter.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="rounded-full border border-gray-700 p-2 transition-colors hover:border-olive-500 hover:bg-olive-500 hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div className="flex flex-col">
            <h4 className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">Programs</h4>
            <ul className="space-y-4">
              <li><a href="/programs" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">All Programs</a></li>
              <li><a href="/goa/200-hour-yttc" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">200-Hour YTTC Goa</a></li>
              <li><a href="/dharamshala/200-hour-yttc" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">200-Hour YTTC Dharamshala</a></li>
              <li><a href="/goa/100-hour-ttc" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">100-Hour TTC</a></li>
              <li><a href="/retreats" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Yoga Retreats</a></li>
              <li><a href="/daily-classes" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Daily Classes</a></li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div className="flex flex-col">
            <h4 className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">Links</h4>
            <ul className="space-y-4">
              <li><a href="/about" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Our Story</a></li>
              <li><a href="/testimonials" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Testimonials</a></li>
              <li><a href="/dates-prices" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Dates & Prices</a></li>
              <li><a href="/contact" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Contact Us</a></li>
              <li><a href={applyHref} className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">Apply Now</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="flex flex-col">
            <h4 className="mb-6 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="mb-1 block font-serif text-[1.15rem] font-normal text-white">Arambol, Goa</span>
                <span className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400">Madhlo Waddo, Arambol Beach</span>
              </li>
              <li>
                <span className="mb-1 block font-serif text-[1.15rem] font-normal text-white">Dharamshala</span>
                <span className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400">Upper Bhagsu, Dharamshala, HP</span>
              </li>
              <li>
                <a href="mailto:alpeshyoga@gmail.com" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">alpeshyoga@gmail.com</a>
              </li>
              <li>
                <a href="tel:+917719878500" className="font-sans text-[1.15rem] font-normal leading-[1.7] text-gray-400 transition-colors hover:text-olive-200">+91 77198 78500</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500">
            © {currentYear} Alpesh Yoga. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-olive-200">Privacy Policy</a>
            <a href="/terms" className="font-sans text-sm uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-olive-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
