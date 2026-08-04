import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

/** Shared House of Om section heading: Bagnard ~52px + Inter body */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = light ? "text-white" : "text-[#212121]";
  const subColor = light ? "text-white" : "text-[#363636]";
  const eyeColor = light ? "text-olive-200" : "text-olive-700";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className={`mb-3 font-sans text-sm font-medium uppercase tracking-[0.2em] ${eyeColor}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-serif text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl md:text-[52px] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 font-sans text-[1.15rem] font-normal leading-[1.7] ${subColor}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
