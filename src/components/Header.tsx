"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

import { useApplyHref } from "@/hooks/useApplyHref";

export default function Header() {
  const pathname = usePathname();
  const applyHref = useApplyHref();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isHeaderActive = isScrolled || isOpen || programsOpen || !isHome;

  const CourseItem = ({
    title,
    location,
    href,
  }: {
    title: string;
    location: string;
    href: string;
  }) => (
    <a
      href={href}
      className="group flex w-full items-center justify-between border-b border-sand-200 py-2.5 text-sm last:border-0"
    >
      <span className="font-medium text-[#212121] transition-colors group-hover:text-olive-600">
        {title}
      </span>
      <span className="flex items-center gap-1 text-xs text-[#6A6666] transition-colors group-hover:text-olive-600">
        {location} <MapPin className="h-3 w-3" />
      </span>
    </a>
  );

  const linkClass = isHeaderActive
    ? "text-charcoal-900 hover:text-saffron-500"
    : "text-white hover:text-white/80";

  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full flex flex-col">
      <header
        className={`w-full transition-colors duration-300 ${
          isHeaderActive
            ? "glassmorphism shadow-sm"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="w-full px-5 sm:px-6 lg:px-10 xl:px-14">
          <div className="flex h-20 items-center justify-between gap-6 sm:h-24">
            {/* Logo */}
            <a href="/" className="flex shrink-0 items-center">
              <img
                src="/logo/alpesh-logo.png"
                alt="Alpesh Yoga"
                className={`h-12 w-auto object-contain sm:h-14 transition-all duration-300 ${
                  !isHeaderActive ? "brightness-0 invert" : ""
                }`}
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden flex-1 items-center justify-end gap-8 xl:flex">
              <a href="/" className={`font-sans text-sm font-semibold transition-colors ${linkClass}`}>
                Home
              </a>

              <div
                className="relative py-8"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex cursor-pointer items-center gap-1 font-sans text-sm font-semibold transition-colors ${linkClass}`}
                  aria-expanded={programsOpen}
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${programsOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              <div className="relative group py-8">
                <button
                  type="button"
                  className={`flex cursor-pointer items-center gap-1 font-sans text-sm font-semibold transition-colors ${linkClass}`}
                >
                  <span>About</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full mt-0 w-52 space-y-1 rounded-2xl border border-sand-200 bg-white p-4 opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <a href="/about" className="block py-2 text-sm font-medium text-[#212121] transition-colors hover:text-olive-600">
                    Our Story
                  </a>
                  <a href="/testimonials" className="block py-2 text-sm font-medium text-[#212121] transition-colors hover:text-olive-600">
                    Testimonials
                  </a>
                  <a href="/gallery" className="block py-2 text-sm font-medium text-[#212121] transition-colors hover:text-olive-600">
                    Gallery
                  </a>
                </div>
              </div>

              <a href="/#locations" className={`font-sans text-sm font-semibold transition-colors ${linkClass}`}>
                Our Locations
              </a>

              <a href="/dates-prices" className={`font-sans text-sm font-semibold transition-colors ${linkClass}`}>
                Dates & Price
              </a>

              <a href="/contact" className={`font-sans text-sm font-semibold transition-colors ${linkClass}`}>
                Contact
              </a>
            </nav>

            <div className="hidden shrink-0 items-center xl:flex">
              <a href={applyHref} className="btn-primary !px-6 !py-3.5 !text-base">
                Apply Now
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-2 xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`rounded-md p-2 transition-colors focus:outline-none ${
                  isHeaderActive
                    ? "text-charcoal-900 hover:text-saffron-500"
                    : "text-white hover:text-white/80"
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Programs mega menu — light style matching About dropdown */}
        <div
          className={`absolute left-1/2 top-full z-50 w-[min(920px,92vw)] -translate-x-1/2 px-4 transition-all duration-300 ${
            programsOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }`}
          onMouseEnter={() => setProgramsOpen(true)}
          onMouseLeave={() => setProgramsOpen(false)}
        >
          <div className="overflow-hidden rounded-3xl border border-sand-200 bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="font-serif text-2xl font-normal text-[#4A4540]">Programs</h3>
              <a href="/programs" className="btn-primary !px-5 !py-2.5 !text-sm">
                Explore our programs
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <h4 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-olive-600">
                  Goa
                </h4>
                <CourseItem title="200hs YTTC" location="Arambol" href="/goa/200-hour-yttc" />
                <CourseItem title="100hs TTC" location="Arambol" href="/goa/100-hour-ttc" />
                <CourseItem title="8-Day Intensive" location="Arambol" href="/goa/8-day-intensive" />
                <CourseItem title="Daily Classes" location="Arambol" href="/goa/daily-classes" />
                <CourseItem title="Therapeutic Yoga" location="Arambol" href="/goa/therapeutic-yoga" />
              </div>
              <div>
                <h4 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-olive-600">
                  Dharamshala
                </h4>
                <CourseItem title="200hs YTTC" location="Bhagsu Nag" href="/dharamshala/200-hour-yttc" />
                <CourseItem title="100hs TTC" location="Bhagsu Nag" href="/dharamshala/100-hour-ttc" />
                <CourseItem title="8-Day Intensive" location="Bhagsu Nag" href="/dharamshala/8-day-intensive" />
                <CourseItem title="Daily Classes" location="Bhagsu Nag" href="/dharamshala/daily-classes" />
              </div>
              <div>
                <h4 className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.18em] text-olive-600">
                  Retreats
                </h4>
                <CourseItem title="6-Day Yoga Retreat" location="Goa" href="/retreats#6-day" />
                <CourseItem title="10-Day Yoga Retreat" location="Goa" href="/retreats#10-day" />
                <CourseItem title="5-Day Pranayama" location="Online" href="/retreats#5-day" />
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col justify-between bg-white p-6 shadow-2xl transition-all duration-300 ease-in-out xl:hidden ${
            isOpen
              ? "visible translate-x-0 opacity-100 pointer-events-auto"
              : "invisible translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="max-h-[85vh] space-y-6 overflow-y-auto">
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
              <img src="/logo/alpesh-logo.png" alt="Alpesh Yoga" className="h-10 w-auto" />
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-gray-50 p-1.5 text-gray-500 hover:bg-gray-100 hover:text-charcoal-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              <a
                href="/"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-charcoal-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
              >
                Home
              </a>

              <div className="space-y-1">
                <button
                  onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-charcoal-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileProgramsOpen ? "rotate-180 text-saffron-500" : ""}`}
                  />
                </button>
                {mobileProgramsOpen && (
                  <div className="space-y-1 rounded-lg bg-gray-50 py-2 pl-4">
                    <a href="/programs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-bold text-saffron-600">
                      View all programs
                    </a>
                    <p className="mt-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">Goa</p>
                    <a href="/goa/200-hour-yttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      200hs YTTC
                    </a>
                    <a href="/goa/100-hour-ttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      100hs TTC
                    </a>
                    <p className="mt-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gray-400">Dharamshala</p>
                    <a href="/dharamshala/200-hour-yttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      200hs YTTC
                    </a>
                    <a href="/dharamshala/100-hour-ttc" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      100hs TTC
                    </a>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-charcoal-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
                >
                  <span>About</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${mobileAboutOpen ? "rotate-180 text-saffron-500" : ""}`}
                  />
                </button>
                {mobileAboutOpen && (
                  <div className="space-y-1 rounded-lg bg-gray-50 py-2 pl-4">
                    <a href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      Our Story
                    </a>
                    <a href="/testimonials" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      Testimonials
                    </a>
                    <a href="/gallery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-charcoal-500 hover:text-saffron-600">
                      Gallery
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/dates-prices"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-charcoal-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
              >
                Dates & Price
              </a>
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-semibold text-charcoal-900 transition-colors hover:bg-saffron-50 hover:text-saffron-600"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <a href={applyHref} onClick={() => setIsOpen(false)} className="btn-primary w-full">
              Apply Now
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
