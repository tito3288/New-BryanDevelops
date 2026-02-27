"use client";

import Link from "next/link";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    desc: "Affordable, professional websites built on the platform that fits your business — WordPress, Shopify, Squarespace, Wix, or custom code. Training included so you can manage it yourself.",
    accent: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    highlights: ["Any platform", "SEO-ready", "Training included", "Mobile-friendly"],
    locations: [] as { label: string; href: string }[],
  },
  {
    title: "Custom Software",
    href: "/services/software",
    desc: "Workflow automation, AI chatbots, business dashboards, and custom platforms built to solve the problems slowing your business down. No jargon — just tools that work.",
    accent: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    highlights: ["Automation", "AI-powered", "Custom dashboards", "App development"],
    locations: [
      { label: "Fort Wayne, IN", href: "/services/software/fort-wayne" },
    ],
  },
  {
    title: "SEO Services",
    href: "/services/seo",
    desc: "Get found on Google by the people searching for what you offer. Keyword research, on-page optimization, local SEO, and ongoing strategy to grow your organic traffic.",
    accent: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    highlights: ["Local SEO", "Keyword research", "Google rankings", "Traffic growth"],
    locations: [],
  },
];

const accentMap: Record<string, { bg: string; border: string; text: string; badgeBg: string; badgeText: string }> = {
  indigo: {
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    text: "text-indigo-400",
    badgeBg: "bg-indigo-500/10",
    badgeText: "text-indigo-400",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-400",
  },
};

export default function ServicesPageContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="dark" />

      {/* ========== HERO ========== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="absolute top-20 left-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full filter blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[25rem] h-[25rem] bg-purple-600/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Services — South Bend, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] max-w-3xl mb-6">
              Everything Your Business Needs to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Grow Online.
              </span>
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
              From websites to custom software to SEO — I help businesses in South Bend,
              Fort Wayne, and across the country build a stronger online presence.
              Pick the service that fits, or reach out and we&apos;ll figure it out together.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="relative pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-8">
            {services.map((svc, i) => {
              const ac = accentMap[svc.accent];
              return (
                <FadeIn key={svc.title} delay={i * 100}>
                  <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-10 hover:bg-white/[0.05] transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      {/* Left: Icon + Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-5">
                          <div className={`w-12 h-12 rounded-xl ${ac.bg} border ${ac.border} flex items-center justify-center ${ac.text} group-hover:scale-110 transition-transform`}>
                            {svc.icon}
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                            {svc.title}
                          </h2>
                        </div>

                        <p className="text-neutral-400 text-base leading-relaxed mb-6 max-w-2xl">
                          {svc.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {svc.highlights.map((h) => (
                            <span
                              key={h}
                              className={`px-3 py-1 text-xs font-medium rounded-full ${ac.badgeBg} ${ac.badgeText} border ${ac.border}`}
                            >
                              {h}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={svc.href}
                          className={`inline-flex items-center gap-2 text-sm font-semibold ${ac.text} hover:underline underline-offset-4 transition-colors`}
                        >
                          Learn more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>

                      {/* Right: Locations */}
                      {svc.locations.length > 0 && (
                        <div className="lg:w-64 shrink-0">
                          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5">
                            <h3 className="text-neutral-500 text-xs font-semibold tracking-widest uppercase mb-3">
                              Locations
                            </h3>
                            <div className="flex flex-col gap-1.5">
                              {svc.locations.map((loc) => (
                                <Link
                                  key={loc.href}
                                  href={loc.href}
                                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                                >
                                  <span className="flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {loc.label}
                                  </span>
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== AREAS SERVED ========== */}
      <section className="relative py-20 sm:py-24 border-t border-white/[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-indigo-600/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Areas We Serve
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Based in South Bend. Working Everywhere.
              </h2>
              <p className="text-neutral-500 text-base max-w-xl mx-auto">
                I work with businesses locally in Michiana and remotely across the country.
                Here are the areas I currently serve with dedicated landing pages.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { city: "South Bend", state: "IN", primary: true },
                { city: "Fort Wayne", state: "IN", primary: false },
                { city: "Mishawaka", state: "IN", primary: false },
                { city: "Elkhart", state: "IN", primary: false },
                { city: "Granger", state: "IN", primary: false },
              ].map((area) => (
                <div
                  key={area.city}
                  className={`flex items-center gap-2.5 px-4 py-3.5 rounded-xl border transition-colors ${
                    area.primary
                      ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-300"
                      : "bg-white/[0.03] border-white/[0.06] text-neutral-400"
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <span className="text-sm font-medium">{area.city}</span>
                    <span className="text-xs text-neutral-600 ml-1">{area.state}</span>
                  </div>
                  {area.primary && (
                    <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider text-indigo-500">HQ</span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-center text-neutral-600 text-sm mt-8">
              Don&apos;t see your city? No problem — most of my work is done remotely.{" "}
              <Link href="/contact" className="text-indigo-400 hover:underline underline-offset-4">
                Let&apos;s talk.
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-purple-600/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Not Sure What You Need?
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                That&apos;s totally fine. Most clients come to me with a problem, not a solution.
                Tell me what&apos;s going on and I&apos;ll recommend the best path forward — no pressure, no jargon.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-full border border-white/10 text-neutral-300 font-semibold text-sm tracking-wide hover:bg-white/[0.06] transition-all"
                >
                  See My Work
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-12 text-center text-neutral-600">
        <p>&copy; 2026 Bryan Develops. All rights reserved.</p>
      </footer>
    </main>
  );
}
