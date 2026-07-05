import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Award, ShieldCheck, Compass, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "About Alpesh Yoga | Hatha Alignment School India",
  description: "Learn about Alpesh Patwari and the history of Alpesh Yoga. Registered with Yoga Alliance USA, teaching precision yoga in Goa and Dharamshala.",
  keywords: ["Alpesh Patwari biography", "about Alpesh Yoga", "yoga school India history", "Hatha alignment yoga"],
};

export default function AboutPage() {
  const CORE_VALUES = [
    {
      title: "20+ Years Experience",
      desc: " Alpesh Patwari has been training yoga students and teachers globally for over two decades, delivering anatomy-based instruction.",
      icon: Award,
    },
    {
      title: "Registered Yoga School",
      desc: "Our certifications are fully recognized by Yoga Alliance USA, allowing graduates to register as Registered Yoga Teachers (RYT).",
      icon: ShieldCheck,
    },
    {
      title: "Prop-Based Alignment",
      desc: "We focus on structural safety. We teach correct alignment principles utilizing wooden blocks, straps, bolsters, and wall ropes.",
      icon: Compass,
    },
    {
      title: "Therapeutic Healing",
      desc: "Our sequences are designed to prevent compression in the spine and joints, correcting posture faults and scoliosis asymmetry.",
      icon: HeartPulse,
    },
  ];

  const GALLERY_IMAGES = [
    {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
      caption: "Alignment Posture Session",
    },
    {
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
      caption: "Himalayan Practice, Dharamshala",
    },
    {
      url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600",
      caption: "Prop-Supported Chest Opener",
    },
    {
      url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600",
      caption: "Beach Shala Alignment, Goa",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Hero Section */}
        <section className="relative py-24 bg-forest-700 text-cream-50 overflow-hidden">
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
              <span className="text-cream-50">About Us</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              About Alpesh Yoga School
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed">
              Precision instruction, anatomical safety, and structural healing in the serene landscapes of Goa and the Himalayas.
            </p>
          </div>
        </section>

        {/* Founding Teacher Profile */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center max-w-5xl mx-auto">
              
              {/* Photo Card */}
              <div className="lg:w-2/5 w-full max-w-sm shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-sage-100 aspect-[4/5] bg-forest-50">
                  <img 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600" 
                    alt="Alpesh Patwari - Lead Instructor" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-center">
                    <h3 className="font-serif text-lg font-bold">Alpesh Patwari</h3>
                    <p className="font-sans text-[10px] uppercase tracking-wider text-terracotta-500 font-semibold mt-0.5">Founding Teacher &amp; Director</p>
                  </div>
                </div>
              </div>

              {/* Story Copy */}
              <div className="lg:w-3/5 space-y-6 text-forest-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-bold block">
                  Our Teacher
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600 leading-snug">
                  Alpesh Patwari • The School for Yogic Life
                </h2>
                
                <p>
                  Alpesh Patwari is ranked as one of the top Hatha alignment teachers in India. After acquiring decades of intensive study in alignment-based techniques and anatomy, he founded Alpesh Yoga with the vision of sharing clean, safety-centered, and prop-supported methodologies with practitioners worldwide.
                </p>

                <p>
                  For over two decades, Alpesh Yoga has functioned as a certified Yoga Alliance registered school, training thousands of students in the art of Hatha alignment, adjustment mechanics, sequencing, philosophy, and pranayama. Under his guidance, students discover that yoga is not a competition of flexibility, but an exploration of muscular and skeletal balance.
                </p>

                <p>
                  Our school operates in two distinct, natural locations depending on the season: the pine heights of Dharamkot, Dharamshala during the warm summer months, and the ocean breeze shalas of Arambol, Goa during the winter season.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-bold block mb-2">
                Our Methodology
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Core Foundations of Our School
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {CORE_VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-sage-200 shadow-sm space-y-4 text-center hover:shadow-md transition-shadow">
                    <div className="p-3 bg-cream-100 text-terracotta-500 rounded-2xl w-fit mx-auto shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-forest-700">{val.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-forest-600/70 leading-relaxed font-light">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Shala Accommodation details */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
            <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-bold block">
              Accommodations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
              Cozy, Clean Stays in Arambol &amp; Dharamkot
            </h2>
            <p className="font-sans text-sm sm:text-base text-forest-600/70 max-w-3xl mx-auto leading-relaxed font-light">
              We provide clean, comfortable, and peaceful rooms located near our shala facilities in both branches. Rooms come with hot water showers, comfortable double beds, study tables, and high-speed Wi-Fi, allowing you to study alignment principles and relax in quiet nature after intensive mats sessions.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-bold block mb-2">
                Gallery
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Glimpses of Our Yoga Training Program
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {GALLERY_IMAGES.map((img, idx) => (
                <div key={idx} className="bg-white p-3 rounded-2xl border border-sage-200 shadow-sm space-y-3 group hover:-translate-y-1 transition-transform duration-300">
                  <div className="rounded-xl overflow-hidden aspect-video relative bg-forest-50 h-44">
                    <img 
                      src={img.url} 
                      alt={img.caption} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    />
                  </div>
                  <p className="font-serif text-xs font-bold text-forest-600 text-center">{img.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
