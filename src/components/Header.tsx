"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Daily Classes", href: "/daily-classes" },
  { label: "8-Day Intensive", href: "/#programs" },
  { label: "100-Hour TTC", href: "/#programs" },
  { label: "200-Hour YTTC", href: "/#programs" },
  { label: "Therapeutic Yoga", href: "/#programs" },
  { label: "About", href: "/#philosophy" },
  { label: "Contact", href: "/#footer" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeaderActive = isScrolled || isOpen;

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
          <a href="#" className="flex flex-col group shrink-0">
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
              Iyengar Alignment • Dharamshala
            </span>
          </a>

          {/* Desktop Nav Items (visible on md and above) */}
          <nav className="hidden md:flex items-center md:space-x-2.5 lg:space-x-5 xl:space-x-7">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-sans md:text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap transition-colors duration-300 ${
                  isHeaderActive
                    ? "text-forest-600/80 hover:text-terracotta-600"
                    : "text-white/90 hover:text-terracotta-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="https://wa.me/917719878500?text=Hello%20Alpesh%20Yoga,%20I%20would%20like%20to%20inquire%20about%20your%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-2 md:px-2.5 md:py-1.5 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-full font-sans text-xs lg:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isHeaderActive
                  ? "bg-forest-600 hover:bg-terracotta-600 text-cream-50 shadow-sm hover:shadow-md hover:-translate-y-[1px]"
                  : "bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:-translate-y-[1px]"
              }`}
            >
              <Phone className={`w-3.5 h-3.5 ${isHeaderActive ? "fill-cream-50" : "fill-white"}`} />
              <span className="hidden xl:inline">Book Class via WhatsApp</span>
              <span className="hidden lg:inline xl:hidden">Book Class</span>
              <span className="hidden md:inline lg:hidden">Book</span>
              <span className="inline md:hidden">Book Class</span>
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
            ? "opacity-100 translate-y-0 pointer-events-auto scale-y-100"
            : "opacity-0 -translate-y-2 pointer-events-none scale-y-95"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
          
          <div className="pt-4 border-t border-sage-100">
            <a
              href="https://wa.me/917719878500?text=Hello%20Alpesh%20Yoga,%20I%20would%20like%20to%20inquire%20about%20your%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-forest-600 text-cream-50 font-semibold shadow-sm hover:bg-terracotta-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5 fill-cream-50" />
              <span>Book Class (+91 77198 78500)</span>
            </a>
          </div>
        </div>
      </div>

    </header>
  );
}
