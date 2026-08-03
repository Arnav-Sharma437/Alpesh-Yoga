"use client";

import React from "react";

/** Sticky chakras body motif — sits fixed on the page edge as you scroll */
export default function StickyChakras() {
  return (
    <>
      {/* Desktop: sticky body on left */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-1/2 z-[5] hidden -translate-y-1/2 xl:block"
      >
        <svg
          width="120"
          height="320"
          viewBox="0 0 120 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.14]"
        >
          {/* Body silhouette */}
          <path
            d="M60 28c10 0 18 8 18 18s-8 18-18 18-18-8-18-18 8-18 18-18zm0 42c22 0 36 14 38 42l6 110c1 16-10 28-26 28h-36c-16 0-27-12-26-28l6-110c2-28 16-42 38-42z"
            fill="#F5821F"
            fillOpacity="0.35"
          />
          <ellipse cx="60" cy="46" rx="16" ry="18" fill="#F5821F" fillOpacity="0.55" />
          {/* Arms */}
          <path
            d="M42 92c-14 18-22 40-24 62M78 92c14 18 22 40 24 62"
            stroke="#F5821F"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.4"
          />
          {/* Legs */}
          <path
            d="M48 248c-4 22-6 40-4 54M72 248c4 22 6 40 4 54"
            stroke="#F5821F"
            strokeWidth="10"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Seven chakras */}
          {[
            { y: 38, color: "#A855F7", r: 5 }, // crown
            { y: 58, color: "#6366F1", r: 4.5 }, // third eye
            { y: 78, color: "#3B82F6", r: 4.5 }, // throat
            { y: 108, color: "#22C55E", r: 5 }, // heart
            { y: 138, color: "#EAB308", r: 4.5 }, // solar
            { y: 168, color: "#F5821F", r: 4.5 }, // sacral
            { y: 198, color: "#EF4444", r: 5 }, // root
          ].map((c, i) => (
            <g key={i}>
              <circle cx="60" cy={c.y} r={c.r + 3} fill={c.color} fillOpacity="0.2" />
              <circle cx="60" cy={c.y} r={c.r} fill={c.color} fillOpacity="0.85" />
            </g>
          ))}

          {/* Energy line */}
          <path
            d="M60 38v160"
            stroke="#F5821F"
            strokeWidth="1.5"
            strokeDasharray="3 4"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Soft full-page watermark (lotus / chakra wheel) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden"
      >
        <svg
          width="640"
          height="640"
          viewBox="0 0 200 200"
          className="opacity-[0.045] text-saffron-500"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="18" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              cx="100"
              cy="52"
              rx="16"
              ry="36"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="8" fill="#FAF8F5" />
        </svg>
      </div>
    </>
  );
}
