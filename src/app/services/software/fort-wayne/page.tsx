import type { Metadata } from "next";
import FortWayneSoftwareContent from "@/components/FortWayneSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Custom Software & App Development in Fort Wayne, IN | Bryan Develops",
  description:
    "Custom software development and app development in Fort Wayne, Indiana. Workflow automation, AI chatbots, business dashboards, and mobile apps built for Fort Wayne businesses. Free consultation.",
  keywords: [
    "custom software development Fort Wayne",
    "software developer Fort Wayne Indiana",
    "app development company Fort Wayne",
    "app developer Fort Wayne",
    "mobile app development Fort Wayne",
    "business automation Fort Wayne",
    "AI chatbot Fort Wayne",
    "Fort Wayne software company",
    "custom software northeast Indiana",
    "software developer near me",
    "app development company near me",
    "web app developer Fort Wayne",
  ],
  openGraph: {
    title: "Custom Software & App Development in Fort Wayne | Bryan Develops",
    description:
      "Custom software, mobile apps, AI tools, and business automation for companies in Fort Wayne and northeast Indiana.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops — Custom Software & App Development in Fort Wayne",
  description:
    "Custom software development, mobile app development, workflow automation, and AI tools for businesses in Fort Wayne, northeast Indiana, and beyond.",
  url: "https://bryandevelops.com/services/software/fort-wayne",
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
    "Custom Software Development",
    "Mobile App Development",
    "iOS App Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "SaaS Development",
  ],
};

export default function FortWayneSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <FortWayneSoftwareContent />
    </div>
  );
}
