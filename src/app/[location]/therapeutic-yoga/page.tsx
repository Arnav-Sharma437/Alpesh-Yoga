import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2, Clock, Calendar, ShieldCheck, HeartPulse, ArrowRight, Phone, Award } from "lucide-react";
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
    title: `Therapeutic Yoga Alignment in ${config.displayName} | Alpesh Yoga`,
    description: `Target scoliosis, chronic back pain, joint stiffness, and postural deviations with our custom Therapeutic Yoga Alignment in ${config.displayName}. Private instruction.`,
    keywords: [
      `therapeutic yoga ${config.slug}`,
      `scoliosis alignment yoga ${config.slug}`,
      `yoga back pain relief ${config.slug}`,
      `Alpesh Yoga therapy`
    ],
  };
}

export default async function TherapeuticYogaPage({ params }: PageProps) {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) {
    notFound();
  }

  const THERAPY_FOCUS = [
    {
      title: "Scoliosis & Spine Alignment",
      desc: "Tailored spinal traction utilizing wall ropes, asymmetrical blocks support, and muscle release to decompress lateral spinal curvatures.",
    },
    {
      title: "Chronic Back & Neck Pain Relief",
      desc: "Relieve compression on cervical and lumbar discs. We teach skeletal suspension and muscle balance techniques to establish safe habits.",
    },
    {
      title: "Joint Rehabilitation & Knee Alignment",
      desc: "Re-educate joint movement angles. Perfect for students recovering from ligament tears, ankle stiffness, or hamstring strain injuries.",
    },
    {
      title: "Custom Posture blueprinting",
      desc: "Get a comprehensive physical evaluation highlighting pelvic rotations, shoulder tilts, and bone alignment parameters to guide your home practice.",
    },
  ];

  const isGoa = location === "goa";

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
              <span className="text-cream-50">Therapeutic Yoga ({config.displayName})</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto">
              Therapeutic Yoga &amp; Posture Adjustment
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Targeted postural therapy, spine traction, and customized alignments for injuries, scoliosis, and chronic joint compression.
            </p>
          </div>
        </section>

        {isGoa && (
          <section className="bg-amber-50 border-y border-amber-200 py-4 text-center">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-amber-700">
              [GOA BRANCH UNDER DEVELOPMENT - ACCEPTING ENQUIRIES]
            </span>
          </section>
        )}

        {/* Course Intro */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
            <div className="space-y-2">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold block">
                Healing Focus
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Therapeutic Recovery Through Alignment
              </h2>
            </div>
            
            <p className="font-sans text-base text-forest-600/80 leading-relaxed font-light">
              Traditional yoga classes are sometimes too fast or generic for students dealing with scoliosis, chronic back spasms, or joint injuries. In our Therapeutic private sessions, we slow down completely. We utilize precise alignment angles, skeletal tractions, and personalized prop sequences to safely correct physical posture errors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-5 bg-cream-100 border border-sage-100/40 rounded-2xl">
                <Clock className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">Private Guidance</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">One-on-one custom sessions</p>
              </div>
              <div className="p-5 bg-cream-100 border border-sage-100/40 rounded-2xl">
                <Calendar className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">Flexible Bookings</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Hourly &amp; weekly options</p>
              </div>
              <div className="p-5 bg-cream-100 border border-sage-100/40 rounded-2xl">
                <HeartPulse className="w-5 h-5 text-terracotta-500 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">Pain Relief</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Non-invasive decompression</p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Focus areas */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-2 block">
                Postural Therapy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Core Therapy Segments
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {THERAPY_FOCUS.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-sage-100/50 shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
                  <div className="p-2 bg-sage-100 text-terracotta-500 rounded-lg w-fit">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest-700">{item.title}</h3>
                  <p className="font-sans text-sm text-forest-600/70 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-cream-100 border border-sage-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-md mx-auto text-center space-y-6">
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-terracotta-500 bg-terracotta-100 px-3 py-1 rounded-full">
                Custom Program
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold text-forest-700">Enquiry Based Pricing</h3>
                <p className="font-sans text-xs text-sage-600 mt-1">Rates vary depending on hours and physical blueprint demands</p>
              </div>

              <p className="font-sans text-sm text-forest-600/70 leading-relaxed font-light">
                Please submit an application describing your injury history, spinal diagnosis, or posture requirements. We will coordinate directly with our therapists.
              </p>

              <div className="pt-4 border-t border-sage-100">
                <a
                  href={`/apply?location=${location}&program=Therapeutic%20Yoga%20Program`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Submit Therapy Enquiry</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Location Maps */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-sage-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              
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
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-forest-700 rounded-3xl p-8 md:p-12 text-center text-cream-50 shadow-xl border border-forest-800 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Connect Directly for Evaluation
              </h2>
              <p className="font-sans text-sm text-cream-200/90 leading-relaxed font-light max-w-xl mx-auto">
                Secure your allocation for Hatha Alignment modules. Submit your registration form online or connect with our lead office on WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 max-w-lg mx-auto">
                <a
                  href={`/apply?location=${location}&program=Therapeutic%20Yoga%20Program`}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Submit Application Form</span>
                </a>
                <a
                  href={`https://wa.me/${config.contactNumber1.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Alpesh, I am interested in private Therapeutic sessions.")}`}
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
