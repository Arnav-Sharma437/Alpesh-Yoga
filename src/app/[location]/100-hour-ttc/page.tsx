import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, Clock, Calendar, ShieldCheck, BookOpen, HeartPulse, ArrowRight, Phone, Award } from "lucide-react";
import { locationsConfig } from "@/config/locations";
import { COURSE_TOPICS, COURSE_DEPOSIT } from "@/config/courseContent";

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
    title: `100-Hour Yoga Teacher Training Course in ${config.displayName} | Alpesh Yoga`,
    description: `Complete Phase 1 of your Hatha alignment certification at our 100-Hour Yoga TTC in ${config.displayName}. Learn adjustment anatomy and alignment theory.`,
    keywords: [
      `100 hour yoga teacher training ${config.slug}`,
      `100h yoga ttc ${config.slug}`,
      `Hatha alignment certification ${config.slug}`,
      `Alpesh Yoga 100h TTC`
    ],
  };
}

export default async function TTC100Page({ params }: PageProps) {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) {
    notFound();
  }

  const SYLLABUS_MODULES = COURSE_TOPICS.map((title) => ({
    title,
    desc: "Covered as part of the Alpesh Yoga Teacher Training curriculum from our official welcome kit.",
  }));

  const isGoa = location === "goa";
  const tuitionINR = "₹45,000";
  const tuitionUSD = "$550 USD";
  const deposit = COURSE_DEPOSIT.label;
  const batchDates = config.batches100;

  return (
    <>
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumb={`100-Hour TTC (${config.displayName})`}
          title="100-Hour Hatha Alignment Yoga TTC"
          subtitle="Phase 1 of your Hatha alignment certification. Build a rock-solid foundation in physical adjustments, safety mechanics, and traditional philosophy."
        />

        {isGoa && (
          <section className="border-y border-saffron-100 bg-saffron-50 py-4 text-center">
            <span className="font-sans text-sm font-bold tracking-wide text-saffron-700">
              Goa winter season open — Alignment &amp; Multi-Style 100-Hour batches available
            </span>
          </section>
        )}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Course Structure"
              title="Foundations of Alignment & Teaching"
            />
            
            <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
              The 100-Hour Teacher Training Course is tailored for students who wish to complete their 200-Hour registration in two separate segments, or for practitioners seeking a deep dive into alignment anatomy without taking on the full 200 hours at once. Taught in accordance with Yoga Alliance USA standards, you will cover the complete posture blueprint curriculum.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="rounded-[28px] border border-sand-200 bg-white p-5">
                <Clock className="mx-auto mb-2 h-5 w-5 text-saffron-500" />
                <h4 className="font-serif text-base font-normal text-charcoal-500">11-Day Duration</h4>
                <p className="mt-1 font-sans text-[1.05rem] text-charcoal-800">Intensive modules</p>
              </div>
              <div className="rounded-[28px] border border-sand-200 bg-white p-5">
                <Calendar className="mx-auto mb-2 h-5 w-5 text-saffron-500" />
                <h4 className="font-serif text-base font-normal text-charcoal-500">Flexible Batches</h4>
                <p className="mt-1 font-sans text-[1.05rem] text-charcoal-800">Goa &amp; Dharamshala</p>
              </div>
              <div className="rounded-[28px] border border-sand-200 bg-white p-5">
                <Award className="mx-auto mb-2 h-5 w-5 text-saffron-500" />
                <h4 className="font-serif text-base font-normal text-charcoal-500">Registered Certificate</h4>
                <p className="mt-1 font-sans text-[1.05rem] text-charcoal-800">Yoga Alliance USA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Curriculum"
              title="100h Course Syllabus Modules"
            />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {SYLLABUS_MODULES.map((mod, idx) => (
                <div key={idx} className="space-y-4 rounded-[28px] border border-sand-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="w-fit rounded-lg bg-olive-50 p-2 text-saffron-500">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-charcoal-500">{mod.title}</h3>
                  <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">{mod.desc}</p>
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
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">Weekly Intakes</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-700">Upcoming Batch Schedules</h3>
                <p className="font-sans text-xs text-forest-600/60 leading-normal max-w-sm">
                  Intake groups are limited to **12 students** per batch for safety-focused manual adjustments.
                </p>
              </div>

              {/* Date items list */}
              <div className="w-full space-y-4 md:w-80">
                {isGoa && config.batches100Alignment ? (
                  <>
                    <div className="divide-y divide-sage-100 rounded-2xl border border-sage-100 bg-white p-4 font-sans text-sm font-medium text-forest-600">
                      <p className="pb-2 font-sans text-xs font-bold uppercase tracking-wider text-saffron-600">
                        100-Hour Alignment
                      </p>
                      {config.batches100Alignment.map((date) => (
                        <div key={date} className="py-2 first:pt-0">
                          {date}
                        </div>
                      ))}
                    </div>
                    <div className="divide-y divide-sage-100 rounded-2xl border border-sage-100 bg-white p-4 font-sans text-sm font-medium text-forest-600">
                      <p className="pb-2 font-sans text-xs font-bold uppercase tracking-wider text-saffron-600">
                        100-Hour Multi-Style
                      </p>
                      {(config.batches100Multi ?? []).map((date) => (
                        <div key={date} className="py-2 first:pt-0">
                          {date}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="divide-y divide-sage-100 rounded-2xl border border-sage-100 bg-white p-4 font-sans text-sm font-medium text-forest-600">
                    {batchDates.map((date) => (
                      <div key={date} className="py-2 first:pt-0 last:pb-0">
                        {date}
                      </div>
                    ))}
                  </div>
                )}
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
                <p className="font-sans text-xs text-sage-600 mt-1">Includes 11 days instruction, study manuals &amp; props</p>
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
                {deposit}. Balance payable on arrival (Wise / bank transfer / cash). We accept INR, USD, EUR, and GBP.
              </p>

              <div className="pt-4 border-t border-sage-100">
                <a
                  href={`/apply?location=${location}&program=100-Hour%20TTC`}
                  className="btn-primary flex w-full items-center justify-center gap-2"
                >
                  <span>Apply for 100h TTC</span>
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
            <div className="space-y-6 rounded-[28px] border border-sand-200 bg-charcoal-900 p-8 text-center text-white md:p-12">
              <SectionHeading
                light
                title="Ready to Start Your Training?"
                subtitle="Secure your allocation for Hatha Alignment modules. Submit your registration form online or connect with our lead office on WhatsApp."
              />
              <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                <a
                  href={`/apply?location=${location}&program=100-Hour%20TTC`}
                  className="btn-primary w-full sm:w-auto"
                >
                  Submit Application Form
                </a>
                <a
                  href={`https://wa.me/${config.contactNumber1.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Alpesh, I am interested in the 100h TTC course.")}`}
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
