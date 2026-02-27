"use client";

import Link from "next/link";
import FloatingDots from "./CursorDots";
import FadeIn from "./FadeIn";

const platformsBase = [
  {
    name: "WordPress",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM3.009 12c0-1.298.29-2.529.8-3.636l4.404 12.063A8.992 8.992 0 013.009 12zm8.991 9c-.934 0-1.833-.146-2.679-.42l2.845-8.263 2.914 7.985a.845.845 0 00.065.132A8.94 8.94 0 0112 21zm1.238-13.156c.572-.03 1.086-.09 1.086-.09.51-.06.45-.81-.061-.78 0 0-1.534.12-2.523.12-.93 0-2.493-.12-2.493-.12-.511-.03-.571.75-.06.78 0 0 .484.06 1.005.09l1.494 4.094-2.099 6.295-3.495-10.39c.572-.03 1.086-.09 1.086-.09.511-.06.45-.81-.06-.78 0 0-1.534.12-2.523.12-.178 0-.387-.005-.605-.014A8.963 8.963 0 0112 3.009c2.339 0 4.471.895 6.07 2.36-.038-.002-.076-.008-.116-.008-1.003 0-1.714.873-1.714 1.81 0 .84.485 1.551 1.002 2.392.387.68.84 1.55.84 2.81 0 .87-.335 1.88-.777 3.287l-1.018 3.402-3.698-11.017zm4.824 1.609c.758 1.203 1.194 2.66 1.194 4.207a8.973 8.973 0 01-4.093 7.529l2.516-7.275c.47-1.174.626-2.115.626-2.95 0-.303-.02-.585-.057-.85-.014-.087-.03-.17-.049-.252-.048-.235-.115-.478-.137-.41z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M15.337 3.654a.14.14 0 00-.124-.1 1.412 1.412 0 00-.253-.027c-.105 0-2.339-.04-2.339-.04s-1.564-1.518-1.724-1.678a.587.587 0 00-.45-.18l-.96 19.999 7.07-1.532S15.377 3.77 15.337 3.654zm-3.2 1.39l-.965 2.99a3.81 3.81 0 00-1.604-.352c-1.274 0-1.338.8-1.338 1.002 0 1.1 2.864 1.52 2.864 4.1 0 2.027-1.287 3.332-3.022 3.332-2.084 0-3.148-1.296-3.148-1.296l.557-1.842s1.093.94 2.015.94a.816.816 0 00.848-.822c0-1.434-2.352-1.498-2.352-3.861 0-1.985 1.424-3.907 4.298-3.907a3.582 3.582 0 011.847.416z" />
      </svg>
    ),
  },
  {
    name: "Squarespace",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.006 17.196a3.36 3.36 0 01-2.384-.987l-5.835-5.83a1.683 1.683 0 010-2.38 1.686 1.686 0 012.384 0l5.835 5.83a.338.338 0 00.477 0 .338.338 0 000-.476l-5.835-5.83a1.683 1.683 0 010-2.38 1.686 1.686 0 012.384 0l5.835 5.83a3.358 3.358 0 010 4.756 3.36 3.36 0 01-2.384.987h-.477zm2.86-1.464a3.358 3.358 0 000-4.756l-5.835-5.83a3.371 3.371 0 00-4.768 0 3.358 3.358 0 000 4.756l.477.476a1.683 1.683 0 010-2.38l-.477-.476a.338.338 0 010-.477.34.34 0 01.477 0l5.835 5.83a1.683 1.683 0 002.384 0 1.683 1.683 0 000-2.38l-5.835-5.83a.338.338 0 00-.477 0 .338.338 0 000 .477l5.835 5.83a3.371 3.371 0 012.384 4.79z" />
      </svg>
    ),
  },
  {
    name: "Wix",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4.164 7.87c-.323.358-.538 1.018-.538 1.018s-.21-.67-.513-1.01c-.303-.34-.772-.607-.772-.607s.715-.215 1.02-.68c.306-.466.28-1.221.28-1.221s.18.733.523 1.16c.343.428.776.586.776.586s-.452.396-.776.755zm2.506 8.39L4.26 8.39s-.32 1.072-.748 1.87c-.427.798-1.127 1.502-1.127 1.502l2.133 6.13h2.152zm3.476 0L7.74 8.39l2.406 7.87zm2.094 0l2.406-7.87-2.406 7.87zm3.476 0l2.152-6.13s-.7-.704-1.127-1.502c-.428-.798-.748-1.87-.748-1.87l-2.41 7.87h2.133zm3.12-7.87s-.469-.247-.772-.586c-.303-.34-.523-1.16-.523-1.16s-.025.755.28 1.221c.306.465 1.02.68 1.02.68s-.469.268-.772.607c-.303.34-.513 1.01-.513 1.01s-.215-.66-.538-1.018c-.324-.358-.776-.755-.776-.755s.433-.158.776-.586c.344-.427.523-1.16.523-1.16s.268.755.574 1.221c.306.466 1.02.68 1.02.68s-.469.247-.772.607c-.303.34-.538 1.018-.538 1.018l.591 1.862 2.133 6.13h-2.152l-2.41-7.87 2.406 7.87h2.152z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.802 8.56s-1.946 6.07-2.063 6.426c-.047-.39-.777-6.426-.777-6.426a3.533 3.533 0 00-3.46-2.776s1.906 5.895 2.032 6.31c-.052-.096-2.893-6.31-2.893-6.31A3.6 3.6 0 007.27 3.5L4.2 12.26l-.003.002c-.048.15-.08.31-.08.478a1.62 1.62 0 001.618 1.619h.003s1.932-5.946 2.052-6.32c.053.408.776 6.32.776 6.32a3.498 3.498 0 003.396 2.793s-1.932-6.035-2.049-6.393c.058.108 2.886 6.393 2.886 6.393A3.6 3.6 0 0016.192 20.5l3.409-9.918c.044-.142.076-.294.076-.455a1.62 1.62 0 00-1.619-1.619c-.085 0-.17.015-.256.053z" />
      </svg>
    ),
  },
  {
    name: "Weebly",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.72 4.97c-.58-.07-1.2-.01-1.82.15-1.07.27-2.17.88-3.08 1.79-.38.38-.7.79-.97 1.21l-.03-.04c-.43-.56-1.03-1.03-1.78-1.31-.64-.24-1.36-.34-2.14-.25-.78.1-1.5.37-2.14.76A6.07 6.07 0 007 9.14c-.4.68-.67 1.41-.81 2.15-.14.76-.16 1.52-.04 2.22.11.68.36 1.32.73 1.86.38.57.9 1.01 1.54 1.3.64.29 1.42.42 2.3.32.88-.1 1.67-.4 2.32-.83a5.59 5.59 0 001.55-1.55c.19-.28.35-.58.49-.88l.01.02c.23.44.56.83 1.01 1.13.44.3.98.48 1.59.52.62.04 1.31-.06 2.05-.33.74-.27 1.44-.67 2.06-1.17a6.93 6.93 0 001.59-1.86c.41-.72.7-1.49.84-2.25.15-.76.16-1.5.02-2.18-.13-.66-.4-1.25-.79-1.73-.39-.48-.92-.83-1.55-.97a3.14 3.14 0 00-.59-.08z" />
      </svg>
    ),
  },
  {
    name: "BigCommerce",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M7.86 2L2 7.86l10.14 10.14L22 8.14V2H7.86zM17 8a2 2 0 110-4 2 2 0 010 4zM5.71 16.29L2 20h6l1.71-1.71-4-4zM12.14 22L22 12.14V22H12.14z" />
      </svg>
    ),
  },
  {
    name: "GoDaddy",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.8 14.4c-.4.6-1 1-1.6 1.2-.7.3-1.4.4-2.2.4-1.2 0-2.2-.3-3-.9s-1.3-1.4-1.5-2.5h-.5c-.5 0-.9-.2-1.2-.5-.3-.3-.5-.8-.5-1.3 0-.4.1-.8.4-1.1.3-.3.6-.5 1-.5h.6c.1-.5.3-1 .6-1.4.3-.5.7-.9 1.2-1.2.5-.3 1-.5 1.5-.6.6-.2 1.2-.2 1.8-.2.8 0 1.6.1 2.2.4.7.3 1.2.6 1.6 1.1.4.5.6 1 .6 1.5 0 .4-.1.7-.4 1-.2.3-.6.4-1 .4-.3 0-.6-.1-.8-.3-.2-.2-.3-.4-.4-.7-.1-.4-.3-.7-.6-1-.3-.3-.8-.4-1.4-.4-.8 0-1.5.3-2 .8-.5.5-.8 1.2-.9 2.1h4.1c.5 0 .9.2 1.2.5.3.3.4.7.4 1.1 0 .5-.1.9-.4 1.2-.3.3-.7.5-1.2.5h-4.2c.1.8.4 1.4.9 1.9.5.4 1.1.7 1.8.7.4 0 .8-.1 1.1-.2.3-.1.6-.3.8-.6.2-.2.4-.4.5-.5.2-.1.4-.2.6-.2.3 0 .6.1.8.3.2.2.3.5.3.8 0 .3-.2.7-.5 1z" />
      </svg>
    ),
  },
  {
    name: "Drupal",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.195 1c-.568.923-1.728 1.467-2.634 2.126-1.166.848-2.345 1.706-3.348 2.727C4.461 7.698 3.17 9.95 3.17 13.097c0 4.737 3.838 8.574 8.58 8.574.078 0 .155-.003.232-.006a8.574 8.574 0 008.348-8.568c0-3.2-1.506-5.24-3.06-7.16C15.86 4.171 13.205 2.174 12.195 1zm4.282 16.97a.88.88 0 01-.613.247c-.193 0-.429-.098-.613-.297-.546-.585-1.024-.924-1.762-1.057-.738-.133-1.434.05-2.168.438a.863.863 0 01-.4.101.853.853 0 01-.741-.424.876.876 0 01.085-1.004c.32-.387.679-.72 1.091-.978.796-.498 1.738-.723 2.7-.539 1.068.204 1.858.73 2.54 1.483a.876.876 0 01-.12 1.23zm.77-4.05c-.263.053-.532.016-.77-.107-.36-.185-.643-.465-.955-.79-.468-.488-1.056-1.07-2.118-1.376-1.076-.31-1.97-.12-2.717.134-.555.189-1.02.43-1.425.51-.06.011-.119.017-.178.017a.88.88 0 01-.86-.716c-.08-.426.165-.843.568-.99.258-.094.558-.24.899-.408.682-.335 1.54-.718 2.672-.824 1.35-.127 2.635.217 3.702.957.631.437 1.15.99 1.493 1.625.207.382.093.81-.31 1.017v-.05zM7.63 16.16c-.72 0-1.305-.578-1.305-1.29 0-.713.585-1.292 1.306-1.292.72 0 1.305.579 1.305 1.292 0 .712-.585 1.29-1.306 1.29z" />
      </svg>
    ),
  },
  {
    name: "Joomla",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M6.266 7.2a2.63 2.63 0 013.392-.356L5.534 2.72A2.622 2.622 0 003.11 2.49a2.622 2.622 0 00-.694 3.472l.005.007 3.846 4.624V7.2zm11.468 9.6a2.63 2.63 0 01-.356 3.392l4.124-4.124a2.622 2.622 0 00.229-2.424 2.622 2.622 0 00-3.472-.694l-.007.005-4.624 3.846H17.734zm-6.93.932a2.63 2.63 0 01-3.392.356l4.124 4.124a2.622 2.622 0 002.424.229 2.622 2.622 0 00.694-3.472l-.005-.007-3.846-4.624v3.394zm6.93-10.464a2.63 2.63 0 01.356-3.392L13.966 8.0a2.622 2.622 0 00-.229 2.424 2.622 2.622 0 003.472.694l.007-.005L21.84 7.267h-4.106z" />
      </svg>
    ),
  },
  {
    name: "HubSpot",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.01 9.6V7.13a2.07 2.07 0 001.2-1.87 2.08 2.08 0 00-2.08-2.08 2.08 2.08 0 00-2.08 2.08c0 .82.49 1.53 1.19 1.87V9.6a5.12 5.12 0 00-2.56 1.15l-6.74-5.24a2.16 2.16 0 00.06-.49A2.1 2.1 0 003.9 2.92a2.1 2.1 0 00-2.1 2.1A2.1 2.1 0 003.9 7.12c.46 0 .89-.15 1.24-.41l6.62 5.15A5.14 5.14 0 0011 14.2a5.14 5.14 0 00.76 2.68L9.4 19.24a2.38 2.38 0 00-.7-.11 2.38 2.38 0 00-2.38 2.38A2.38 2.38 0 008.7 23.9a2.38 2.38 0 002.38-2.38c0-.54-.18-1.04-.49-1.44l2.31-2.3A5.14 5.14 0 0016.13 19.34a5.15 5.15 0 005.14-5.14 5.15 5.15 0 00-4.26-5.06v.46zm-.88 7.97a2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89 2.89 2.89 0 012.89 2.89 2.89 2.89 0 01-2.89 2.89z" />
      </svg>
    ),
  },
  {
    name: "Ghost",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C7.58 2 4 5.58 4 10v8.5c0 .83.28 1.6.75 2.21.18.23.58.29.83.12.64-.43 1.37-.83 1.92-.83.55 0 1.23.4 1.92.83.26.17.6.17.86 0 .69-.43 1.37-.83 1.92-.83s1.23.4 1.92.83c.26.17.6.17.86 0 .69-.43 1.37-.83 1.92-.83.55 0 1.28.4 1.92.83.25.17.65.11.83-.12.47-.61.75-1.38.75-2.21V10c0-4.42-3.58-8-8-8zm-3.5 10a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
      </svg>
    ),
  },
  {
    name: "Framer",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4 1h16v7.5H12L4 1zm0 7.5h8l8 7.5H4V8.5zM4 16h8v7.5L4 16z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.89 14.248l-6.564-8.74v6.675H9.39V7.817h.937l6.325 8.403V7.817h.937v8.431h-.7z" />
      </svg>
    ),
  },
  {
    name: "Custom Code",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

const platforms = [...platformsBase, ...platformsBase];

const painPoints = [
  {
    question: "Your current site looks outdated and you're embarrassed to share it?",
    answer:
      "First impressions happen in seconds. If your website looks like it was built in 2012, potential customers are clicking the back button and going to your competitor. A modern, professional site changes that instantly.",
  },
  {
    question: "You paid someone to build it but have no idea how to update it?",
    answer:
      "This is one of the most common things I hear from business owners in South Bend. They paid for a site, the developer disappeared, and now they can't even change their phone number. I build sites you can actually manage — and I teach you how.",
  },
  {
    question: "You're not showing up on Google and losing customers to competitors?",
    answer:
      "A beautiful website means nothing if nobody can find it. Every site I build is optimized for search engines from day one — proper structure, fast loading, mobile-friendly, and keyword-focused.",
  },
  {
    question: "You need an online store but don't know where to start?",
    answer:
      "Selling products online doesn't have to be complicated. Whether it's Shopify, WooCommerce, or Squarespace — I'll set up your store, connect payments, and walk you through managing orders and inventory.",
  },
];

const services = [
  {
    title: "Custom Website Design",
    desc: "A site designed around your brand, your goals, and your customers — not a generic template with your logo slapped on.",
    accent: "indigo",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce & Online Stores",
    desc: "Sell products or services online with a full store setup — Shopify, WooCommerce, or Squarespace Commerce. Payments, inventory, and shipping included.",
    accent: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Website Redesigns",
    desc: "Already have a site that needs a facelift? I'll modernize the design, speed it up, and make sure it's actually bringing you business.",
    accent: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "SEO-Ready Builds",
    desc: "Every website I build is structured for Google from the start — clean code, fast load times, proper headings, meta tags, and mobile optimization baked in.",
    accent: "pink",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Mobile-Friendly Design",
    desc: "Over half of web traffic is mobile. Every site I build looks and works perfectly on phones, tablets, and desktops — no pinching or zooming required.",
    accent: "amber",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Training",
    desc: "After launch, I teach you how to update your own site — change text, swap images, add pages. You'll never feel stuck or dependent on a developer again.",
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

const processSteps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We talk about your business, your goals, your budget, and your customers. I'll recommend the best platform and approach for your situation.",
  },
  {
    num: "02",
    title: "Design",
    desc: "I create mockups you approve before any building starts. You'll see exactly what your site will look like — no surprises.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Your site gets built on the platform that fits best — WordPress, Shopify, Squarespace, Wix, or custom code. Fast, clean, and SEO-ready.",
  },
  {
    num: "04",
    title: "Launch & Training",
    desc: "We go live. Then I walk you through everything — how to edit pages, update content, and manage your site with confidence.",
  },
];

export default function WebDevPageContent() {
  return (
    <main className="relative overflow-hidden">
      <FloatingDots variant="light" />

      {/* ========== HERO ========== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute top-20 right-0 w-[30rem] h-[30rem] bg-indigo-200/40 rounded-full filter blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[25rem] h-[25rem] bg-purple-200/30 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 sm:py-40">
          <FadeIn>
            <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Web Design & Development — South Bend, IN
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight leading-[1.1] max-w-4xl mb-6">
              A Website That Actually{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Brings You Business.
              </span>
            </h1>
            <p className="text-neutral-500 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
              Affordable, professional websites for small businesses in South Bend and beyond.
              Built on the platform that fits your needs, designed to look great, and &mdash; best of all &mdash;{" "}
              <span className="text-neutral-800 font-medium">I teach you how to manage it yourself.</span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/projects"
                className="px-7 py-3.5 rounded-full border border-neutral-300 text-neutral-700 font-semibold text-sm tracking-wide hover:bg-neutral-100 transition-all"
              >
                See My Work
              </Link>
              <div className="hidden sm:flex items-center gap-2 ml-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-emerald-700 text-xs font-semibold">Budget-friendly pricing</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-12 text-neutral-400 text-sm">
              Based in South Bend, Indiana — serving Michiana businesses and clients nationwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ========== PLATFORM LOGO SLIDER ========== */}
      <section className="relative py-16 sm:py-20 overflow-hidden border-t border-neutral-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
          <FadeIn>
            <p className="text-center text-neutral-500 text-sm font-medium tracking-wide">
              I work with whatever platform fits your business
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={100}>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee gap-6 sm:gap-8">
              {platforms.map((platform, i) => (
                <div
                  key={`${platform.name}-${i}`}
                  className="flex-shrink-0 flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-sm"
                >
                  <span className="text-neutral-400">{platform.icon}</span>
                  <span className="text-neutral-700 font-semibold text-sm whitespace-nowrap">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 45s linear infinite;
          }
        `}</style>
      </section>

      {/* ========== PAIN POINTS ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-0 right-1/4 w-[25rem] h-[25rem] bg-pink-100/40 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                Does This Sound Like You?
              </h2>
              <p className="text-neutral-500 text-lg max-w-xl mx-auto">
                If you&apos;re a business owner in South Bend dealing with any of these, you&apos;re not alone &mdash; and I can help.
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {painPoints.map((p, i) => (
              <FadeIn key={i} delay={(i % 4) * 80}>
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300">
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
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-0 left-1/3 w-[28rem] h-[28rem] bg-indigo-100/40 rounded-full filter blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="mb-16">
              <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3">What You Get</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                Everything Your Business Needs Online
              </h2>
              <p className="text-neutral-500 text-lg max-w-2xl">
                No matter the platform, no matter the budget &mdash; every website I build comes with these essentials.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const ac = accentClasses[svc.accent];
              return (
                <FadeIn key={svc.title} delay={(i % 3) * 100}>
                  <div className="relative p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                    <div className={`w-12 h-12 rounded-xl ${ac.bg} border ${ac.border} flex items-center justify-center mb-5 ${ac.text} group-hover:scale-110 transition-transform`}>
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

      {/* ========== I TEACH YOU HOW TO RUN IT ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[25rem] h-[25rem] bg-emerald-100/30 rounded-full filter blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-emerald-700 text-xs font-semibold tracking-wider uppercase">What Makes Me Different</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                  I Teach You How to Run It
                </h2>
                <p className="text-neutral-500 text-lg leading-relaxed mb-6">
                  Most web developers hand you a finished site and disappear. I do the opposite. After your
                  site launches, I walk you through everything &mdash; how to edit text, update images, add new
                  pages, and manage your content with confidence.
                </p>
                <p className="text-neutral-700 font-medium mb-6">
                  You&apos;ll never need to call a developer for a simple text change again.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "One-on-one training session after launch",
                    "Screen-recorded walkthroughs you can rewatch anytime",
                    "Written documentation specific to your site",
                    "Ongoing support when you need a hand",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-neutral-600 text-sm">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative rounded-2xl bg-white border border-neutral-200/80 shadow-lg p-8">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full pointer-events-none" />
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                  <span className="ml-3 text-neutral-400 text-xs">Your Training Checklist</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "How to edit text & images", done: true },
                    { label: "Adding new pages & blog posts", done: true },
                    { label: "Managing your contact form", done: true },
                    { label: "Updating your business hours", done: true },
                    { label: "Basic SEO tips for your site", done: false },
                    { label: "Connecting Google Analytics", done: false },
                  ].map((task) => (
                    <div key={task.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-50 border border-neutral-100">
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 ${task.done ? "bg-emerald-500" : "border-2 border-neutral-300"}`}>
                        {task.done && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${task.done ? "text-neutral-700" : "text-neutral-400"}`}>{task.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========== AFFORDABLE & FLEXIBLE ========== */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="relative rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/60 p-8 sm:p-12 overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-200/30 rounded-full filter blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3">Affordable Web Design</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-2">
                  Quality Websites That{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Fit Your Budget</span>
                </h2>
                <p className="text-neutral-500 text-base max-w-lg mx-auto mb-8">
                  Every project is different, so every quote is custom. I work with your budget to deliver the best possible result &mdash; no hidden fees, no surprises.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-8 text-left max-w-md mx-auto">
                  <ul className="flex flex-col gap-2">
                    {[
                      "Custom design (not a template)",
                      "Mobile-friendly & fast",
                      "SEO basics included",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-neutral-700 text-sm">
                        <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Contact form setup",
                      "Training session included",
                      "Your platform of choice",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-neutral-700 text-sm">
                        <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-block px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm tracking-wide hover:from-indigo-700 hover:to-purple-700 transition-all active:scale-[0.98] shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
                >
                  Let&apos;s Talk About Your Project
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[40rem] bg-indigo-100/30 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-3">Process</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                How It Works
              </h2>
              <p className="text-neutral-500 text-lg max-w-xl mx-auto">
                Simple, transparent, and built around your schedule and budget. No surprises, no jargon.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="relative p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                  <div className="text-4xl font-black text-neutral-100 absolute top-5 right-5 group-hover:text-neutral-200 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 mt-6">{step.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative py-24 sm:py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[30rem] bg-purple-100/30 rounded-full filter blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-4">
                Serving South Bend &amp; Beyond
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                Ready for a Website That Works?
              </h2>
              <p className="text-neutral-500 text-lg mb-8">
                Whether you&apos;re in South Bend, Mishawaka, Elkhart, or anywhere in the country &mdash; let&apos;s
                build a site that looks professional, ranks on Google, and you can actually manage yourself.
                Free consultation, no strings attached.
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
