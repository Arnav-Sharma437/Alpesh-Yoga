import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Phone, Mail, Compass, Waves } from "lucide-react";

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
      address: "Near Beetroot Café, & Kibbutz Bhagsu Restaurant, Upper Bhagsu, Dharamshala, Himachal Pradesh",
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

      <main className="flex-grow">
        <PageHero
          breadcrumb="Contact Us"
          title="Contact Us"
          subtitle="Have questions about registration parameters, accommodation facilities, or alignment methodologies? We are here to help."
        />

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
              {CONTACTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="group flex flex-col items-center justify-center rounded-[28px] border border-sand-200 bg-white p-8 text-center shadow-sm transition-colors hover:border-olive-300"
                  >
                    <div className="rounded-2xl bg-sand-50 p-3 text-saffron-500 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="mt-3 font-serif text-base font-normal text-charcoal-500">{item.title}</span>
                    <span className="mt-1 font-mono text-[1.15rem] font-medium text-charcoal-800 transition-colors group-hover:text-saffron-600">
                      {item.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Visit Us"
              title="Our Studio Locations & Map Coordinates"
            />

            <div className="mx-auto max-w-5xl space-y-16">
              {LOCATIONS_CONTACT.map((loc, idx) => {
                const LocIcon = loc.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-8 rounded-[28px] border border-sand-200 bg-white p-8 md:flex-row"
                  >
                    <div className="space-y-4 md:w-1/2">
                      <div className="flex items-center gap-2 text-saffron-500">
                        <LocIcon className="h-5 w-5 shrink-0" />
                        <span className="font-sans text-sm font-medium uppercase tracking-[0.2em]">{loc.title}</span>
                      </div>
                      <h3 className="font-serif text-xl font-normal leading-snug text-charcoal-500">
                        {loc.title.split(" ")[0]} Studio
                      </h3>
                      <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                        {loc.address}
                      </p>
                      <p className="font-sans text-[1.05rem] italic leading-[1.7] text-charcoal-600">
                        Landmark: {loc.landmark}
                      </p>
                    </div>

                    <div className="relative h-64 w-full overflow-hidden rounded-[20px] border border-sand-200 md:w-1/2">
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

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              title="Submit Your Admissions Application"
              subtitle="Admissions are open year-round. Select your course, preferred location (Goa or Dharamshala), and upcoming batch starting dates to register today."
            />
            <div className="pt-4">
              <a href="/apply" className="btn-primary">
                Apply / Register Online
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
