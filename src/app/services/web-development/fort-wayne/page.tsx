import type { Metadata } from "next";
import FortWayneWebDevContent from "@/components/FortWayneWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development in Fort Wayne, IN | Bryan Develops",
  description:
    "Professional web design and development for Fort Wayne, Indiana businesses. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Mobile-friendly, SEO-ready, and built to convert. Free consultation.",
  keywords: [
    "web design Fort Wayne",
    "web developer Fort Wayne Indiana",
    "affordable web design Fort Wayne",
    "WordPress developer Fort Wayne",
    "Shopify developer Fort Wayne",
    "small business website Fort Wayne",
    "website design Fort Wayne IN",
    "web development company Fort Wayne",
    "ecommerce website Fort Wayne",
    "Squarespace developer Fort Wayne",
    "Wix developer Fort Wayne",
    "website redesign Fort Wayne",
    "responsive web design Fort Wayne",
    "web designer near me Fort Wayne",
    "affordable website developer northeast Indiana",
  ],
  openGraph: {
    title: "Web Design & Development in Fort Wayne | Bryan Develops",
    description:
      "Professional websites for Fort Wayne businesses. WordPress, Shopify, Squarespace, Wix, or custom-built. Mobile-friendly, SEO-ready, and affordable.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in Fort Wayne",
  description:
    "Professional web design and development for businesses in Fort Wayne, northeast Indiana, and beyond. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/fort-wayne",
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

export default function FortWayneWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <FortWayneWebDevContent />
    </div>
  );
}
