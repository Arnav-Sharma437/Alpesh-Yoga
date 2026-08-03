import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locationsConfig } from "@/config/locations";
import ProgramPageTemplate, { ProgramPageData } from "@/components/program/ProgramPageTemplate";
import {
  ACCOMMODATION_AMENITIES,
  COURSE_DEPOSIT,
  COURSE_TOPICS,
  DAILY_SCHEDULE_DHARAMSHALA,
  DAILY_SCHEDULE_GOA,
  GOA_200_PRICING,
  SCHEDULE_NOTES,
} from "@/config/courseContent";

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
    title: `200-Hour Multi-Style & Alignment YTTC in ${config.displayName} | Alpesh Yoga`,
    description: `Complete your comprehensive 200-Hour multi-style & alignment Yoga Alliance teacher training at Alpesh Yoga in ${config.displayName}.`,
  };
}

const SCHEDULE_IMAGES = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
  "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
  "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800",
  "https://images.unsplash.com/photo-1588286840104-a8e5fce02db7?q=80&w=800",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
];

export default async function YTTC200Page({ params }: PageProps) {
  const { location } = await params;
  const config = locationsConfig[location];
  if (!config) {
    notFound();
  }

  const isGoa = location === "goa";
  const scheduleSource = isGoa ? DAILY_SCHEDULE_GOA : DAILY_SCHEDULE_DHARAMSHALA;

  const goaAlignmentDates = config.batches200Alignment ?? [];
  const goaMultiDates = config.batches200Multi ?? [];

  const datesPrices = isGoa
    ? [
        ...goaAlignmentDates.map((date) => ({
          dateRange: `${date} · Alignment`,
          availability: "Open" as const,
          earlyBirdPrice: GOA_200_PRICING.withFoodAccommodationEUR,
          regularPrice: GOA_200_PRICING.withoutFoodAccommodationEUR,
        })),
        ...goaMultiDates.map((date) => ({
          dateRange: `${date} · Multi-Style`,
          availability: "Open" as const,
          earlyBirdPrice: GOA_200_PRICING.withFoodAccommodationEUR,
          regularPrice: GOA_200_PRICING.withoutFoodAccommodationEUR,
        })),
      ]
    : config.batches200
        .filter((d) => !d.toLowerCase().includes("other") && !d.toLowerCase().includes("contact"))
        .map((date) => ({
          dateRange: date,
          availability: "Open" as const,
          earlyBirdPrice: "$950",
          regularPrice: "₹80,000",
        }));

  const packages = isGoa
    ? [
        {
          title: "With Food & Accommodation",
          price: GOA_200_PRICING.withFoodAccommodationEUR,
          isPopular: true,
          features: [
            ...ACCOMMODATION_AMENITIES,
            "Sattvic vegetarian meals (Mon–Sat as per kit)",
            "Full 200-Hour course tuition & manuals",
            "Alignment or Multi-Style track",
            COURSE_DEPOSIT.label,
          ],
        },
        {
          title: "Without Food & Accommodation",
          price: GOA_200_PRICING.withoutFoodAccommodationEUR,
          features: [
            "Arrange your own stay",
            "No meals included",
            "Full 200-Hour course tuition & manuals",
            "Use of shala facilities",
            COURSE_DEPOSIT.label,
          ],
        },
      ]
    : [
        {
          title: "Shared Room + Meals",
          price: "$950",
          features: [
            ...ACCOMMODATION_AMENITIES.filter((a) => !a.toLowerCase().includes("laundry")),
            "Shared room option",
            "Sattvic vegetarian meals (Mon–Sat as per kit)",
            "Full 200-Hour course tuition & manuals",
            COURSE_DEPOSIT.label,
          ],
        },
        {
          title: "Private Room + Meals",
          price: "$1,200",
          isPopular: true,
          features: [
            ...ACCOMMODATION_AMENITIES,
            "Private room",
            "Sattvic vegetarian meals (Mon–Sat as per kit)",
            "Full 200-Hour course tuition & manuals",
            COURSE_DEPOSIT.label,
          ],
        },
        {
          title: "Course Only",
          price: "$950",
          features: [
            "Arrange your own stay",
            "No meals included",
            "Full 200-Hour course tuition & manuals",
            "Use of shala facilities",
            COURSE_DEPOSIT.label,
          ],
        },
      ];

  const pageData: ProgramPageData = {
    programTitle: isGoa
      ? "200 Hour Alignment & Multi-Style YTTC"
      : "200 Hour Multi-Style & Alignment YTTC",
    programSubtitle: isGoa
      ? "Choose Alignment or Multi-Style teacher training in Arambol. €1,200 with food & accommodation, or €800 without."
      : "Deepen your practice and become a certified instructor with our intensive, alignment-focused multi-style curriculum rooted in Iyengar, Hatha, and Vinyasa.",
    heroImage:
      isGoa
        ? "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920"
        : "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1920",
    locationName: config.displayName,

    highlightsDescription:
      "This course immerses you in traditional yoga practices with a strong focus on clear demonstration, precise instruction, alignment, anatomy, and real teaching experience — preparing you for 45–90 minute classes, one-to-one, and group teaching.",
    highlights: [
      { title: "Vinyasa & Hatha Alignment", image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=800" },
      { title: "Meditation & Pranayama", image: "https://images.unsplash.com/photo-1522845015757-50bce044e5da?q=80&w=800" },
      { title: "Anatomy & Physiology", image: "https://images.unsplash.com/photo-1588286840104-a8e5fce02db7?q=80&w=800" },
      { title: "Teaching Methodology", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=800" },
    ],

    venueBannerImage:
      isGoa
        ? "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1920"
        : "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1920",
    venueStats: {
      duration: "22 Days",
      graduates: "5000+",
      language: "English",
      style: isGoa ? "Alignment / Multi-Style" : "Multi-style / Alignment",
    },
    venueAboutTitle: `Welcome to Alpesh Yoga ${config.displayName}`,
    venueAboutText: [
      `Located in the serene surroundings of ${config.displayName}, our ashram provides the perfect sanctuary for deep practice and self-reflection.`,
      "Our facilities are designed to immerse you in nature while offering modern comforts — king-size beds, private bathrooms with hot water, and free Wi-Fi.",
      "Experience nourishing sattvic vegetarian food, connect with a global community of yogis, and arrive one day before your course begins.",
    ],
    venueGallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
      "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=800",
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800",
    ],

    curriculumItems: COURSE_TOPICS.map((title) => ({ title })),
    curriculumBrochureLink: isGoa ? "/content/welcome-kit-goa.pdf" : "/content/welcome-kit-dharamshala.pdf",

    schedule: scheduleSource.map((row, idx) => ({
      time: row.time,
      activity: row.activity,
      image: SCHEDULE_IMAGES[idx % SCHEDULE_IMAGES.length],
    })),
    scheduleNote: SCHEDULE_NOTES.join(". ") + ".",

    datesPrices,

    teachers: [
      { name: "Alpesh Patwari", role: "Founder / Lead Teacher / Alignment", image: "/teachers/alpesh-patwari.jpg" },
      { name: "Acharya Swami Suresh", role: "Anatomy & Philosophy", image: "/teachers/acharya-swami-suresh.jpg" },
      { name: "Benu", role: "Spiritual Master / Meditation", image: "/teachers/benu.jpg" },
      { name: "Reejo Ji", role: "E-RYT 500 Instructor", image: "/teachers/reejo.jpg" },
      { name: "Durgesh", role: "Hatha & Therapeutic Yoga", image: "/teachers/durgesh.jpg" },
    ],

    videoThumbnail: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920",
    videoTitle: `Experience Alpesh Yoga in ${config.displayName}`,
    reviews: [
      { name: "Ayush Bisaria", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100", quote: "Alpesh sir is very knowledgeable, supportive and pays personal attention. The course is highly recommended 10/10 — my pre-hernia pain was gone by the end of the 100-hour training." },
      { name: "Ylva Traxler", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100", quote: "Alpesh is the very best yoga teacher I ever encountered. His alignment knowledge is vast, and his teaching is clear and caring." },
      { name: "Jessica Albert", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100", quote: "Grateful to have completed my YTTC with Alpesh. Alignment-focused, firm but loving — I highly recommend the school and all the teachers." },
      { name: "Hemant Sharma", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100", quote: "A transformative experience. Alpesh is knowledgeable, patient, and creates a welcoming atmosphere for practitioners of all levels." },
    ],

    accommodationGallery: [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=600",
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
    ],

    packages,
    datesPriceCol1Label: isGoa ? "With Food & Stay" : "Tuition (USD)",
    datesPriceCol2Label: isGoa ? "Without Food & Stay" : "Tuition (INR)",
    datesStrikeCol2: false,
  };

  return <ProgramPageTemplate data={pageData} />;
}
