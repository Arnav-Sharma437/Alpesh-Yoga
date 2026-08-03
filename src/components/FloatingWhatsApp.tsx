"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsApp() {
  const WHATSAPP_NUMBER = "917719878500";
  const DEFAULT_MESSAGE = "Hi Alpesh Yoga, I'm contacting you from the website.";

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-700 delay-1000 fill-mode-both hidden md:block">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center gap-4 bg-white rounded-[20px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_50px_rgba(0,0,0,0.15)] transition-all duration-300 group border border-gray-100"
      >
        <div className="flex flex-col max-w-[200px]">
          <span className="font-sans text-xs text-charcoal-900 font-medium leading-relaxed">
            Hi there! I'm so excited to chat with you. Do you have any questions? I'm happy to help!
          </span>
        </div>
        <div className="bg-olive-50 p-3 rounded-full shrink-0 group-hover:bg-olive-100 transition-colors">
          <MessageSquare className="w-6 h-6 text-olive-500 fill-olive-500" />
        </div>
      </a>
    </div>
  );
}
