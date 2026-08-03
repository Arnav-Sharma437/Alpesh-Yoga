import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";

const bagnard = localFont({
  src: [
    {
      path: "../fonts/Bagnard.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Bagnard.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#91A271",
};

export const metadata: Metadata = {
  title: "Alpesh Yoga | Hatha Alignment Studio Dharamshala & Goa, India",
  description:
    "Experience precision Hatha alignment-based yoga at Alpesh Yoga in Arambol (Goa) and Dharamkot (Dharamshala), India. Offering daily classes, 8-Day Intensive Courses, 100-Hour and 200-Hour Yoga Teacher Training Courses (YTTC).",
  keywords: [
    "Hatha alignment Dharamshala",
    "yoga classes Arambol",
    "yoga teacher training Goa",
    "alignment yoga India",
    "Alpesh Yoga Goa",
  ],
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bagnard.variable} h-full antialiased scroll-smooth`}
    >
      <body className="relative flex min-h-full flex-col bg-sand-50 font-sans text-charcoal-800">
        <main className="relative z-10 flex flex-grow animate-page-enter flex-col">
          {children}
          <div className="pointer-events-none h-16 shrink-0 bg-transparent md:hidden" />
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}
