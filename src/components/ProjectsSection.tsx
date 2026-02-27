"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

interface Project {
  title: string;
  logo: string | null;
  description: string;
  tags: string[];
  url: string;
  metrics: { label: string; value: string }[];
  accent: "indigo" | "emerald" | "purple" | "amber" | "pink";
}

const projects: Project[] = [
  {
    title: "Drive & Shine",
    logo: "/logos/drive-and-shine.png",
    description: "Full rebrand and custom website for a premium car wash. Boosted search visibility and tripled online bookings.",
    tags: ["Web Design", "SEO", "Branding"],
    url: "https://driveandshine.com",
    metrics: [
      { label: "Traffic", value: "3x" },
      { label: "Google", value: "Top 5" },
      { label: "Delivered", value: "2 Mo" },
    ],
    accent: "indigo",
  },
  {
    title: "simplSEO",
    logo: "/logos/simplseo.png",
    description: "Custom-built SEO workflow software for audits, rank tracking, and reporting.",
    tags: ["Software", "SEO", "Development"],
    url: "https://simplseo-io.vercel.app",
    metrics: [
      { label: "Tooling", value: "SEO" },
      { label: "Built", value: "Custom" },
    ],
    accent: "emerald",
  },
  {
    title: "Ananta Breathwork",
    logo: "/logos/ananta-breathwork.png",
    description: "Wellness brand website with booking integration and calming visual identity.",
    tags: ["Web Design", "Branding"],
    url: "https://www.anantabreathwork.com",
    metrics: [
      { label: "Bookings", value: "2x" },
      { label: "Bounce Rate", value: "-40%" },
    ],
    accent: "purple",
  },
  {
    title: "Friendship Roofing",
    logo: "/logos/friendship-roofing.png",
    description: "Lead-generation website SEO-optimized to dominate local search results.",
    tags: ["Web Design", "SEO"],
    url: "https://friendshiproof.com",
    metrics: [
      { label: "Leads", value: "5x" },
      { label: "Local SEO", value: "#1" },
      { label: "Delivered", value: "6 Wk" },
    ],
    accent: "amber",
  },
  {
    title: "Goldstar Roofing",
    logo: "/logos/goldstar-roofing.png",
    description: "Professional site with before/after gallery and instant quote system.",
    tags: ["Web Design", "Development"],
    url: "https://goldstarroofingandcoatings.com",
    metrics: [
      { label: "Calls", value: "+120%" },
      { label: "Speed", value: "98/100" },
    ],
    accent: "pink",
  },
  {
    title: "Every1Camp",
    logo: "/logos/every1camp.png",
    description: "Community platform connecting families with local camps. Custom search and registration.",
    tags: ["Web Design", "Development", "Software"],
    url: "https://every1camp.com",
    metrics: [
      { label: "Users", value: "500+" },
      { label: "Features", value: "Custom" },
    ],
    accent: "indigo",
  },
  {
    title: "Eastland Family Dental",
    logo: null,
    description: "Professional dental practice website for a family dentist in Independence, MO. Online booking, services, and patient resources.",
    tags: ["Web Design", "SEO"],
    url: "https://www.eastlandfamilydental.com",
    metrics: [
      { label: "Bookings", value: "Online" },
      { label: "Local SEO", value: "Optimized" },
    ],
    accent: "emerald",
  },
  {
    title: "AVTech Specialists",
    logo: null,
    description: "Custom website for South Bend's audio, video, and smart home experts. Showcasing services across 8 locations.",
    tags: ["Web Design", "Development"],
    url: "https://rightchoiceav.com",
    metrics: [
      { label: "Services", value: "7+" },
      { label: "Locations", value: "8" },
    ],
    accent: "purple",
  },
  {
    title: "Rise'n Roll Bakery",
    logo: null,
    description: "Amish-style bakery website featuring fresh-baked goods, product catalog, and locations across Indiana.",
    tags: ["Web Design", "Branding"],
    url: "https://risenroll.com",
    metrics: [
      { label: "Products", value: "Fresh" },
      { label: "Locations", value: "Multi" },
    ],
    accent: "amber",
  },
  {
    title: "Middletown Family Dentistry",
    logo: null,
    description: "Trusted dental care website for a family dentist in Middletown, IN. Services, team, and online booking.",
    tags: ["Web Design", "SEO"],
    url: "https://middletown-dentist.com",
    metrics: [
      { label: "Bookings", value: "Online" },
      { label: "Google", value: "5.0" },
    ],
    accent: "pink",
  },
  {
    title: "United Way of St. Joseph County",
    logo: null,
    description: "Nonprofit website for community impact in South Bend. Education, health, and financial stability programs.",
    tags: ["Web Design", "Development"],
    url: "https://uwsjc.org",
    metrics: [
      { label: "100+", value: "Years" },
      { label: "Impact", value: "Local" },
    ],
    accent: "indigo",
  },
  {
    title: "Brilliant Solar Solutions",
    logo: null,
    description: "Solar energy company website serving Indiana, Illinois, and nationwide. Lead generation and consultation booking.",
    tags: ["Web Design", "SEO"],
    url: "https://brilliantsolarsolution.com",
    metrics: [
      { label: "5★", value: "Reviews" },
      { label: "Nationwide", value: "Coverage" },
    ],
    accent: "emerald",
  },
  {
    title: "EME Flooring",
    logo: null,
    description: "Epoxy flooring company serving South Bend and Michiana. Services, gallery, and quote requests.",
    tags: ["Web Design", "SEO"],
    url: "https://emeepoxyflooring.com",
    metrics: [
      { label: "Local", value: "Michiana" },
      { label: "Quote", value: "Free" },
    ],
    accent: "purple",
  },
  {
    title: "Opulent Outdoors",
    logo: null,
    description: "Veteran-owned adventure company. Custom trips, booking system, and outdoor experiences across Michigan.",
    tags: ["Web Design", "Development"],
    url: "https://opulentoutdoorsadv.com",
    metrics: [
      { label: "Trips", value: "Custom" },
      { label: "Booking", value: "Online" },
    ],
    accent: "amber",
  },
  {
    title: "CPK Media Communications",
    logo: null,
    description: "Marketing and communications agency. Story-driven content, broadcast, social media, and PR services.",
    tags: ["Web Design", "Branding"],
    url: "https://cpkmediacommunications.com",
    metrics: [
      { label: "Notre Dame", value: "MBA" },
      { label: "Forbes", value: "Council" },
    ],
    accent: "pink",
  },
];

