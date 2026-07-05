import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#F7941D",
};

export const metadata: Metadata = {
  title: "Alpesh Yoga | Hatha Alignment Studio Dharamshala & Goa, India",
  description: "Experience precision Hatha alignment-based yoga at Alpesh Yoga in Arambol (Goa) and Dharamkot (Dharamshala), India. Offering daily classes, 8-Day Intensive Courses, 100-Hour and 200-Hour Yoga Teacher Training Courses (YTTC).",
  keywords: ["Hatha alignment Dharamshala", "yoga classes Arambol", "yoga teacher training Goa", "alignment yoga India", "Alpesh Yoga Goa"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream-50 text-forest-600 font-sans">{children}</body>
    </html>
  );
}
