"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

const faqs = [
  {
    question: "Is your web design service affordable?",
    answer:
      "Yes — I'm affordable and work with all kinds of budgets. Every project is different, so we'll discuss your needs and find a solution that fits you. I offer free consultations so we can explore what's possible — no strings attached.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 4 to 8 weeks, depending on the project size. Simple landing pages can be done in as little as 2 weeks, while more complex sites with custom software or e-commerce features may take 8 to 12 weeks. You'll have access to a live development server to track progress the entire time.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes! SEO is built into every website I create. I also offer standalone SEO optimization packages that include keyword research, on-page SEO, technical SEO audits, local SEO for Google Maps, and ongoing rank tracking. My goal is to get your business on the first page of Google.",
  },
  {
    question: "Can you build custom software or web applications?",
    answer:
      "Absolutely. I build custom software solutions including SaaS platforms, business dashboards, booking systems, CRM tools, and workflow automation. If you have an idea for a tool that could streamline your business, I can bring it to life.",
  },
  {
    question: "Do you work with businesses outside of South Bend?",
    answer:
      "Yes! While I'm based in South Bend, Indiana, I work with businesses across the entire country. Everything is done remotely with regular video calls, screen sharing, and live access to your project. Many of my best clients are located in other states.",
  },
  {
    question: "What happens after my website is launched?",
    answer:
      "I don't disappear after launch. I offer ongoing technical support, maintenance packages, performance monitoring, and updates. Whether you need a quick content change or a major feature addition down the road, I'm here to help your site stay fast, secure, and up to date.",
  },
  {
    question: "Do I own my website after it's built?",
    answer:
      "100%. You own everything — the design, the code, the domain, and all the content. I build on platforms and frameworks that give you full ownership and flexibility. You're never locked into a contract or proprietary system.",
  },
  {
    question: "What makes Bryan Develops different from other web designers?",
    answer:
      "I combine design, development, SEO, and software engineering into one service. Most agencies outsource pieces of the work — I handle everything personally. That means faster turnaround, better communication, and a cohesive final product. Plus, every project includes SEO optimization from day one.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#f8f9fa] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-40 right-0 w-[30rem] h-[30rem] bg-indigo-100 rounded-full filter blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[24rem] h-[24rem] bg-purple-100 rounded-full filter blur-[100px] opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-indigo-500 text-sm font-semibold tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Everything you need to know about working with me. Can&apos;t find your answer?{" "}
              <a href="/contact" className="text-indigo-500 font-medium hover:text-indigo-600 transition-colors">
                Get in touch
              </a>.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={(i % 4) * 80}>
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "bg-white border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
                    : "bg-white/60 border-white hover:border-neutral-200 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <h3 className="text-neutral-900 font-semibold text-base sm:text-lg pr-2">
                    {faq.question}
                  </h3>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i
                        ? "bg-indigo-500 text-white rotate-45"
                        : "bg-neutral-100 text-neutral-500"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-neutral-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* JSON-LD FAQPage structured data for SEO + AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
