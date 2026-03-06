import type { Metadata } from "next";
import WarsawSeoContent from "@/components/WarsawSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Services in Warsaw, IN | Bryan Develops",
  description:
    "Monthly SEO management for Warsaw, Indiana businesses. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services Warsaw",
    "SEO company Warsaw Indiana",
    "local SEO Warsaw",
    "Warsaw SEO expert",
    "get more website traffic Warsaw",
    "SEO agency Warsaw IN",
    "Google ranking Warsaw",
    "search engine optimization Warsaw",
    "monthly SEO management Warsaw",
    "small business SEO Warsaw",
    "website traffic Warsaw",
    "SEO consultant Warsaw",
    "local search optimization Warsaw",
    "Google Business Profile Warsaw",
    "affordable SEO services Kosciusko County",
  ],
  openGraph: {
    title: "SEO Services in Warsaw | Bryan Develops",
    description:
      "Monthly SEO management for Warsaw businesses. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in Warsaw",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in Warsaw, Kosciusko County, and north-central Indiana. Transparent reporting and month-to-month plans.",
  url: "https://bryandevelops.com/services/seo/warsaw",
  areaServed: [
    { "@type": "City", name: "Warsaw", addressRegion: "IN" },
    { "@type": "City", name: "Winona Lake", addressRegion: "IN" },
    { "@type": "City", name: "Syracuse", addressRegion: "IN" },
    { "@type": "City", name: "Pierceton", addressRegion: "IN" },
    { "@type": "City", name: "Mentone", addressRegion: "IN" },
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

export default function WarsawSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <WarsawSeoContent />
    </div>
  );
}
