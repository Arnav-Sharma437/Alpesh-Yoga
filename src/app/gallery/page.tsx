"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://alpeshyoga.com/admin-api.php?action=list_gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.images) {
          setImages(data.images);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load gallery:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <Header />
      
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-charcoal-950 px-6 py-32 text-center sm:px-8 lg:px-12 pt-40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/gallery/alpesh-yoga-200hrs-yttc-dharamshala-india-1.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-charcoal-950/80" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="mb-6 font-serif text-5xl font-normal text-white sm:text-6xl lg:text-7xl">
              Photo Gallery
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-[1.15rem] leading-[1.7] text-gray-300">
              Glimpses of our life, classes, and beautiful surroundings at Alpesh Yoga in Goa and Dharamshala.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1400px] px-6 py-24 sm:px-8 lg:px-12">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-saffron-500 border-t-transparent" />
            </div>
          ) : (
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
              {images.map((src, idx) => (
                <div key={idx} className="mb-6 break-inside-avoid overflow-hidden rounded-xl bg-charcoal-50 shadow-md">
                  <div className="relative w-full aspect-square md:aspect-auto md:min-h-[300px]">
                    <img 
                      src={src} 
                      alt={`Alpesh Yoga Gallery Image ${idx + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

