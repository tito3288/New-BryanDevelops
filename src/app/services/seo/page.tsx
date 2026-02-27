import type { Metadata } from "next";
import SeoPageContent from "@/components/SeoPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "SEO Services in South Bend, IN | Bryan Develops — Monthly SEO Management",
  description:
    "Monthly SEO management in South Bend, Indiana. Transparent reporting, local SEO, keyword strategy, and content optimization. Month-to-month — no long contracts. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services South Bend",
    "SEO company South Bend Indiana",
    "local SEO South Bend",
    "monthly SEO management",
    "SEO vs Google Ads",
    "affordable SEO Indiana",
    "SEO expert South Bend",
    "Google ranking South Bend",
    "SEO near me",
    "small business SEO South Bend",
    "SEO Michiana",
    "search engine optimization Indiana",
    "local SEO near me",
    "SEO consultant South Bend",
    "organic traffic South Bend",
  ],
  openGraph: {
    title: "SEO Services in South Bend | Bryan Develops",
    description:
      "Monthly SEO management with transparent reporting. No contracts, no jargon — just results. Serving South Bend, Fort Wayne, and beyond.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops — SEO Services",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and transparent reporting for businesses in South Bend, Mishawaka, Elkhart, Fort Wayne, and nationwide.",
  url: "https://bryandevelops.com/services/seo",
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
    "Search Engine Optimization",
    "Local SEO",
    "Monthly SEO Management",
    "Keyword Research",
    "On-Page SEO",
    "Technical SEO",
    "Content Strategy",
    "Google Business Profile Optimization",
  ],
  knowsAbout: [
    "SEO",
    "Search Engine Optimization",
    "Local SEO",
    "Google Rankings",
    "Keyword Research",
    "Content Strategy",
    "Technical SEO",
    "Google Ads vs SEO",
  ],
};

export default function SeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <SeoPageContent />
    </div>
  );
}
