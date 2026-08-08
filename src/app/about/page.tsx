import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import TeachersTeamSection from "@/components/TeachersTeamSection";
import {
  ACCOMMODATION_AMENITIES,
  BREAKFAST_MENU,
  DRINKS_MENU,
  FOOD_POLICY,
  LUNCH_DINNER_MENU,
} from "@/config/courseContent";
import { Award, ShieldCheck, Compass, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "About Alpesh Yoga | Hatha Alignment School India",
  description:
    "Learn about Alpesh Patwari and the history of Alpesh Yoga. Registered with Yoga Alliance USA, teaching precision yoga in Goa and Dharamshala.",
};

export default function AboutPage() {
  const CORE_VALUES = [
    {
      title: "20+ Years Experience",
      desc: "Alpesh Patwari has been training yoga students and teachers globally for over two decades, delivering anatomy-based instruction.",
      icon: Award,
    },
    {
      title: "Registered Yoga School",
      desc: "Our certifications are fully recognized by Yoga Alliance USA, allowing graduates to register as Registered Yoga Teachers (RYT).",
      icon: ShieldCheck,
    },
    {
      title: "Prop-Based Alignment",
      desc: "We focus on structural safety — correct alignment with wooden blocks, straps, bolsters, and wall ropes.",
      icon: Compass,
    },
    {
      title: "Therapeutic Healing",
      desc: "Sequences designed to prevent compression in the spine and joints, correcting posture faults with care.",
      icon: HeartPulse,
    },
  ];

  const GALLERY_IMAGES = [
    { url: "/gallery/IMG-20181216-WA0027.jpg", caption: "Alignment Posture Session" },
    { url: "/gallery/IMG-20181217-WA0043.jpg", caption: "Himalayan Practice, Dharamshala" },
    { url: "/gallery/alpesh-yoga-india-1.jpg", caption: "Prop-Supported Chest Opener" },
    { url: "/gallery/alpesh-yoga-teacher-training-goa-india-1.jpg", caption: "Beach Shala Alignment, Goa" },
  ];

  return (
    <>
      <Header />
      <main className="flex-grow">
        <PageHero
          breadcrumb="About Us"
          title="Alpesh Yoga’s Story"
          subtitle="What began as a dedication to precise Hatha alignment has grown into a Yoga Alliance registered school welcoming students from around the world in Goa and Dharamshala."
          image="/gallery/IMG-20181216-WA0025.jpg"
        />

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-5xl flex-col items-center gap-16 lg:flex-row">
              <div className="w-full max-w-sm shrink-0 lg:w-2/5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-sand-200 bg-sand-50 shadow-xl">
                  <img
                    src="/teachers/alpesh-patwari.jpg"
                    alt="Alpesh Patwari - Lead Instructor"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
                    <h3 className="font-serif text-xl font-normal">Alpesh Patwari</h3>
                    <p className="mt-1 font-sans text-sm font-medium uppercase tracking-wider text-olive-200">
                      Founding Teacher &amp; Director
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 lg:w-3/5">
                <p className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
                  Message from Our Founder
                </p>
                <h2 className="font-serif text-3xl font-normal leading-snug text-charcoal-500 sm:text-4xl">
                  Alpesh Patwari · The School for Yogic Life
                </h2>
                <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  Alpesh Patwari is ranked as one of the top Hatha alignment teachers in India. After
                  decades of intensive study in alignment-based techniques and anatomy, he founded
                  Alpesh Yoga to share clean, safety-centered, prop-supported methodologies worldwide.
                </p>
                <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  For over two decades, Alpesh Yoga has trained thousands of students in Hatha
                  alignment, adjustment mechanics, sequencing, philosophy, and pranayama. Yoga is not a
                  competition of flexibility — it is an exploration of muscular and skeletal balance.
                </p>
                <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  Our school operates seasonally in two natural locations: the pine heights of
                  Bhagsu Nag, Dharamshala in summer, and the ocean-breeze shalas of Arambol, Goa in winter.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What Guides Everything We Do"
              title="Core Foundations of Our School"
              subtitle="These values shape how we teach, how we host, and how we show up for every student."
            />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {CORE_VALUES.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="space-y-4 rounded-[28px] border border-sand-200 bg-white p-6 text-center shadow-sm"
                  >
                    <div className="mx-auto w-fit rounded-2xl bg-olive-50 p-3 text-olive-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-xl font-normal text-charcoal-900">{val.title}</h3>
                    <p className="font-sans text-[1.05rem] font-normal leading-[1.7] text-charcoal-800">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <TeachersTeamSection />

        <section className="bg-white py-24">
          <div className="mx-auto max-w-5xl space-y-10 px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Accommodation & Food"
              title="Cozy, Clean Stays in Arambol & Bhagsu Nag"
              subtitle={FOOD_POLICY}
            />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ACCOMMODATION_AMENITIES.map((item) => (
                <div
                  key={item}
                  className="rounded-[20px] border border-sand-200 bg-sand-50 px-4 py-4 font-sans text-[1.05rem] font-medium text-charcoal-800"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-3">
              {[
                { title: "Breakfast", items: BREAKFAST_MENU },
                { title: "Lunch & Dinner", items: LUNCH_DINNER_MENU },
                { title: "Drinks", items: DRINKS_MENU },
              ].map((col) => (
                <div key={col.title} className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
                  <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-900">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="font-sans text-[1.05rem] text-charcoal-800">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="border-t border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Gallery" title="Glimpses of Our Yoga Training Program" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GALLERY_IMAGES.map((img) => (
                <div key={img.caption} className="space-y-3">
                  <div className="aspect-video overflow-hidden rounded-[24px]">
                    <img src={img.url} alt={img.caption} className="h-full w-full object-cover" />
                  </div>
                  <p className="text-center font-serif text-base font-normal text-charcoal-500">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="/programs" className="btn-primary">
                Explore Our Programs
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
