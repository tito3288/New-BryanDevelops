import type { Metadata } from "next";
import WebDevPageContent from "@/components/WebDevPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development in South Bend, IN | Bryan Develops — Affordable Websites",
  description:
    "Affordable web design and development in South Bend, Indiana. WordPress, Shopify, Squarespace, Wix, or custom-built — Bryan Develops creates websites for small businesses in Michiana and nationwide. Training included.",
  keywords: [
    "web design South Bend",
    "web developer South Bend Indiana",
    "affordable web design South Bend",
    "WordPress developer South Bend",
    "Shopify developer South Bend",
    "Squarespace developer near me",
    "small business website South Bend",
    "website design Michiana",
    "affordable website developer Indiana",
    "web design near me",
    "e-commerce website South Bend",
    "Wix developer South Bend",
    "website redesign South Bend",
    "cheap website design Indiana",
    "web developer near me",
  ],
  openGraph: {
    title: "Affordable Web Design & Development in South Bend | Bryan Develops",
    description:
      "Custom websites on WordPress, Shopify, Squarespace, Wix, or built from scratch. Affordable web design for small businesses in South Bend and beyond.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops — Web Design & Development",
  description:
    "Affordable web design and development for small businesses in South Bend, Mishawaka, Elkhart, Fort Wayne, and nationwide. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with training included.",
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
