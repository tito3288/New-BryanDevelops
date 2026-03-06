import type { Metadata } from "next";
import MishawakaSoftwareContent from "@/components/MishawakaSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Custom Software & App Development in Mishawaka, IN | Bryan Develops",
  description:
    "Custom software development and app development in Mishawaka, Indiana. Workflow automation, AI chatbots, business dashboards, and mobile apps built for Mishawaka businesses. Free consultation.",
  keywords: [
    "custom software development Mishawaka",
    "software developer Mishawaka Indiana",
    "app development company Mishawaka",
    "app developer Mishawaka",
    "mobile app development Mishawaka",
    "business automation Mishawaka",
    "AI chatbot Mishawaka",
    "Mishawaka software company",
    "custom software St Joseph County",
    "software developer near me",
    "app development company near me",
    "web app developer Mishawaka",
  ],
  openGraph: {
    title: "Custom Software & App Development in Mishawaka | Bryan Develops",
    description:
      "Custom software, mobile apps, AI tools, and business automation for companies in Mishawaka and the Michiana area.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Custom Software & App Development in Mishawaka",
  description:
    "Custom software development, mobile app development, workflow automation, and AI tools for businesses in Mishawaka, St. Joseph County, and the Michiana area.",
  url: "https://bryandevelops.com/services/software/mishawaka",
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
    "Custom Software Development",
    "Mobile App Development",
    "iOS App Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "SaaS Development",
  ],
};

export default function MishawakaSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <MishawakaSoftwareContent />
    </div>
  );
}
