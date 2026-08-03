import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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

      <main className="flex-grow pt-20">
        <section className="relative overflow-hidden bg-charcoal-900 py-20 text-cream-50">
          <div
            className="absolute inset-0 scale-102 bg-cover bg-center opacity-25"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200')`,
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
            <nav className="mb-2 flex items-center justify-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-cream-200/60">
              <a href="/" className="hover:text-cream-100 hover:underline">
                Home
              </a>
              <span>/</span>
              <span className="text-cream-50">Testimonials</span>
            </nav>
            <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Alumni Testimonials
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-sm font-light leading-relaxed text-cream-200/80 sm:text-base">
              Real Google reviews from students of Alpesh Yoga · 5.0 rating based on 109+ reviews
            </p>
          </div>
        </section>

        <section className="bg-sand-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="mb-2 block font-sans text-xs font-semibold uppercase tracking-widest text-saffron-500">
                Google Reviews
              </span>
              <h2 className="font-serif text-2xl font-bold text-charcoal-900 sm:text-3xl">
                Verified 5-Star Student Experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((rev) => (
                <div
                  key={rev.name + (rev.date || "")}
                  className="group relative flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-0.5 text-saffron-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      {rev.date ? (
                        <span className="font-sans text-[10px] font-light text-charcoal-400">
                          {rev.date}
                        </span>
                      ) : null}
                    </div>
                    <p className="font-sans text-xs font-light leading-relaxed text-charcoal-600 sm:text-sm">
                      &ldquo;{rev.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal-900 font-serif text-sm font-bold text-white">
                      {rev.name.charAt(0)}
                    </div>
                    <div className="text-xs">
                      <h4 className="font-serif font-bold text-charcoal-900">{rev.name}</h4>
                      <p className="font-sans text-[10px] font-light text-charcoal-400">
                        {rev.source || "Google"} Review
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto w-fit rounded-full bg-sand-100 p-3 text-saffron-500 shadow-sm">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-charcoal-900 sm:text-3xl">
              Join Our Student Community
            </h2>
            <p className="mx-auto max-w-xl font-sans text-sm font-light leading-relaxed text-charcoal-500 sm:text-base">
              Experience traditional yoga alignment, structural biomechanics, and detailed
              adjustments from our certified teachers.
            </p>
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
