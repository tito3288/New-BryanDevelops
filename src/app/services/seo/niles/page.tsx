import type { Metadata } from "next";
import NilesSeoContent from "@/components/NilesSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Services in Niles, MI | Bryan Develops",
  description:
    "Monthly SEO management for Niles, Michigan businesses. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services Niles",
    "SEO company Niles Michigan",
    "local SEO Niles",
    "Niles SEO expert",
    "get more website traffic Niles",
    "SEO agency Niles MI",
    "Google ranking Niles",
    "search engine optimization Niles",
    "monthly SEO management Niles",
    "small business SEO Niles",
    "website traffic Niles",
    "SEO consultant Niles",
    "local search optimization Niles",
    "Google Business Profile Niles",
    "affordable SEO services Berrien County",
  ],
  openGraph: {
    title: "SEO Services in Niles | Bryan Develops",
    description:
      "Monthly SEO management for Niles businesses. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in Niles",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in Niles, Berrien County, and southwest Michigan. Transparent reporting and month-to-month plans.",
  url: "https://bryandevelops.com/services/seo/niles",
  areaServed: [
    { "@type": "City", name: "Niles", addressRegion: "MI" },
    { "@type": "City", name: "Buchanan", addressRegion: "MI" },
    { "@type": "City", name: "Dowagiac", addressRegion: "MI" },
    { "@type": "City", name: "Berrien Springs", addressRegion: "MI" },
    { "@type": "City", name: "Edwardsburg", addressRegion: "MI" },
    { "@type": "State", name: "Michigan" },
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

export default function NilesSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <NilesSeoContent />
    </div>
  );
}
