"use client";

import Link from "next/link";
import Image from "next/image";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const painPoints = [
  { icon: "clipboard", text: "Still tracking leads in spreadsheets?" },
  { icon: "clock", text: "Wasting hours on tasks that could be automated?" },
  { icon: "phone-missed", text: "Missing calls and losing potential customers?" },
  { icon: "repeat", text: "Copy-pasting data between tools every day?" },
  { icon: "bar-chart", text: "No way to see how your business is actually performing?" },
  { icon: "message", text: "Manually following up with every single lead?" },
];

const solutions = [
  {
    title: "Workflow Automation",
    description:
      "Eliminate repetitive tasks. I build systems that handle data entry, follow-ups, notifications, and reporting — so your team can focus on what actually matters.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    accent: "indigo",
  },
  {
    title: "Custom Dashboards",
    description:
      "See your entire business at a glance. Real-time data, key metrics, and insights — all in one clean interface tailored to how you operate.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "purple",
  },
  {
    title: "AI-Powered Tools",
    description:
      "From chatbots that answer customer questions 24/7 to AI that responds to missed calls with a text — I build smart tools that work even when you're off the clock.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    accent: "emerald",
  },
  {
    title: "Business Platforms",
    description:
      "Need a full platform with user accounts, billing, and admin controls? I build complete SaaS products and internal tools from the ground up.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    accent: "amber",
  },
  {
    title: "SEO & Marketing Software",
    description:
      "Custom tools for keyword tracking, site audits, and performance reporting. Built for agencies and businesses that take their online presence seriously.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    accent: "pink",
  },
  {
    title: "Integrations & APIs",
    description:
      "Connect the tools you already use. I build custom integrations that sync your CRM, email, payments, scheduling, and more — no more switching between apps.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    accent: "indigo",
  },
];

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
};

const processSteps = [
  { num: "01", title: "Discovery", desc: "We talk about what's slowing your business down, what you wish was easier, and where you're losing time or money." },
  { num: "02", title: "Blueprint", desc: "I map out exactly what the software will do, how it works, and what the end result looks like — in plain English, no jargon." },
  { num: "03", title: "Build & Test", desc: "I build it, you test it. You get access to a live version throughout development so there are zero surprises." },
  { num: "04", title: "Launch & Support", desc: "We go live. I handle training, bug fixes, and ongoing updates — your software keeps getting better over time." },
];

