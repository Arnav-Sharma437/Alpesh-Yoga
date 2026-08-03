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
}

export default function DatesPricesTable({ locationName, programTitle, dates }: DatesPricesTableProps) {
  return (
    <section className="py-24 bg-sand-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-rust-500 font-bold mb-3">
            Prices & Availability
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-bold tracking-tight">
            Upcoming Dates for {locationName}
          </h2>
        </div>

        <div className="bg-white rounded-[32px] p-6 sm:p-10 shadow-sm border border-gray-100 overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 font-sans text-xs font-bold text-charcoal-500 uppercase tracking-widest w-1/4">Dates</th>
                <th className="py-4 px-6 font-sans text-xs font-bold text-charcoal-500 uppercase tracking-widest w-1/5">Availability</th>
                <th className="py-4 px-6 font-sans text-xs font-bold text-charcoal-500 uppercase tracking-widest w-1/5">Early Bird</th>
                <th className="py-4 px-6 font-sans text-xs font-bold text-charcoal-500 uppercase tracking-widest w-1/5">Regular Price</th>
                <th className="py-4 px-6 font-sans text-xs font-bold text-charcoal-500 uppercase tracking-widest w-1/5 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {dates.map((item, idx) => {
                let badgeColor = "bg-olive-100 text-olive-700";
                if (item.availability === "Almost Full") badgeColor = "bg-amber-100 text-amber-700";
                if (item.availability === "Fully Booked") badgeColor = "bg-gray-100 text-gray-500";

                return (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-sand-50/50 transition-colors">
                    <td className="py-6 px-6 font-sans text-sm font-bold text-charcoal-900">
                      {item.dateRange}
                    </td>
                    <td className="py-6 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeColor}`}>
                        {item.availability}
                      </span>
                    </td>
                    <td className="py-6 px-6 font-sans text-sm text-charcoal-900 font-medium">
                      {item.earlyBirdPrice}
                    </td>
                    <td className="py-6 px-6 font-sans text-sm text-charcoal-500 line-through">
                      {item.regularPrice}
                    </td>
                    <td className="py-6 px-6 text-right">
                      {item.availability !== "Fully Booked" ? (
                        <Link
                          href={`/apply?location=${encodeURIComponent(locationName)}&program=${encodeURIComponent(programTitle)}&date=${encodeURIComponent(item.dateRange)}`}
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-olive-500 text-olive-600 hover:bg-olive-500 hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300"
                        >
                          Book Now
                        </Link>
                      ) : (
                        <button disabled className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gray-300 text-gray-400 font-sans text-xs font-bold uppercase tracking-wider cursor-not-allowed">
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
