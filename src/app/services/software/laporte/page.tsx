import type { Metadata } from "next";
import LaPorteSoftwareContent from "@/components/LaPorteSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Small Business Software & App Development in LaPorte, IN | Bryan Develops",
  description:
    "Custom software development and app development for small businesses in LaPorte, Indiana. Workflow automation, AI chatbots, business dashboards, and mobile apps. Free consultation.",
  keywords: [
    "custom software development LaPorte",
    "software developer LaPorte Indiana",
    "app development company LaPorte",
    "app developer LaPorte",
    "mobile app development LaPorte",
    "business automation LaPorte",
    "AI chatbot LaPorte",
    "LaPorte software company",
    "custom software LaPorte County",
    "software developer near me",
    "app development company near me",
    "web app developer LaPorte",
    "small business software LaPorte",
  ],
  openGraph: {
    title: "Small Business Software & App Development in LaPorte | Bryan Develops",
    description:
      "Custom software, mobile apps, AI tools, and business automation for small businesses in LaPorte and northwest Indiana.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Custom Software & App Development in LaPorte",
  description:
    "Custom software development, mobile app development, workflow automation, and AI tools for businesses in LaPorte, LaPorte County, and northwest Indiana.",
  url: "https://bryandevelops.com/services/software/laporte",
  areaServed: [
    { "@type": "City", name: "LaPorte", addressRegion: "IN" },
    { "@type": "City", name: "Michigan City", addressRegion: "IN" },
    { "@type": "City", name: "Westville", addressRegion: "IN" },
    { "@type": "City", name: "Rolling Prairie", addressRegion: "IN" },
    { "@type": "City", name: "Wanatah", addressRegion: "IN" },
    { "@type": "State", name: "Indiana" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Bend",
    addressRegion: "IN",
    addressCountry: "US",
  },
  serviceType: [
    "Custom Software Development",
    "Mobile App Development",
    "iOS App Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "SaaS Development",
  ],
};

export default function LaPorteSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <LaPorteSoftwareContent />
    </div>
  );
}
