"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import TrustBadgesBox from "@/components/TrustBadgesBox";
import Locations from "@/components/Locations";
import KarmaYogaSection from "@/components/KarmaYogaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About / Where Your Practice Finds Purpose */}
        <AboutSection />

        {/* 3. Choose the Training That's Right for You */}
        <FeaturedPrograms />

        {/* 4. Trust Badges overlapping section */}
        <TrustBadgesBox />

        {/* 5. Our Locations (Masonry Grids) */}
        <Locations />

        {/* 6. Karma Yoga / Make a Difference */}
        <KarmaYogaSection />

        {/* 7. Contact Form / Let's Map Out Your Path */}
        <ContactSection />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}
