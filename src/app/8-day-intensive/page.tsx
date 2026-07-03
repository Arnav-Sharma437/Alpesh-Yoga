import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2, Clock, Calendar, Users, Award, ShieldAlert, Sparkles, BookOpen, HeartPulse, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "8-Day Intensive Hatha Alignment Course in Dharamshala | Alpesh Yoga",
  description: "Deepen your alignment at our 8-Day Intensive Hatha Alignment Course in Upper Bhagsu, Dharamshala, India. Systematically correct your posture using ropes, blocks, and belts.",
  keywords: [
    "Hatha alignment intensive course Dharamshala",
    "yoga alignment course Bhagsu",
    "8 day yoga course Himachal",
    "Alpesh Yoga alignment intensive",
    "yoga teacher training Dharamshala"
  ],
};

// Course configurations for easy maintenance
const START_DATES = [
  "Starts Every Monday (Year-Round)",
  "Monday, July 6, 2026",
  "Monday, July 13, 2026",
  "Monday, July 20, 2026",
  "Monday, July 27, 2026",
];

const PRICING_INFO = {
  feeINR: "₹12,000",
  feeUSD: "$150 USD",
  deposit: "₹2,500 / $30 USD to reserve a spot",
};

const BENEFITS = [
  {
    title: "Improve Posture & Alignment",
    desc: "Target structural imbalances, relieve chronic back/shoulder pain, and restore joint symmetry through active alignment adjustments.",
  },
  {
    title: "Understand Asana Mechanics",
    desc: "Learn the 'how' and 'why' behind each posture. We analyze skeletal anatomy so you practice with mental clarity and physical safety.",
  },
  {
    title: "Intelligent Use of Props",
    desc: "Master the application of wooden blocks, alignment straps, blankets, bolsters, and wall-rope traction systems to modify asanas.",
  },
  {
    title: "Build Strength & Awareness",
    desc: "Develop deep stabilizers, correct muscular compensation habits, and sharpen your internal kinesthetic awareness.",
  },
  {
    title: "Safer Home Practice",
    desc: "Gain the anatomical knowledge required to practice advanced postures at home without risk of ligament or muscle injuries.",
  },
];

const INTENSIVE_TESTIMONIALS = [
  {
    quote: "The 8-day intensive was exactly what my practice needed. Alpesh is uncompromising when it comes to alignment. In just a week, I finally understood how to rotate my thighs and stabilize my pelvis in standing poses.",
    name: "Maria Rodriguez",
    origin: "Spain",
    role: "Vinyasa Yoga Teacher",
  },
  {
    quote: "As someone recovering from a rotator cuff injury, this course was a lifesaver. The precise adjustments and use of wall ropes allowed me to practice traction without compressing the joint. Highly therapeutic.",
    name: "Thomas Wright",
    origin: "Australia",
    role: "Fitness Coach & Student",
  },
];

const RELATED_PROGRAMS = [
  {
    title: "Daily Classes",
    desc: "Join our drop-in Hatha alignment sessions available every morning and evening in Upper Bhagsu.",
    href: "/daily-classes",
    icon: Sparkles,
  },
  {
    title: "100-Hour Yoga TTC",
    desc: "Dive deeper into adjustments and anatomy. Phase 1 of our professional alignment certification.",
    href: "/#programs",
    icon: BookOpen,
  },
  {
    title: "Therapeutic Yoga",
    desc: "One-on-one postural evaluation and personalized prop alignment for injury recovery and scoliosis.",
    href: "/#programs",
    icon: HeartPulse,
  },
];

