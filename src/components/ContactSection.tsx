"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-sand-50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-[52px] font-medium text-charcoal-900 tracking-tight mb-4">
            Let's Map Out Your Path
          </h2>
          <p className="font-sans text-charcoal-500 text-sm md:text-base font-light">
            Tell us a bit about yourself and we will get back to you with guidance.
          </p>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium text-charcoal-500 mb-2">First Name *</label>
                <input 
                  type="text" 
                  id="firstName"
                  className="block w-full px-4 py-3 text-base text-charcoal-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
                  placeholder="e.g. Jane"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-charcoal-500 mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName"
                  className="block w-full px-4 py-3 text-base text-charcoal-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
                  placeholder="e.g. Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-charcoal-500 mb-2">Email Address *</label>
              <input 
                type="email" 
                id="email"
                className="block w-full px-4 py-3 text-base text-charcoal-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
                placeholder="jane@example.com"
                required
              />
            </div>

            {/* Program Interest */}
            <div className="flex flex-col">
              <label htmlFor="program" className="text-sm font-medium text-charcoal-500 mb-2">Which program are you interested in? *</label>
              <select 
                id="program"
                className="block w-full px-4 py-3 text-base text-charcoal-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent transition-all"
                required
                defaultValue=""
              >
                <option value="" disabled hidden>Select a program...</option>
                <option value="200-yttc">200-Hour YTTC</option>
                <option value="300-yttc">300-Hour YTTC</option>
                <option value="100-ttc">100-Hour TTC</option>
                <option value="retreat">Yoga Retreat</option>
              </select>
            </div>

            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                className="px-10 py-4 rounded-full bg-olive-600 hover:bg-olive-700 text-white font-sans text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
