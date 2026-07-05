import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Phone, Mail, MapPin, Compass, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Alpesh Yoga | Enquire & Visit Our Shalas",
  description: "Get in touch with Alpesh Yoga Center. Reach out via email or phone for admissions enquiries in Goa (Arambol) or Dharamshala (Dharamkot).",
  keywords: ["Alpesh Yoga contact number", "Arambol yoga school address", "Dharamkot yoga center email", "yoga enquiries India"],
};

export default function ContactPage() {
  const CONTACTS = [
    {
      title: "Direct Support Phone",
      value: "+91 77198 78500",
      href: "tel:+917719878500",
      icon: Phone,
    },
    {
      title: "Admissions Email",
      value: "alpeshyoga@gmail.com",
      href: "mailto:alpeshyoga@gmail.com",
      icon: Mail,
    },
  ];

  const LOCATIONS_CONTACT = [
    {
      title: "Dharamshala Shala (Himalayas)",
      address: "Alpesh Yoga, Baldev House, 50 meters from Track n Dine Restaurant and before Bodhi Greens Restaurant, Dharamkot 176219, Dharamshala, Himachal Pradesh",
      landmark: "Baldev House, nestled in Dharamkot. 50 meters past Track n Dine and just before Bodhi Greens Restaurant.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.4093959146193!2d76.33129887627443!3d32.24716497388046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53dfdcd15d49%3A0xe1c028ea7c55cb85!2sAlpesh%20Yoga!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      icon: Compass,
    },
    {
      title: "Goa Shala (Coastal Beach)",
      address: "Alpesh Yoga Center, Opposite Arcan Bar, Before Piya Guest House, Madhlo Waddo, Arambol Beach, North Goa 403524",
      landmark: "Madhlo Waddo area in Arambol. Walk straight past Piya Guest House and opposite Arcan Bar towards the shala.",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.428514930355!2d73.70494491490278!3d15.698305889110416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfa37c56aa3891%3A0xe9f7cb2f43beec41!2sArambol%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      icon: Waves,
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
              <span className="text-cream-50">Contact Us</span>
            </nav>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Contact Alpesh Yoga
            </h1>
            <p className="font-sans text-sm sm:text-base text-cream-200/80 max-w-2xl mx-auto font-light leading-relaxed">
              Have questions about registration parameters, accommodation facilities, or alignment methodologies? We are here to help.
            </p>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {CONTACTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={idx}
                    href={item.href}
                    className="bg-cream-100/40 p-8 rounded-3xl border border-sage-200 shadow-sm flex flex-col items-center justify-center text-center space-y-3 group hover:border-terracotta-500/30 transition-colors"
                  >
                    <div className="p-3 bg-white text-terracotta-500 rounded-2xl shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-sm font-bold text-forest-750">{item.title}</span>
                    <span className="font-mono text-base text-forest-600 font-semibold group-hover:text-terracotta-500 transition-colors">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Studio Locations Maps Section */}
        <section className="py-20 bg-cream-100/40 border-t border-sage-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs uppercase tracking-widest text-terracotta-500 font-bold block mb-2">
                Visit Us
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
                Our Studio Locations &amp; Map Coordinates
              </h2>
            </div>

            <div className="space-y-16 max-w-5xl mx-auto">
              {LOCATIONS_CONTACT.map((loc, idx) => {
                const LocIcon = loc.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-3xl p-8 border border-sage-200 shadow-sm flex flex-col md:flex-row gap-8 items-center"
                  >
                    
                    <div className="space-y-4 md:w-1/2">
                      <div className="flex items-center gap-2 text-terracotta-500">
                        <LocIcon className="w-5 h-5 shrink-0" />
                        <span className="font-sans text-xs uppercase tracking-widest font-semibold">{loc.title}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-forest-600 leading-snug">
                        {loc.title.split(" ")[0]} Studio
                      </h3>
                      <p className="font-sans text-sm text-forest-600/80 leading-relaxed font-light">
                        {loc.address}
                      </p>
                      <p className="font-sans text-xs text-sage-500 font-light italic">
                        Landmark: {loc.landmark}
                      </p>
                    </div>

                    {/* Embed Map */}
                    <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-sm h-64 border border-sage-100 relative">
                      <iframe
                        src={loc.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${loc.title} Map Embed`}
                        className="absolute inset-0"
                      ></iframe>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-600">
              Submit Your Admissions Application
            </h2>
            <p className="font-sans text-sm sm:text-base text-forest-600/70 max-w-xl mx-auto leading-relaxed font-light">
              Admissions are open year-round. Select your course, preferred location (Goa or Dharamshala), and upcoming batch starting dates to register today.
            </p>
            <div className="pt-4">
              <a
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-sans text-xs font-bold shadow-md transition-all duration-300"
              >
                <span>Apply / Register Online</span>
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
