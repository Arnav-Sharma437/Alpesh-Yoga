"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Mobile accordion states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  // Transparent when at top of home page, solid otherwise
  const isHeaderActive = isScrolled || isOpen || !isHome;

  const getHomeHref = () => "/";

  // Shared Course item renderer for the Mega Menu
  const CourseItem = ({ title, location, href }: { title: string, location: string, href: string }) => (
    <a href={href} className="group flex items-center justify-between py-1.5 text-sm w-full">
      <span className="text-charcoal-500 group-hover:text-olive-500 font-medium transition-colors">{title}</span>
      <div className="flex-grow border-b border-dotted border-gray-300 mx-3 relative top-[4px]"></div>
      <span className="text-gray-400 text-xs italic flex items-center gap-1 group-hover:text-olive-500 transition-colors">
        {location} <MapPin className="w-3 h-3" />
      </span>
    </a>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full flex flex-col">
      {/* Main Navigation Bar — full width */}
      <header
        className={`w-full transition-colors duration-300 ${
          isHeaderActive
            ? "bg-white shadow-sm border-b border-gray-100"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="w-full px-5 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex items-center justify-between h-24 gap-6">
            
            {/* Logo Section */}
            <a href={getHomeHref()} className="flex items-center shrink-0">
              {/* Note: Ensure the logo has a transparent background or white variant for the top state if possible. */}
              <span className={`font-serif text-2xl font-bold tracking-tight ${isHeaderActive ? "text-charcoal-900" : "text-white"}`}>
                Alpesh Yoga
              </span>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden xl:flex items-center justify-end flex-1 space-x-8">
              <a
                href={getHomeHref()}
                className={`font-sans text-sm font-semibold transition-colors ${
                  isHeaderActive ? "text-charcoal-900 hover:text-olive-500" : "text-white hover:text-white/80"
                }`}
              >
                Home
              </a>
              
              {/* Programs Mega-Menu Dropdown */}
              <div className="relative group py-8">
                <button
                  className={`flex items-center gap-1 font-sans text-sm font-semibold transition-colors cursor-pointer ${
                    isHeaderActive ? "text-charcoal-900 hover:text-olive-500" : "text-white hover:text-white/80"
                  }`}
                >
                  <span>Programs</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Mega Menu Popover */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[20px] p-8 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -mt-2">
                  <div className="grid grid-cols-2 gap-8">
                    
                    {/* Goa Column */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">Goa</h3>
                      <div className="space-y-1">
                        <CourseItem title="200hs YTTC" location="Arambol" href="/goa/200-hour-yttc" />
                        <CourseItem title="100hs TTC" location="Arambol" href="/goa/100-hour-ttc" />
                        <CourseItem title="8-Day Intensive" location="Arambol" href="/goa/8-day-intensive" />
                        <CourseItem title="Daily Classes" location="Arambol" href="/goa/daily-classes" />
                        <CourseItem title="Therapeutic Yoga" location="Arambol" href="/goa/therapeutic-yoga" />
                      </div>
                    </div>

                    {/* Dharamshala Column */}
                    <div>
                      <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">Dharamshala</h3>
                      <div className="space-y-1">
                        <CourseItem title="200hs YTTC" location="Dharamkot" href="/dharamshala/200-hour-yttc" />
                        <CourseItem title="100hs TTC" location="Dharamkot" href="/dharamshala/100-hour-ttc" />
                        <CourseItem title="8-Day Intensive" location="Dharamkot" href="/dharamshala/8-day-intensive" />
                        <CourseItem title="Daily Classes" location="Dharamkot" href="/dharamshala/daily-classes" />
                      </div>
                    </div>

                    {/* Retreats Column */}
                    <div className="col-span-2 pt-4 border-t border-gray-100">
                      <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-4">Retreats & Online</h3>
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1">
                          <CourseItem title="6-Day Yoga Retreat" location="Goa" href="/retreats#6-day" />
                          <CourseItem title="10-Day Yoga Retreat" location="Goa" href="/retreats#10-day" />
                        </div>
                        <div className="space-y-1">
                          <CourseItem title="5-Day Pranayama" location="Online" href="/retreats#5-day" />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* About Us Dropdown */}
              <div className="relative group py-8">
                <button
                  className={`flex items-center gap-1 font-sans text-sm font-semibold transition-colors cursor-pointer ${
                    isHeaderActive ? "text-charcoal-900 hover:text-olive-500" : "text-white hover:text-white/80"
                  }`}
                >
                  <span>About</span>
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -mt-2 space-y-1">
                  <a href="/about" className="block text-sm text-charcoal-500 hover:text-olive-500 font-medium py-2 transition-colors">Our Story</a>
                  <a href="/testimonials" className="block text-sm text-charcoal-500 hover:text-olive-500 font-medium py-2 transition-colors">Testimonials</a>
                  <a href="/about#gallery" className="block text-sm text-charcoal-500 hover:text-olive-500 font-medium py-2 transition-colors">Gallery</a>
                </div>
              </div>

              <a
                href="/dates-prices"
                className={`font-sans text-sm font-semibold transition-colors ${
                  isHeaderActive ? "text-charcoal-900 hover:text-olive-500" : "text-white hover:text-white/80"
                }`}
              >
                Dates & Price
              </a>

              <a
                href="/contact"
                className={`font-sans text-sm font-semibold transition-colors ${
                  isHeaderActive ? "text-charcoal-900 hover:text-olive-500" : "text-white hover:text-white/80"
                }`}
              >
                Contact
              </a>
            </nav>

            {/* CTA button */}
            <div className="hidden xl:flex items-center shrink-0">
              <a
                href="/apply"
                className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_8px_20px_rgba(143,158,117,0.2)] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(143,158,117,0.3)] ${
                  isHeaderActive 
                    ? "bg-olive-500 text-white" 
                    : "bg-white text-olive-500"
                }`}
              >
                Apply Now
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`focus:outline-none p-2 rounded-md transition-colors ${
                  isHeaderActive ? "text-charcoal-900 hover:text-olive-500" : "text-white hover:text-white/80"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Side-Drawer Backdrop */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Side-Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between transition-all duration-300 ease-in-out xl:hidden ${
            isOpen 
              ? "translate-x-0 opacity-100 visible pointer-events-auto" 
              : "translate-x-full opacity-0 invisible pointer-events-none"
          }`}
        >
          <div className="overflow-y-auto max-h-[85vh] space-y-6">
            
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
              <span className="font-serif text-2xl font-bold text-charcoal-900 tracking-tight">
                Alpesh Yoga
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-gray-50 text-gray-500 hover:text-charcoal-900 hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-charcoal-900 hover:bg-olive-50 hover:text-olive-600 transition-colors"
              >
                Home
              </a>
              
              {/* Programs Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-semibold text-charcoal-900 hover:bg-olive-50 hover:text-olive-600 transition-colors"
                >
                  <span>Programs</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProgramsOpen ? "rotate-180 text-olive-500" : ""}`} />
                </button>
                {mobileProgramsOpen && (
                  <div className="pl-4 space-y-1 py-2 bg-gray-50 rounded-lg animate-in slide-in-from-top-1 duration-200">
                    <p className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Goa</p>
                    <a href="/goa/200-hour-yttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">200hs YTTC</a>
                    <a href="/goa/100-hour-ttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">100hs TTC</a>
                    <p className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">Dharamshala</p>
                    <a href="/dharamshala/200-hour-yttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">200hs YTTC</a>
                    <a href="/dharamshala/100-hour-ttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">100hs TTC</a>
                    <p className="px-3 py-1 text-xs font-bold text-gray-400 uppercase tracking-wider mt-4">Retreats</p>
                    <a href="/retreats#6-day" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">6-Day Yoga Retreat</a>
                  </div>
                )}
              </div>

              {/* About Accordion */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-base font-semibold text-charcoal-900 hover:bg-olive-50 hover:text-olive-600 transition-colors"
                >
                  <span>About</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180 text-olive-500" : ""}`} />
                </button>
                {mobileAboutOpen && (
                  <div className="pl-4 space-y-1 py-2 bg-gray-50 rounded-lg animate-in slide-in-from-top-1 duration-200">
                    <a href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">Our Story</a>
                    <a href="/testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm text-charcoal-500 hover:text-olive-600 font-medium">Testimonials</a>
                  </div>
                )}
              </div>

              <a
                href="/dates-prices"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-charcoal-900 hover:bg-olive-50 hover:text-olive-600 transition-colors"
              >
                Dates & Price
              </a>

              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-semibold text-charcoal-900 hover:bg-olive-50 hover:text-olive-600 transition-colors"
              >
                Contact
              </a>

            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <a
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-4 rounded-full bg-olive-500 hover:bg-olive-600 text-white font-sans text-sm font-bold shadow-lg transition-all duration-300"
            >
              <span>Apply Now</span>
            </a>
          </div>

        </div>

      </header>
    </div>
  );
}
