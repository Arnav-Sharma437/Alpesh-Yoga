import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ProgramsExplorer from "@/components/ProgramsExplorer";

export const metadata: Metadata = {
  title: "Yoga Teacher Training Programs | Alpesh Yoga",
  description:
    "Browse 100-Hour, 200-Hour YTTC, 8-Day Intensive courses and retreats in Goa and Dharamshala. Filter by program type and find your dates.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex-grow pt-28 sm:pt-32">
        <section className="relative pb-8 pt-10">
          <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-saffron-500">
              Programs
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-charcoal-900 sm:text-5xl md:text-[56px]">
              Discover our programs
            </h1>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <ProgramsExplorer />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
