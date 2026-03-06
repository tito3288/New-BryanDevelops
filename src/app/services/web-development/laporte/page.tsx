import type { Metadata } from "next";
import LaPorteWebDevContent from "@/components/LaPorteWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development in LaPorte, IN | Bryan Develops",
  description:
    "Professional web design and development for LaPorte, Indiana businesses. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Mobile-friendly, SEO-ready, and built to convert. Free consultation.",
  keywords: [
    "web design LaPorte",
    "web developer LaPorte Indiana",
    "affordable web design LaPorte",
    "WordPress developer LaPorte",
    "Shopify developer LaPorte",
    "small business website LaPorte",
    "website design LaPorte IN",
    "web development company LaPorte",
    "ecommerce website LaPorte",
    "Squarespace developer LaPorte",
    "Wix developer LaPorte",
    "website redesign LaPorte",
    "responsive web design LaPorte",
    "web designer near me LaPorte",
    "affordable website developer LaPorte County",
  ],
  openGraph: {
    title: "Web Design & Development in LaPorte | Bryan Develops",
    description:
      "Professional websites for LaPorte businesses. WordPress, Shopify, Squarespace, Wix, or custom-built. Mobile-friendly, SEO-ready, and affordable.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in LaPorte",
  description:
    "Professional web design and development for businesses in LaPorte, LaPorte County, and northwest Indiana. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/laporte",
  areaServed: [
    { "@type": "City", name: "LaPorte", addressRegion: "IN" },
    { "@type": "City", name: "Michigan City", addressRegion: "IN" },
    { "@type": "City", name: "Westville", addressRegion: "IN" },
    { "@type": "City", name: "Rolling Prairie", addressRegion: "IN" },
    { "@type": "City", name: "Wanatah", addressRegion: "IN" },
    { "@type": "State", name: "Indiana" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Bend",
    addressRegion: "IN",
    addressCountry: "US",
  },
  serviceType: [
    "Web Design",
    "Web Development",
    "WordPress Development",
    "Shopify Development",
    "Squarespace Development",
    "Wix Development",
    "E-Commerce Website Development",
    "Website Redesign",
    "Responsive Web Design",
  ],
  knowsAbout: [
    "Web Design",
    "WordPress",
    "Shopify",
    "Squarespace",
    "Wix",
    "E-Commerce",
    "SEO",
    "Responsive Design",
  ],
};

export default function LaPorteWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <LaPorteWebDevContent />
    </div>
  );
}