export default function IntensiveCourse() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* 1. Page Hero */}
        <section className="relative py-24 bg-forest-700 text-cream-50 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 scale-102"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200')`,
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4">
            
            {/* Breadcrumbs */}
            <nav className="text-xs uppercase tracking-widest text-cream-200/60 flex items-center justify-center gap-2 mb-2 font-sans font-medium">
              <a href="/" className="hover:text-cream-100 hover:underline">Home</a>
              <span>/</span>
              <span className="text-cream-50">8-Day Intensive</span>
            </nav>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight max-w-4xl mx-auto">
              8-Day Intensive Hatha Alignment Course
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-100/90 max-w-2xl mx-auto font-light leading-relaxed">
              Starts every Monday in Upper Bhagsu, Dharamshala. Reset your structural baseline, understand prop anatomy, and build a safer, stronger practice.
            </p>
          </div>
        </section>

        {/* 2. Intro / Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Course Introduction
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                A Disciplined Approach to Asana Mechanics
              </h2>
            </div>
            
            <p className="font-sans text-base text-forest-600/80 leading-relaxed font-light text-center">
              Our 8-Day Intensive Course is designed for practitioners who want to look beneath the surface of vinyasa flows and understand the alignment anatomy that makes postures stable, safe, and therapeutic. Under the direct guidance of expert instructors, this course takes you systematically through standing poses, backward extensions, forward bends, and inversion fundamentals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-center">
              <div className="p-5 bg-cream-50 border border-sage-100/40 rounded-2xl">
                <Clock className="w-5 h-5 text-terracotta-600 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">3 Hours Daily</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Focused alignment practice</p>
              </div>
              <div className="p-5 bg-cream-50 border border-sage-100/40 rounded-2xl">
                <Calendar className="w-5 h-5 text-terracotta-600 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">Starts Weekly</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Every Monday year-round</p>
              </div>
              <div className="p-5 bg-cream-50 border border-sage-100/40 rounded-2xl">
                <Users className="w-5 h-5 text-terracotta-600 mx-auto mb-2" />
                <h4 className="font-serif font-bold text-sm text-forest-700">Small Groups</h4>
                <p className="font-sans text-xs text-forest-600/60 mt-1">Personalized adjustments</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What You'll Learn (Benefits Grid) */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Curriculum Focus
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Core Teaching Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {BENEFITS.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-sage-100/50 shadow-sm space-y-4 hover:shadow-md transition-all duration-300">
                  <div className="p-2 bg-sage-50 text-terracotta-600 rounded-lg w-fit">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-forest-700">{item.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-forest-600/70 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Course Structure */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="bg-sage-600 rounded-3xl p-8 md:p-12 text-cream-50 flex flex-col md:flex-row gap-8 items-center">
              <div className="space-y-4 md:w-2/3">
                <h3 className="font-serif text-2xl font-bold">Course Schedule & Structure</h3>
                <p className="font-sans text-sm leading-relaxed text-cream-100/90 font-light">
                  The course spans **8 consecutive days** (starting Monday morning and concluding the following Monday). The daily training runs for **3 hours** (typically divided into alignment mechanics, prop demonstrations, and supervised adjustment practices).
                </p>
                <div className="flex flex-col gap-2 font-mono text-xs text-cream-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 shrink-0 text-terracotta-200" />
                    <span>Intensive Practice: 8:30 AM – 11:30 AM (Monday–Saturday)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 shrink-0 text-terracotta-200" />
                    <span>Includes individual posture blueprint analysis</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3 w-full p-6 bg-forest-700/50 border border-forest-500 rounded-2xl text-center space-y-2">
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-terracotta-200">Class Size Limit</span>
                <div className="font-serif text-3xl font-extrabold">12 Students</div>
                <p className="font-sans text-xs text-cream-200/80 leading-normal">To ensure personal adjustment and hands-on teaching.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Who Is This For */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Target Audience
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Is This Course Right For You?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto font-sans text-sm text-forest-600">
              
              <div className="bg-white p-6 rounded-2xl border border-sage-100/50 space-y-2">
                <h3 className="font-serif text-base font-bold text-forest-700">Beginners Seeking a Base</h3>
                <p className="leading-relaxed font-light text-forest-600/70">
                  Instead of struggling through fast-paced flows, you learn how to use blocks and straps correctly from day one. You establish muscle habits that prevent injuries.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-sage-100/50 space-y-2">
                <h3 className="font-serif text-base font-bold text-forest-700">Teachers Refining Technique</h3>
                <p className="leading-relaxed font-light text-forest-600/70">
                  Deepen your understanding of hands-on adjustments. Learn how to diagnose structural errors and customize prop support for your own students.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-sage-100/50 space-y-2">
                <h3 className="font-serif text-base font-bold text-forest-700">Experienced Practitioners</h3>
                <p className="leading-relaxed font-light text-forest-600/70">
                  Deconstruct your posture. Break down deep-seated alignment issues (like pelvic rotation and shoulder restrictions) that might be blocking your progression.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-sage-100/50 space-y-2">
                <h3 className="font-serif text-base font-bold text-forest-700">Post-Injury Rehabilitation</h3>
                <p className="leading-relaxed font-light text-forest-600/70">
                  Perfect for students recovering from back, knee, or shoulder pain. We customize alignment angles to ensure therapeutic decompression of compressed joints.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 6. What's Included / Bring */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-forest-700">What is Provided</h3>
                <ul className="space-y-3 font-sans text-sm text-forest-600/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Free yoga mat use (washed daily)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Yoga props: belts, blocks, bolsters, and blankets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Wall-rope traction stations access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Certificate of completion (non-certification hours)</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-forest-700">What to Bring</h3>
                <ul className="space-y-3 font-sans text-sm text-forest-600/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Comfortable, flexible, fitted yoga clothes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Notebook and pen for anatomical diagrams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Water bottle and small face towel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage-500 shrink-0" />
                    <span>Open, disciplined mind ready for adjustments</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 7. Upcoming Start Dates */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-sage-100/60 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-terracotta-600">
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold">Weekly Intakes</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-forest-700">Upcoming Course Start Dates</h3>
                <p className="font-sans text-xs text-forest-600/60 leading-normal max-w-md">
                  Courses run continuously. You can join on any Monday morning. Please check the upcoming dates:
                </p>
              </div>

              {/* Date items list */}
              <div className="w-full md:w-60 font-mono text-xs text-forest-700 divide-y divide-sage-50 bg-cream-50 p-4 rounded-2xl border border-sage-50">
                {START_DATES.map((date, idx) => (
                  <div key={idx} className="py-2 first:pt-0 last:pb-0 font-sans font-medium text-forest-600">
                    {date}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 8. Pricing / Enrollment */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-sage-200/80 rounded-3xl p-8 md:p-12 shadow-md max-w-md mx-auto text-center space-y-6">
              
              <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-terracotta-600 bg-terracotta-50 px-3 py-1 rounded-full">
                Course Investment
              </span>

              <div>
                <h3 className="font-serif text-xl font-bold text-forest-700">Tuition Fees</h3>
                <p className="font-sans text-xs text-sage-600 mt-1">Includes 8-day course tuition & prop packages</p>
              </div>

              <div className="flex items-baseline justify-center gap-2">
                <span className="font-serif text-4xl font-extrabold text-forest-600">{PRICING_INFO.feeINR}</span>
                <span className="text-sm text-forest-600/60 font-light">INR</span>
                <span className="text-forest-600/40 font-light">/</span>
                <span className="font-serif text-2xl font-bold text-forest-600">{PRICING_INFO.feeUSD}</span>
              </div>

              <p className="font-sans text-xs text-sage-600 leading-normal">
                Deposit amount: **{PRICING_INFO.deposit}** to secure your booking. The remainder can be settled in cash upon arrival.
              </p>

              <div className="pt-4 border-t border-sage-50">
                <a
                  href="/apply?program=8-Day%20Intensive%20Course"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-forest-600 hover:bg-forest-500 text-cream-50 font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Apply / Register Online</span>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* 9. Testimonials (Course-Specific) */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Alumni Reviews
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Intensive Course Experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {INTENSIVE_TESTIMONIALS.map((test, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-sage-100/50 shadow-sm flex flex-col justify-between">
                  <p className="font-serif text-sm italic text-forest-600/90 leading-relaxed">
                    "{test.quote}"
                  </p>
                  <div className="pt-6 mt-6 border-t border-sage-50 flex items-center justify-between text-xs">
                    <div>
                      <h4 className="font-serif font-bold text-forest-700">{test.name}</h4>
                      <p className="font-sans text-[10px] text-sage-600">{test.origin}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-terracotta-600 bg-terracotta-50 px-2 py-0.5 rounded">
                      {test.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Call To Action Banner */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-terracotta-700 to-terracotta-600 rounded-3xl p-8 md:p-12 text-center text-cream-50 shadow-xl border border-terracotta-800 space-y-6">
              
              <div className="flex items-center justify-center gap-2 text-terracotta-200">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
                <span className="font-sans text-xs uppercase tracking-widest font-semibold">Strict Limits Apply</span>
              </div>
              
              <h2 className="font-serif text-2xl md:text-3xl font-bold">
                Limited Spots Available Each Week
              </h2>
              
              <p className="font-sans text-sm text-cream-100/90 leading-relaxed font-light max-w-xl mx-auto">
                Due to our focus on physical adjustments and individual alignment blueprints, we cap our weekly intensive groups at **12 students**. Contact us to reserve your mat.
              </p>

              {/* Booking Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 max-w-lg mx-auto">
                <a
                  href="/apply?program=8-Day%20Intensive%20Course"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream-50 hover:bg-terracotta-100 text-terracotta-700 font-sans text-xs font-bold shadow-sm transition-all duration-300"
                >
                  <span>Apply Online Now</span>
                </a>
                <a
                  href="https://wa.me/917719878500?text=Hello%20Alpesh,%20I%20would%20like%20to%20register%20for%20the%208-Day%20Intensive%20Alignment%20Course."
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

        {/* 11. Related Programs Panel */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
                Related Programs
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Explore Other Alignment Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {RELATED_PROGRAMS.map((prog, idx) => {
                const IconComp = prog.icon;
                return (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-sage-100/50 flex flex-col justify-between group hover:border-terracotta-500/30 transition-all duration-300 shadow-sm">
                    <div className="space-y-4">
                      <div className="p-3 bg-cream-50 text-terracotta-600 rounded-xl w-fit shadow-sm">
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
