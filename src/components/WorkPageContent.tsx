"use client";

import { useState } from "react";
import Image from "next/image";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const categories = ["All", "Websites", "Software", "SEO"] as const;

type Category = (typeof categories)[number];

interface Project {
  title: string;
  logo: string | null;
  description: string;
  tags: string[];
  category: Category[];
  url: string;
  metrics: { label: string; value: string }[];
  accent: "indigo" | "emerald" | "purple" | "amber" | "pink";
}

const projects: Project[] = [
  {
    title: "Drive & Shine",
    logo: "/logos/driveandshine.png",
    description:
      "Full rebrand and custom website for a premium car wash. Boosted search visibility and tripled online bookings within months.",
    tags: ["Web Design", "SEO", "Branding"],
    category: ["Websites", "SEO"],
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
    description:
      "Custom-built SEO workflow software for audits, rank tracking, and reporting. Streamlines the entire optimization process.",
    tags: ["Software", "SEO", "Development"],
    category: ["Software", "SEO"],
    url: "https://simplseo-io.vercel.app",
    metrics: [
      { label: "Tooling", value: "SEO" },
      { label: "Built", value: "Custom" },
    ],
    accent: "emerald",
  },
  {
    title: "Rise'n Roll Bakery",
    logo: "/logos/risenroll.png",
    description:
      "Amish-style bakery website featuring fresh-baked goods, product catalog, and locations across Indiana.",
    tags: ["Web Design", "Branding"],
    category: ["Websites"],
    url: "https://risenroll.com",
    metrics: [
      { label: "Products", value: "Fresh" },
      { label: "Locations", value: "Multi" },
    ],
    accent: "amber",
  },
  {
    title: "United Way of St. Joseph County",
    logo: "/logos/unitedway.png",
    description:
      "Nonprofit website for community impact in South Bend. Education, health, and financial stability programs.",
    tags: ["Web Design", "Development"],
    category: ["Websites"],
    url: "https://uwsjc.org",
    metrics: [
      { label: "100+", value: "Years" },
      { label: "Impact", value: "Local" },
    ],
    accent: "indigo",
  },
  {
    title: "Ananta Breathwork",
    logo: "/logos/ananta-breathwork.png",
    description:
      "Wellness brand website with booking integration and calming visual identity. Designed to convert visitors into loyal clients.",
    tags: ["Web Design", "Branding"],
    category: ["Websites"],
    url: "https://www.anantabreathwork.com",
    metrics: [
      { label: "Bookings", value: "2x" },
      { label: "Bounce Rate", value: "-40%" },
    ],
    accent: "purple",
  },
  {
    title: "Friendship Roofing",
    logo: "/logos/friendshiproofing.png",
    description:
      "Lead-generation website for a growing roofing company. SEO-optimized to dominate local search results in the region.",
    tags: ["Web Design", "SEO"],
    category: ["Websites", "SEO"],
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
    description:
      "Professional site with before/after gallery and instant quote system. Built to establish trust and generate calls.",
    tags: ["Web Design", "Development"],
    category: ["Websites"],
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
    description:
      "Community-driven platform connecting families with local camps. Custom search, filtering, and registration built from scratch.",
    tags: ["Web Design", "Development", "Software"],
    category: ["Websites", "Software"],
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
    description:
      "Professional dental practice website for a family dentist in Independence, MO. Online booking, services, and patient resources.",
    tags: ["Web Design", "SEO"],
    category: ["Websites", "SEO"],
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
    description:
      "Custom website for South Bend's audio, video, and smart home experts. Showcasing services across 8 locations.",
    tags: ["Web Design", "Development"],
    category: ["Websites"],
    url: "https://rightchoiceav.com",
    metrics: [
      { label: "Services", value: "7+" },
      { label: "Locations", value: "8" },
    ],
    accent: "purple",
  },
  {
    title: "Middletown Family Dentistry",
    logo: null,
    description:
      "Trusted dental care website for a family dentist in Middletown, IN. Services, team, and online booking.",
    tags: ["Web Design", "SEO"],
    category: ["Websites", "SEO"],
    url: "https://middletown-dentist.com",
    metrics: [
      { label: "Bookings", value: "Online" },
      { label: "Google", value: "5.0" },
    ],
    accent: "pink",
  },
  {
    title: "Brilliant Solar Solutions",
    logo: null,
    description:
      "Solar energy company website serving Indiana, Illinois, and nationwide. Lead generation and consultation booking.",
    tags: ["Web Design", "SEO"],
    category: ["Websites", "SEO"],
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
    description:
      "Epoxy flooring company serving South Bend and Michiana. Services, gallery, and quote requests.",
    tags: ["Web Design", "SEO"],
    category: ["Websites", "SEO"],
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
    description:
      "Veteran-owned adventure company. Custom trips, booking system, and outdoor experiences across Michigan.",
    tags: ["Web Design", "Development"],
    category: ["Websites"],
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
    description:
      "Marketing and communications agency. Story-driven content, broadcast, social media, and PR services.",
    tags: ["Web Design", "Branding"],
    category: ["Websites"],
    url: "https://cpkmediacommunications.com",
    metrics: [
      { label: "Notre Dame", value: "MBA" },
      { label: "Forbes", value: "Council" },
    ],
    accent: "pink",
  },
];

