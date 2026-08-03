import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import BottomNavigation from "@/components/BottomNavigation";
import StickyChakras from "@/components/StickyChakras";

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

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#F5821F",
};

export const metadata: Metadata = {
  title: "Alpesh Yoga | Hatha Alignment Studio Dharamshala & Goa, India",
  description: "Experience precision Hatha alignment-based yoga at Alpesh Yoga in Arambol (Goa) and Dharamkot (Dharamshala), India. Offering daily classes, 8-Day Intensive Courses, 100-Hour and 200-Hour Yoga Teacher Training Courses (YTTC).",
  keywords: ["Hatha alignment Dharamshala", "yoga classes Arambol", "yoga teacher training Goa", "alignment yoga India", "Alpesh Yoga Goa"],
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
      className={`${montserrat.variable} ${bagnard.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-charcoal-900 font-sans bg-mandala-pattern relative">
        <StickyChakras />
        <main className="flex-grow animate-page-enter flex flex-col relative z-10">
          {children}
          {/* Mobile bottom nav spacing offset */}
          <div className="h-16 md:hidden bg-transparent shrink-0 pointer-events-none" />
        </main>
        <BottomNavigation />
      </body>
    </html>
  );
}
