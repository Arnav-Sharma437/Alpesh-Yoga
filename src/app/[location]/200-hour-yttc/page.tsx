import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2, Clock, Calendar, ShieldCheck, BookOpen, HeartPulse, ArrowRight, Phone, Award } from "lucide-react";
import { locationsConfig } from "@/config/locations";

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return [
    { location: "dharamshala" },
    { location: "goa" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) return {};

  return {
    title: `200-Hour Hatha Alignment Yoga YTTC in ${config.displayName} | Alpesh Yoga`,
    description: `Complete your comprehensive 200-Hour Hatha Yoga Alliance teacher training at Alpesh Yoga in ${config.displayName}. Master posture correction mechanics.`,
    keywords: [
      `200 hour yoga teacher training ${config.slug}`,
      `200h yoga ttc ${config.slug}`,
      `Hatha alignment certification ${config.slug}`,
      `Alpesh Yoga 200h YTTC`
    ],
  };
}

export default async function YTTC200Page({ params }: PageProps) {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) {
    notFound();
  }

  const SYLLABUS_MODULES = [
    {
      title: "Advanced Asana Alignment",
      desc: "Deconstruct complex alignments, backbends, shoulder-openers, spinal traction, and core stabilization. Learn custom posture modification angles.",
    },
    {
      title: "Hands-on Adjustments & Prop Mastery",
      desc: "Master physical correction theory. Learn to observe structural restrictions and custom-apply wall ropes, wooden blocks, and alignment straps.",
    },
    {
      title: "Anatomy & Physiology",
      desc: "Explore musculoskeletal biomechanics, skeletal system compression parameters, joint safety structures, and nervous system regulation.",
    },
    {
      title: "Sequencing & Teaching Practicum",
      desc: "Practice structured sequencing, instructional cues, class time management, and complete hours of supervised peer teaching practice.",
    },
    {
      title: "Meditation & Pranayama",
      desc: "Learn classical breath-expansion techniques, bandhas, kriya cleansing practices, and traditional meditation sequences.",
    },
    {
      title: "Philosophy, Sanskrit & Ethics",
      desc: "Study historical scriptures (Yoga Sutras, Hatha Yoga Pradipika), Sanskrit posture terminology, and the professional code for yoga teachers.",
    },
  ];

  const isGoa = location === "goa";
  const tuitionINR = "₹80,000";
  const tuitionUSD = "$950 USD";
  const deposit = "₹10,000 / $120 USD";

  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Page Hero */}
        <section className="relative py-24 bg-forest-700 text-cream-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 scale-102"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200')`,
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4">
            
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">200-Hour YTTC ({config.displayName})</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto">
              200-Hour Hatha Alignment Yoga YTTC
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Our flagship comprehensive teacher training. Graduate as a certified, alignment-focused instructor registered with Yoga Alliance USA.
            </p>
          </div>
        </section>

        {isGoa && (
          <section className="bg-amber-50 border-y border-amber-200 py-4 text-center">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-amber-700">
              [GOA BRANCH UNDER DEVELOPMENT - ACCEPTING ONLINE PRE-APPLICATIONS]
            </span>
          </section>
        )}

        {/* Course Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold block">
                Professional Path
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Transform Passion into Precise Teaching
              </h2>
            </div>
            
            <p className="font-sans text-base text-forest-600/80 leading-relaxed font-light">
              Alpesh Yoga's 200-Hour Teacher Training is globally renowned for its rigorous, anatomy-centered focus. If you believe yoga is not just about flexibility but about proper joint mechanics and skeletal health, this course will equip you to teach safely and prevent injury. Learn directly under seasoned masters in India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-5 bg-cream-100 border border-sage-100/40 rounded-2xl">
                <Clock className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">24-Day Duration</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Full-immersion curriculum</p>
              </div>
              <div className="p-5 bg-cream-100 border border-sage-100/40 rounded-2xl">
                <Calendar className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">Intensive Intakes</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Limited space batches</p>
              </div>
              <div className="p-5 bg-cream-100 border border-sage-100/40 rounded-2xl">
                <Award className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">RYT 200 Certificate</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Yoga Alliance USA Approved</p>
              </div>
            </div>
          </div>
        </section>

        {/* Syllabus / Modules */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-2 block">
                Syllabus
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                200h Detailed Curriculum
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {SYLLABUS_MODULES.map((mod, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-sage-100/50 shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
                  <div className="p-2 bg-sage-100 text-terracotta-500 rounded-lg w-fit">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest-700">{mod.title}</h3>
                  <p className="font-sans text-sm text-forest-600/70 leading-relaxed font-light">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Dates & Pricing */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cream-100 border border-sage-100/60 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-terracotta-500">
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">Start Dates</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-700">Course Intake Batches</h3>
                <p className="font-sans text-xs text-forest-600/60 leading-normal max-w-sm">
                  We maintain a strict limit of **12 students** per teacher to deliver personalized adjustment guidance.
                </p>
              </div>

              {/* Date items list */}
              <div className="w-full md:w-64 font-mono text-xs divide-y divide-sage-100 bg-white p-4 rounded-2xl border border-sage-100">
                {config.batches.map((date, idx) => (
                  <div key={idx} className="py-2 first:pt-0 last:pb-0 font-sans font-medium text-forest-600">
                    {date}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-sage-200 rounded-3xl p-8 md:p-12 shadow-md max-w-md mx-auto text-center space-y-6">
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-terracotta-500 bg-terracotta-100 px-3 py-1 rounded-full">
                Course Tuition
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold text-forest-700">Tuition Fees ({config.displayName})</h3>
                <p className="font-sans text-xs text-sage-600 mt-1">Includes 24 days instruction, manuals &amp; props</p>
              </div>

              <div className="flex items-baseline justify-center gap-2">
                <span className="font-serif text-4xl font-extrabold text-forest-600">{tuitionINR}</span>
                <span className="text-sm text-forest-600/60 font-light">INR</span>
                {!isGoa && (
                  <>
                    <span className="text-forest-600/40 font-light">/</span>
                    <span className="font-serif text-2xl font-bold text-forest-600">{tuitionUSD}</span>
                  </>
                )}
              </div>

              <p className="font-sans text-xs text-sage-600 leading-normal">
                Deposit amount: **{deposit}** required to reserve your seat in the batch.
              </p>

              <div className="pt-4 border-t border-sage-100">
                <a
                  href={`/apply?location=${location}&program=200-Hour%20YTTC`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Apply for 200h YTTC</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Location Maps */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cream-100 border border-sage-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              
              <div className="space-y-4 md:w-1/2">
                <div className="flex items-center gap-2 text-terracotta-500">
                  <Award className="w-5 h-5 shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">Alpesh Shala Location</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-600 leading-snug">
                  {config.displayName} Branch
                </h3>
                <p className="font-sans text-sm text-forest-600/80 leading-relaxed font-light">
                  {config.address}
                </p>
                <p className="font-sans text-xs text-sage-600 font-light">
                  {config.landmarkNotice}
                </p>
              </div>

              {/* Embed map */}
              <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-sm h-64 border border-sage-100 relative">
                <iframe
                  src={config.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${config.displayName} Location Map`}
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

        {/* CTA booking */}
        <section className="py-12 bg-cream-100/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest-700 rounded-3xl p-8 md:p-12 text-center text-cream-50 shadow-xl border border-forest-800 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Ready to Start Your Training?
              </h2>
              <p className="font-sans text-sm text-cream-200/90 leading-relaxed font-light max-w-xl mx-auto">
                Secure your allocation for Hatha Alignment modules. Submit your registration form online or connect with our lead office on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 max-w-lg mx-auto">
                <a
                  href={`/apply?location=${location}&program=200-Hour%20YTTC`}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Submit Application Form</span>
                </a>
                <a
                  href={`https://wa.me/${config.contactNumber1.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Alpesh, I am interested in the 200h YTTC course.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-cream-50 font-sans text-xs font-bold shadow-sm transition-all duration-300 border border-forest-800"
                >
                  <Phone className="w-3.5 h-3.5 fill-cream-50 text-cream-50" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
