"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import ProgramHero from "./ProgramHero";
import CourseHighlights, { HighlightItem } from "./CourseHighlights";
import VenueSection from "./VenueSection";
import CurriculumSection, { CurriculumItem } from "./CurriculumSection";
import DailySchedule, { ScheduleItem } from "./DailySchedule";
import DatesPricesTable, { DatePriceItem } from "./DatesPricesTable";
import TeachersSection, { TeacherProfile } from "./TeachersSection";
import TestimonialsVideo, { Testimonial } from "./TestimonialsVideo";
import AccommodationSection, { PackageOption } from "./AccommodationSection";
import ContactSection from "@/components/ContactSection";

export interface ProgramPageData {
  programTitle: string;
  programSubtitle: string;
  heroImage: string;
  locationName: string;
  
  highlightsDescription: string;
  highlights: HighlightItem[];
  
  venueBannerImage: string;
  venueStats: {
    duration: string;
    graduates: string;
    language: string;
    style: string;
  };
  venueAboutTitle: string;
  venueAboutText: string[];
  venueGallery: string[];
  
  curriculumItems: CurriculumItem[];
  curriculumBrochureLink?: string;
  
  schedule: ScheduleItem[];
  scheduleNote?: string;
  
  datesPrices: DatePriceItem[];
  
  teachers: TeacherProfile[];
  
  videoThumbnail: string;
  videoTitle: string;
  reviews: Testimonial[];
  
  accommodationGallery: string[];
  packages: PackageOption[];
}

interface ProgramPageTemplateProps {
  data: ProgramPageData;
}

export default function ProgramPageTemplate({ data }: ProgramPageTemplateProps) {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <ProgramHero 
          title={data.programTitle} 
          subtitle={data.programSubtitle} 
          image={data.heroImage} 
          location={data.locationName}
        />
        
        <CourseHighlights 
          description={data.highlightsDescription}
          highlights={data.highlights}
        />
        
        <VenueSection 
          locationName={data.locationName}
          bannerImage={data.venueBannerImage}
          stats={data.venueStats}
          aboutTitle={data.venueAboutTitle}
          aboutText={data.venueAboutText}
          galleryImages={data.venueGallery}
        />
        
        <CurriculumSection 
          items={data.curriculumItems}
          brochureLink={data.curriculumBrochureLink}
        />
        
        <DailySchedule 
          schedule={data.schedule}
          note={data.scheduleNote}
        />
        
        <DatesPricesTable 
          locationName={data.locationName}
          programTitle={data.programTitle}
          dates={data.datesPrices}
        />
        
        <TeachersSection 
          teachers={data.teachers}
        />
        
        <TestimonialsVideo 
          videoThumbnail={data.videoThumbnail}
          videoTitle={data.videoTitle}
          reviews={data.reviews}
        />
        
        <AccommodationSection 
          locationName={data.locationName}
          galleryImages={data.accommodationGallery}
          packages={data.packages}
        />
        
        {/* We reuse the global contact section at the bottom to mirror the reference design */}
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
