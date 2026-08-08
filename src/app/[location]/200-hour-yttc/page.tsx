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
  "/gallery/IMG-20181217-WA0044.jpg",
  "/gallery/alpesh-yoga-retreat-goa-india-1.jpg",
  "/gallery/image-27.jpg",
  "/gallery/IMG-20181216-WA0030.jpg",
  "/gallery/IMG_20181218_221806.jpg",
  "/gallery/IMG_20181218_111130.jpg",
  "/gallery/alpesh-yoga-teacher-training-goa-india-1.jpg",
  "/gallery/alpesh-yoga-teacher-training-india-1.jpg",
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
        ? "/gallery/alpesh-yoga-retreat-goa-india-1.jpg"
        : "/gallery/IMG-20181216-WA0034.jpg",
    locationName: config.displayName,

    highlightsDescription:
      "This course immerses you in traditional yoga practices with a strong focus on clear demonstration, precise instruction, alignment, anatomy, and real teaching experience — preparing you for 45–90 minute classes, one-to-one, and group teaching.",
    highlights: [
      { title: "Vinyasa & Hatha Alignment", image: "/gallery/alpesh-yoga-india-1.jpg" },
      { title: "Meditation & Pranayama", image: "/gallery/alpesh-yoga-teacher-training-rishikesh-india-1.jpg" },
      { title: "Anatomy & Physiology", image: "/gallery/IMG_20181218_221806.jpg" },
      { title: "Teaching Methodology", image: "/gallery/IMG-20181216-WA0033.jpg" },
    ],

    venueBannerImage:
      isGoa
        ? "/gallery/IMG_20181218_221806.jpg"
        : "/gallery/alpesh-yoga-classes-dharamshala-india-1.jpg",
    venueStats: {
      duration: "24 Days",
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
      "/gallery/alpesh-yoga-retreat-dharamshala-india-1.jpg",
      "/gallery/IMG-20181217-WA0043.jpg",
      "/gallery/IMG-20181217-WA0042.jpg",
      "/gallery/image-27.jpg",
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

    videoThumbnail: "/gallery/image-21.jpg",
    videoTitle: `Experience Alpesh Yoga in ${config.displayName}`,
    reviews: [
      { name: "Ayush Bisaria", image: "/gallery/alpesh-yoga-school-india-dharamshala-1.jpg", quote: "Alpesh sir is very knowledgeable, supportive and pays personal attention. The course is highly recommended 10/10 — my pre-hernia pain was gone by the end of the 100-hour training." },
      { name: "Ylva Traxler", image: "/gallery/IMG_20181219_123719.jpg", quote: "Alpesh is the very best yoga teacher I ever encountered. His alignment knowledge is vast, and his teaching is clear and caring." },
      { name: "Jessica Albert", image: "/gallery/IMG-20181217-WA0037.jpg", quote: "Grateful to have completed my YTTC with Alpesh. Alignment-focused, firm but loving — I highly recommend the school and all the teachers." },
      { name: "Hemant Sharma", image: "/gallery/IMG-20181216-WA0031.jpg", quote: "A transformative experience. Alpesh is knowledgeable, patient, and creates a welcoming atmosphere for practitioners of all levels." },
    ],

    accommodationGallery: [
      "/gallery/IMG-20181216-WA0039.jpg",
      "/gallery/IMG-20181217-WA0044.jpg",
      "/gallery/IMG-20181216-WA0030.jpg",
      "/gallery/image-19.jpg",
    ],

    packages,
    datesPriceCol1Label: isGoa ? "With Food & Stay" : "Tuition (USD)",
    datesPriceCol2Label: isGoa ? "Without Food & Stay" : "Tuition (INR)",
    datesStrikeCol2: false,
  };

  return <ProgramPageTemplate data={pageData} />;
}
