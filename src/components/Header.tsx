"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileRetreatsOpen, setMobileRetreatsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHomeHref = () => "/";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* 1. Slim Top Utility Bar - Solid Red Background */}
      <div className="bg-[#F7941D] text-white text-[12px] py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-sans">
          <div className="flex space-x-6">
            <span className="hidden sm:inline font-medium">Yoga Alliance Certified School in India</span>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="https://facebook.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/alpeshyogaindia" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/alpeshyoga123" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://twitter.com/alpeshyoga" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar - Solid White Background */}
      <header className="bg-white border-b border-gray-100 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            
            {/* Logo Section */}
            <a href={getHomeHref()} className="flex items-center shrink-0">
              <img 
                src="/logo/alpesh-logo.jpeg" 
                alt="Alpesh Yoga Logo" 
                className="h-16 w-auto rounded-full object-contain" 
              />
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden xl:flex items-center space-x-6">
              <a
                href={getHomeHref()}
                className="font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors"
              >
                Home
              </a>
              
              {/* About Us Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors cursor-pointer"
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gray-500" />
                </button>
                <div className="absolute top-full left-0 bg-white border border-gray-150 shadow-xl rounded-xl p-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/about" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">About Us</a>
                  <a href="/testimonials" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">Testimonials</a>
                  <a href="/about#gallery" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">Gallery</a>
                </div>
              </div>

              {/* Courses & Dates Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors cursor-pointer"
                >
                  <span>Courses & Dates</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gray-500" />
                </button>
                <div className="absolute top-full left-0 bg-white border border-gray-150 shadow-xl rounded-xl p-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/dates-prices" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">All Batch Dates & Prices</a>
                  <a href="/goa/100-hour-ttc" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">100-Hour TTC</a>
                  <a href="/goa/200-hour-yttc" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">200-Hour YTTC</a>
                  <a href="/goa/8-day-intensive" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">8-Day Intensive Course</a>
                </div>
              </div>

              {/* Retreats Dropdown */}
              <div className="relative group py-2">
                <button
                  className="flex items-center gap-1 font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors cursor-pointer"
                >
                  <span>Retreats</span>
                  <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-gray-500" />
                </button>
                <div className="absolute top-full left-0 bg-white border border-gray-150 shadow-xl rounded-xl p-3 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1">
                  <a href="/retreats#goa" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">Yoga Retreat in Goa</a>
                  <a href="/retreats#rishikesh" className="block text-xs text-gray-700 hover:text-[#F7941D] hover:bg-gray-50 rounded px-2.5 py-1.5 transition-colors font-medium">Yoga Retreat in Rishikesh</a>
                </div>
              </div>

              <a
                href="/about#gallery"
                className="font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors"
              >
                Gallery
              </a>

              <a
                href="/#blog"
                className="font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors"
              >
                Blog
              </a>

              <a
                href="/contact"
                className="font-sans text-sm font-semibold text-gray-800 hover:text-[#F7941D] transition-colors"
              >
                Contact Us
              </a>
            </nav>

            {/* Enroll Now CTA button (Red) */}
            <div className="hidden md:flex items-center shrink-0">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <span>Apply Now</span>
              </a>
            </div>

            {/* Mobile Actions Container */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none p-2 rounded-md transition-colors text-gray-800 hover:text-[#F7941D]"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Side-Drawer Backdrop Blur Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Slide-in Mobile Side-Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white border-l border-gray-150 shadow-2xl z-50 p-6 flex flex-col justify-between transition-all duration-300 ease-in-out xl:hidden ${
            isOpen 
              ? "translate-x-0 opacity-100 visible pointer-events-auto" 
              : "translate-x-full opacity-0 invisible pointer-events-none"
          }`}
        >
          {/* Scrollable links area */}
          <div className="overflow-y-auto max-h-[85vh] space-y-6">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <img 
                src="/logo/alpesh-logo.jpeg" 
                alt="Alpesh Yoga Logo" 
                className="h-12 w-auto rounded-full"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-gray-50 text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Accordion and links */}
            <div className="space-y-3">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D] transition-all duration-200"
              >
                Home
              </a>
              
              {/* About Us Mobile Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D]"
                >
                  <span>About Us</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#F7941D] ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                    <a href="/about" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">About Us</a>
                    <a href="/testimonials" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">Testimonials</a>
                    <a href="/about#gallery" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">Gallery</a>
                  </div>
                )}
              </div>

              {/* Courses Mobile Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D]"
                >
                  <span>Courses & Dates</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#F7941D] ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileCoursesOpen && (
                  <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                    <a href="/dates-prices" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">All Dates & Prices</a>
                    <a href="/goa/100-hour-ttc" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">100-Hour TTC</a>
                    <a href="/goa/200-hour-yttc" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">200-Hour YTTC</a>
                    <a href="/goa/8-day-intensive" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">8-Day Intensive Course</a>
                  </div>
                )}
              </div>

              {/* Retreats Mobile Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileRetreatsOpen(!mobileRetreatsOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D]"
                >
                  <span>Retreats</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 text-[#F7941D] ${mobileRetreatsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileRetreatsOpen && (
                  <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                    <a href="/retreats#goa" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">Yoga Retreat in Goa</a>
                    <a href="/retreats#rishikesh" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-[#F7941D] font-semibold">Yoga Retreat in Rishikesh</a>
                  </div>
                )}
              </div>

              <a
                href="/about#gallery"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D] transition-all duration-200"
              >
                Gallery
              </a>

              <a
                href="/#blog"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D] transition-all duration-200"
              >
                Blog
              </a>

              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-[#F7941D] transition-all duration-200"
              >
                Contact Us
              </a>

            </div>

          </div>

          {/* Drawer Footer CTA */}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-[#F7941D] hover:bg-[#E07D0E] text-white font-sans text-sm font-bold shadow-md transition-all duration-300"
            >
              <span>Apply Now</span>
            </a>
          </div>

        </div>

      </header>
    </div>
  );
}