export default function SoftwarePageContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="dark" />

      {/* ========== HERO ========== */}
      <section className="hero-grid-bg relative min-h-[85vh] flex items-center bg-black overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 sm:py-40">
          <FadeIn>
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Custom Software Development — South Bend, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
              Software That Runs Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                For You.
              </span>
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Stop wasting hours on manual tasks. I build custom tools, automations, and platforms
              for businesses in South Bend, Michiana, and across the country — so you can focus on growing instead of managing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm tracking-wide hover:from-indigo-600 hover:to-purple-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
              >
                Start a Project
              </Link>
              <Link
                href="#solutions"
                className="px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
              >
                See What I Build
              </Link>
            </div>
          </FadeIn>

          {/* Credibility line */}
          <FadeIn delay={200}>
            <p className="mt-12 text-neutral-600 text-sm">
              Based in South Bend, Indiana — building with enterprise-grade tools trusted by companies like Google, Apple, and Meta.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Sound Familiar?
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                Business owners in South Bend and beyond deal with these every day. Custom software can fix all of them.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((p, i) => (
              <FadeIn key={i} delay={(i % 3) * 100}>
                <div className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-neutral-300 text-sm font-medium">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT I BUILD ========== */}
      <section id="solutions" className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-indigo-600/8 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Solutions</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                What I Build
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Every business is different. Whether you&apos;re a local shop in Mishawaka or a growing company in Elkhart, I build software tailored to your specific workflows and goals.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map((sol, i) => {
              const ac = accentClasses[sol.accent];
              return (
                <FadeIn key={sol.title} delay={(i % 3) * 100}>
                  <div className="relative p-7 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 h-full group">
                    <div className={`w-12 h-12 rounded-xl ${ac.bg} border ${ac.border} flex items-center justify-center mb-5 ${ac.text} group-hover:scale-110 transition-transform`}>
                      {sol.icon}
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2">{sol.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{sol.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FEATURED: simplSEO ========== */}
      <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[25rem] h-[25rem] bg-emerald-600/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-300 text-xs font-semibold tracking-wider uppercase">Featured Product</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                  simplSEO
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  A custom-built SEO workflow tool designed for agencies and businesses that take their
                  search rankings seriously. Already used by businesses in Indiana and beyond to run audits, track keyword positions, monitor competitors,
                  and generate client-ready reports — all from one clean dashboard.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {["Automated site audits & health checks", "Keyword rank tracking over time", "Competitor analysis & monitoring", "One-click client reports"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-300 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-emerald-400 text-2xl font-bold">SEO</p>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">Tooling</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-emerald-400 text-2xl font-bold">Custom</p>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">Built</p>
                  </div>
                  <div className="w-px h-10 bg-white/10" />
                  <div>
                    <p className="text-emerald-400 text-2xl font-bold">Live</p>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">In Production</p>
                  </div>
                </div>
                <Link
                  href="https://simplseo-io.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-200 font-semibold text-sm hover:bg-emerald-500/30 transition-colors"
                >
                  Try simplSEO
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <Link
                href="https://simplseo-io.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
              <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-emerald-500/20 transition-colors cursor-pointer">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-neutral-600 text-xs">simplSEO Dashboard</span>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-1/3 rounded bg-white/[0.06]" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <p className="text-emerald-400 text-xl font-bold">94</p>
                      <p className="text-neutral-600 text-[10px] uppercase">Health Score</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <p className="text-indigo-400 text-xl font-bold">127</p>
                      <p className="text-neutral-600 text-[10px] uppercase">Keywords</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      <p className="text-purple-400 text-xl font-bold">3</p>
                      <p className="text-neutral-600 text-[10px] uppercase">Competitors</p>
                    </div>
                  </div>
                  <div className="h-28 rounded-xl bg-white/[0.03] border border-white/[0.04] flex items-end gap-1 p-3">
                    {[40, 55, 45, 65, 50, 72, 60, 78, 68, 85, 75, 90].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-emerald-500/30 to-emerald-400/10" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="h-3 w-20 rounded bg-white/[0.04]" />
                    <div className="h-3 w-16 rounded bg-white/[0.04]" />
                    <div className="h-3 w-24 rounded bg-white/[0.04]" />
                  </div>
                </div>
              </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== COMING SOON ========== */}
      <section className="relative py-20 sm:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-500/[0.08] to-purple-500/[0.05] border border-indigo-500/15 p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-[80px] pointer-events-none" />
              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-400/20 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
                  </span>
                  <span className="text-indigo-300 text-xs font-semibold tracking-wider uppercase">Coming Soon</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  The All-in-One AI Business Platform
                </h3>
                <p className="text-neutral-400 leading-relaxed mb-6">
                  One platform to add AI chatbots to your website, automatically text back missed calls,
                  and collect more reviews — all managed from a single dashboard. Built for South Bend businesses
                  and beyond that want to capture every lead and never miss an opportunity.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AI Chatbots", "Missed Call Text-Back", "Review Management", "Lead Dashboard"].map((f) => (
                    <span key={f} className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.06] text-neutral-300 border border-white/10">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[40rem] bg-indigo-900/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Process</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                No tech jargon, no confusing proposals. Whether we meet locally in South Bend or work together remotely — here&apos;s how it goes.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all duration-300 h-full group">
                  <div className="text-4xl font-black text-white/[0.06] absolute top-5 right-5 group-hover:text-white/10 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 mt-6">{step.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== APP SHOWCASE ========== */}
      <section className="relative py-20 sm:py-24 bg-black border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
              <div>
                <p className="text-neutral-500 text-sm font-semibold tracking-widest uppercase mb-3">
                  App Development in South Bend
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Mobile App Development
                </h2>
                <p className="text-neutral-500 text-base mt-2 max-w-lg">
                  Need an app for your business or a personal idea brought to life? I design and develop iOS apps from concept to App Store — right here in South Bend, Indiana.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <svg className="w-4 h-4 text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="text-neutral-400 text-xs font-medium">Available on the App Store</span>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "La Loteria",
                icon: "/logos/laloteria.png",
                desc: "The classic Mexican bingo game — caller mode, play against the computer, all 54 traditional cards with authentic riddles. Perfect for family game nights.",
                status: "Live",
                url: "https://apps.apple.com/us/app/la-loteria-mexican-bingo/id6759211287",
              },
              {
                name: "Remind Me - Reminders",
                icon: "/logos/remindme.png",
                desc: "Simple, beginner-friendly reminder app with location-based and date/time alerts. No sign-up required — just create and let it assist you when you need it.",
                status: "Live",
                url: "https://apps.apple.com/us/app/remind-me-reminders/id1617564386",
              },
              {
                name: "Team Up - Teams",
                icon: "/logos/teamup.png",
                desc: "Stop wasting time picking teams. Type player names, choose the number of teams, and Team Up divides everyone evenly — no arguing over who's captain.",
                status: "Live",
                url: "https://apps.apple.com/us/app/team-up-teams/id1618447199",
              },
            ].map((app, i) => (
              <FadeIn key={app.name} delay={i * 100}>
                <Link
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-3">
                    <Image
                      src={app.icon}
                      alt={`${app.name} icon`}
                      width={56}
                      height={56}
                      className="rounded-xl object-contain flex-shrink-0"
                    />
                    <div className="flex items-center justify-between flex-1 min-w-0">
                      <h3 className="text-white font-semibold group-hover:text-indigo-300 transition-colors">{app.name}</h3>
                      <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                        {app.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed">{app.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-3 text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    View on App Store
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <p className="mt-10 text-neutral-600 text-sm max-w-2xl">
              Looking for an app development company near South Bend? Whether it&apos;s a customer-facing mobile app, an internal business tool, or a personal project — I handle the full process from design to deployment on the App Store.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Serving South Bend &amp; Beyond
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                Whether you&apos;re in South Bend, Mishawaka, Elkhart, or anywhere in the country — let&apos;s talk about what&apos;s slowing you down and how custom software can fix it.
                Free consultation, no strings attached.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm tracking-wide hover:from-indigo-600 hover:to-purple-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
                >
                  See My Work
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 py-12 text-center text-neutral-500">
        <p>&copy; 2026 Bryan Develops. All rights reserved.</p>
      </footer>
    </main>
  );
}
