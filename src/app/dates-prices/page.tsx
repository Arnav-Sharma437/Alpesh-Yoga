import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Compass, Waves, ArrowRight } from "lucide-react";
import { locationsConfig } from "@/config/locations";

export const metadata: Metadata = {
  title: "Course Dates & Pricing Overview | Alpesh Yoga India",
  description:
    "View upcoming yoga teacher training batch dates and tuition fees side-by-side for our Dharamshala and Goa centers.",
  keywords: [
    "yoga ttc cost India",
    "cheap yoga teacher training dates",
    "Alpesh Yoga fees",
    "Arambol yoga school schedules",
  ],
};

function DateRow({
  label,
  date,
  href,
}: {
  label: string;
  date: string;
  href: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-sand-200 py-2.5 last:border-0">
      <span className="font-sans text-[1.05rem] font-medium text-[#363636]">{label}</span>
      <Link
        href={href}
        className="group inline-flex items-center gap-1.5 text-right font-sans text-[1.05rem] font-semibold text-[#212121] underline decoration-olive-400 decoration-1 underline-offset-4 transition-colors hover:text-olive-700"
      >
        {date}
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-olive-600 opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
    </div>
  );
}

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
      goaPrice: "From €280",
      duration: "8 Days",
    },
    {
      name: "100-Hour TTC",
      dharamsalaPrice: "₹45,000 / $550 USD",
      goaPrice: "₹45,000 / $550 USD",
      duration: "11 Days",
    },
    {
      name: "200-Hour YTTC (Goa: Alignment & Multi-Style)",
      dharamsalaPrice: "₹80,000 / $950 USD",
      goaPrice: "€1,200 with stay · €800 without",
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

      <main className="flex-grow">
        <PageHero
          breadcrumb="Dates & Price"
          title="Dates & Pricing"
          subtitle="Compare alignment course tuitions and upcoming intake start dates side-by-side for both active shalas."
        />

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Tuition Overview" title="Course Cost Comparison" />

            <div className="mx-auto hidden max-w-4xl overflow-hidden rounded-[28px] border border-sand-200 bg-white md:block">
              <table className="w-full border-collapse text-left font-sans text-[1.05rem]">
                <thead>
                  <tr className="bg-[#212121]">
                    <th className="p-6 font-sans text-sm font-bold uppercase tracking-wider text-white">
                      Program
                    </th>
                    <th className="p-6 font-sans text-sm font-bold uppercase tracking-wider text-white">
                      Duration
                    </th>
                    <th className="p-6 font-sans text-sm font-bold uppercase tracking-wider text-white">
                      Dharamshala Rate
                    </th>
                    <th className="p-6 font-sans text-sm font-bold uppercase tracking-wider text-white">
                      Goa Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200">
                  {coursesPricing.map((item, idx) => (
                    <tr key={idx} className="transition-colors hover:bg-sand-50">
                      <td className="p-6 font-serif text-[1.1rem] font-normal text-[#212121]">
                        {item.name}
                      </td>
                      <td className="p-6 font-medium text-[#212121]">{item.duration}</td>
                      <td className="p-6 font-mono font-medium text-olive-700">
                        {item.dharamsalaPrice}
                      </td>
                      <td className="p-6 font-mono font-medium text-[#212121]">{item.goaPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-auto max-w-md space-y-6 md:hidden">
              {coursesPricing.map((item, idx) => (
                <div
                  key={idx}
                  className="space-y-4 rounded-[28px] border border-sand-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between border-b border-sand-200 pb-3">
                    <h3 className="font-serif text-lg font-normal text-[#212121]">{item.name}</h3>
                    <span className="rounded-full bg-sand-100 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#363636]">
                      {item.duration}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 font-sans text-[1.05rem]">
                    <div>
                      <span className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-[#6A6666]">
                        Dharamshala
                      </span>
                      <span className="font-mono font-medium text-olive-700">
                        {item.dharamsalaPrice}
                      </span>
                    </div>
                    <div>
                      <span className="mb-0.5 block text-xs font-semibold uppercase tracking-wider text-[#6A6666]">
                        Goa
                      </span>
                      <span className="font-mono font-medium text-[#212121]">{item.goaPrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-sand-200 bg-sand-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Intake Schedules" title="Upcoming Batches Side by Side" />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
              {/* Dharamshala */}
              <div className="flex flex-col justify-between rounded-[28px] border border-sand-200 bg-white p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-olive-700">
                    <Compass className="h-5 w-5 shrink-0" strokeWidth={2} />
                    <h3 className="font-serif text-xl font-normal text-[#212121]">
                      Dharamshala 2026 Dates
                    </h3>
                  </div>
                  <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-[#363636]">
                    Confirmed summer season batches in Bhagsu Nag. Tap any date to book.
                  </p>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      200-Hour YTTC · 24 Days
                    </h4>
                    <div>
                      {dharamshala.batches200
                        .filter((d) => !d.toLowerCase().includes("other"))
                        .map((date, idx) => (
                          <DateRow
                            key={date}
                            label={`Batch ${idx + 1}`}
                            date={date}
                            href={`/apply?location=dharamshala&program=${encodeURIComponent("200-Hour YTTC")}&date=${encodeURIComponent(date)}`}
                          />
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      100-Hour TTC
                    </h4>
                    <div className="max-h-48 overflow-y-auto">
                      {dharamshala.batches100
                        .filter((d) => !d.toLowerCase().includes("other"))
                        .map((date, idx) => (
                          <DateRow
                            key={date}
                            label={`Batch ${idx + 1}`}
                            date={date}
                            href={`/apply?location=dharamshala&program=${encodeURIComponent("100-Hour TTC")}&date=${encodeURIComponent(date)}`}
                          />
                        ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      8-Day Intensive
                    </h4>
                    <div>
                      {dharamshala.intensiveDates
                        .filter((d) => !d.toLowerCase().includes("other"))
                        .map((date, idx) => (
                          <DateRow
                            key={date}
                            label={`Batch ${idx + 1}`}
                            date={date}
                            href={`/apply?location=dharamshala&program=${encodeURIComponent("8-Day Intensive")}&date=${encodeURIComponent(date)}`}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/apply?location=dharamshala"
                    className="btn-primary flex w-full items-center justify-center gap-2"
                  >
                    Book Now — Dharamshala
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Goa */}
              <div className="flex flex-col justify-between rounded-[28px] border border-sand-200 bg-white p-8 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-olive-700">
                    <Waves className="h-5 w-5 shrink-0" strokeWidth={2} />
                    <h3 className="font-serif text-xl font-normal text-[#212121]">Goa Winter Dates</h3>
                  </div>
                  <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-[#363636]">
                    Confirmed winter season batches in Arambol Beach. Tap any date to book.
                  </p>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      200-Hour Alignment YTTC · 24 Days
                    </h4>
                    <div>
                      {(goa.batches200Alignment ?? []).map((date, idx) => (
                        <DateRow
                          key={date}
                          label={`Batch ${idx + 1}`}
                          date={date}
                          href={`/apply?location=goa&program=${encodeURIComponent("200-Hour Alignment YTTC")}&date=${encodeURIComponent(date)}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      200-Hour Multi-Style YTTC · 24 Days
                    </h4>
                    <div>
                      {(goa.batches200Multi ?? []).map((date, idx) => (
                        <DateRow
                          key={date}
                          label={`Batch ${idx + 1}`}
                          date={date}
                          href={`/apply?location=goa&program=${encodeURIComponent("200-Hour Multi-Style YTTC")}&date=${encodeURIComponent(date)}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      100-Hour Alignment TTC
                    </h4>
                    <div>
                      {(goa.batches100Alignment ?? []).map((date, idx) => (
                        <DateRow
                          key={date}
                          label={`Batch ${idx + 1}`}
                          date={date}
                          href={`/apply?location=goa&program=${encodeURIComponent("100-Hour Alignment TTC")}&date=${encodeURIComponent(date)}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      100-Hour Multi-Style TTC
                    </h4>
                    <div>
                      {(goa.batches100Multi ?? []).map((date, idx) => (
                        <DateRow
                          key={date}
                          label={`Batch ${idx + 1}`}
                          date={date}
                          href={`/apply?location=goa&program=${encodeURIComponent("100-Hour Multi-Style TTC")}&date=${encodeURIComponent(date)}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 font-sans text-sm font-bold uppercase tracking-[0.18em] text-olive-700">
                      8-Day Intensive · from €280
                    </h4>
                    <div>
                      {goa.intensiveDates
                        .filter(
                          (d) =>
                            !d.toLowerCase().includes("other") &&
                            !d.toLowerCase().includes("contact")
                        )
                        .map((date, idx) => (
                          <DateRow
                            key={date}
                            label={`Batch ${idx + 1}`}
                            date={date}
                            href={`/apply?location=goa&program=${encodeURIComponent("8-Day Intensive")}&date=${encodeURIComponent(date)}`}
                          />
                        ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/apply?location=goa"
                    className="btn-primary flex w-full items-center justify-center gap-2"
                  >
                    Book Now — Goa
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
            <SectionHeading
              title="Need Custom Dates or Stays?"
              subtitle="We offer personalized durations, private stays, and modular passes for students seeking customizable training slots. Drop a note on WhatsApp."
            />
            <div className="pt-4">
              <a
                href={`https://wa.me/917719878500?text=${encodeURIComponent("Hi Alpesh, I am inquiring about custom dates & pricing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Inquire Custom Passes
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
