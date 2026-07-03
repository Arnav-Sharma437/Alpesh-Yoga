import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { ArrowRight, MapPin, Calendar, Compass, Phone, Sparkles, BookOpen, HeartPulse, ShieldCheck } from "lucide-react";
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
    title: `Yoga Alignment Courses in ${config.displayName} | Alpesh Yoga`,
    description: `Explore Hatha alignment classes and certified teacher training courses in ${config.displayName}, India. Choose from daily classes, 8-day intensives, and 100/200h YTTC.`,
    keywords: [
      `yoga course ${config.slug}`,
      `teacher training ${config.slug}`,
      `Hatha alignment ${config.slug}`,
      `Alpesh Yoga courses`
    ],
  };
}

export default async function LocationOverview({ params }: PageProps) {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) {
    notFound();
  }

  const courses = [
    {
      title: "Daily Drop-In Classes",
      desc: "Precision-focused Hatha alignment. Perfect for drop-in practitioners wanting alignment checks.",
      href: `/${location}/daily-classes`,
      icon: Sparkles,
    },
    {
      title: "8-Day Intensive Course",
      desc: "Deconstruct your posture mechanics. 3 hours daily focusing on prop support and adjustments.",
      href: `/${location}/8-day-intensive`,
      icon: Compass,
    },
    {
      title: "100-Hour TTC",
      desc: "Deep alignment and anatomy studies. Build physical stamina and instructional habits.",
      href: `/apply?location=${location}&program=100-Hour%20TTC`,
      icon: BookOpen,
    },
    {
      title: "200-Hour Yoga YTTC",
      desc: "Become a certified Hatha alignment teacher. Comprehensive Yoga Alliance USA curriculum.",
      href: `/apply?location=${location}&program=200-Hour%20YTTC`,
      icon: ShieldCheck,
    },
    {
      title: "Therapeutic Yoga",
      desc: "One-on-one evaluations for chronic shoulder, knee, back pain, or scoliosis correction.",
      href: `/apply?location=${location}&program=Therapeutic%20Yoga`,
      icon: HeartPulse,
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
            
            {/* Breadcrumb */}
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">{config.displayName}</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Courses & Alignment Training — {config.displayName}
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              {config.tagline} Discover our range of drop-in classes, alignment intensives, and certification modules.
            </p>
          </div>
        </section>

        {/* Goa Banner */}
        {isGoa && (
          <section className="bg-amber-50 border-b border-amber-200 py-4 text-center">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-amber-700">
              [GOA BRANCH UNDER DEVELOPMENT - ACCEPTING ONLINE PRE-APPLICATIONS]
            </span>
          </section>
        )}

        {/* Course Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Study Directory
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Programs Offered in {config.displayName}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {courses.map((course, idx) => {
                const Icon = course.icon;
                return (
                  <div key={idx} className="bg-cream-50/30 p-8 rounded-3xl border border-sage-100/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                    <div className="space-y-4">
                      <div className="p-3 bg-white text-terracotta-600 rounded-xl w-fit shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-forest-700">{course.title}</h3>
                      <p className="font-sans text-xs sm:text-sm text-forest-600/70 leading-relaxed font-light">{course.desc}</p>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-sage-100/50">
                      <a 
                        href={course.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 hover:translate-x-0.5 transition-all"
                      >
                        <span>{course.href.includes("apply") ? "Apply Online" : "View Details"}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Location Maps & Landmark Details */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-sage-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              
              <div className="space-y-4 md:w-1/2">
                <div className="flex items-center gap-2 text-terracotta-600">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">Location Map Pointer</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-forest-600 leading-snug">
                  {config.displayName} Branch
                </h3>
                <p className="font-sans text-sm text-forest-600/80 leading-relaxed font-light">
                  {config.address}.
                </p>
                <p className="font-sans text-xs text-sage-600">
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

        {/* Booking CTA Banner */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-terracotta-700 to-terracotta-600 rounded-3xl p-8 md:p-12 text-center text-cream-50 shadow-xl border border-terracotta-800 space-y-6">
              
              <h2 className="font-serif text-2xl md:text-3xl font-bold animate-fade-in">
                Reserve Your Alignment Training
              </h2>
              <p className="font-sans text-sm text-cream-100/90 leading-relaxed font-light max-w-xl mx-auto">
                Secure your placement in Dharamshala or submit a provisional enquiry for our upcoming Goa courses. We confirm allocations within 24 hours.
              </p>

              {/* Booking Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 max-w-lg mx-auto">
                <a
                  href={`/apply?location=${location}`}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream-50 hover:bg-terracotta-100 text-terracotta-700 font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Submit Application Form</span>
                </a>
                <a
                  href={`https://wa.me/${config.contactNumber1.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(config.whatsappLinkText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-forest-750 hover:bg-forest-700 text-cream-50 font-sans text-xs font-bold shadow-sm transition-all duration-300"
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
