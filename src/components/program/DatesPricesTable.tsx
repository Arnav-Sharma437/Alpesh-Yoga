"use client";

import React from "react";
import Link from "next/link";

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
  return (
    <section className="bg-sand-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm font-bold uppercase tracking-widest text-rust-500">
            Prices & Availability
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl md:text-5xl">
            Upcoming Dates for {locationName}
          </h2>
        </div>

        <div className="overflow-x-auto rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          <table className="w-full min-w-[800px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="w-1/4 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-charcoal-500">
                  Dates
                </th>
                <th className="w-1/5 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-charcoal-500">
                  Availability
                </th>
                <th className="w-1/5 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-charcoal-500">
                  {priceCol1Label}
                </th>
                <th className="w-1/5 px-6 py-4 font-sans text-sm font-bold uppercase tracking-widest text-charcoal-500">
                  {priceCol2Label}
                </th>
                <th className="w-1/5 px-6 py-4 text-right font-sans text-sm font-bold uppercase tracking-widest text-charcoal-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, idx) => {
                let badgeColor = "bg-olive-100 text-olive-700";
                if (item.availability === "Almost Full") badgeColor = "bg-amber-100 text-amber-700";
                if (item.availability === "Fully Booked") badgeColor = "bg-gray-100 text-gray-500";

                return (
                  <tr key={idx} className="border-b border-gray-100 transition-colors hover:bg-sand-50/50">
                    <td className="px-6 py-6 font-sans text-base font-bold text-charcoal-900">
                      {item.dateRange}
                    </td>
                    <td className="px-6 py-6">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${badgeColor}`}
                      >
                        {item.availability}
                      </span>
                    </td>
                    <td className="px-6 py-6 font-sans text-base font-semibold text-charcoal-900">
                      {item.earlyBirdPrice}
                    </td>
                    <td
                      className={`px-6 py-6 font-sans text-base text-charcoal-700 ${
                        strikeCol2 ? "text-charcoal-400 line-through" : "font-medium"
                      }`}
                    >
                      {item.regularPrice}
                    </td>
                    <td className="px-6 py-6 text-right">
                      {item.availability !== "Fully Booked" ? (
                        <Link
                          href={`/apply?location=${encodeURIComponent(locationName)}&program=${encodeURIComponent(programTitle)}&date=${encodeURIComponent(item.dateRange)}`}
                          className="inline-flex items-center justify-center rounded-full border border-olive-500 px-6 py-2.5 font-sans text-sm font-bold uppercase tracking-wider text-olive-600 transition-all duration-300 hover:bg-olive-500 hover:text-white"
                        >
                          Book Now
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
