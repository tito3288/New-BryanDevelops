import type { Metadata } from "next";
import GoshenSoftwareContent from "@/components/GoshenSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Custom Software & App Development in Goshen, IN | Bryan Develops",
  description:
    "Custom software development for Goshen, Indiana businesses. Workflow automation, AI chatbots, business dashboards, and app development. Built for RV manufacturers, local businesses, and startups in Elkhart County.",
  keywords: [
    "custom software Goshen",
    "software developer Goshen Indiana",
    "app development Goshen",
    "workflow automation Goshen",
    "AI chatbot Goshen",
    "business software Goshen IN",
    "web app developer Goshen",
    "custom dashboard Goshen",
    "software company Goshen",
    "mobile app developer Goshen",
    "business automation Goshen",
    "software engineer Goshen Indiana",
    "CRM development Goshen",
    "SaaS developer Goshen",
    "affordable software development Elkhart County",
  ],
  openGraph: {
    title: "Custom Software & App Development in Goshen | Bryan Develops",
    description:
      "Custom software, automation, AI chatbots, and app development for Goshen businesses. Built for your workflows, your team, and your goals.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Custom Software in Goshen",
  description:
    "Custom software development, workflow automation, AI chatbots, and app development for businesses in Goshen, Elkhart County, and northern Indiana. Solutions built for RV manufacturers, local businesses, and startups.",
  url: "https://bryandevelops.com/services/software/goshen",
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
    "Custom Software Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "Mobile App Development",
    "SaaS Development",
    "System Integration",
  ],
};

export default function GoshenSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <GoshenSoftwareContent />
    </div>
  );
}
