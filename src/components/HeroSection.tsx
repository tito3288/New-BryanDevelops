"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingDots from "./CursorDots";

const cyclingWords = [ "Software","Web Design", "SEO", "Development"];

const trustedBy = [
  "Ananta Breathwork",
  "Friendship Roofing",
  "Goldstar Roofing",
  "Eastland Dentist",
  "Every1Camp",
  "Drive & Shine",
  "United Way",
];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % cyclingWords.length);
        setIsAnimating(false);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-grid-bg relative h-screen bg-black overflow-hidden flex flex-col">
      <FloatingDots />
      {/* Subtle gradient blobs */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full filter blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      {/* Bryan photo — mobile: bottom-center, desktop: right side */}
      <div className="absolute bottom-0 pointer-events-none right-0 w-full h-[65%] sm:h-[60%] lg:right-[32%] lg:w-[65%] lg:h-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-transparent to-transparent lg:from-black lg:via-black/40"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 to-transparent lg:hidden"></div>

        <Image
          src="/Bryan-Develops.png"
          alt="Bryan Arambula — Web Developer"
          fill
          className="object-contain object-bottom scale-[1.6] origin-bottom sm:scale-125 lg:scale-100 lg:object-right-bottom"
          priority
        />
      </div>

      {/* Main content area */}
      <div className="relative z-20 flex-1 flex flex-col min-h-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20 lg:pt-20">
        {/* Desktop: two-column grid | Mobile: stacked with photo behind */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-12 items-center">
          {/* Left — Headline + subtitle + CTAs */}
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-6 pt-2 sm:pt-4 lg:pt-0">
            <h1 className="text-[clamp(2.2rem,7vw,5rem)] font-bold leading-[1.1] tracking-tight">
              <span className="sr-only">
                Web Design, SEO, Custom Software Development &amp; Branding Solutions — South Bend, Indiana
              </span>
              <span aria-hidden="true">
                <span className="relative block h-[1.25em]">
                  <span
                    className={`block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-400 ${
                      isAnimating
                        ? "opacity-0 translate-y-3"
                        : "opacity-100 translate-y-0"
                    }`}
                  >
                    {cyclingWords[wordIndex]}
                  </span>
                </span>
                <span className="text-white/40 block">Solutions.</span>
              </span>
            </h1>

            <p className="text-sm lg:text-lg text-neutral-300 max-w-md leading-relaxed">
              Custom websites, SEO strategies, and software built for businesses in South Bend and across the country.{" "}
              <span className="text-white"> <br></br>
                Need affordable solutions? That&apos;s where I come in.
              </span>
            </p>

            <div className="flex flex-row flex-wrap items-start gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="px-4 py-2 sm:px-5 sm:py-2 lg:px-7 lg:py-3 rounded-full bg-white text-black font-semibold text-sm tracking-wide hover:bg-neutral-200 transition-colors active:scale-[0.98]"
              >
                See My Work
              </Link>
              <Link
                href="#contact"
                className="px-4 py-2 sm:px-5 sm:py-2 lg:px-7 lg:py-3 rounded-full border border-white/20 text-white font-semibold text-sm tracking-wide hover:bg-white/10 backdrop-blur-md transition-all active:scale-[0.98]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right — Featured Website + Featured Software */}
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-5 lg:gap-6 pb-2 sm:pb-4 lg:items-center lg:pb-0 lg:justify-end">
            {/* Featured Website — Drive & Shine */}
            <Link href="#projects" className="group block w-64 sm:w-48 lg:w-64 min-w-0">
              <div className="relative">
                <div className="absolute -top-2 left-2 sm:-top-3 sm:left-3 lg:-top-3.5 lg:left-4 z-30 inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 lg:px-3 lg:py-1.5 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-[10px] sm:text-[9px] lg:text-[11px] font-semibold text-indigo-200 tracking-wider uppercase">
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-indigo-400 hidden sm:block"></span>
                  Featured Website
                </div>
                <div className="relative p-4 pt-5 sm:p-3.5 sm:pt-5 lg:p-5 lg:pt-7 rounded-xl sm:rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:border-white/25 group-hover:bg-white/[0.09] transition-all duration-300">
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-white/[0.08] to-transparent rounded-bl-full pointer-events-none"></div>
                <h3 className="text-white text-sm sm:text-sm lg:text-lg font-bold mb-1 sm:mb-1 lg:mb-1.5 relative z-10">Drive &amp; Shine</h3>
                <div className="flex items-center gap-1.5 lg:gap-2 mb-2 sm:mb-1.5 lg:mb-2.5 flex-wrap">
                  <span className="px-2 py-0.5 lg:px-2.5 lg:py-1 text-[10px] sm:text-[9px] lg:text-xs font-medium rounded-full bg-white/10 text-neutral-200 border border-white/10">Web Design</span>
                  <span className="px-2 py-0.5 lg:px-2.5 lg:py-1 text-[10px] sm:text-[9px] lg:text-xs font-medium rounded-full bg-white/10 text-neutral-200 border border-white/10">SEO</span>
                </div>
                <p className="text-neutral-300 text-xs sm:text-[10px] lg:text-sm leading-relaxed mb-2.5 sm:mb-2 lg:mb-3 relative z-10">
                  Car wash site. Drives bookings &amp; visibility.
                </p>
                <div className="flex items-center gap-4 sm:gap-3 lg:gap-5 pt-3 sm:pt-2 lg:pt-3 border-t border-white/10">
                  <div><p className="text-white text-sm sm:text-xs lg:text-base font-bold">3x</p><p className="text-neutral-400 text-[9px] sm:text-[8px] lg:text-[11px]">Traffic</p></div>
                  <div><p className="text-white text-sm sm:text-xs lg:text-base font-bold">Top 5</p><p className="text-neutral-400 text-[9px] sm:text-[8px] lg:text-[11px]">Google</p></div>
                  <div><p className="text-white text-sm sm:text-xs lg:text-base font-bold">2 Mo</p><p className="text-neutral-400 text-[9px] sm:text-[8px] lg:text-[11px]">Delivered</p></div>
                </div>
              </div>
              </div>
            </Link>

            {/* Featured Software — simplSEO */}
            <Link href="#projects" className="group block w-64 sm:w-48 lg:w-64 min-w-0">
              <div className="relative">
                <div className="absolute -top-2 left-2 sm:-top-3 sm:left-3 lg:-top-3.5 lg:left-4 z-30 inline-flex items-center gap-1 px-2 py-1 sm:px-2.5 lg:px-3 lg:py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[10px] sm:text-[9px] lg:text-[11px] font-semibold text-emerald-200 tracking-wider uppercase">
                  <span className="w-0.5 h-0.5 sm:w-1 sm:h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-emerald-400 hidden sm:block"></span>
                  Featured Software
                </div>
                <div className="relative p-4 pt-5 sm:p-3.5 sm:pt-5 lg:p-5 lg:pt-7 rounded-xl sm:rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:border-white/25 group-hover:bg-white/[0.09] transition-all duration-300">
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-white/[0.08] to-transparent rounded-bl-full pointer-events-none"></div>
                <h3 className="text-white text-sm sm:text-sm lg:text-lg font-bold mb-1 sm:mb-1 lg:mb-1.5 relative z-10">simplSEO</h3>
                <div className="flex items-center gap-1.5 lg:gap-2 mb-2 sm:mb-1.5 lg:mb-2.5">
                  <span className="px-2 py-0.5 lg:px-2.5 lg:py-1 text-[10px] sm:text-[9px] lg:text-xs font-medium rounded-full bg-white/10 text-neutral-200 border border-white/10">Software</span>
                </div>
                <p className="text-neutral-300 text-xs sm:text-[10px] lg:text-sm leading-relaxed mb-2.5 sm:mb-2 lg:mb-3 relative z-10">
                  Affordable SEO tool for small businesses.
                </p>
                <div className="flex items-center gap-4 sm:gap-3 lg:gap-5 pt-3 sm:pt-2 lg:pt-3 border-t border-white/10">
                  <div><p className="text-white text-sm sm:text-xs lg:text-base font-bold">SEO</p><p className="text-neutral-400 text-[9px] sm:text-[8px] lg:text-[11px]">Software</p></div>
                  <div><p className="text-white text-sm sm:text-xs lg:text-base font-bold">Custom</p><p className="text-neutral-400 text-[9px] sm:text-[8px] lg:text-[11px]">Built</p></div>
                </div>
              </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Logo / Trust Marquee — pinned to the bottom */}
      <div className="relative z-20 border-t border-white/[0.06] shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3 lg:py-5">
          <p className="text-neutral-400 text-[9px] lg:text-[10px] font-semibold tracking-widest uppercase mb-1.5 lg:mb-3">
            Trusted by businesses across the country
          </p>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div className="marquee-track flex items-center gap-6 sm:gap-12 w-max">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={i}
                  className="text-neutral-400 text-[11px] sm:text-sm font-semibold tracking-wide whitespace-nowrap hover:text-neutral-200 transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
