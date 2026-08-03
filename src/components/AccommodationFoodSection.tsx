"use client";

import React from "react";
import {
  ACCOMMODATION_AMENITIES,
  BREAKFAST_MENU,
  DRINKS_MENU,
  FOOD_POLICY,
  LUNCH_DINNER_MENU,
  MEAL_INCLUSION,
} from "@/config/courseContent";

export default function AccommodationFoodSection() {
  return (
    <section id="accommodation-food" className="relative z-10 bg-white py-20 border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Stay With Us
          </p>
          <h2 className="mb-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-charcoal-500 sm:text-4xl md:text-[52px]">
            Accommodation &amp; Food
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
            {FOOD_POLICY}
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ACCOMMODATION_AMENITIES.map((item) => (
            <div
              key={item}
              className="rounded-[28px] border border-sand-200 bg-sand-50 px-5 py-4 text-center font-sans text-[1.15rem] font-normal text-charcoal-800"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mb-12 rounded-[28px] border border-olive-100 bg-olive-50/40 p-6 text-center sm:p-8">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Meal Inclusion
          </p>
          <ul className="mx-auto max-w-xl space-y-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
            <li>{MEAL_INCLUSION.weekdays}</li>
            <li>{MEAL_INCLUSION.saturday}</li>
            <li>{MEAL_INCLUSION.sunday}</li>
          </ul>
          <p className="mt-4 font-sans text-[1.15rem] font-normal text-charcoal-800">
            {MEAL_INCLUSION.note}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-500">Breakfast</h3>
            <ul className="space-y-2">
              {BREAKFAST_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  <span className="text-olive-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-500">Lunch &amp; Dinner</h3>
            <ul className="space-y-2">
              {LUNCH_DINNER_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  <span className="text-olive-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[28px] border border-gray-100 bg-sand-50 p-6">
            <h3 className="mb-4 font-serif text-xl font-normal text-charcoal-500">Drinks</h3>
            <ul className="space-y-2">
              {DRINKS_MENU.map((item) => (
                <li key={item} className="flex gap-2 font-sans text-[1.15rem] font-normal leading-[1.7] text-charcoal-800">
                  <span className="text-olive-500">✔</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