const accentMapLight = {
  indigo: {
    dot: "bg-indigo-500",
    tagBg: "bg-indigo-50",
    tagText: "text-indigo-600",
    tagBorder: "border-indigo-200/60",
    metricText: "text-indigo-600",
    topLine: "from-indigo-400 to-indigo-500",
    hoverShadow: "group-hover:shadow-indigo-200/40",
  },
  emerald: {
    dot: "bg-emerald-500",
    tagBg: "bg-emerald-50",
    tagText: "text-emerald-600",
    tagBorder: "border-emerald-200/60",
    metricText: "text-emerald-600",
    topLine: "from-emerald-400 to-emerald-500",
    hoverShadow: "group-hover:shadow-emerald-200/40",
  },
  purple: {
    dot: "bg-purple-500",
    tagBg: "bg-purple-50",
    tagText: "text-purple-600",
    tagBorder: "border-purple-200/60",
    metricText: "text-purple-600",
    topLine: "from-purple-400 to-purple-500",
    hoverShadow: "group-hover:shadow-purple-200/40",
  },
  amber: {
    dot: "bg-amber-500",
    tagBg: "bg-amber-50",
    tagText: "text-amber-600",
    tagBorder: "border-amber-200/60",
    metricText: "text-amber-600",
    topLine: "from-amber-400 to-amber-500",
    hoverShadow: "group-hover:shadow-amber-200/40",
  },
  pink: {
    dot: "bg-pink-500",
    tagBg: "bg-pink-50",
    tagText: "text-pink-600",
    tagBorder: "border-pink-200/60",
    metricText: "text-pink-600",
    topLine: "from-pink-400 to-pink-500",
    hoverShadow: "group-hover:shadow-pink-200/40",
  },
};

export default function WorkPageContent() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <main className="relative pt-28 sm:pt-32 overflow-hidden">
      <FloatingDots variant="light" />
      {/* Soft background blobs */}
      <div className="absolute -top-40 -right-40 w-[32rem] h-[32rem] bg-indigo-100 rounded-full filter blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[28rem] h-[28rem] bg-purple-100 rounded-full filter blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[24rem] h-[24rem] bg-blue-50 rounded-full filter blur-[100px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page header */}
        <div className="max-w-2xl mb-16">
          <p className="text-indigo-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-4">
            My Work
          </h1>
          <p className="text-neutral-500 text-lg leading-relaxed">
            A collection of websites, software, and SEO campaigns I&apos;ve built
            for businesses. Each project is designed to solve real problems and
            deliver measurable results.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === cat
                  ? "bg-neutral-900 border-neutral-900 text-white shadow-md"
                  : "bg-white border-neutral-200 text-neutral-500 hover:text-neutral-700 hover:border-neutral-300 hover:shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filtered.map((project, i) => {
            const c = accentMapLight[project.accent];
            return (
              <FadeIn key={project.title} delay={(i % 3) * 100}>
              <a
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`group relative flex flex-col rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] ${c.hoverShadow} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Logo banner */}
                <div className="w-full h-20 bg-neutral-50 border-b border-neutral-100 flex items-center justify-center px-6">
                  {project.logo ? (
                    <Image
                      src={project.logo}
                      alt={`${project.title} logo`}
                      width={120}
                      height={48}
                      className="object-contain max-h-12"
                    />
                  ) : (
                    <span className={`text-2xl font-bold ${c.tagText} tracking-tight`}>
                      {project.title}
                    </span>
                  )}
                </div>

                {/* Accent gradient bar */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${c.topLine} opacity-80 group-hover:opacity-100 transition-opacity`}
                />

                <div className="flex flex-col flex-1 p-6 lg:p-7">

                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                      <h2 className="text-neutral-900 text-lg lg:text-xl font-bold">
                        {project.title}
                      </h2>
                    </div>
                    <svg
                      className="w-4 h-4 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full ${c.tagBg} ${c.tagText} border ${c.tagBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center gap-5 pt-4 border-t border-neutral-100">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className={`text-base font-bold ${c.metricText}`}>
                          {m.value}
                        </p>
                        <p className="text-neutral-400 text-[10px] tracking-wide uppercase">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
              </FadeIn>
            );
          })}
        </div>

      </div>

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-indigo-100/30 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-4">
                Let&apos;s Build Something Great
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                Have a Project in Mind?
              </h2>
              <p className="text-neutral-500 text-lg mb-8">
                Whether it&apos;s a website, software, or SEO strategy &mdash; let&apos;s
                build something great together. Free consultation, no strings attached.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 rounded-full border border-neutral-300 text-neutral-700 font-semibold text-sm tracking-wide hover:bg-neutral-100 transition-all"
                >
                  View Services
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-12 text-center text-neutral-400">
        <p>&copy; 2026 Bryan Develops. All rights reserved.</p>
      </footer>
    </main>
  );
}
