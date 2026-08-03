"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="relative bg-[#F7F5F1] py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-4xl font-normal tracking-tight text-[#4A4540] sm:text-5xl md:text-[52px]">
            Let&apos;s Map Out Your Path
          </h2>
          <p className="font-sans text-[1.25rem] font-normal text-[#212121]">
            Grab a free 1:1 to see what fits you best
          </p>
        </div>

        <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-2 font-sans text-sm font-semibold text-[#212121]">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="block w-full rounded-xl border border-sand-200 bg-white px-4 py-3.5 font-sans text-[1.05rem] text-[#212121] placeholder:text-[#9A9A9A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-olive-500"
                  placeholder="e.g. Jane"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-2 font-sans text-sm font-semibold text-[#212121]">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="block w-full rounded-xl border border-sand-200 bg-white px-4 py-3.5 font-sans text-[1.05rem] text-[#212121] placeholder:text-[#9A9A9A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-olive-500"
                  placeholder="e.g. Doe"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-sans text-sm font-semibold text-[#212121]">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-xl border border-sand-200 bg-white px-4 py-3.5 font-sans text-[1.05rem] text-[#212121] placeholder:text-[#9A9A9A] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-olive-500"
                placeholder="jane@example.com"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="program" className="mb-2 font-sans text-sm font-semibold text-[#212121]">
                Which program are you interested in? *
              </label>
              <select
                id="program"
                className="block w-full rounded-xl border border-sand-200 bg-white px-4 py-3.5 font-sans text-[1.05rem] text-[#212121] focus:border-transparent focus:outline-none focus:ring-2 focus:ring-olive-500"
                required
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select a program...
                </option>
                <option value="200-yttc">200-Hour YTTC</option>
                <option value="100-ttc">100-Hour TTC</option>
                <option value="8-day">8-Day Intensive</option>
                <option value="retreat">Yoga Retreat</option>
                <option value="daily">Daily Classes</option>
              </select>
            </div>

            <div className="flex justify-center pt-4">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
