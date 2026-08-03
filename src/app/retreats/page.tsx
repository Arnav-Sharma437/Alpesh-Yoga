import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2, Phone } from "lucide-react";

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

      <main className="flex-grow">
        <PageHero
          breadcrumb="Retreats"
          title="Yoga & Meditation Retreats"
          subtitle="Connect with your inner self in the lap of nature. We host wellness retreats starting every Monday of the week in Arambol and Dharamkot."
          image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600"
        />

        <section className="space-y-24 bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl space-y-20">
              {RETREATS.map((item, idx) => (
                <div
                  key={item.id}
                  id={item.id}
                  className={`flex flex-col items-center gap-12 rounded-[28px] border border-sand-200 bg-white p-8 md:p-10 lg:flex-row ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full shrink-0 lg:w-2/5">
                    <div className="aspect-[4/3] h-64 overflow-hidden rounded-[20px] border border-sand-200 bg-sand-50">
                      <img
                        src={imgUrls[idx]}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="space-y-5 font-sans lg:w-3/5">
                    <span className="inline-block rounded-full bg-saffron-50 px-3 py-1 font-sans text-xs font-medium uppercase tracking-[0.2em] text-saffron-600">
                      {item.duration}
                    </span>
                    <h3 className="font-serif text-2xl font-normal text-charcoal-500">{item.title}</h3>
                    <p className="font-serif text-base italic text-charcoal-600">{item.subtitle}</p>
                    <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                      {item.desc}
                    </p>

                    <ul className="space-y-2 border-t border-sand-200 pt-4 font-sans text-[1.05rem] text-charcoal-800">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-olive-500" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-4 border-t border-sand-200 pt-6">
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-charcoal-500">Tuition Rate</span>
                        <span className="font-mono text-xl font-medium text-charcoal-800">{item.pricing}</span>
                      </div>
                      <a
                        href={`/apply?program=${encodeURIComponent(item.title)}`}
                        className="btn-primary"
                      >
                        Apply / Register
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              title="Yoga in the Lap of Nature"
              subtitle="Outdoor Hatha alignment sessions on the beach side sands of South Goa or pine forest clearings in Dharamkot. Connect with us on WhatsApp to register your retreat."
            />
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <a href="/apply" className="btn-primary">
                Register Online Now
              </a>
              <a
                href={`https://wa.me/917719878500?text=${encodeURIComponent("Hi Alpesh, I am interested in booking a yoga retreat.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal-800 bg-charcoal-900 px-8 py-3.5 font-sans text-sm font-medium text-white transition-colors hover:bg-charcoal-800"
              >
                <Phone className="h-3.5 w-3.5" />
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

const imgUrls = [
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
  "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=600",
];
