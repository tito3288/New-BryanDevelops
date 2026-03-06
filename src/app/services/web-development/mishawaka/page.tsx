import type { Metadata } from "next";
import MishawakaWebDevContent from "@/components/MishawakaWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Web Design & Development in Mishawaka, IN | Bryan Develops",
  description:
    "Professional web design and development for Mishawaka, Indiana businesses. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Mobile-friendly, SEO-ready, and built to convert. Free consultation.",
  keywords: [
    "web design Mishawaka",
    "web developer Mishawaka Indiana",
    "affordable web design Mishawaka",
    "WordPress developer Mishawaka",
    "Shopify developer Mishawaka",
    "small business website Mishawaka",
    "website design Mishawaka IN",
    "web development company Mishawaka",
    "ecommerce website Mishawaka",
    "Squarespace developer Mishawaka",
    "Wix developer Mishawaka",
    "website redesign Mishawaka",
    "responsive web design Mishawaka",
    "web designer near me Mishawaka",
    "affordable website developer St Joseph County",
  ],
  openGraph: {
    title: "Web Design & Development in Mishawaka | Bryan Develops",
    description:
      "Professional websites for Mishawaka businesses. WordPress, Shopify, Squarespace, Wix, or custom-built. Mobile-friendly, SEO-ready, and affordable.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in Mishawaka",
  description:
    "Professional web design and development for businesses in Mishawaka, St. Joseph County, and the Michiana area. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/mishawaka",
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

export default function MishawakaWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <MishawakaWebDevContent />
    </div>
  );
}
