import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Clock, Users, ArrowRight, CheckCircle2, MapPin, Phone, Sparkles, BookOpen, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "Daily Hatha Alignment Classes in Dharamshala | Alpesh Yoga",
  description: "Join our daily drop-in Hatha alignment classes in Upper Bhagsu, Dharamshala. Focused on precision alignment and prop work. Ideal for beginners and advanced practitioners. Mats and props provided.",
  keywords: [
    "drop-in yoga classes Bhagsu",
    "daily yoga Dharamshala",
    "beginner yoga McLeod Ganj",
    "Hatha alignment classes Dharamshala",
    "Alpesh Yoga daily schedule"
  ],
};

// Schedule configuration data for easy updates
const SCHEDULE_DATA = [
  {
    time: "8:30 AM – 10:00 AM",
    title: "Intensive Hatha Alignment",
    level: "All Levels",
    focus: "Intensive adjustment, structural integrity, inversions, and advanced prop placements.",
    shortDesc: "A rigorous session investigating skeletal mechanics, joint safety, and core stabilization using wall ropes, blocks, and straps.",
  },
  {
    time: "10:15 AM – 11:45 AM",
    title: "Beginner Friendly Alignment",
    level: "Beginner",
    focus: "Fundamentals of standing postures, basic breathing, introductory prop usage.",
    shortDesc: "Designed for first-timers and those wanting to establish correct habits. Learn the foundations of Hatha alignment safely.",
  },
  {
    time: "4:00 PM – 5:30 PM",
    title: "Evening Therapeutic Alignment",
    level: "All Levels",
    focus: "Restorative postures, shoulder/neck release, spinal traction, and deep restoration.",
    shortDesc: "A slow, healing session focusing on releasing physical compression, correcting posture errors, and restorative pranayama.",
  },
];

const PREPARATION_ITEMS = [
  {
    title: "Mats & Props Provided",
    description: "Our studio is fully equipped with high-quality wooden blocks, belts, blankets, bolsters, and wall ropes. Mats are provided for free, but you are welcome to bring your own.",
  },
  {
    title: "Comfortable Clothing",
    description: "Wear comfortable, stretchable clothes that allow you to move freely. Tight or fitted clothing helps the teacher verify your knee and joint alignments accurately.",
  },
  {
    title: "Arrive 10 Minutes Early",
    description: "Please arrive 10 minutes prior to class to settle in, adjust your props, and speak to the teacher about any body stiffness or therapeutic requirements.",
  },
  {
    title: "Practice on an Empty Stomach",
    description: "Avoid eating heavy meals at least 2–3 hours before practice. A light snack or tea/water up to 1 hour before class is generally fine.",
  },
];

const PRICING_PACKAGES = [
  {
    name: "Single Drop-in",
    price: "₹600",
    validity: "Per class",
    features: ["All props provided", "Individual adjustments", "Drop-in welcome"],
    popular: false,
  },
  {
    name: "6-Class Pass",
    price: "₹3,000",
    validity: "Valid for 7 days",
    features: ["Save ₹600", "Access to all daily slots", "Flexible scheduling"],
    popular: true,
  },
  {
    name: "12-Class Pass",
    price: "₹5,500",
    validity: "Valid for 14 days",
    features: ["Save ₹1,700", "Access to all daily slots", "Personal posture advice"],
    popular: false,
  },
];

const RELATED_PROGRAMS = [
  {
    title: "8-Day Intensive Course",
    desc: "Transform your alignment parameters. 3 hours of daily practice for teachers and dedicated practitioners.",
    href: "/#programs",
    icon: Sparkles,
  },
  {
    title: "200-Hour Yoga YTTC",
    desc: "Become a certified Hatha alignment instructor registered with Yoga Alliance USA. Deep anatomy and adjustment lessons.",
    href: "/#programs",
    icon: BookOpen,
  },
  {
    title: "Therapeutic Yoga",
    desc: "Tailored private alignment therapy targeting scoliosis, chronic back pain, sciatica, and joint rehabilitation.",
    href: "/#programs",
    icon: HeartPulse,
  },
];

