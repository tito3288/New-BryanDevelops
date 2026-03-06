import type { Metadata } from "next";
import WarsawWebDevContent from "@/components/WarsawWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development in Warsaw, IN | Bryan Develops",
  description:
    "Professional web design and development for Warsaw, Indiana businesses. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Mobile-friendly, SEO-ready, and built to convert. Free consultation.",
  keywords: [
    "web design Warsaw",
    "web developer Warsaw Indiana",
    "affordable web design Warsaw",
    "WordPress developer Warsaw",
    "Shopify developer Warsaw",
    "small business website Warsaw",
    "website design Warsaw IN",
    "web development company Warsaw",
    "ecommerce website Warsaw",
    "Squarespace developer Warsaw",
    "Wix developer Warsaw",
    "website redesign Warsaw",
    "responsive web design Warsaw",
    "web designer near me Warsaw",
    "affordable website developer Kosciusko County",
  ],
  openGraph: {
    title: "Web Design & Development in Warsaw | Bryan Develops",
    description:
      "Professional websites for Warsaw businesses. WordPress, Shopify, Squarespace, Wix, or custom-built. Mobile-friendly, SEO-ready, and affordable.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in Warsaw",
  description:
    "Professional web design and development for businesses in Warsaw, Kosciusko County, and north-central Indiana. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/warsaw",
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

export default function WarsawWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <WarsawWebDevContent />
    </div>
  );
}
