"use client";

import React from "react";
import { Instagram, Youtube, Heart, MessageCircle, Play } from "lucide-react";

const INSTA_POSTS = [
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=400",
    likes: "245",
    comments: "18",
    topic: "Trikonasana (Triangle) Alignment using blocks",
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400",
    likes: "312",
    comments: "25",
    topic: "Daily Alignment class in Upper Bhagsu",
  },
  {
    url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=400",
    likes: "198",
    comments: "12",
    topic: "Iyengar prop modifications for shoulders",
  },
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=400",
    likes: "420",
    comments: "38",
    topic: "Morning views from the yoga shala",
  },
];

const YOUTUBE_VIDEOS = [
  {
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600",
    title: "How to Align Paschimottanasana Correctly using Straps | Iyengar Method",
    views: "12K views",
    duration: "10:45",
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=600",
    title: "Therapeutic Adjustment for Scoliosis and Postural Imbalance",
    views: "8.5K views",
    duration: "14:20",
  },
];

export default function SocialProof() {
  return (
    <section id="social" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-widest text-terracotta-600 font-semibold mb-2 block">
            Online Presence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-forest-600 mb-6">
            Learn Alignment Online
          </h2>
          <p className="font-sans text-lg text-forest-600/80 leading-relaxed font-light">
            We share free alignment tips, tutorial videos, and student stories. Connect with us on Instagram and YouTube.
          </p>
        </div>

        {/* Feeds Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Instagram Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-sage-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-600">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest-600">@alpeshyogaindia</h3>
                  <p className="font-sans text-xs text-sage-600">Postural tips & daily studio life</p>
                </div>
              </div>
              <a
                href="https://instagram.com/alpeshyogaindia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-terracotta-600 hover:underline"
              >
                Follow on Instagram
              </a>
            </div>

            {/* Mock Insta Grid */}
            <div className="grid grid-cols-2 gap-4">
              {INSTA_POSTS.map((post, idx) => (
                <a
                  key={idx}
                  href="https://instagram.com/alpeshyogaindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group rounded-2xl overflow-hidden aspect-square border border-sage-100/50 block shadow-sm"
                >
                  <img
                    src={post.url}
                    alt={post.topic}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-forest-700/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-sans text-sm">
                    <span className="text-[10px] text-center px-4 font-light mb-1 leading-normal">
                      {post.topic}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-white" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4 fill-white" />
                        {post.comments}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* YouTube Column */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-sage-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-red-600/10 text-red-600">
                  <Youtube className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest-600">Alpesh Yoga YouTube</h3>
                  <p className="font-sans text-xs text-sage-600">Free video lessons & alignment guides</p>
                </div>
              </div>
              <a
                href="https://youtube.com/@alpeshyoga123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-terracotta-600 hover:underline"
              >
                Subscribe on YouTube
              </a>
            </div>

            {/* YouTube list */}
            <div className="space-y-4">
              {YOUTUBE_VIDEOS.map((vid, idx) => (
                <a
                  key={idx}
                  href="https://youtube.com/@alpeshyoga123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-sage-100/50 hover:border-terracotta-500/30 hover:shadow-md transition-all duration-300 group bg-cream-50/30"
                >
                  {/* Mock video player frame */}
                  <div className="relative rounded-xl overflow-hidden aspect-video sm:w-40 shrink-0 border border-sage-100">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <div className="p-2 rounded-full bg-white text-red-600 shadow-md group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <span className="absolute bottom-1 right-1 bg-black/75 text-white font-mono text-[10px] px-1.5 py-0.5 rounded font-medium">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between py-1 space-y-2">
                    <h4 className="font-serif text-sm font-bold text-forest-600 line-clamp-2 group-hover:text-terracotta-600 transition-colors">
                      {vid.title}
                    </h4>
                    <div className="font-sans text-xs text-sage-600 flex items-center gap-3">
                      <span>{vid.views}</span>
                      <span className="w-1 h-1 rounded-full bg-sage-300"></span>
                      <span>Learn Adjustments</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
