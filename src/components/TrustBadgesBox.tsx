"use client";

import React from "react";
import { Award } from "lucide-react";

export default function TrustBadgesBox() {
  return (
    <div className="relative z-20 -mt-14 px-4 sm:-mt-16 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_60px_rgba(0,0,0,0.1)] md:flex-row md:p-12">
        <div className="max-w-md text-center md:text-left">
          <p className="font-sans text-[1.2rem] font-normal leading-[1.7] text-[#212121]">
            We are a Yoga Alliance accredited school offering 100-hour and 200-hour programs. Our
            certifications are internationally recognized and allow you to teach worldwide.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-6 sm:flex-row md:gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-sand-200 bg-sand-50">
              <Award className="h-10 w-10 text-olive-600" strokeWidth={1.75} />
            </div>
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#4A4540]">
              Yoga Alliance · RYS 200
            </span>
          </div>

          <a href="/apply" className="btn-primary !px-8 !py-4 !text-base">
            Book Your Space
          </a>
        </div>
      </div>
    </div>
  );
}
