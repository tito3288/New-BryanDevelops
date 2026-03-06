import type { Metadata } from "next";
import GoshenWebDevContent from "@/components/GoshenWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development in Goshen, IN | Bryan Develops",
  description:
    "Professional web design and development for Goshen, Indiana businesses. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Mobile-friendly, SEO-ready, and built to convert. Free consultation.",
  keywords: [
    "web design Goshen",
    "web developer Goshen Indiana",
    "affordable web design Goshen",
    "WordPress developer Goshen",
    "Shopify developer Goshen",
    "small business website Goshen",
    "website design Goshen IN",
    "web development company Goshen",
    "ecommerce website Goshen",
    "Squarespace developer Goshen",
    "Wix developer Goshen",
    "website redesign Goshen",
    "responsive web design Goshen",
    "web designer near me Goshen",
    "affordable website developer Elkhart County",
  ],
  openGraph: {
    title: "Web Design & Development in Goshen | Bryan Develops",
    description:
      "Professional websites for Goshen businesses. WordPress, Shopify, Squarespace, Wix, or custom-built. Mobile-friendly, SEO-ready, and affordable.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in Goshen",
  description:
    "Professional web design and development for businesses in Goshen, Elkhart County, and northern Indiana. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/goshen",
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

export default function GoshenWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <GoshenWebDevContent />
    </div>
  );
}
