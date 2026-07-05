"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import AboutSection from "@/components/AboutSection";
import TeacherProfile from "@/components/TeacherProfile";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import IntensiveSection from "@/components/IntensiveSection";
import RetreatsSection from "@/components/RetreatsSection";
import PromoGallerySection from "@/components/PromoGallerySection";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import TeachersTeamSection from "@/components/TeachersTeamSection";
import FAQSection from "@/components/FAQSection";
import YogaAllianceSection from "@/components/YogaAllianceSection";
import SocialProof from "@/components/SocialProof";
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

        {/* 2. Why Choose / Intro Section */}
        <WhyChoose />

        {/* 3. About Alpesh Yoga */}
        <AboutSection />

        {/* 4. Teacher Profile (Alpesh) */}
        <TeacherProfile />

        {/* 5. Our Yoga Teacher Training Courses */}
        <FeaturedPrograms />

        {/* 6. Eight-Days Intensive Program */}
        <IntensiveSection />

        {/* 7. Yoga Retreats & Sound Healing */}
        <RetreatsSection />

        {/* 8. Gallery Collage & Promo Banner */}
        <PromoGallerySection />

        {/* 9. Our Locations */}
        <Locations />

        {/* 10. Testimonials (What our students say) */}
        <Testimonials />

        {/* 11. Meet Our Yoga Teachers */}
        <TeachersTeamSection />

        {/* 12. Frequently Asked Questions (FAQ) */}
        <FAQSection />

        {/* 13. Yoga Alliance & World Yoga Federation Certification */}
        <YogaAllianceSection />

        {/* 14. Video Reviews Section */}
        <SocialProof />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp widget */}
      <FloatingWhatsApp />
    </>
  );
}
