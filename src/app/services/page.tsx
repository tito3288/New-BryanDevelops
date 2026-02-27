import type { Metadata } from "next";
import ServicesPageContent from "@/components/ServicesPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "All Services & Locations | Bryan Develops — South Bend, IN",
  description:
    "Explore all services offered by Bryan Develops: web design, custom software development, SEO, and app development. Serving South Bend, Fort Wayne, Mishawaka, Elkhart, and businesses nationwide.",
  keywords: [
    "web design South Bend",
    "custom software South Bend",
    "SEO services South Bend",
    "app development Indiana",
    "web developer near me",
    "software developer South Bend",
    "Fort Wayne web developer",
    "Mishawaka software development",
    "affordable web design Indiana",
  ],
  openGraph: {
    title: "All Services | Bryan Develops — South Bend, IN",
    description:
      "Web design, custom software, SEO, and app development for businesses in South Bend, Fort Wayne, and beyond.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops",
  description:
    "Web design, custom software development, SEO, and app development for businesses in South Bend, Indiana and nationwide.",
  url: "https://bryandevelops.com/services",
  areaServed: [
    { "@type": "City", name: "South Bend", addressRegion: "IN" },
    { "@type": "City", name: "Mishawaka", addressRegion: "IN" },
    { "@type": "City", name: "Elkhart", addressRegion: "IN" },
    { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
    { "@type": "City", name: "Granger", addressRegion: "IN" },
    { "@type": "State", name: "Indiana" },
    { "@type": "Country", name: "US" },
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
    "Custom Software Development",
    "SEO Services",
    "Mobile App Development",
  ],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <ServicesPageContent />
    </div>
  );
}
