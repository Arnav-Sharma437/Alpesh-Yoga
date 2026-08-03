"use client";

import React from "react";
import { PlayCircle } from "lucide-react";

export interface Testimonial {
  name: string;
  image: string;
  quote: string;
}

interface TestimonialsVideoProps {
  videoThumbnail: string;
  videoTitle: string;
  reviews: Testimonial[];
}

export default function TestimonialsVideo({ videoThumbnail, videoTitle, reviews }: TestimonialsVideoProps) {
  return (
    <section className="py-24 bg-sand-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[800px] bg-white transform -translate-y-1/2 skew-y-3 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Video Section */}
        <div className="text-center mb-16">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] text-olive-500">
            Listen to Our Students
          </p>
          <div className="relative max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer aspect-video bg-charcoal-900 mt-8">
            <img 
              src={videoThumbnail} 
              alt={videoTitle} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" strokeWidth={1.5} />
              <h3 className="px-4 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-white drop-shadow-md md:text-[52px]">
                {videoTitle}
              </h3>
            </div>
          </div>
        </div>

        {/* Written Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-20">
          {reviews.map((review, idx) => (
            <div key={idx} className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="h-12 w-12 rounded-full border border-sand-50 object-cover"
                />
                <div>
                  <h4 className="font-serif text-[1.15rem] font-normal text-charcoal-500">{review.name}</h4>
                  <div className="mt-1 flex text-olive-500">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                </div>
              </div>
              <p className="font-sans text-[1.15rem] font-normal italic leading-[1.7] text-charcoal-800">
                &quot;{review.quote}&quot;
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
