import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationsConfig } from "@/config/locations";
import ProgramPageTemplate, { ProgramPageData } from "@/components/program/ProgramPageTemplate";

interface PageProps {
  params: Promise<{ location: string }>;
}

export async function generateStaticParams() {
  return [
    { location: "dharamshala" },
    { location: "goa" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) return {};

  return {
    title: `200-Hour Hatha Alignment Yoga YTTC in ${config.displayName} | Alpesh Yoga`,
    description: `Complete your comprehensive 200-Hour Hatha Yoga Alliance teacher training at Alpesh Yoga in ${config.displayName}.`,
  };
}

export default async function YTTC200Page({ params }: PageProps) {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) {
    notFound();
  }

  // Populate data using config and placeholder data to match the layout
  const pageData: ProgramPageData = {
    programTitle: "200 Hour Yoga Teacher Training",
    programSubtitle: "Deepen your practice and become a certified instructor with our intensive, alignment-focused Hatha and Vinyasa curriculum.",
    heroImage: location === "goa" 
      ? "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920" // Beach vibe
      : "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1920", // Mountain vibe
    locationName: config.displayName,
    
    highlightsDescription: "This course is thoughtfully designed to immerse you in traditional yoga practices. Whether you want to become a teacher or simply deepen your personal journey, this 200-hour training covers all foundational aspects of yoga.",
    highlights: [
      { title: "Vinyasa & Hatha Alignment", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800" },
      { title: "Meditation & Pranayama", image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800" },
      { title: "Anatomy & Physiology", image: "https://images.unsplash.com/photo-1588286840104-a8e5fce02db7?q=80&w=800" },
      { title: "Teaching Methodology", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800" },
    ],

    venueBannerImage: location === "goa"
      ? "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1920"
      : "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1920",
    venueStats: {
      duration: "24 Days",
      graduates: "5000+",
      language: "English",
      style: "Hatha/Vinyasa",
    },
    venueAboutTitle: `Welcome to Alpesh Yoga ${config.displayName}`,
    venueAboutText: [
      `Located in the serene surroundings of ${config.displayName}, our ashram provides the perfect sanctuary for deep practice and self-reflection.`,
      "Our facilities are designed to immerse you in nature while offering modern comforts, ensuring that your sole focus can remain on your spiritual and physical journey.",
      "Experience the vibrant local culture, eat nourishing sattvic food, and connect with a global community of like-minded yogis."
    ],
    venueGallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
      "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=800",
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800",
    ],

    curriculumItems: [
      { title: "Advanced Asana Alignment & Modification" },
      { title: "Hands-on Adjustments & Prop Mastery" },
      { title: "Anatomy & Physiology of Yoga" },
      { title: "Sequencing & Teaching Practicum" },
      { title: "Meditation & Pranayama Techniques" },
      { title: "Yoga Philosophy, Sanskrit & Ethics" },
    ],
    curriculumBrochureLink: "#",

    schedule: [
      { time: "06:30 AM", activity: "Pranayama & Meditation", image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800" },
      { time: "08:00 AM", activity: "Morning Asana Practice", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
      { time: "10:00 AM", activity: "Nutritious Breakfast", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800" },
      { time: "11:30 AM", activity: "Anatomy / Philosophy", image: "https://images.unsplash.com/photo-1588286840104-a8e5fce02db7?q=80&w=800" },
      { time: "01:00 PM", activity: "Lunch & Rest", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800" },
      { time: "03:00 PM", activity: "Teaching Methodology", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800" },
      { time: "04:30 PM", activity: "Evening Asana / Alignment", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800" },
      { time: "07:00 PM", activity: "Dinner & Self-Study", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800" },
    ],
    scheduleNote: "Schedule is subject to minor changes based on the season and teacher availability. Sundays are usually days off for rest and excursions.",

    datesPrices: config.batches.map(date => ({
      dateRange: date,
      availability: "Open", // Dynamic logic could go here
      earlyBirdPrice: "€1,200",
      regularPrice: "€1,400",
    })),

    teachers: [
      { name: "Alpesh Patidar", role: "Lead Teacher / Alignment", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=400" },
      { name: "Priya Sharma", role: "Anatomy & Philosophy", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400" },
      { name: "Rahul Singh", role: "Meditation & Pranayama", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400" },
    ],

    videoThumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920",
    videoTitle: `Experience Alpesh Yoga in ${config.displayName}`,
    reviews: [
      { name: "Sarah Jenkins", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100", quote: "The alignment focus completely changed my practice. Alpesh is a phenomenal teacher." },
      { name: "Mark Thorne", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", quote: "A life-changing experience in India. The ashram felt like home from day one." },
      { name: "Elena Rossi", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", quote: "I feel completely prepared to teach. The daily schedule was intense but deeply rewarding." },
      { name: "David Chen", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", quote: "The anatomy classes were brilliant and the food was amazing. Highly recommend!" },
    ],

    accommodationGallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    ],
    
    packages: [
      {
        title: "Standard Shared",
        price: "€1,200",
        features: ["Shared Room (2 persons)", "Attached Bathroom", "3 Vegan/Vegetarian Meals Daily", "Full Course Tuition & Manuals"],
      },
      {
        title: "Private Room",
        price: "€1,500",
        isPopular: true,
        features: ["Private Single Room", "Attached Bathroom", "3 Vegan/Vegetarian Meals Daily", "Full Course Tuition & Manuals"],
      },
      {
        title: "Course Only",
        price: "€950",
        features: ["Arrange Your Own Stay", "No Meals Included", "Full Course Tuition & Manuals", "Use of Shala Facilities"],
      }
    ],
  };

  return <ProgramPageTemplate data={pageData} />;
}
