import React from "react";

interface LotusMotifProps {
  className?: string;
  color?: string;
}

export default function LotusMotif({ className = "w-10 h-10", color = "text-terracotta-500" }: LotusMotifProps) {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`}>
      {/* Stylized Lotus/Flame SVG motif */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        {/* Outer alignment flame-teardrop */}
        <path 
          d="M50 8C50 8 18 45 18 64C18 80 32 93 50 93C68 93 82 80 82 64C82 45 50 8 50 8Z" 
          stroke="currentColor" 
          strokeWidth="5" 
          strokeLinecap="round"
          className={color}
        />
        {/* Central anatomical balance circle */}
        <circle cx="50" cy="55" r="13" stroke="currentColor" strokeWidth="5" className={color} />
        
        {/* Earthy orange lotus base leaf (left) */}
        <path 
          d="M23 70C15 78 12 88 25 93C35 93 43 82 43 82" 
          stroke="#F7941D" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        {/* Earthy orange lotus base leaf (right) */}
        <path 
          d="M77 70C85 78 88 88 75 93C65 93 57 82 57 82" 
          stroke="#F7941D" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function LotusDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-sage-200"></div>
      <LotusMotif className="w-8 h-8" />
      <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-sage-200"></div>
    </div>
  );
}
