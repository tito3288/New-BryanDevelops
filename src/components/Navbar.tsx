"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "My Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Custom Software", href: "/services/software", desc: "Automation, AI & business tools" },
  { label: "Web Development", href: "/services/web-development", desc: "Affordable websites on any platform" },
  { label: "SEO Services", href: "/services/seo", desc: "Get found on Google & grow traffic" },
];

export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isServicesActive = pathname.startsWith("/services");

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-12 transition-colors bg-black backdrop-blur-lg border-b border-white/10"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/Bryan-Develops-logo-2.png"
            alt="Bryan Develops"
            width={280}
            height={72}
            className="h-20 w-auto object-contain object-left"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {/* Home */}
          <Link
            href="/"
            className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isActive("/") ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
            }`}
          >
            {isActive("/") && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isServicesActive ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
              }`}
            >
              {isServicesActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
              Services
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                servicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-72 rounded-xl bg-neutral-900 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl overflow-hidden">
                <div className="p-2">
                  {serviceLinks.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className={`flex flex-col gap-0.5 px-4 py-3 rounded-lg transition-colors ${
                        isActive(svc.href)
                          ? "bg-indigo-500/10 text-white"
                          : "text-neutral-300 hover:bg-white/[0.06] hover:text-white"
                      }`}
                    >
                      <span className="text-sm font-medium">{svc.label}</span>
                      <span className="text-[11px] text-neutral-500">{svc.desc}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-white/[0.06] p-2">
                  <Link
                    href="/services"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors text-xs font-medium"
                  >
                    View all services
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Other nav links */}
          {navLinks.filter(l => l.label !== "Home" && l.label !== "Contact").map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  active ? "text-white font-semibold" : "text-neutral-400 hover:text-white"
                }`}
              >
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                )}
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="px-5 py-2 rounded-full text-sm font-medium transition-all bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white"
          >
            Get Started
          </Link>

          <button
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg transition-colors hover:bg-white/10"
            aria-label="Open info panel"
          >
            <span className="block w-5 h-[2px] rounded-full bg-white" />
            <span className="block w-5 h-[2px] rounded-full bg-white" />
            <span className="block w-3.5 h-[2px] rounded-full bg-white" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg transition-colors hover:bg-white/10"
          aria-label="Open menu"
        >
          <span className="block w-5 h-[2px] rounded-full bg-white" />
          <span className="block w-5 h-[2px] rounded-full bg-white" />
          <span className="block w-3.5 h-[2px] rounded-full bg-white" />
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[85vw] max-w-sm bg-white shadow-[-8px_0_30px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out flex flex-col overflow-y-auto ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end p-5">
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Logo + Description */}
        <div className="px-7 mb-6">
          <div className="flex items-center mb-4">
            <Image
              src="/Bryan-Develops-logo-2.png"
              alt="Bryan Develops"
              width={280}
              height={72}
              className="h-20 w-auto object-contain object-left invert"
            />
          </div>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Custom web design, SEO optimization, and software development for businesses in South Bend and across the country. Standing out online? That&apos;s where I come in.
          </p>
        </div>

        {/* Nav Links — mobile only */}
        <nav className="px-7 mb-6 flex flex-col gap-1 md:hidden">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
              isActive("/")
                ? "bg-indigo-50 text-indigo-600"
                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
            }`}
          >
            {isActive("/") && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
            Home
          </Link>

          {/* Services — expandable */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                isServicesActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              }`}
            >
              <span className="flex items-center gap-2.5">
                {isServicesActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                Services
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="pl-6 py-1 flex flex-col gap-0.5">
                {serviceLinks.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    onClick={() => setDrawerOpen(false)}
                    className={`flex flex-col px-3 py-2.5 rounded-lg transition-colors ${
                      isActive(svc.href)
                        ? "bg-indigo-50/60 text-indigo-600"
                        : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                    }`}
                  >
                    <span className="text-sm font-medium">{svc.label}</span>
                    <span className="text-[11px] text-neutral-400">{svc.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other links */}
          {navLinks.filter(l => l.label !== "Home" && l.label !== "Contact").map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                  active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Divider — mobile only */}
        <div className="mx-7 border-t border-neutral-100 md:hidden" />

        {/* Contact Info */}
        <div className="px-7 pt-6 flex flex-col gap-4">
          <h4 className="text-neutral-900 font-semibold text-sm tracking-wide">Contact</h4>

          <a href="tel:+15743236945" className="flex items-center gap-3 text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
            <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (574) 323-6945
          </a>

          <a href="mailto:bryan@bryandevelops.com" className="flex items-center gap-3 text-neutral-600 text-sm hover:text-neutral-900 transition-colors">
            <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            bryan@bryandevelops.com
          </a>

          <div className="flex items-center gap-3 text-neutral-600 text-sm">
            <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            South Bend, Indiana
          </div>
        </div>

        {/* Services summary — desktop only */}
        <div className="hidden md:block px-7 pt-6">
          <div className="border-t border-neutral-100 pt-6">
            <h4 className="text-neutral-900 font-semibold text-sm tracking-wide mb-3">Services</h4>
            <div className="flex flex-wrap gap-2">
              {["Web Design", "SEO", "Custom Software", "App Development", "AI Tools", "Branding"].map((s) => (
                <span key={s} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-auto p-7">
          <Link
            href="/contact"
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}
