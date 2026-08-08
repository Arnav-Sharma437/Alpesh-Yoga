"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight, Award } from "lucide-react";
import { useApplyHref } from "@/hooks/useApplyHref";

export interface CurriculumItem {
  title: string;
}

interface CurriculumSectionProps {
  items: CurriculumItem[];
  brochureLink?: string;
}

export default function CurriculumSection({ items }: CurriculumSectionProps) {
  const applyHref = useApplyHref();

  return (
    <section className="bg-sand-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.2em] text-olive-700">
            Syllabus
          </p>
          <h2 className="font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#212121] sm:text-4xl md:text-[52px]">
            What you will learn
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <ul className="space-y-4">
              {items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 rounded-full bg-olive-50 p-1">
                    <Check className="h-4 w-4 text-olive-600" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-[1.15rem] font-normal leading-[1.7] text-[#212121]">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mt-8 md:col-span-5 md:mt-0">
            <div className="relative overflow-hidden rounded-[32px] bg-[#212121] p-8 text-white shadow-xl sm:p-10">
              <div className="relative z-10 text-center">
                <p className="mb-6 font-sans text-[1.15rem] font-normal leading-[1.7] text-white">
                  Want to see the complete curriculum, reading list, and daily breakdown?
                </p>
                <Link href={applyHref} className="btn-primary w-full gap-3">
                  <span>Request Full Syllabus</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center text-center">
              <p className="mb-4 font-sans text-sm font-bold uppercase tracking-[0.2em] text-olive-700">
                Certified By
              </p>
              <div className="flex items-center gap-3 rounded-2xl border border-sand-200 bg-white px-5 py-4 shadow-sm">
                <Award className="h-8 w-8 shrink-0 text-olive-600" strokeWidth={1.75} />
                <div className="text-left">
                  <p className="font-sans text-base font-semibold text-[#212121]">Yoga Alliance</p>
                  <p className="font-sans text-sm text-[#6A6666]">RYS 200 · USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
