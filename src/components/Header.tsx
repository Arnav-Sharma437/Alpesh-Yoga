"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Daily Classes", href: "#schedule" },
  { label: "Programs", href: "#programs" },
  { label: "Himalayas", href: "#setting" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#footer" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glassmorphism border-b border-sage-100/20 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl font-bold tracking-tight text-forest-600 group-hover:text-terracotta-600 transition-colors duration-300">
              Alpesh Yoga
            </span>
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-sage-600">
              Iyengar Alignment • Dharamshala
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-sm font-medium text-forest-600/80 hover:text-terracotta-600 hover:-translate-y-[1px] transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://wa.me/917719878500?text=Hello%20Alpesh%20Yoga,%20I%20would%20like%20to%20inquire%20about%20your%20yoga%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-600 hover:bg-terracotta-600 text-cream-50 font-sans text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all duration-300 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-cream-50" />
              <span>Book Class via WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-forest-600 hover:text-terracotta-600 focus:outline-none p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-cream-50/98 backdrop-blur-md border-b border-sage-100 shadow-lg transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-semibold text-forest-600 hover:bg-sage-100/50 hover:text-terracotta-600 transition-all duration-200"
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
      )}
    </header>
  );
}
