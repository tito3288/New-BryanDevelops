import type { Metadata } from "next";
import FortWayneSeoContent from "@/components/FortWayneSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Services in Fort Wayne, IN | Bryan Develops",
  description:
    "Monthly SEO management for Fort Wayne, Indiana businesses. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services Fort Wayne",
    "SEO company Fort Wayne Indiana",
    "local SEO Fort Wayne",
    "Fort Wayne SEO expert",
    "get more website traffic Fort Wayne",
    "SEO agency Fort Wayne IN",
    "Google ranking Fort Wayne",
    "search engine optimization Fort Wayne",
    "monthly SEO management Fort Wayne",
    "small business SEO Fort Wayne",
    "website traffic Fort Wayne",
    "SEO consultant Fort Wayne",
    "local search optimization Fort Wayne",
    "Google Business Profile Fort Wayne",
    "affordable SEO services northeast Indiana",
  ],
  openGraph: {
    title: "SEO Services in Fort Wayne | Bryan Develops",
    description:
      "Monthly SEO management for Fort Wayne businesses. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in Fort Wayne",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in Fort Wayne, northeast Indiana, and beyond. Transparent reporting and month-to-month plans.",
  url: "https://bryandevelops.com/services/seo/fort-wayne",
  areaServed: [
    { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
    { "@type": "City", name: "New Haven", addressRegion: "IN" },
    { "@type": "City", name: "Columbia City", addressRegion: "IN" },
    { "@type": "City", name: "Huntington", addressRegion: "IN" },
    { "@type": "City", name: "Auburn", addressRegion: "IN" },
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

export default function FortWayneSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <FortWayneSeoContent />
    </div>
  );
}
