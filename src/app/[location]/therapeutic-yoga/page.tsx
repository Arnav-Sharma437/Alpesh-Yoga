import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
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

      <main className="flex-grow">
        <PageHero
          breadcrumb={`Therapeutic Yoga (${config.displayName})`}
          title="Therapeutic Yoga & Posture Adjustment"
          subtitle="Targeted postural therapy, spine traction, and customized alignments for injuries, scoliosis, and chronic joint compression."
        />

        {isGoa && (
          <section className="bg-amber-50 border-y border-amber-200 py-4 text-center">
            <span className="font-sans text-xs uppercase font-extrabold tracking-widest text-amber-700">
              [GOA BRANCH UNDER DEVELOPMENT - ACCEPTING ENQUIRIES]
            </span>
          </section>
        )}

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Healing Focus"
              title="Therapeutic Recovery Through Alignment"
            />
            
            <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
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

        <section className="border-y border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Postural Therapy" title="Core Therapy Segments" />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
              {THERAPY_FOCUS.map((item, idx) => (
                <div key={idx} className="space-y-4 rounded-[28px] border border-sand-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="w-fit rounded-lg bg-olive-50 p-2 text-saffron-500">
                    <HeartPulse className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-normal text-charcoal-500">{item.title}</h3>
                  <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">{item.desc}</p>
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
                  className="btn-primary flex w-full items-center justify-center gap-2"
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
            <div className="space-y-6 rounded-[28px] border border-sand-200 bg-charcoal-900 p-8 text-center text-white md:p-12">
              <SectionHeading
                light
                title="Connect Directly for Evaluation"
                subtitle="Secure your allocation for Hatha Alignment modules. Submit your registration form online or connect with our lead office on WhatsApp."
              />
              <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                <a
                  href={`/apply?location=${location}&program=Therapeutic%20Yoga%20Program`}
                  className="btn-primary w-full sm:w-auto"
                >
                  Submit Application Form
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