const accentMap = {
  indigo: { dot: "bg-indigo-400", text: "text-indigo-300", bg: "bg-indigo-500/10", border: "border-indigo-400/30", line: "from-indigo-500 to-indigo-400" },
  emerald: { dot: "bg-emerald-400", text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-400/30", line: "from-emerald-500 to-emerald-400" },
  purple: { dot: "bg-purple-400", text: "text-purple-300", bg: "bg-purple-500/10", border: "border-purple-400/30", line: "from-purple-500 to-purple-400" },
  amber: { dot: "bg-amber-400", text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-400/30", line: "from-amber-500 to-amber-400" },
  pink: { dot: "bg-pink-400", text: "text-pink-300", bg: "bg-pink-500/10", border: "border-pink-400/30", line: "from-pink-500 to-pink-400" },
};

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-neutral-950 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-purple-600/8 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">My Work</h2>
            <p className="text-neutral-400 text-lg mt-3 max-w-lg">
              Real projects, real results. Each one built to solve a unique business challenge.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Nav arrows */}
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-white/5 text-neutral-700 cursor-default"
              }`}
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-white/5 text-neutral-700 cursor-default"
              }`}
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/10 transition-all ml-1"
            >
              View All
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        </FadeIn>
      </div>

      {/* Slider */}
      <FadeIn delay={100}>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Fade edges — covers the outer part of the first/last cards */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 lg:w-48 bg-gradient-to-l from-neutral-950 via-neutral-950/60 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >

          {projects.map((project) => {
            const c = accentMap[project.accent];
            return (
              <a
                key={project.title}
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col shrink-0 w-[300px] sm:w-[340px] lg:w-[380px] snap-start rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:border-white/20 hover:bg-white/[0.07] hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Top gradient line */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${c.line} opacity-50 group-hover:opacity-100 transition-opacity`} />

                <div className="flex flex-col flex-1 p-6">
                  {/* Logo */}
                  <div className="mb-4">
                    {project.logo ? (
                      <div className="relative w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 overflow-hidden flex items-center justify-center">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center`}>
                        <span className={`text-base font-bold ${c.text}`}>{project.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                      <h3 className="text-white text-lg font-bold">{project.title}</h3>
                    </div>
                    <svg
                      className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1 shrink-0"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-white/[0.06] text-neutral-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className={`text-base font-bold ${c.text}`}>{m.value}</p>
                        <p className="text-neutral-500 text-[10px] tracking-wide uppercase">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}

          {/* "View All" end card */}
          <Link
            href="/projects"
            className="group relative flex flex-col items-center justify-center shrink-0 w-[200px] sm:w-[240px] snap-start rounded-2xl bg-white/[0.02] border border-dashed border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
              <svg className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            <p className="text-neutral-400 text-sm font-medium group-hover:text-white transition-colors">View All Projects</p>
          </Link>

          {/* Right padding */}
          <div className="shrink-0 w-4" />
        </div>
      </div>
      </FadeIn>

      {/* Mobile "View All" link */}
      <div className="sm:hidden text-center mt-8 px-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/15 text-white text-sm font-medium hover:bg-white/10 transition-all"
        >
          View All Projects
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
