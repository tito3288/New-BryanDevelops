import type { Metadata } from "next";
import AboutPageContent from "@/components/AboutPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "About Bryan Arambula | Bryan Develops — Web Developer in South Bend, IN",
  description:
    "Meet Bryan Arambula, the web developer behind Bryan Develops. Based in South Bend, Indiana — building websites, custom software, and SEO strategies for businesses locally and nationwide.",
  keywords: [
    "web developer South Bend",
    "about Bryan Develops",
    "South Bend web designer",
    "Bryan Arambula developer",
    "software developer South Bend Indiana",
    "SEO expert South Bend",
  ],
  openGraph: {
    title: "About Bryan Arambula | Bryan Develops",
    description:
      "Meet the developer behind Bryan Develops. Based in South Bend, IN — websites, software, and SEO done right.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bryan Arambula",
  jobTitle: "Web Developer & Software Engineer",
  url: "https://bryandevelops.com/about",
  sameAs: ["https://bryandevelops.com"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Bend",
    addressRegion: "IN",
    addressCountry: "US",
  },
  knowsAbout: [
    "Web Design",
    "Web Development",
    "Custom Software Development",
    "Search Engine Optimization",
    "iOS App Development",
    "WordPress",
    "Shopify",
    "Next.js",
    "React",
    "TypeScript",
    "Databases",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Bryan Develops",
    url: "https://bryandevelops.com",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="light" />
      <AboutPageContent />
    </div>
  );
}
