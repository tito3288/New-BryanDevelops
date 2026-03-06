import type { Metadata } from "next";
import NilesWebDevContent from "@/components/NilesWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Small Business Web Design & Development in Niles, MI | Bryan Develops",
  description:
    "Professional web design and development for small businesses in Niles, Michigan. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Mobile-friendly, SEO-ready, and built to convert. Free consultation.",
  keywords: [
    "web design Niles",
    "web developer Niles Michigan",
    "affordable web design Niles",
    "WordPress developer Niles",
    "Shopify developer Niles",
    "small business website Niles",
    "website design Niles MI",
    "web development company Niles",
    "ecommerce website Niles",
    "Squarespace developer Niles",
    "Wix developer Niles",
    "website redesign Niles",
    "responsive web design Niles",
    "web designer near me Niles",
    "affordable website developer Berrien County",
  ],
  openGraph: {
    title: "Small Business Web Design & Development in Niles | Bryan Develops",
    description:
      "Professional websites for small businesses in Niles. WordPress, Shopify, Squarespace, Wix, or custom-built. Mobile-friendly, SEO-ready, and affordable.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in Niles",
  description:
    "Professional web design and development for businesses in Niles, Berrien County, and southwest Michigan. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/niles",
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

export default function NilesWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <NilesWebDevContent />
    </div>
  );
}
