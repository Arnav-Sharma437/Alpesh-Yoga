"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import TrustBadgesBox from "@/components/TrustBadgesBox";
import Locations from "@/components/Locations";
import TeachersTeamSection from "@/components/TeachersTeamSection";
import Testimonials from "@/components/Testimonials";
import AccommodationFoodSection from "@/components/AccommodationFoodSection";
import KarmaYogaSection from "@/components/KarmaYogaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <FeaturedPrograms />
        <TrustBadgesBox />
        <Locations />
        <TeachersTeamSection limit={5} />
        <Testimonials limit={6} />
        <AccommodationFoodSection />
        <KarmaYogaSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
