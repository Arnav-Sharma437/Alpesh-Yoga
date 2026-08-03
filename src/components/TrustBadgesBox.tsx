"use client";

import React from "react";

export default function TrustBadgesBox() {
  return (
    <div className="relative z-20 -mt-10 px-4 sm:px-6 lg:-mt-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 rounded-[32px] border border-gray-100 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:flex-row md:p-12">
        <div className="max-w-md text-center md:text-left">
          <p className="font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
            We are a Yoga Alliance accredited school offering 100-hour and 200-hour programs. Our
            certifications are internationally recognized and allow you to teach worldwide.
          </p>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-6 sm:flex-row md:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-gray-100 bg-gray-50 p-3 shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Yoga_Alliance_logo.svg"
                alt="Yoga Alliance"
                className="h-auto w-full opacity-70 grayscale"
              />
            </div>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gray-400">
              RYS 200
            </span>
          </div>

          <a href="/apply" className="btn-primary !px-8 !py-4 !text-base">
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
}
