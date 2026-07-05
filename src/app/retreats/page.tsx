import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2, Clock, Calendar, HeartPulse, Sparkles, BookOpen, Compass, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Yoga & Pranayama Retreats India | Alpesh Yoga",
  description: "Join our wellness retreats in Arambol Beach (Goa) and Dharamkot (Dharamshala). Choose from 6-day retreats, 10-day retreats, and 5-day Pranayama courses.",
  keywords: ["yoga retreats goa arambol", "meditation retreat dharamshala", "cheap pranayama course India", "wellness holidays India"],
};

export default function RetreatsPage() {
  const RETREATS = [
    {
      id: "6-day",
      title: "6-Day Intensive Yoga Retreat",
      subtitle: "Rejuvenating Body & Mind Alignment",
      desc: "Alpesh Yoga School hosts rejuvenating yoga and meditation retreats in Goa and Dharamshala, depending on the time of year. This course is for passionate students ready for a challenging alignment-based style of Hatha yoga. It is recommended for those who have a TTC certification or simply want to experience alignment yoga for a few days.",
      features: [
        "Daily morning intensive alignment asana practice",
        "Introduction to prop-supported adjustments (wall ropes, blocks, belts)",
        "Daily evening restorative and breath expansion sessions",
        "Clean accommodations and standard amenities included",
      ],
      duration: "6 Days / 5 Nights",
      pricing: "₹12,000 / $150 USD",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
    },
    {
      id: "10-day",
      title: "10-Day Wellness & Deepening Retreat",
      subtitle: "Extended Study & Physical Restoration",
      desc: "For people who want to relax and learn yoga for a longer duration, Alpesh Yoga offers this 10-day yoga retreat. Join our classes to go deeper into Hatha alignment, posture anatomy, pranayama, and healing. This wellness retreat is perfect for training yoga teachers as well as yoga enthusiasts wanting to establish healthy habits.",
      features: [
        "In-depth analysis of personal skeletal structural alignment",
        "Hands-on adjustments and posture alignment blueprinting",
        "Daily meditation, philosophy, and pranayama lectures",
        "Tours and outdoor nature classes (Himalayan pine forests or beach side shala)",
      ],
      duration: "10 Days / 9 Nights",
      pricing: "₹20,000 / $250 USD",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
    },
    {
      id: "5-day",
      title: "5-Day Pranayama & Meditation Course",
      subtitle: "Master the Art of Breath Expansion & Cleansing",
      desc: "Join our comprehensive 5 days Pranayama & Meditation course in India (Goa/Dharamshala) which starts on Monday of every week. You will learn how to do pranayama & meditation for spiritual growth. It is an intensive personal transformation course, taught from a traditional perspective.",
      features: [
        "Detailed study of breath anatomy, lungs expansion, and diaphragm control",
        "Instruction in classical pranayama techniques (Nadi Shodhana, Kapalabhati, Bhastrika)",
        "Practice of bandhas (locks), mudras, and shatkarma (cleansing kriyas)",
        "Traditional meditation practices targeting nervous system balance",
      ],
      duration: "5 Days (Mon–Fri)",
      pricing: "₹8,000 / $110 USD",
      img: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Page Hero */}
        <section className="relative py-20 bg-forest-700 text-cream-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 scale-102"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200')`,
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4">
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">Retreats</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Yoga &amp; Meditation Retreats
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed">
              Connect with your inner self in the lap of nature. We host wellness retreats starting every Monday of the week in Arambol and Dharamkot.
            </p>
          </div>
        </section>

        {/* Retreats Details Listing */}
        <section className="py-20 bg-white space-y-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-20 max-w-5xl mx-auto">
              {RETREATS.map((item, idx) => (
                <div 
                  key={item.id} 
                  id={item.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center border border-sage-200 p-8 md:p-10 rounded-3xl bg-cream-100/10 ${
                    idx % 2 === 1 ? "lg:flex-row-reverse bg-cream-50/20" : ""
                  }`}
                >
                  
                  {/* Image banner */}
                  <div className="lg:w-2/5 w-full shrink-0">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-forest-50 shadow-md h-64 border border-sage-100">
                      <img 
                        src={imgUrls[idx]} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="lg:w-3/5 space-y-5 text-forest-600 font-sans text-xs sm:text-sm font-light leading-relaxed">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-terracotta-500 bg-terracotta-50 px-3 py-1 rounded-full">
                      {item.duration}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-750">{item.title}</h3>
                    <p className="font-serif text-xs italic text-sage-600 -mt-2">{item.subtitle}</p>
                    <p className="text-forest-600/85">
                      {item.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 pt-2 border-t border-sage-100 font-sans text-xs text-forest-600/90">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tuition Fees & Bookings */}
                    <div className="pt-6 border-t border-sage-100 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-sage-500 block">Tuition Rate</span>
                        <span className="font-mono text-lg font-bold text-forest-750">{item.pricing}</span>
                      </div>
                      <a
                        href={`/apply?program=${encodeURIComponent(item.title)}`}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        <span>Apply / Register</span>
                      </a>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
              Yoga in the Lap of Nature
            </h2>
            <p className="font-sans text-sm sm:text-base text-forest-600/70 max-w-xl mx-auto leading-relaxed font-light">
              Outdoor Hatha alignment sessions on the beach side sands of South Goa or pine forest clearings in Dharamkot. Connect with us on WhatsApp to register your retreat.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto">
              <a
                href="/apply"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-md transition-colors"
              >
                <span>Register Online Now</span>
              </a>
              <a
                href={`https://wa.me/917719878500?text=${encodeURIComponent("Hi Alpesh, I am interested in booking a yoga retreat.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-sans text-xs font-bold shadow-md transition-colors border border-forest-800"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

// Unsplash placeholder images matching Hatha alignment and scenery
const imgUrls = [
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
  "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600",
];
