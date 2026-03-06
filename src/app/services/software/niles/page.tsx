import type { Metadata } from "next";
import NilesSoftwareContent from "@/components/NilesSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Custom Software & App Development in Niles, MI | Bryan Develops",
  description:
    "Custom software development for Niles, Michigan businesses. Workflow automation, AI chatbots, business dashboards, and app development. Built for manufacturers, local businesses, and startups in Berrien County.",
  keywords: [
    "custom software Niles",
    "software developer Niles Michigan",
    "app development Niles",
    "workflow automation Niles",
    "AI chatbot Niles",
    "business software Niles MI",
    "web app developer Niles",
    "custom dashboard Niles",
    "software company Niles",
    "mobile app developer Niles",
    "business automation Niles",
    "software engineer Niles Michigan",
    "CRM development Niles",
    "SaaS developer Niles",
    "affordable software development Berrien County",
  ],
  openGraph: {
    title: "Custom Software & App Development in Niles | Bryan Develops",
    description:
      "Custom software, automation, AI chatbots, and app development for Niles businesses. Built for your workflows, your team, and your goals.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Custom Software in Niles",
  description:
    "Custom software development, workflow automation, AI chatbots, and app development for businesses in Niles, Berrien County, and southwest Michigan. Solutions built for manufacturers, local businesses, and startups.",
  url: "https://bryandevelops.com/services/software/niles",
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
    "Custom Software Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "Mobile App Development",
    "SaaS Development",
    "System Integration",
  ],
};

export default function NilesSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <NilesSoftwareContent />
    </div>
  );
}
