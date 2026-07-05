import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2, Calendar, DollarSign, Compass, Waves } from "lucide-react";
import { locationsConfig } from "@/config/locations";

export const metadata: Metadata = {
  title: "Course Dates & Pricing Overview | Alpesh Yoga India",
  description: "View upcoming yoga teacher training batch dates and tuition fees side-by-side for our Dharamshala and Goa centers.",
  keywords: ["yoga ttc cost India", "cheap yoga teacher training dates", "Alpesh Yoga fees", "Arambol yoga school schedules"],
};

export default function DatesPricesPage() {
  const dharamshala = locationsConfig.dharamshala;
  const goa = locationsConfig.goa;

  const coursesPricing = [
    {
      name: "Daily Drop-In Classes",
      dharamsalaPrice: "₹600 / class",
      goaPrice: "₹600 / class",
      duration: "90 Mins",
    },
    {
      name: "8-Day Intensive Course",
      dharamsalaPrice: "₹12,000 / $150 USD",
      goaPrice: "₹12,000 / $150 USD",
      duration: "8 Days",
    },
    {
      name: "100-Hour TTC",
      dharamsalaPrice: "₹45,000 / $550 USD",
      goaPrice: "₹45,000 / $550 USD",
      duration: "12 Days",
    },
    {
      name: "200-Hour YTTC",
      dharamsalaPrice: "₹80,000 / $950 USD",
      goaPrice: "₹80,000 / $950 USD",
      duration: "24 Days",
    },
    {
      name: "Therapeutic Yoga Program",
      dharamsalaPrice: "Enquiry-Based",
      goaPrice: "Enquiry-Based",
      duration: "Custom",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        
        {/* Page Hero */}
        <section className="relative py-20 bg-forest-700 text-cream-50 overflow-hidden">
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
              <span className="text-cream-50">Dates &amp; Price</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Dates &amp; Pricing Directory
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed">
              Compare alignment course tuitions and upcoming intake start dates side-by-side for both active shalas.
            </p>
          </div>
        </section>

        {/* Pricing Comparison Table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-2 block">
                Tuition Overview
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Course Cost Comparison
              </h2>
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden border border-sage-200 rounded-3xl shadow-sm bg-cream-50/20 max-w-4xl mx-auto">
              <table className="w-full text-left border-collapse font-sans text-sm text-forest-600">
                <thead>
                  <tr className="bg-forest-750 text-white font-serif text-sm font-semibold border-b border-forest-850">
                    <th className="p-6">Program</th>
                    <th className="p-6">Duration</th>
                    <th className="p-6">Dharamshala Rate</th>
                    <th className="p-6">Goa Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-200">
                  {coursesPricing.map((item, idx) => (
                    <tr key={idx} className="hover:bg-cream-100/20 transition-colors">
                      <td className="p-6 font-serif font-bold text-forest-750">{item.name}</td>
                      <td className="p-6 text-sage-600 font-medium">{item.duration}</td>
                      <td className="p-6 font-mono text-terracotta-600 font-semibold">{item.dharamsalaPrice}</td>
                      <td className="p-6 font-mono text-forest-750 font-semibold">{item.goaPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* Dynamic Dates Comparison Grid */}
        <section className="py-20 bg-cream-100/40 border-t border-b border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-semibold mb-2 block">
                Intake Schedules
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Upcoming Batches Side by Side
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              
              {/* Dharamshala Dates Card */}
              <div className="bg-white rounded-3xl p-8 border border-sage-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-terracotta-500">
                    <Compass className="w-5 h-5 shrink-0" />
                    <h3 className="font-serif text-lg font-bold text-forest-750">Dharamshala Batch Dates</h3>
                  </div>
                  <p className="font-sans text-xs text-sage-500 font-light leading-normal">
                    Hosted during summer (June to September) in Dharamkot pine forests.
                  </p>
                  
                  <div className="divide-y divide-sage-100 font-sans text-xs font-semibold text-forest-600 pt-4">
                    {dharamshala.batches.map((date, idx) => (
                      <div key={idx} className="py-2.5 flex justify-between items-center">
                        <span>Batch {idx + 1}</span>
                        <span className="text-terracotta-500 font-mono font-medium">{date}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-8">
                  <a
                    href="/apply?location=dharamshala"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-sm transition-colors"
                  >
                    <span>Register in Dharamshala</span>
                  </a>
                </div>
              </div>

              {/* Goa Dates Card */}
              <div className="bg-white rounded-3xl p-8 border border-sage-200 shadow-sm flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-forest-750">
                    <Waves className="w-5 h-5 shrink-0" />
                    <h3 className="font-serif text-lg font-bold text-forest-750">Goa Batch Dates</h3>
                  </div>
                  <p className="font-sans text-xs text-sage-500 font-light leading-normal">
                    Hosted during winter (November to March) at Arambol Beach.
                  </p>

                  <div className="divide-y divide-sage-100 font-sans text-xs font-semibold text-forest-600 pt-4">
                    {goa.batches.map((date, idx) => (
                      <div key={idx} className="py-2.5 flex justify-between items-center">
                        <span>Batch {idx + 1}</span>
                        <span className="text-forest-600 font-mono font-medium">{date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href="/apply?location=goa"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-forest-750 hover:bg-forest-700 text-white font-sans text-xs font-bold shadow-sm transition-colors"
                  >
                    <span>Register in Goa</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
              Need Custom Dates or Stays?
            </h2>
            <p className="font-sans text-sm sm:text-base text-forest-600/70 max-w-xl mx-auto leading-relaxed font-light">
              We offer personalized durations, private stays, and modular passes for students seeking customizable training slots. Drop a note on WhatsApp.
            </p>
            <div className="pt-4">
              <a
                href={`https://wa.me/917719878500?text=${encodeURIComponent("Hi Alpesh, I am inquiring about custom dates & pricing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-forest-950 hover:bg-forest-900 text-white font-sans text-xs font-bold shadow-md transition-colors"
              >
                <span>Inquire Custom Passes</span>
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
