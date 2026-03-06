import type { Metadata } from "next";
import SouthBendWebDevContent from "@/components/SouthBendWebDevContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Small Business Web Design & Development in South Bend, IN | Bryan Develops",
  description:
    "Professional web design and development for small businesses in South Bend, Indiana. WordPress, Shopify, Squarespace, Wix, or custom-built websites. Based locally in South Bend, training included. Free consultation.",
  keywords: [
    "web design South Bend",
    "web developer South Bend IN",
    "South Bend web designer",
    "website design downtown South Bend",
    "WordPress developer South Bend Indiana",
    "Shopify developer South Bend",
    "small business website South Bend",
    "affordable web design South Bend IN",
    "ecommerce website South Bend",
    "website redesign South Bend",
    "web developer near Notre Dame",
    "Mishawaka web design",
    "responsive web design South Bend",
    "web design company South Bend Indiana",
    "local web developer South Bend",
  ],
  openGraph: {
    title: "Small Business Web Design & Development in South Bend | Bryan Develops",
    description:
      "Professional websites for small businesses in South Bend. WordPress, Shopify, Squarespace, Wix, or custom-built. Based locally, training included.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Web Design & Development in South Bend",
  description:
    "Professional web design and development for businesses in South Bend, Mishawaka, Granger, and the greater Michiana area. WordPress, Shopify, Squarespace, Wix, and custom-coded websites with SEO and training included.",
  url: "https://bryandevelops.com/services/web-development/south-bend",
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
};

export default function SouthBendWebDevPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <SouthBendWebDevContent />
    </div>
  );
}
