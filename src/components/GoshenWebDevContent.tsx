"use client";

import Link from "next/link";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const problems = [
  {
    question: "Your website looks like it was built ten years ago?",
    answer:
      "Goshen customers judge your business in seconds. If your site looks outdated, they're clicking away and finding a competitor on Main Street or Downtown Goshen. A modern, professional website builds instant credibility and keeps visitors engaged.",
  },
  {
    question: "You paid for a website but can't even update your own hours?",
    answer:
      "This is one of the most common frustrations I hear from Goshen business owners. The original developer is gone, and now changing a phone number feels impossible. I build sites you can actually manage, and I train you how to do it.",
  },
  {
    question: "Your site doesn't show up when people search Goshen?",
    answer:
      "A great-looking website means nothing if Goshen customers can't find it on Google. Every site I build comes with SEO foundations baked in: proper structure, fast loading speeds, mobile-friendly design, and local keyword optimization.",
  },
  {
    question: "You need an online store but don't know where to start?",
    answer:
      "Whether you're selling products from a shop near Downtown Goshen or shipping nationwide, I'll set up your online store on Shopify, WooCommerce, or Squarespace. Payments, inventory, and shipping all connected and ready to go.",
  },
];

const services = [
  {
    title: "Custom Website Design",
    desc: "A site designed around your Goshen business, your brand, and your customers. Not a generic template with your logo dropped in.",
    accent: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce & Online Stores",
    desc: "Sell products or services online with a complete store setup. Shopify, WooCommerce, or Squarespace Commerce with payments, inventory, and shipping included.",
    accent: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Website Redesigns",
    desc: "Already have a site that needs a refresh? I'll modernize the design, improve the speed, and make sure it's actually converting Goshen visitors into customers.",
    accent: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "SEO-Ready Builds",
    desc: "Every website I build is structured for Google from the start: clean code, fast load times, proper headings, meta tags, and mobile optimization all baked in.",
    accent: "pink",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Mobile-Friendly Design",
    desc: "Over half of web traffic comes from phones. Every site I build looks and works perfectly on mobile, tablet, and desktop. No pinching or zooming required.",
    accent: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Training",
    desc: "After launch, I train you to manage your own site: change text, swap images, add pages. You'll never feel stuck or dependent on a developer again.",
    accent: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600", border: "border-indigo-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-600", border: "border-pink-500/20" },
};

export default function GoshenWebDevContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="light" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] bg-indigo-200/40 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-purple-200/30 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 sm:py-40">
          <FadeIn>
            <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Web Design & Development — Goshen, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight leading-[1.1] max-w-4xl mb-6">
              Professional Websites for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Goshen
              </span>{" "}
              Businesses
            </h1>
            <p className="text-neutral-500 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Affordable, modern websites built for small businesses in Goshen, Elkhart County, and northern Indiana.
              WordPress, Shopify, Squarespace, Wix, or custom code, whatever platform fits your business best.{" "}
              <span className="text-neutral-800 font-medium">Training included so you can manage it yourself.</span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services/web-development"
                className="px-7 py-3.5 rounded-full border border-neutral-300 text-neutral-700 font-semibold text-sm tracking-wide hover:bg-neutral-100 transition-all"
              >
                See All Web Dev Services
              </Link>
              <div className="hidden sm:flex items-center gap-2 ml-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 text-xs font-semibold">Budget-friendly pricing</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-12 text-neutral-400 text-sm">
              Based in South Bend, proudly serving Goshen, Elkhart County, and businesses nationwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Goshen Business Owners: Sound Familiar?
              </h2>
              <p className="text-neutral-500 text-lg max-w-xl mx-auto">
                Whether you&apos;re running a shop Downtown or a service business near the Elkhart County Fairgrounds,
                these website problems are costing you customers every day.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {problems.map((p, i) => (
              <FadeIn key={i} delay={(i % 4) * 80}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-red-50 border border-red-200 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-neutral-900 font-semibold mb-2">{p.question}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">{p.answer}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="relative py-24 sm:py-32 bg-white">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-indigo-100/50 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3">What I Build</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                Web Design Services for Goshen Companies
              </h2>
              <p className="text-neutral-500 text-lg max-w-2xl">
                From shops along Main Street to established businesses near Shanklin Park, I build
                websites tailored to your industry, your audience, and your goals.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const ac = accentClasses[svc.accent];
              return (
                <FadeIn key={svc.title} delay={(i % 3) * 100}>
                  <div className="relative p-7 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all duration-300 h-full">
                    <div className={`w-10 h-10 rounded-lg ${ac.bg} border ${ac.border} flex items-center justify-center mb-5 ${ac.text}`}>
                      {svc.icon}
                    </div>
                    <h3 className="text-neutral-900 text-lg font-bold mb-2">{svc.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== MID-PAGE CTA ========== */}
      <section className="relative py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-neutral-500 text-lg mb-6 max-w-xl mx-auto">
              Let&apos;s talk about your website. Free consultation, no pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
            >
              Get a Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ========== PLATFORMS ========== */}
      <section className="relative py-20 sm:py-24 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                I Work With Every Major Platform
              </h2>
              <p className="text-neutral-500 text-base max-w-xl mx-auto">
                WordPress, Shopify, Squarespace, Wix, Webflow, or fully custom code. I&apos;ll recommend
                the best fit for your Goshen business based on your budget and goals.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
              {["WordPress", "Shopify", "Squarespace", "Wix", "Webflow", "Custom Code"].map((platform) => (
                <div
                  key={platform}
                  className="flex items-center justify-center px-4 py-3.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                >
                  {platform}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== WHY LOCAL MATTERS ========== */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[20rem] h-[20rem] bg-emerald-100/40 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-neutral-50 border border-neutral-200 p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
                Why Goshen Businesses Choose a Local Web Developer
              </h2>
              <p className="text-neutral-500 leading-relaxed mb-6">
                You could go with a big agency from out of state, or you could work with someone who
                understands Indiana businesses. I&apos;m based in South Bend, about 30 minutes away,
                and I work with Goshen companies who want a developer they can actually reach.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-indigo-600 text-xl font-bold mb-1">Local</p>
                  <p className="text-neutral-500 text-sm">Based in Indiana, available for in-person meetings in Goshen</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-emerald-600 text-xl font-bold mb-1">Direct</p>
                  <p className="text-neutral-500 text-sm">You talk to me. No account managers, no middlemen, no runaround</p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-neutral-200">
                  <p className="text-purple-600 text-xl font-bold mb-1">Ongoing</p>
                  <p className="text-neutral-500 text-sm">I don&apos;t disappear after launch. Updates, support, and training included</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== INDUSTRIES ========== */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mb-3">
                Websites Built for Goshen Businesses Like Yours
              </h2>
              <p className="text-neutral-500 max-w-xl mx-auto">
                Whether you&apos;re in RV manufacturing, healthcare, agriculture, retail, or education
                in the Goshen area, a professional website can transform how customers find and trust you.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {["RV Manufacturing", "Healthcare", "Retail", "Restaurants", "Agriculture", "Education"].map((industry, i) => (
              <FadeIn key={industry} delay={(i % 6) * 60}>
                <div className="p-4 rounded-xl bg-white border border-neutral-200 text-center hover:border-indigo-300 hover:shadow-sm transition-all">
                  <p className="text-neutral-700 text-sm font-medium">{industry}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32 bg-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-indigo-100/40 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-4">
                Serving Goshen &amp; Elkhart County
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                Ready for a Website That Works for Your Business?
              </h2>
              <p className="text-neutral-500 text-lg mb-8">
                Whether you need a brand new site or a complete redesign, I&apos;ll build something that looks great,
                loads fast, and actually brings you customers. Free consultation for Goshen businesses.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-full border border-neutral-300 text-neutral-700 font-semibold text-sm tracking-wide hover:bg-neutral-100 transition-all"
                >
                  See My Work
                </Link>
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
