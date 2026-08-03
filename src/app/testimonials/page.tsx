import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, MessageSquare } from "lucide-react";
import { testimonials } from "@/config/testimonials";

export const metadata: Metadata = {
  title: "Student Testimonials & Reviews | Alpesh Yoga India",
  description:
    "Read 5-star Google reviews and testimonials from our Hatha teacher training course (TTC) and retreat alumni in Goa and Dharamshala.",
  keywords: [
    "Alpesh Yoga reviews",
    "yoga teacher training reviews",
    "Alpesh Patwari testimonials",
    "Arambol yoga reviews",
  ],
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <PageHero
          breadcrumb="Testimonials"
          title="Alumni Testimonials"
          subtitle="Real Google reviews from students of Alpesh Yoga · 5.0 rating based on 109+ reviews"
        />

        <section className="bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Google Reviews"
              title="Verified 5-Star Student Experiences"
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((rev) => (
                <div
                  key={rev.name + (rev.date || "")}
                  className="group relative flex flex-col justify-between rounded-[28px] border border-sand-200 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-saffron-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      {rev.date ? (
                        <span className="font-sans text-sm font-normal text-charcoal-400">
                          {rev.date}
                        </span>
                      ) : null}
                    </div>
                    <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-sand-200 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal-900 font-serif text-sm font-normal text-white">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif font-normal text-charcoal-900">{rev.name}</h4>
                      <p className="font-sans text-sm font-normal text-charcoal-400">
                        {rev.source || "Google"} Review
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto w-fit rounded-full bg-sand-100 p-3 text-saffron-500 shadow-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <SectionHeading
              title="Join Our Student Community"
              subtitle="Experience traditional yoga alignment, structural biomechanics, and detailed adjustments from our certified teachers."
            />
            <div className="pt-4">
              <a href="/apply" className="btn-primary">
                Enroll in Our Courses Now
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
