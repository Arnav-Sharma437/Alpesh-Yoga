"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface DatePriceItem {
  dateRange: string;
  availability: "Open" | "Almost Full" | "Fully Booked";
  earlyBirdPrice: string;
  regularPrice: string;
}

interface DatesPricesTableProps {
  locationName: string;
  programTitle: string;
  dates: DatePriceItem[];
  priceCol1Label?: string;
  priceCol2Label?: string;
  strikeCol2?: boolean;
}

export default function DatesPricesTable({
  locationName,
  programTitle,
  dates,
  priceCol1Label = "With Stay / Early Bird",
  priceCol2Label = "Course Only / Regular",
  strikeCol2 = false,
}: DatesPricesTableProps) {
  const applyHref = (dateRange: string) =>
    `/apply?location=${encodeURIComponent(locationName)}&program=${encodeURIComponent(programTitle)}&date=${encodeURIComponent(dateRange)}`;

  return (
    <section className="bg-sand-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.2em] text-olive-700">
            Prices & Availability
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-[#212121] sm:text-4xl md:text-5xl">
            Upcoming Dates for {locationName}
          </h2>
        </div>

        <div className="overflow-x-auto rounded-[32px] border border-sand-200 bg-white p-6 shadow-sm sm:p-10">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b border-sand-200">
                <th className="w-1/4 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-[#6A6666]">
                  Dates
                </th>
                <th className="w-1/5 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-[#6A6666]">
                  Availability
                </th>
                <th className="w-1/5 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-[#6A6666]">
                  {priceCol1Label}
                </th>
                <th className="w-1/5 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-[#6A6666]">
                  {priceCol2Label}
                </th>
                <th className="w-1/5 px-6 py-4 text-right font-sans text-sm font-bold uppercase tracking-widest text-[#6A6666]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, idx) => {
                let badgeColor = "bg-olive-100 text-olive-700";
                if (item.availability === "Almost Full") badgeColor = "bg-amber-100 text-amber-800";
                if (item.availability === "Fully Booked") badgeColor = "bg-gray-100 text-gray-500";

                const href = applyHref(item.dateRange);
                const isOpen = item.availability !== "Fully Booked";

                return (
                  <tr key={idx} className="border-b border-sand-100 transition-colors hover:bg-sand-50/50">
                    <td className="px-6 py-6 font-sans text-base font-bold text-[#212121]">
                      {isOpen ? (
                        <Link
                          href={href}
                          className="text-[#212121] underline decoration-olive-400 decoration-1 underline-offset-4 transition-colors hover:text-olive-700"
                        >
                          {item.dateRange}
                        </Link>
                      ) : (
                        item.dateRange
                      )}
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${badgeColor}`}
                      >
                        {item.availability}
                      </span>
                    </td>
                    <td className="px-6 py-6 font-sans text-base font-semibold text-[#212121]">
                      {item.earlyBirdPrice}
                    </td>
                    <td
                      className={`px-6 py-6 font-sans text-base text-[#363636] ${
                        strikeCol2 ? "text-[#6A6666] line-through" : "font-medium"
                      }`}
                    >
                      {item.regularPrice}
                    </td>
                    <td className="px-6 py-6 text-right">
                      {isOpen ? (
                        <Link
                          href={href}
                          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-olive-600 bg-white px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-olive-700 transition-all duration-300 hover:bg-olive-600 hover:text-white"
                        >
                          Book Now
                          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-gray-300 px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-gray-400"
                        >
                          Closed
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
