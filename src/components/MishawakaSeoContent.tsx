"use client";

import Link from "next/link";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const problems = [
  {
    question: "Your competitors show up on Google before you do?",
    answer:
      "When someone in Mishawaka searches for what you offer, your competitors are getting the click. SEO fixes that by getting your business to the top of the results, so customers find you first, not the other guy on Grape Road.",
  },
  {
    question: "You're spending money on ads but not seeing real growth?",
    answer:
      "Ads stop working the second you stop paying. SEO builds long-term traffic that keeps coming even when you're not running campaigns. It's how you get more website traffic without constantly feeding the ad machine.",
  },
  {
    question: "You don't show up when people search 'near me' in Mishawaka?",
    answer:
      "Local SEO is how businesses show up in Google Maps and 'near me' searches. If your Google Business Profile isn't optimized and your site isn't structured for local search, you're invisible to customers right in your own city.",
  },
  {
    question: "You're paying for SEO but can't tell if it's working?",
    answer:
      "No more mystery reports filled with jargon. I provide clear, monthly reporting that shows exactly what changed, what's working, and what we're doing next. You'll always know where your money is going.",
  },
];

const services = [
  {
    title: "Keyword Research & Strategy",
    desc: "Find the exact terms Mishawaka customers are typing into Google and build a plan to rank for them. Data-driven, not guesswork.",
    accent: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "On-Page Optimization",
    desc: "Optimize your pages (titles, headings, content, images) so Google understands what your business offers and ranks you higher for it.",
    accent: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Local SEO",
    desc: "Dominate Mishawaka search results. Google Business Profile optimization, local citations, reviews strategy, and map pack visibility.",
    accent: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Content Strategy",
    desc: "Blog posts, service pages, and location pages that answer the questions Mishawaka customers are actually searching for.",
    accent: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Technical SEO",
    desc: "Site speed, mobile performance, crawlability, and structured data. The behind-the-scenes work that makes Google trust your site.",
    accent: "pink",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Monthly Reporting",
    desc: "Clear, honest reports every month showing traffic, rankings, and leads. No jargon, no fluff. You'll always know exactly what's happening.",
    accent: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
};

const simplSeoFeatures = [
  "Automated site audits & health checks",
  "Keyword rank tracking over time",
  "Competitor analysis & monitoring",
  "One-click client reports",
  "Actionable recommendations",
];

export default function MishawakaSeoContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="dark" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[20rem] h-[20rem] bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 sm:py-40">
          <FadeIn>
            <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
              SEO Services — Mishawaka, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
              Get More Website Traffic for Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Mishawaka
              </span>{" "}
              Business
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Stop relying on ads to get found online. SEO helps Mishawaka businesses show up on Google
              organically, so customers find you when they&apos;re searching for exactly what you offer.
              Month-to-month, no long contracts.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm tracking-wide hover:from-purple-600 hover:to-indigo-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="/services/seo"
                className="px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
              >
                See All SEO Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-12 text-neutral-600 text-sm">
              Based right next door in South Bend, proudly serving Mishawaka, the Michiana area, and businesses nationwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Mishawaka Business Owners: Sound Familiar?
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                You know you need more website traffic, but ads are expensive and you&apos;re not sure
                where to start with SEO. These are the problems I solve every day.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={(i % 4) * 80}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ========== SEO vs GOOGLE ADS ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950 border-t border-white/[0.04]">
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
              Google Ads have their place, and I can help with those too. But if you want traffic that
              doesn&apos;t disappear when you stop paying, SEO is the foundation you need.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-purple-600/8 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Do</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                SEO Services for Mishawaka Businesses
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                From shops along the Grape Road corridor to businesses across St. Joseph County, I help
                Mishawaka companies get found on Google and get more website traffic month after month.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const ac = accentClasses[svc.accent];
              return (
                <FadeIn key={svc.title} delay={(i % 3) * 100}>
                  <div className="relative p-7 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 h-full">
                    <div className={`w-10 h-10 rounded-lg ${ac.bg} border ${ac.border} flex items-center justify-center mb-5 ${ac.text}`}>
                      {svc.icon}
                    </div>
                    <h3 className="text-white text-lg font-bold mb-2">{svc.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== MID-PAGE CTA ========== */}
      <section className="relative py-16 sm:py-20 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-neutral-400 text-lg mb-6 max-w-xl mx-auto">
              Let&apos;s talk about getting your business found on Google. Free audit, no pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm tracking-wide hover:from-purple-600 hover:to-indigo-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
            >
              Get a Free SEO Audit
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== simplSEO SECTION ========== */}
      <section className="relative py-24 sm:py-32 bg-black overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[25rem] h-[25rem] bg-emerald-600/10 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-emerald-600/5 rounded-full filter blur-[100px] pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">DIY Alternative</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                  Want to Handle SEO Yourself? I Built a Tool for That.
                </h2>

                <p className="text-neutral-400 leading-relaxed mb-4">
                  Not every business needs a full SEO expert, and I&apos;m honest about that. Some Mishawaka
                  business owners have the time and want to learn how SEO works themselves. That&apos;s exactly
                  why I built <span className="text-emerald-400 font-semibold">simplSEO</span>.
                </p>

                <p className="text-neutral-400 leading-relaxed mb-6">
                  It&apos;s an affordable, beginner-friendly SEO tool that puts professional-grade audits, keyword
                  tracking, and competitor monitoring in your hands at a fraction of the cost of hiring someone.
                  No SEO experience required. If you have the time and want to learn, simplSEO gives you everything
                  you need to get more website traffic on your own. And if you&apos;d rather have someone handle it
                  for you, that&apos;s what my monthly SEO service is for.
                </p>

                <p className="text-neutral-500 text-sm italic mb-8">
                  I believe in giving
                  businesses options. I&apos;d rather help you succeed with the right fit than sell you something
                  you don&apos;t need.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {simplSeoFeatures.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-neutral-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://simplseo-io.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all active:scale-[0.98]"
                  >
                    Try simplSEO
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-neutral-300 font-semibold text-sm hover:bg-white/10 transition-all"
                  >
                    Or Hire Me Instead
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== WHY LOCAL MATTERS ========== */}
      <section className="relative py-20 sm:py-24 bg-neutral-950 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[20rem] h-[20rem] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Why Mishawaka Businesses Choose a Local SEO Expert
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                A big SEO agency from out of state doesn&apos;t know Mishawaka. They don&apos;t know that
                your customers search differently along the Grape Road corridor versus Main Street, or that local
                citations in St. Joseph County directories matter. I&apos;m based right next door in South Bend,
                and I understand how Michiana area businesses operate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-purple-400 text-xl font-bold mb-1">Local</p>
                  <p className="text-neutral-500 text-sm">Based in South Bend, I understand Mishawaka search patterns and local competition</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-emerald-400 text-xl font-bold mb-1">Transparent</p>
                  <p className="text-neutral-500 text-sm">Monthly reports you can actually understand. No jargon, no mystery</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-indigo-400 text-xl font-bold mb-1">Flexible</p>
                  <p className="text-neutral-500 text-sm">Month-to-month plans. No long-term contracts, no lock-in</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="relative py-20 sm:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                SEO for Mishawaka Businesses Like Yours
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto">
                Whether you&apos;re in retail, healthcare, manufacturing, automotive, or hospitality
                in the Mishawaka area, SEO can help customers find you before they find your competitors.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Retail", "Healthcare", "Manufacturing", "Automotive", "Hospitality", "Professional Services"].map((industry, i) => (
              <FadeIn key={industry} delay={(i % 6) * 60}>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center hover:bg-white/[0.06] transition-all">
                  <p className="text-neutral-300 text-sm font-medium">{industry}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-purple-900/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Serving Mishawaka &amp; St. Joseph County
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Ready to Get Found on Google?
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                Whether you want full-service monthly SEO management or prefer to try simplSEO and handle it yourself,
                I&apos;ll help you figure out the right path. Free SEO audit for Mishawaka businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold text-sm tracking-wide hover:from-purple-600 hover:to-indigo-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(139,92,246,0.3)]"
                >
                  Get a Free SEO Audit
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