export default function DailyClasses() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* 1. Page Hero Banner */}
        <section className="relative py-20 bg-forest-700 text-cream-50 overflow-hidden">
          {/* Background image overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200')`,
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4">
            
            {/* Breadcrumb */}
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">Daily Classes</span>
            </nav>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Daily Drop-In Classes
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Monday to Saturday — deepen your alignment, refine posture anatomy, and safely build physical capacity in Upper Bhagsu, Dharamshala.
            </p>
          </div>
        </section>

        {/* 2. Schedule Table / Cards Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Timetable
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Weekly Class Schedule
              </h2>
              <p className="font-sans text-sm text-forest-600/70 mt-2 font-light">
                No pre-booking required for drop-ins. Simply arrive 10 minutes before the session starts.
              </p>
            </div>

            {/* Desktop Table (md and above) */}
            <div className="hidden md:block overflow-hidden border border-sage-100/80 rounded-2xl shadow-sm bg-cream-50/20 max-w-4xl mx-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-forest-600 text-cream-50 font-serif text-sm font-semibold border-b border-forest-700">
                    <th className="p-6">Time Slot</th>
                    <th className="p-6">Class Name</th>
                    <th className="p-6">Suitable For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-100/50 font-sans text-sm text-forest-600">
                  {SCHEDULE_DATA.map((cls, idx) => (
                    <tr key={idx} className="hover:bg-cream-100/20 transition-colors">
                      <td className="p-6 font-mono font-semibold text-terracotta-600 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-terracotta-500" />
                        {cls.time}
                      </td>
                      <td className="p-6">
                        <div className="font-serif font-bold text-base text-forest-700">{cls.title}</div>
                        <div className="text-xs text-forest-600/60 mt-1 max-w-md">{cls.focus}</div>
                      </td>
                      <td className="p-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sage-50 text-sage-700">
                          <Users className="w-3.5 h-3.5" />
                          {cls.level}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Cards (below md) */}
            <div className="md:hidden space-y-6 max-w-md mx-auto">
              {SCHEDULE_DATA.map((cls, idx) => (
                <div key={idx} className="bg-cream-50 p-6 rounded-2xl border border-sage-100/50 shadow-sm space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-terracotta-600 bg-terracotta-500/10 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5" />
                      {cls.time}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-sage-50 text-sage-700">
                      {cls.level}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg font-bold text-forest-600">{cls.title}</h3>
                    <p className="font-sans text-xs text-forest-600/70 leading-relaxed">{cls.focus}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 3. Class Descriptions */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Class Guide
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Understanding Our Offerings
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {SCHEDULE_DATA.map((cls, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-sage-100/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-terracotta-600 bg-terracotta-50 px-2 py-0.5 rounded-full">
                      {cls.level}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-forest-600 leading-snug">
                      {cls.title}
                    </h3>
                    <p className="font-sans text-sm text-forest-600/70 leading-relaxed font-light">
                      {cls.shortDesc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-sage-50 text-xs text-sage-600 font-sans italic">
                    Focus: {cls.focus}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. What to Expect / What to Bring */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                How to Prepare
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                What to Expect & Bring
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {PREPARATION_ITEMS.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle2 className="w-5 h-5 text-terracotta-500 shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-base font-bold text-forest-600">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-forest-600/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. Pricing / Pass Packages */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Pricing Tiers
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Class Rates & Passes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {PRICING_PACKAGES.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                    pkg.popular
                      ? "border-terracotta-500 shadow-lg scale-102"
                      : "border-sage-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-terracotta-600 text-cream-50 text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-bl-xl">
                      Recommended
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-forest-600">{pkg.name}</h3>
                      <p className="text-xs text-sage-600 mt-0.5">{pkg.validity}</p>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-4xl font-extrabold text-forest-600">{pkg.price}</span>
                      <span className="text-xs text-forest-600/50">INR</span>
                    </div>

                    <ul className="space-y-2.5 pt-4 border-t border-sage-50 text-xs font-sans text-forest-600/80">
                      {pkg.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <a
                      href={`/apply?program=Daily%20Classes&batch=${encodeURIComponent(pkg.name)}`}
                      className={`inline-flex items-center justify-center gap-1.5 w-full py-3 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                        pkg.popular
                          ? "bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 shadow-sm"
                          : "bg-forest-600 hover:bg-forest-500 text-cream-50"
                      }`}
                    >
                      <span>Select Pass</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="font-sans text-xs text-sage-600 italic">
                *Prices are subject to change. Custom passes are available for students seeking long-term stays.
              </p>
            </div>

          </div>
        </section>

        {/* 6. Location Reminder */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-sage-50 border border-sage-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              
              <div className="space-y-4 md:w-1/2">
                <div className="flex items-center gap-2 text-terracotta-600">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">Our Studio Location</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-forest-600 leading-snug">
                  Upper Bhagsu Sanctuary
                </h2>
                <p className="font-sans text-sm text-forest-600/80 leading-relaxed font-light">
                  Our yoga shala is situated just above the Bhagsu temple area, directly near the famous **Beetroot Café** and **Kibbutz Bhagsu**. It is a peaceful, quiet neighborhood perfect for meditative practice, away from horn sounds.
                </p>
                <p className="font-sans text-xs text-sage-600">
                  Easy to walk to from neighboring Dharamkot (10 mins), Bhagsu Waterfall (10 mins), and McLeod Ganj (25 mins).
                </p>
              </div>

              {/* Embed map */}
              <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-sm h-64 border border-sage-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4093959146193!2d76.33129887627443!3d32.24716497388046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53dfdcd15d49%3A0xe1c028ea7c55cb85!2sAlpesh%20Yoga!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alpesh Yoga Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Call To Action Banner */}
        <section className="py-12 bg-cream-100/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-terracotta-700 to-terracotta-600 rounded-3xl p-8 md:p-12 text-center text-cream-50 shadow-xl border border-terracotta-800 space-y-6">
              
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Reserve Your Daily Spot
              </h2>
              <p className="font-sans text-sm text-cream-100/90 leading-relaxed font-light max-w-xl mx-auto">
                Classes fill up quickly, especially during the peak season in Dharamshala. Drop us a message on WhatsApp to reserve your mat today.
              </p>

              {/* Booking Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 max-w-lg mx-auto">
                <a
                  href="/apply?program=Daily%20Classes"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream-50 hover:bg-terracotta-100 text-terracotta-700 font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Register / Enquire Online</span>
                </a>
                <a
                  href="https://wa.me/917719878500?text=Hello%20Alpesh,%20I%20would%20like%20to%20book%20a%20mat%20for%20your%20daily%20alignment%20class."
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

        {/* 8. Related Programs Cross-Link */}
        <section className="py-20 bg-white border-t border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Looking for Something Deeper?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Explore Core Courses
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {RELATED_PROGRAMS.map((prog, idx) => {
                const IconComp = prog.icon;
                return (
                  <div key={idx} className="bg-cream-50/50 rounded-2xl p-6 border border-sage-100/50 flex flex-col justify-between group hover:border-terracotta-500/30 transition-all duration-300">
                    <div className="space-y-4">
                      <div className="p-3 bg-white text-terracotta-600 rounded-xl w-fit shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-forest-700">{prog.title}</h3>
                      <p className="font-sans text-xs text-forest-600/70 leading-relaxed font-light">{prog.desc}</p>
                    </div>
                    <div className="pt-6 mt-4 border-t border-sage-100/60">
                      <a 
                        href={prog.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-terracotta-600 group-hover:text-terracotta-700 hover:translate-x-0.5 transition-all"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
