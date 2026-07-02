"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import SchedulePreview from "@/components/SchedulePreview";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import HimalayanSetting from "@/components/HimalayanSetting";
import Testimonials from "@/components/Testimonials";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      {/* Sticky Header Nav */}
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Philosophy / Why Alpesh Yoga */}
        <Philosophy />

        {/* 3. Daily Class Schedule Preview */}
        <SchedulePreview />

        {/* 4. Featured Programs Grid */}
        <FeaturedPrograms />

        {/* 5. Himalayan Setting / Location Highlight */}
        <HimalayanSetting />

        {/* 6. Testimonials Carousel */}
        <Testimonials />

        {/* 7. Social Proof (Instagram & YouTube Mock Feed) */}
        <SocialProof />

        {/* 8. Call To Action Banner */}
        <CallToAction />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp widget */}
      <FloatingWhatsApp />
    </>
  );
}
