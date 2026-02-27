"use client";

import Link from "next/link";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const problems = [
  {
    question: "Are you still running your business on spreadsheets and sticky notes?",
    answer:
      "Fort Wayne is growing fast — your tools should keep up. Custom software replaces the manual busywork with automated systems that track leads, manage orders, and handle follow-ups for you.",
  },
  {
    question: "Losing customers because you can't respond fast enough?",
    answer:
      "Whether it's a missed call from a homeowner in Aboite or a late reply to an online inquiry, speed wins. I build AI-powered tools that respond instantly — texts, chatbots, and automated follow-ups.",
  },
  {
    question: "Paying for 5 different tools that don't talk to each other?",
    answer:
      "Scheduling app, CRM, invoicing tool, email platform — sound familiar? I build one custom system that connects everything so your Fort Wayne team isn't wasting time switching between tabs.",
  },
  {
    question: "Can't see how your business is actually doing?",
    answer:
      "Custom dashboards give you real-time numbers — revenue, leads, customer activity — all in one clean view. No more guessing, no more end-of-month surprises.",
  },
];

const services = [
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks like data entry, appointment reminders, invoice generation, and lead follow-ups. Your team gets hours back every week.",
    accent: "indigo",
  },
  {
    title: "AI Chatbots & Missed Call Text-Back",
    desc: "Never lose a lead again. AI chatbots answer customer questions 24/7, and missed call text-back makes sure every phone call turns into a conversation.",
    accent: "emerald",
  },
  {
    title: "Custom Business Dashboards",
    desc: "See your entire operation at a glance — revenue, leads, team performance, and customer data — all in real-time from any device.",
    accent: "purple",
  },
  {
    title: "Mobile App Development",
    desc: "From customer-facing apps to internal tools, I build iOS apps from concept to the App Store — designed for real-world use, not just demos.",
    accent: "amber",
  },
  {
    title: "Custom Platforms & SaaS",
    desc: "Need user accounts, billing, admin panels, or a full product? I build complete platforms from scratch — scalable and ready for growth.",
    accent: "pink",
  },
  {
    title: "Integrations",
    desc: "Connect the tools you already use — CRM, email, payments, scheduling — into one seamless system. No more copy-pasting between apps.",
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

export default function FortWayneSoftwareContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="dark" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[20rem] h-[20rem] bg-purple-600/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 sm:py-40">
          <FadeIn>
            <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Software & App Development — Fort Wayne, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
              Custom Software for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Fort Wayne
              </span>{" "}
              Businesses
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Fort Wayne is one of the fastest-growing cities in Indiana — and its businesses deserve
              better than off-the-shelf software. I build custom tools, automations, and apps
              designed around how your business actually operates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm tracking-wide hover:from-indigo-600 hover:to-purple-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services/software"
                className="px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm tracking-wide hover:bg-white/10 transition-all"
              >
                See All Software Services
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-12 text-neutral-600 text-sm">
              Based in South Bend, proudly serving Fort Wayne, northeast Indiana, and businesses nationwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAIN POINTS — Fort Wayne specific ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Fort Wayne Business Owners: Sound Familiar?
              </h2>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto">
                Whether you&apos;re on the north side near Dupont or running a shop downtown on Calhoun,
                these problems cost you time and money every single day.
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

      {/* ========== SERVICES GRID ========== */}
      <section className="relative py-24 sm:py-32 bg-neutral-950">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-indigo-600/8 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">What I Build</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Software Solutions for Fort Wayne Companies
              </h2>
              <p className="text-neutral-400 text-lg max-w-2xl">
                From downtown startups to established businesses in southwest Fort Wayne — I build
                software tailored to your industry, your team, and your customers.
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
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
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

      {/* ========== WHY LOCAL MATTERS ========== */}
      <section className="relative py-20 sm:py-24 bg-black overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[20rem] h-[20rem] bg-emerald-600/10 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                Why Fort Wayne Businesses Choose a Local Developer
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                You could hire a big agency from out of state — or you could work with someone who
                understands Indiana businesses. I&apos;m based in South Bend, just two hours up the road,
                and I work with Fort Wayne companies who want a developer they can actually talk to.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-indigo-400 text-xl font-bold mb-1">Local</p>
                  <p className="text-neutral-500 text-sm">Based in Indiana, available for in-person meetings in Fort Wayne</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-emerald-400 text-xl font-bold mb-1">Direct</p>
                  <p className="text-neutral-500 text-sm">You talk to me — no account managers, no middlemen, no runaround</p>
                </div>
                <div className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                  <p className="text-purple-400 text-xl font-bold mb-1">Ongoing</p>
                  <p className="text-neutral-500 text-sm">I don&apos;t disappear after launch — updates, support, and improvements included</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== SOCIAL PROOF / CONTEXT ========== */}
      <section className="relative py-20 sm:py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Built for Businesses Like Yours
              </h2>
              <p className="text-neutral-400 max-w-xl mx-auto">
                Whether you&apos;re in construction, healthcare, retail, home services, or professional services in the Fort Wayne area — custom software can transform how you operate.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["Contractors", "Healthcare", "Retail", "Restaurants", "Real Estate", "Professional Services"].map((industry, i) => (
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-indigo-900/15 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Serving Fort Wayne &amp; Northeast Indiana
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Let&apos;s Build Something for Your Business
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                Whether you need a simple automation or a full custom platform, I&apos;ll help you figure out the smartest solution — no pressure, no jargon.
                Free consultation for Fort Wayne businesses.
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
