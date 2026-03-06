import type { Metadata } from "next";
import GoshenSeoContent from "@/components/GoshenSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Services in Goshen, IN | Bryan Develops",
  description:
    "Monthly SEO management for Goshen, Indiana businesses. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services Goshen",
    "SEO company Goshen Indiana",
    "local SEO Goshen",
    "Goshen SEO expert",
    "get more website traffic Goshen",
    "SEO agency Goshen IN",
    "Google ranking Goshen",
    "search engine optimization Goshen",
    "monthly SEO management Goshen",
    "small business SEO Goshen",
    "website traffic Goshen",
    "SEO consultant Goshen",
    "local search optimization Goshen",
    "Google Business Profile Goshen",
    "affordable SEO services Elkhart County",
  ],
  openGraph: {
    title: "SEO Services in Goshen | Bryan Develops",
    description:
      "Monthly SEO management for Goshen businesses. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in Goshen",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in Goshen, Elkhart County, and northern Indiana. Transparent reporting and month-to-month plans.",
  url: "https://bryandevelops.com/services/seo/goshen",
  areaServed: [
    { "@type": "City", name: "Goshen", addressRegion: "IN" },
    { "@type": "City", name: "Elkhart", addressRegion: "IN" },
    { "@type": "City", name: "Middlebury", addressRegion: "IN" },
    { "@type": "City", name: "Nappanee", addressRegion: "IN" },
    { "@type": "City", name: "New Paris", addressRegion: "IN" },
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

export default function GoshenSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <GoshenSeoContent />
    </div>
  );
}
