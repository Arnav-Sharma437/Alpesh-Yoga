"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const FAQS = [
    {
      q: "Do I need previous experience to join the 200 Hour Yoga TTC?",
      a: "No, previous intensive experience is not required. Our 200-Hour Yoga Teacher Training Course is designed to welcome beginners and intermediate practitioners alike. We build your practice from the ground up, starting with core alignments, simple props, and foundational philosophy."
    },
    {
      q: "Is Alpesh Yoga registered with Yoga Alliance USA?",
      a: "Yes, Alpesh Yoga is a Registered Yoga School (RYS 200, RYS 300) with Yoga Alliance, USA. After graduating, you will receive a Yoga Alliance Certificate that qualifies you to register as a Registered Yoga Teacher (RYT) and teach yoga globally."
    },
    {
      q: "What is your cancellation and booking policy?",
      a: "To reserve your spot, a deposit is required. This deposit is non-refundable but can be transferred to any future course dates or alternative locations (Goa, Rishikesh, Dharamshala) with advanced notice. The remaining balance is due upon arrival at the studio."
    },
    {
      q: "What props do you use during Hatha alignment classes?",
      a: "Our studio is fully equipped. We utilize Iyengar alignment props including solid foam blocks, cotton straps, yoga blankets, bolsters, chairs, and custom wall-ropes. These props help students achieve correct skeletal alignment without strain or injury."
    },
    {
      q: "How can I apply for a course or retreat?",
      a: "Applying is simple. Click on the 'APPLY NOW' button found on our website, fill out the registration form with your preferred dates, location, and experience level, and our team will get back to you within 24 hours with booking confirmation details."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#faf8f5] border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#c2272d] mb-4 tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
          <div className="mb-4 text-[#c2272d]">
            <HelpCircle className="w-8 h-8" />
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="w-full space-y-4 max-w-3xl">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-semibold text-gray-800 hover:text-[#c2272d] transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-[#c2272d]" : ""}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-gray-50" : "max-h-0"}`}
                >
                  <p className="p-5 font-sans text-sm text-gray-600 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
