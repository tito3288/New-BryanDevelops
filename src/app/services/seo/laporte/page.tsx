import type { Metadata } from "next";
import LaPorteSeoContent from "@/components/LaPorteSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Services in LaPorte, IN | Bryan Develops",
  description:
    "Monthly SEO management for LaPorte, Indiana businesses. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services LaPorte",
    "SEO company LaPorte Indiana",
    "local SEO LaPorte",
    "LaPorte SEO expert",
    "get more website traffic LaPorte",
    "SEO agency LaPorte IN",
    "Google ranking LaPorte",
    "search engine optimization LaPorte",
    "monthly SEO management LaPorte",
    "small business SEO LaPorte",
    "website traffic LaPorte",
    "SEO consultant LaPorte",
    "local search optimization LaPorte",
    "Google Business Profile LaPorte",
    "affordable SEO services LaPorte County",
  ],
  openGraph: {
    title: "SEO Services in LaPorte | Bryan Develops",
    description:
      "Monthly SEO management for LaPorte businesses. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in LaPorte",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in LaPorte, LaPorte County, and northwest Indiana. Transparent reporting and month-to-month plans.",
  url: "https://bryandevelops.com/services/seo/laporte",
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
    "Search Engine Optimization",
    "Local SEO",
    "Monthly SEO Management",
    "Keyword Research",
    "On-Page SEO",
    "Technical SEO",
    "Content Strategy",
    "Google Business Profile Optimization",
  ],
};

export default function LaPorteSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <LaPorteSeoContent />
    </div>
  );
}
