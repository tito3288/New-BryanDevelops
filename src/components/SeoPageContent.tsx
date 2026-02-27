"use client";

import Link from "next/link";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const painPoints = [
  {
    question: "You're spending money on ads but not seeing real growth?",
    answer:
      "Google Ads can bring traffic, but the moment you stop paying, it disappears. SEO builds something permanent — organic traffic that keeps coming whether you're spending on ads that week or not.",
  },
  {
    question: "You have a website but it doesn't show up when people search for your services?",
    answer:
      "A website without SEO is like a billboard in the desert. If Google doesn't know what your site is about, your customers will never find it. I fix that with proper structure, content, and optimization.",
  },
  {
    question: "You don't understand what your current SEO person is even doing?",
    answer:
      "This is more common than you'd think. Every month I send you a clear, plain-English report showing exactly what was changed, what's working, what isn't, and what we're doing next. No mystery, no jargon.",
  },
  {
    question: "You want more leads but don't want to keep increasing your ad budget?",
    answer:
      "SEO is the long game that pays off. Instead of paying more for each click, you invest in content and optimization that compounds over time. Six months from now, the same pages bring you traffic for free.",
  },
];

const services = [
  {
    title: "Keyword Research & Strategy",
    desc: "I find exactly what your potential customers are typing into Google and build a plan to get you in front of them.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "On-Page Optimization",
    desc: "Improving your existing pages — titles, headings, content, images — so Google understands what you offer and ranks you higher.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    desc: "Google Business Profile optimization, local directories, and map pack strategy so people in South Bend and nearby cities find you first.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Content Strategy",
    desc: "Blog posts, landing pages, and service pages designed to attract the right traffic and convert visitors into customers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Technical SEO",
    desc: "Site speed, mobile optimization, structured data, crawlability — the behind-the-scenes work that Google rewards with higher rankings.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Monthly Reporting",
    desc: "Every month you get a clear report: what changed, what's working, what isn't, and the plan for next month. Full transparency, always.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "I analyze your current site, your competitors, and your rankings to find the biggest opportunities.",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Based on real data, I build a custom SEO plan targeting the keywords and pages that will move the needle.",
  },
  {
    num: "03",
    title: "Execute",
    desc: "Every month I implement optimizations, create content, and make the changes that improve your rankings.",
  },
  {
    num: "04",
    title: "Report",
    desc: "You get a transparent monthly report showing exactly what happened, what's working, and what's next.",
  },
];

