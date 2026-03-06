import type { Metadata } from "next";
import MishawakaSeoContent from "@/components/MishawakaSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "SEO Services in Mishawaka, IN | Bryan Develops",
  description:
    "Monthly SEO management for Mishawaka, Indiana businesses. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services Mishawaka",
    "SEO company Mishawaka Indiana",
    "local SEO Mishawaka",
    "Mishawaka SEO expert",
    "get more website traffic Mishawaka",
    "SEO agency Mishawaka IN",
    "Google ranking Mishawaka",
    "search engine optimization Mishawaka",
    "monthly SEO management Mishawaka",
    "small business SEO Mishawaka",
    "website traffic Mishawaka",
    "SEO consultant Mishawaka",
    "local search optimization Mishawaka",
    "Google Business Profile Mishawaka",
    "affordable SEO services St Joseph County",
  ],
  openGraph: {
    title: "SEO Services in Mishawaka | Bryan Develops",
    description:
      "Monthly SEO management for Mishawaka businesses. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in Mishawaka",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in Mishawaka, St. Joseph County, and the Michiana area. Transparent reporting and month-to-month plans.",
  url: "https://bryandevelops.com/services/seo/mishawaka",
  areaServed: [
    { "@type": "City", name: "Mishawaka", addressRegion: "IN" },
    { "@type": "City", name: "Osceola", addressRegion: "IN" },
    { "@type": "City", name: "Granger", addressRegion: "IN" },
    { "@type": "City", name: "Roseland", addressRegion: "IN" },
    { "@type": "City", name: "Indian Village", addressRegion: "IN" },
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

export default function MishawakaSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <MishawakaSeoContent />
    </div>
  );
}
