import type { Metadata } from "next";
import WarsawSoftwareContent from "@/components/WarsawSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Custom Software & App Development in Warsaw, IN | Bryan Develops",
  description:
    "Custom software development and app development in Warsaw, Indiana. Workflow automation, AI chatbots, business dashboards, and mobile apps built for Warsaw businesses. Free consultation.",
  keywords: [
    "custom software development Warsaw",
    "software developer Warsaw Indiana",
    "app development company Warsaw",
    "app developer Warsaw",
    "mobile app development Warsaw",
    "business automation Warsaw",
    "AI chatbot Warsaw",
    "Warsaw software company",
    "custom software Kosciusko County",
    "software developer near me",
    "app development company near me",
    "web app developer Warsaw",
  ],
  openGraph: {
    title: "Custom Software & App Development in Warsaw | Bryan Develops",
    description:
      "Custom software, mobile apps, AI tools, and business automation for companies in Warsaw and north-central Indiana.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Custom Software & App Development in Warsaw",
  description:
    "Custom software development, mobile app development, workflow automation, and AI tools for businesses in Warsaw, Kosciusko County, and north-central Indiana.",
  url: "https://bryandevelops.com/services/software/warsaw",
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
    "Custom Software Development",
    "Mobile App Development",
    "iOS App Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "SaaS Development",
  ],
};

export default function WarsawSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <WarsawSoftwareContent />
    </div>
  );
}