export default function SeoPageContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="dark" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full filter blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-orange-500/8 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 sm:py-40">
          <FadeIn>
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
              SEO Services — South Bend, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
              Stop Paying for Clicks.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                Start Owning Your Traffic.
              </span>
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              SEO is the difference between renting traffic and owning it. I help businesses
              in South Bend build organic visibility that grows every month — with transparent
              reporting so you always know what&apos;s working.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm tracking-wide hover:from-amber-600 hover:to-orange-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="/projects"
                className="px-7 py-3.5 rounded-full border border-white/10 text-neutral-300 font-semibold text-sm tracking-wide hover:bg-white/[0.06] transition-all"
              >
                See My Work
              </Link>
              <div className="hidden sm:flex items-center gap-2 ml-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-amber-300 text-xs font-semibold">Month-to-month — no contracts</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-12 text-neutral-500 text-sm">
              Based in South Bend, Indiana — helping Michiana businesses and clients nationwide get found on Google.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== SEO vs GOOGLE ADS ========== */}
      <section className="relative py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[40rem] bg-amber-500/5 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
                The Real Difference
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                SEO vs. Google Ads
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Both can bring traffic. But only one builds something that lasts.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <FadeIn delay={100}>
              <div className="relative rounded-2xl bg-red-500/[0.04] border border-red-500/10 p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">Google Ads</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "You pay for every single click",
                    "Traffic stops when the budget runs out",
                    "Costs tend to go up over time",
                    "You're renting visibility, not building it",
                    "Competitors can outbid you overnight",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-400 text-sm">
                      <svg className="w-4 h-4 text-red-400/60 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/10 p-8 h-full">
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-emerald-500 text-white rounded-full">
                    Better long-term
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">SEO</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {[
                    "One monthly investment, compounding returns",
                    "Traffic keeps coming even when you pause",
                    "Costs stay predictable month to month",
                    "You own your rankings and your content",
                    "Builds authority competitors can't just buy",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-neutral-400 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={300}>
            <p className="text-center text-neutral-500 text-sm mt-8 max-w-xl mx-auto">
              Google Ads have their place — I can help with those too. But if you want traffic that
              doesn&apos;t disappear when you stop paying, SEO is the foundation you need.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-0 right-1/4 w-[25rem] h-[25rem] bg-orange-500/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Does This Sound Like You?
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                If you&apos;re a business owner in South Bend dealing with any of these, you&apos;re not alone — and I can help.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {painPoints.map((p, i) => (
              <FadeIn key={i} delay={(i % 4) * 80}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{p.question}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{p.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHAT YOU GET ========== */}
      <section className="relative py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-amber-500/5 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">What&apos;s Included</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Monthly SEO Management
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                Every month I work on your site to improve rankings, drive traffic, and bring in more customers. Here&apos;s what that looks like.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={(i % 3) * 100}>
                <div className="relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-all duration-300 h-full group">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 text-amber-400 group-hover:scale-110 transition-transform">
                    {svc.icon}
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{svc.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FULL TRANSPARENCY ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[25rem] h-[25rem] bg-amber-500/5 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-amber-300 text-xs font-semibold tracking-wider uppercase">What Makes Me Different</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                  Full Transparency. Every Month.
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed mb-6">
                  A lot of SEO companies send vague reports full of numbers that don&apos;t mean anything.
                  I do the opposite. Every month you get a clear breakdown of what happened, what&apos;s
                  working, what isn&apos;t, and exactly what I&apos;m doing next.
                </p>
                <p className="text-neutral-300 font-medium mb-6">
                  You&apos;ll always know exactly where your money is going.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Which pages are ranking and which need work",
                    "What changes were made and why",
                    "Traffic and lead numbers in plain English",
                    "The plan for next month based on real data",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-400 text-sm">
                      <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-8">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="ml-3 text-neutral-500 text-xs">Monthly SEO Report — January 2026</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-sm text-neutral-300">Organic Traffic</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">2,847</span>
                      <span className="text-xs font-semibold text-emerald-400">+34%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-sm text-neutral-300">Keywords Ranking</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">127</span>
                      <span className="text-xs font-semibold text-emerald-400">+18</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-sm text-neutral-300">Top 5 Positions</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">14</span>
                      <span className="text-xs font-semibold text-emerald-400">+5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <span className="text-sm text-neutral-300">Leads from Organic</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">23</span>
                      <span className="text-xs font-semibold text-emerald-400">+41%</span>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06] pt-4 mt-2">
                    <p className="text-neutral-500 text-xs leading-relaxed">
                      <span className="text-amber-400 font-semibold">Changes this month:</span>{" "}
                      Optimized 4 service pages, published 2 blog posts, fixed mobile speed issues, updated Google Business Profile.
                    </p>
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-amber-500/[0.06] border border-amber-500/10">
                    <p className="text-neutral-500 text-xs leading-relaxed">
                      <span className="text-amber-300 font-semibold">Next month plan:</span>{" "}
                      Target 3 new long-tail keywords, create Fort Wayne landing page, build 5 local citations.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== SIMPLSEO ========== */}
      <section className="relative py-24 sm:py-32 border-t border-white/[0.04]">
        <div className="absolute top-1/2 left-0 w-[20rem] h-[20rem] bg-emerald-500/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500/[0.08] to-green-500/[0.04] border border-emerald-500/10 p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full filter blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-300 text-xs font-semibold tracking-wider uppercase">DIY Alternative</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  Want to Handle SEO Yourself?{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                    I Built a Tool for That.
                  </span>
                </h2>

                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                  Not every business is ready to hire an SEO expert — and that&apos;s okay.
                  That&apos;s why I created <span className="text-emerald-400 font-semibold">simplSEO</span>,
                  an affordable SEO software that gives you the same insights I use: site audits,
                  keyword tracking, ranking reports, and actionable recommendations.
                </p>

                <p className="text-neutral-300 font-medium mb-8">
                  A fraction of the cost of hiring someone — with the same data driving your decisions.
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Site health audits",
                    "Keyword rank tracking",
                    "Competitor analysis",
                    "Monthly reports",
                    "Actionable recommendations",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://simplseo-io.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-sm tracking-wide hover:from-emerald-700 hover:to-green-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(16,185,129,0.25)]"
                  >
                    Try simplSEO
                  </Link>
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 rounded-full border border-white/10 text-neutral-300 font-semibold text-sm tracking-wide hover:bg-white/[0.06] transition-all"
                  >
                    Or Hire Me Instead
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[40rem] bg-amber-500/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Process</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                Simple, transparent, and built around your business goals. No mystery, no jargon.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-all duration-300 h-full group">
                  <div className="text-4xl font-black text-white/[0.04] absolute top-5 right-5 group-hover:text-white/[0.08] transition-colors">
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

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Serving South Bend &amp; Beyond
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to Get Found on Google?
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                Whether you&apos;re in South Bend, Mishawaka, Elkhart, Fort Wayne, or anywhere in the country —
                let&apos;s build an SEO strategy that brings you consistent organic traffic.
                Free audit, no strings attached.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm tracking-wide hover:from-amber-600 hover:to-orange-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
                >
                  Get a Free SEO Audit
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
