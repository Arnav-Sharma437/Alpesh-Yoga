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
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="relative">
                <input 
                  type="text" 
                  id="firstName"
                  className="block w-full px-0 py-3 text-sm text-charcoal-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-olive-500 peer"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="firstName"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-olive-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First Name *
                </label>
              </div>

              {/* Last Name */}
              <div className="relative">
                <input 
                  type="text" 
                  id="lastName"
                  className="block w-full px-0 py-3 text-sm text-charcoal-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-olive-500 peer"
                  placeholder=" "
                />
                <label 
                  htmlFor="lastName"
                  className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-olive-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last Name
                </label>
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input 
                type="email" 
                id="email"
                className="block w-full px-0 py-3 text-sm text-charcoal-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-olive-500 peer"
                placeholder=" "
                required
              />
              <label 
                htmlFor="email"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-olive-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email Address *
              </label>
            </div>

            {/* Program Interest */}
            <div className="relative">
              <select 
                id="program"
                className="block w-full px-0 py-3 text-sm text-charcoal-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-olive-500 peer"
                required
              >
                <option value="" disabled selected hidden></option>
                <option value="200-yttc">200-Hour YTTC</option>
                <option value="300-yttc">300-Hour YTTC</option>
                <option value="100-ttc">100-Hour TTC</option>
                <option value="retreat">Yoga Retreat</option>
              </select>
              <label 
                htmlFor="program"
                className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-olive-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Which program are you interested in? *
              </label>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-12 py-3.5 rounded-full bg-olive-500 hover:bg-olive-600 text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto"
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
