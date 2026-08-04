import React from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image?: string;
  children?: React.ReactNode;
}

/** House of Om–style inner page hero: full-bleed image, Bagnard title, Inter body */
export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600",
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden py-28 sm:min-h-[58vh] sm:py-32">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="text-on-dark relative z-10 mx-auto max-w-4xl space-y-5 px-4 text-center sm:px-6 lg:px-8">
        {breadcrumb ? (
          <nav className="flex items-center justify-center gap-2 font-sans text-sm font-medium text-white">
            <a href="/" className="text-white transition hover:opacity-80">
              Home
            </a>
            <span className="text-white">/</span>
            <span className="text-white">{breadcrumb}</span>
          </nav>
        ) : null}

        <h1 className="font-serif text-4xl font-normal leading-[1.25] tracking-tight text-white sm:text-5xl md:text-[56px]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mx-auto max-w-2xl font-sans text-[1.2rem] font-normal leading-[1.7] text-white sm:text-[1.25rem]">
            {subtitle}
          </p>
        ) : null}

        {children}
      </div>
    </section>
  );
}
