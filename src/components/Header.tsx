"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileGoaOpen, setMobileGoaOpen] = useState(false);
  const [mobileDharamshalaOpen, setMobileDharamshalaOpen] = useState(false);
  const [mobileRetreatsOpen, setMobileRetreatsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isHeaderActive = isScrolled || isOpen || !isHome;

  // Navigation links helper
  const getHomeHref = () => "/";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* 1. Slim Top Utility Bar (visible on desktop md+) */}
      <div className={`hidden md:block transition-all duration-300 ${
        isHeaderActive 
          ? "bg-forest-950/98 text-sage-200 border-b border-forest-800" 
          : "bg-black/25 text-cream-100 border-b border-white/5"
      } text-[11px] py-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6 font-sans">
            <a href="tel:+917719878500" className="hover:text-terracotta-500 transition-colors flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Support: +91 77198 78500</span>
            </a>
            <a href="mailto:alpeshyoga@gmail.com" className="hover:text-terracotta-500 transition-colors flex items-center gap-1.5 font-medium">
              <Mail className="w-3.5 h-3.5 text-terracotta-500" />
              <span>Email: alpeshyoga@gmail.com</span>
            </a>
          </div>
          <div>
            <a 
              href="/apply" 
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold px-3 py-1 rounded transition-colors text-[9px] uppercase tracking-wider"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        className={`transition-all duration-300 ${
          isHeaderActive
            ? "glassmorphism border-b border-forest-800/40 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Section (blends into black backdrop) */}
            <a href={getHomeHref()} className="flex items-center shrink-0">
              <img 
                src="/logo/alpesh-logo.jpeg" 
                alt="Alpesh Yoga Logo" 
                className="h-14 w-auto rounded-lg object-contain bg-transparent" 
              />
            </a>

            {/* Desktop Nav Items (visible on md and above) */}
            <nav className="hidden xl:flex items-center space-x-5">
              <a
                href={getHomeHref()}
                className="font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors"
              >
                Home
              </a>
              
              {/* About Us Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors cursor-pointer"
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-terracotta-500" />
                </button>
                <div className="absolute top-full left-0 bg-forest-700 border border-forest-600 shadow-xl rounded-2xl p-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/about" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">About Us</a>
                  <a href="/testimonials" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">Testimonials</a>
                  <a href="/about#gallery" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">Gallery</a>
                </div>
              </div>

              {/* YTTC in Goa Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors cursor-pointer"
                >
                  <span>YTTC in Goa</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-terracotta-500" />
                </button>
                <div className="absolute top-full left-0 bg-forest-700 border border-forest-600 shadow-xl rounded-2xl p-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/goa/daily-classes" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">Daily Drop-in Classes</a>
                  <a href="/goa/8-day-intensive" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">8-Day Intensive Course</a>
                  <a href="/goa/100-hour-ttc" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">100-Hour TTC</a>
                  <a href="/goa/200-hour-yttc" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">200-Hour YTTC</a>
                  <a href="/goa/therapeutic-yoga" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">Therapeutic Yoga</a>
                </div>
              </div>

              {/* YTTC in Dharamshala Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors cursor-pointer"
                >
                  <span>YTTC in Dharamshala</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-terracotta-500" />
                </button>
                <div className="absolute top-full left-0 bg-forest-700 border border-forest-600 shadow-xl rounded-2xl p-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/dharamshala/daily-classes" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">Daily Drop-in Classes</a>
                  <a href="/dharamshala/8-day-intensive" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">8-Day Intensive Course</a>
                  <a href="/dharamshala/100-hour-ttc" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">100-Hour TTC</a>
                  <a href="/dharamshala/200-hour-yttc" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">200-Hour YTTC</a>
                  <a href="/dharamshala/therapeutic-yoga" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">Therapeutic Yoga</a>
                </div>
              </div>

              {/* Retreats Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors cursor-pointer"
                >
                  <span>Retreats</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-terracotta-500" />
                </button>
                <div className="absolute top-full left-0 bg-forest-700 border border-forest-600 shadow-xl rounded-2xl p-4 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/retreats#6-day" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">6-Day Yoga Retreat</a>
                  <a href="/retreats#10-day" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">10-Day Yoga Retreat</a>
                  <a href="/retreats#5-day" className="block text-xs text-white/80 hover:text-terracotta-500 font-semibold py-1.5 transition-colors">5-Day Pranayama Course</a>
                </div>
              </div>

              <a
                href="/daily-classes"
                className="font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors"
              >
                Drop-In
              </a>

              <a
                href="/dates-prices"
                className="font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors"
              >
                Dates & Price
              </a>

              <a
                href="/contact"
                className="font-sans text-xs xl:text-sm font-semibold text-white/95 hover:text-terracotta-500 transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* Enroll Now CTA button (vibrant orange accent) */}
            <div className="hidden sm:flex items-center shrink-0">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-[1px]"
              >
                <span>Apply Now</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button (visible below xl) */}
            <div className="flex xl:hidden shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none p-2 rounded-md transition-colors text-white hover:text-terracotta-500"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer Dropdown Menu (visible below xl) */}
        <div
          className={`xl:hidden absolute top-20 left-0 right-0 bg-forest-900 border-b border-forest-800 shadow-xl transition-all duration-300 ease-in-out origin-top ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto scale-y-100 animate-in fade-in"
              : "opacity-0 -translate-y-2 pointer-events-none scale-y-95"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6 overflow-y-auto max-h-[75vh]">
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500 transition-all duration-200"
            >
              Home
            </a>
            
            {/* About Us Mobile Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500"
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-terracotta-500 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileAboutOpen && (
                <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                  <a href="/about" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">About Us</a>
                  <a href="/testimonials" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">Testimonials</a>
                  <a href="/about#gallery" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">Gallery</a>
                </div>
              )}
            </div>

            {/* Goa Mobile Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileGoaOpen(!mobileGoaOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500"
              >
                <span>YTTC in Goa</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-terracotta-500 ${mobileGoaOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileGoaOpen && (
                <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                  <a href="/goa/daily-classes" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">Daily Drop-in Classes</a>
                  <a href="/goa/8-day-intensive" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">8-Day Intensive Course</a>
                  <a href="/goa/100-hour-ttc" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">100-Hour TTC</a>
                  <a href="/goa/200-hour-yttc" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">200-Hour YTTC</a>
                  <a href="/goa/therapeutic-yoga" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">Therapeutic Yoga</a>
                </div>
              )}
            </div>

            {/* Dharamshala Mobile Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileDharamshalaOpen(!mobileDharamshalaOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500"
              >
                <span>YTTC in Dharamshala</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-terracotta-500 ${mobileDharamshalaOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileDharamshalaOpen && (
                <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                  <a href="/dharamshala/daily-classes" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">Daily Drop-in Classes</a>
                  <a href="/dharamshala/8-day-intensive" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">8-Day Intensive Course</a>
                  <a href="/dharamshala/100-hour-ttc" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">100-Hour TTC</a>
                  <a href="/dharamshala/200-hour-yttc" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">200-Hour YTTC</a>
                  <a href="/dharamshala/therapeutic-yoga" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">Therapeutic Yoga</a>
                </div>
              )}
            </div>

            {/* Retreats Mobile Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileRetreatsOpen(!mobileRetreatsOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500"
              >
                <span>Retreats</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-terracotta-500 ${mobileRetreatsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileRetreatsOpen && (
                <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                  <a href="/retreats#6-day" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">6-Day Yoga Retreat</a>
                  <a href="/retreats#10-day" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">10-Day Yoga Retreat</a>
                  <a href="/retreats#5-day" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-white/70 hover:text-terracotta-500 font-semibold">5-Day Pranayama Course</a>
                </div>
              )}
            </div>

            <a
              href="/daily-classes"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500 transition-all duration-200"
            >
              Drop-In
            </a>

            <a
              href="/dates-prices"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500 transition-all duration-200"
            >
              Dates & Price
            </a>

            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-white hover:bg-forest-800 hover:text-terracotta-500 transition-all duration-200"
            >
              Contact Us
            </a>
            
            <div className="pt-4 border-t border-forest-850">
              <a
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold shadow-sm transition-all duration-300"
              >
                <span>Apply Now</span>
              </a>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}
