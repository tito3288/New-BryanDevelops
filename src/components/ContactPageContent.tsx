"use client";

import { useState, type FormEvent } from "react";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const services = [
  "Web Design",
  "SEO Optimization",
  "Custom Software",
  "Branding",
  "Technical Support",
  "Other",
];

export default function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen pt-28 sm:pt-32 pb-24 sm:pb-32 overflow-hidden">
      <FloatingDots variant="dark" />

      {/* Background blobs */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-purple-600/8 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[20rem] h-[20rem] bg-indigo-900/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Info */}
          <FadeIn delay={0}>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Get In Touch
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                  Let&apos;s Build Something Great.
                </h1>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-md">
                  Have a project in mind? Whether it&apos;s a website, SEO strategy,
                  or custom software — I&apos;d love to hear about it.
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+15743236945"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">Phone</p>
                    <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">(574) 323-6945</p>
                  </div>
                </a>

                <a
                  href="mailto:bryan@bryandevelops.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors">bryan@bryandevelops.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-white text-sm font-medium">South Bend, Indiana</p>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-emerald-300 text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={200}>
            <div className="relative rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-7 sm:p-9">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-bl-full pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-neutral-400 max-w-sm">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
                    }}
                    className="mt-6 px-5 py-2 rounded-full border border-white/15 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="text-xl font-bold text-white mb-1">Send a Message</h2>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-neutral-400 text-xs uppercase tracking-wider mb-2">
                        Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-neutral-400 text-xs uppercase tracking-wider mb-2">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Service row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-neutral-400 text-xs uppercase tracking-wider mb-2">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-neutral-400 text-xs uppercase tracking-wider mb-2">
                        Service *
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all appearance-none"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "16px" }}
                      >
                        <option value="" disabled className="bg-neutral-900 text-neutral-500">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-neutral-900 text-white">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-neutral-400 text-xs uppercase tracking-wider mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "16px" }}
                    >
                      <option value="" className="bg-neutral-900 text-neutral-500">Select a range</option>
                      <option value="under-1k" className="bg-neutral-900 text-white">Under $1,000</option>
                      <option value="1k-3k" className="bg-neutral-900 text-white">$1,000 – $3,000</option>
                      <option value="3k-5k" className="bg-neutral-900 text-white">$3,000 – $5,000</option>
                      <option value="5k-10k" className="bg-neutral-900 text-white">$5,000 – $10,000</option>
                      <option value="10k+" className="bg-neutral-900 text-white">$10,000+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-neutral-400 text-xs uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold text-sm tracking-wide hover:from-indigo-600 hover:to-purple-600 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.3)]"
                  >
                    Send Message
                  </button>

                  <p className="text-neutral-600 text-xs text-center">
                    Free consultation — no strings attached.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
