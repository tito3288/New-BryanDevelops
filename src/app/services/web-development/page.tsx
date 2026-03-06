import type { Metadata } from "next";
import WebDevPageContent from "@/components/WebDevPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development | Bryan Develops — Affordable Websites for Small Businesses",
  description:
    "Affordable web design and development for small businesses. WordPress, Shopify, Squarespace, Wix, or custom-built. Training included. Serving Indiana and nationwide.",
  keywords: [
    "affordable web design",
    "web developer for small business",
    "affordable web design Indiana",
    "WordPress developer for hire",
    "Shopify developer",
    "Squarespace developer near me",
    "small business website design",
    "website design Indiana",
    "affordable website developer Indiana",
    "web design near me",
    "e-commerce website design",
    "Wix developer",
    "website redesign services",
    "cheap website design Indiana",
    "web developer near me",
  ],
  openGraph: {
    title: "Affordable Web Design & Development | Bryan Develops",
    description:
      "Custom websites on WordPress, Shopify, Squarespace, Wix, or built from scratch. Affordable web design for small businesses and beyond.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops — Web Design & Development",
  description:
    "Affordable web design and development for small businesses in Indiana and nationwide. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with training included.",
  url: "https://bryandevelops.com/services/web-development",
  areaServed: [
    { "@type": "City", name: "South Bend", addressRegion: "IN" },
    { "@type": "City", name: "Mishawaka", addressRegion: "IN" },
    { "@type": "City", name: "Elkhart", addressRegion: "IN" },
    { "@type": "City", name: "Granger", addressRegion: "IN" },
    { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
    { "@type": "State", name: "Indiana" },
    { "@type": "Country", name: "US" },
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

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <WebDevPageContent />
    </div>
  );
}
