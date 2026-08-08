import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import fs from 'fs';
import path from 'path';

function getGalleryImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  try {
    const files = fs.readdirSync(galleryDir);
    return files
      .filter(file => {
        // Exclude thumbnails, non-images, and duplicates
        const isImage = file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg');
        const isThumb = file.startsWith('thumbs');
        const isDuplicate = file.includes('-nggid');
        return isImage && !isThumb && !isDuplicate;
      })
      .map(file => `/gallery/${file}`);
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

const GALLERY_IMAGES = getGalleryImages();

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <Header />
      
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-charcoal-950 px-6 py-32 text-center sm:px-8 lg:px-12 pt-40">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/gallery/image-23.jpg')] bg-cover bg-center" />
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
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4">
            {GALLERY_IMAGES.map((src, idx) => (
              <div key={idx} className="mb-6 break-inside-avoid overflow-hidden rounded-xl bg-charcoal-50 shadow-md">
                <div className="relative w-full aspect-square md:aspect-auto md:min-h-[300px]">
                  {/* Using standard img tag because next/image unoptimized doesn't dynamically know aspect ratio well for masonry */}
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
