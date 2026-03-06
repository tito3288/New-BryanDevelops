import type { Metadata } from "next";
import SouthBendSeoContent from "@/components/SouthBendSeoContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Small Business SEO Services in South Bend, IN | Bryan Develops",
  description:
    "Monthly SEO management for small businesses in South Bend, Indiana. Local SEO, keyword strategy, on-page optimization, and transparent reporting. Get more website traffic without relying on ads. Or try simplSEO, the affordable DIY alternative.",
  keywords: [
    "SEO services South Bend",
    "SEO company South Bend Indiana",
    "local SEO South Bend",
    "South Bend SEO expert",
    "get more website traffic South Bend",
    "SEO agency South Bend IN",
    "Google ranking South Bend",
    "search engine optimization South Bend",
    "monthly SEO management South Bend",
    "small business SEO South Bend",
    "website traffic South Bend",
    "SEO consultant South Bend",
    "local search optimization South Bend",
    "Google Business Profile South Bend",
    "affordable SEO South Bend Indiana",
  ],
  openGraph: {
    title: "Small Business SEO Services in South Bend | Bryan Develops",
    description:
      "Monthly SEO management for small businesses in South Bend. Local SEO, keyword strategy, and transparent reporting to get more website traffic.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, SEO Services in South Bend",
  description:
    "Monthly SEO management, local SEO, keyword strategy, and on-page optimization for businesses in South Bend, Mishawaka, Granger, and the greater Michiana area.",
  url: "https://bryandevelops.com/services/seo/south-bend",
  areaServed: [
    { "@type": "City", name: "South Bend", addressRegion: "IN" },
    { "@type": "City", name: "Mishawaka", addressRegion: "IN" },
    { "@type": "City", name: "Granger", addressRegion: "IN" },
    { "@type": "City", name: "Osceola", addressRegion: "IN" },
    { "@type": "City", name: "Roseland", addressRegion: "IN" },
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

export default function SouthBendSeoPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <SouthBendSeoContent />
    </div>
  );
}
