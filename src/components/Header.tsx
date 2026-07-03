"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Mobile accordion states
  const [mobileDharamshalaOpen, setMobileDharamshalaOpen] = useState(false);
  const [mobileGoaOpen, setMobileGoaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isHeaderActive = isScrolled || isOpen || !isHome;

  // Navigation helpers
  const getHomeHref = () => (isHome ? "#" : "/");
  const getAboutHref = () => (isHome ? "#philosophy" : "/#philosophy");
  const getContactHref = () => (isHome ? "#footer" : "/#footer");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderActive
          ? "glassmorphism border-b border-sage-100/20 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Section */}
          <a href={getHomeHref()} className="flex flex-col group shrink-0">
            <span className={`font-serif text-lg sm:text-xl md:text-base lg:text-xl xl:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isHeaderActive
                ? "text-forest-600 group-hover:text-terracotta-600"
                : "text-white group-hover:text-terracotta-200"
            }`}>
              Alpesh Yoga
            </span>
            <span className={`font-sans text-[8px] sm:text-[9px] md:text-[7px] lg:text-[9px] xl:text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
              isHeaderActive ? "text-sage-600" : "text-cream-200/80"
            }`}>
              Hatha Alignment • Dharamshala & Goa
            </span>
          </a>

          {/* Desktop Nav Items (visible on md and above) */}
          <nav className="hidden md:flex items-center md:space-x-3.5 lg:space-x-5 xl:space-x-7">
            <a
              href={getHomeHref()}
              className={`font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium transition-colors duration-300 ${
                isHeaderActive ? "text-forest-600/80 hover:text-terracotta-600" : "text-white/90 hover:text-terracotta-200"
              }`}
            >
              Home
            </a>
            
            <a
              href={getAboutHref()}
              className={`font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium transition-colors duration-300 ${
                isHeaderActive ? "text-forest-600/80 hover:text-terracotta-600" : "text-white/90 hover:text-terracotta-200"
              }`}
            >
              About
            </a>

            {/* Yoga TTC Dharamshala Dropdown */}
            <div className="relative group py-2">
              <button
                className={`flex items-center gap-1 font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isHeaderActive ? "text-forest-600/80 hover:text-terracotta-600" : "text-white/90 hover:text-terracotta-200"
                }`}
              >
                <span>Yoga TTC Dharamshala</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 bg-white border border-sage-100/60 shadow-lg rounded-2xl p-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1.5">
                <a href="/dharamshala/daily-classes" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">Daily Classes</a>
                <a href="/dharamshala/8-day-intensive" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">8-Day Intensive Course</a>
                <a href="/apply?location=dharamshala&program=100-Hour%20TTC" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">100-Hour TTC</a>
                <a href="/apply?location=dharamshala&program=200-Hour%20YTTC" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">200-Hour YTTC</a>
                <a href="/apply?location=dharamshala&program=Therapeutic%20Yoga" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">Therapeutic Yoga</a>
              </div>
            </div>

            {/* Yoga TTC Goa Dropdown */}
            <div className="relative group py-2">
              <button
                className={`flex items-center gap-1 font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isHeaderActive ? "text-forest-600/80 hover:text-terracotta-600" : "text-white/90 hover:text-terracotta-200"
                }`}
              >
                <span>Yoga TTC Goa</span>
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 bg-white border border-sage-100/60 shadow-lg rounded-2xl p-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 space-y-1.5">
                <a href="/goa/daily-classes" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">Daily Classes <span className="text-[9px] text-sage-500 font-normal">(Provisional)</span></a>
                <a href="/goa/8-day-intensive" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">8-Day Intensive Course <span className="text-[9px] text-sage-500 font-normal">(Provisional)</span></a>
                <a href="/apply?location=goa&program=100-Hour%20TTC" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">100-Hour TTC</a>
                <a href="/apply?location=goa&program=200-Hour%20YTTC" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">200-Hour YTTC</a>
                <a href="/apply?location=goa&program=Therapeutic%20Yoga" className="block text-xs text-forest-600/80 hover:text-terracotta-600 font-semibold py-1.5 transition-colors">Therapeutic Yoga</a>
              </div>
            </div>

            <a
              href="/apply"
              className={`font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium transition-colors duration-300 ${
                pathname === "/apply" 
                  ? "text-terracotta-600" 
                  : (isHeaderActive ? "text-forest-600/80 hover:text-terracotta-600" : "text-white/90 hover:text-terracotta-200")
              }`}
            >
              Apply
            </a>

            <a
              href={getContactHref()}
              className={`font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium transition-colors duration-300 ${
                isHeaderActive ? "text-forest-600/80 hover:text-terracotta-600" : "text-white/90 hover:text-terracotta-200"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Enroll Now CTA button (brand accent terracotta or white outline) */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="/apply"
              className={`inline-flex items-center justify-center px-4 py-2 lg:px-5 lg:py-2.5 rounded-full font-sans text-xs lg:text-sm font-bold shadow-sm transition-all duration-300 cursor-pointer hover:shadow-md hover:-translate-y-[1px] ${
                isHeaderActive
                  ? "bg-terracotta-600 text-cream-50 hover:bg-terracotta-500"
                  : "bg-white text-forest-600 hover:bg-cream-100"
              }`}
            >
              <span>Enroll Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button (visible below md) */}
          <div className="flex md:hidden shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`focus:outline-none p-2 rounded-md transition-colors ${
                isHeaderActive ? "text-forest-600 hover:text-terracotta-600" : "text-white hover:text-terracotta-200"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu (visible below md) */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-cream-50/98 backdrop-blur-md border-b border-sage-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto scale-y-100 animate-in fade-in"
            : "opacity-0 -translate-y-2 pointer-events-none scale-y-95"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6 overflow-y-auto max-h-[80vh]">
          <a
            href={getHomeHref()}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600 transition-all duration-200"
          >
            Home
          </a>
          
          <a
            href={getAboutHref()}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600 transition-all duration-200"
          >
            About
          </a>

          {/* Dharamshala Mobile Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileDharamshalaOpen(!mobileDharamshalaOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600"
            >
              <span>Yoga TTC Dharamshala</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDharamshalaOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileDharamshalaOpen && (
              <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                <a href="/dharamshala/daily-classes" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">Daily Classes</a>
                <a href="/dharamshala/8-day-intensive" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">8-Day Intensive Course</a>
                <a href="/apply?location=dharamshala&program=100-Hour%20TTC" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">100-Hour TTC</a>
                <a href="/apply?location=dharamshala&program=200-Hour%20YTTC" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">200-Hour YTTC</a>
                <a href="/apply?location=dharamshala&program=Therapeutic%20Yoga" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">Therapeutic Yoga</a>
              </div>
            )}
          </div>

          {/* Goa Mobile Accordion */}
          <div className="space-y-1">
            <button
              onClick={() => setMobileGoaOpen(!mobileGoaOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600"
            >
              <span>Yoga TTC Goa</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileGoaOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileGoaOpen && (
              <div className="pl-6 space-y-1.5 animate-in slide-in-from-top-1 duration-200">
                <a href="/goa/daily-classes" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">Daily Classes <span className="text-[10px] text-sage-500 font-normal">(Provisional)</span></a>
                <a href="/goa/8-day-intensive" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">8-Day Intensive Course <span className="text-[10px] text-sage-500 font-normal">(Provisional)</span></a>
                <a href="/apply?location=goa&program=100-Hour%20TTC" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">100-Hour TTC</a>
                <a href="/apply?location=goa&program=200-Hour%20YTTC" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">200-Hour YTTC</a>
                <a href="/apply?location=goa&program=Therapeutic%20Yoga" onClick={() => setIsOpen(false)} className="block py-1.5 text-sm text-forest-600/70 hover:text-terracotta-600 font-semibold">Therapeutic Yoga</a>
              </div>
            )}
          </div>

          <a
            href="/apply"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600 transition-all duration-200"
          >
            Apply
          </a>

          <a
            href={getContactHref()}
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600 transition-all duration-200"
          >
            Contact
          </a>
          
          <div className="pt-4 border-t border-sage-100">
            <a
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 font-semibold shadow-sm transition-all duration-300"
            >
              <span>Enroll Now</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}
