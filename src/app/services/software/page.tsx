import type { Metadata } from "next";
import SoftwarePageContent from "@/components/SoftwarePageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title:
    "Custom Software & App Development in South Bend, IN | Bryan Develops — Automation, AI & Business Tools",
  description:
    "Custom software and app development in South Bend, Indiana. Bryan Develops builds workflow automation, AI chatbots, mobile apps, business dashboards, and custom platforms for businesses in Michiana and nationwide. Free consultation.",
  keywords: [
    "custom software development South Bend",
    "software developer South Bend Indiana",
    "app development company near me",
    "app developer South Bend Indiana",
    "mobile app development South Bend",
    "iOS app developer Indiana",
    "business automation South Bend",
    "AI chatbot South Bend",
    "custom software Michiana",
    "workflow automation Indiana",
    "South Bend software company",
    "custom business tools",
    "SaaS development South Bend",
    "software developer near me",
    "app development company Indiana",
  ],
  openGraph: {
    title:
      "Custom Software & App Development in South Bend | Bryan Develops",
    description:
      "Custom software, mobile apps, AI chatbots, dashboards, and business platforms built for companies in South Bend and across the country.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops — Custom Software & App Development",
  description:
    "Custom software development, mobile app development, workflow automation, AI tools, and business platforms for companies in South Bend, Mishawaka, Elkhart, and nationwide.",
  url: "https://bryandevelops.com/services/software",
  areaServed: [
    { "@type": "City", name: "South Bend", addressRegion: "IN" },
    { "@type": "City", name: "Mishawaka", addressRegion: "IN" },
    { "@type": "City", name: "Elkhart", addressRegion: "IN" },
    { "@type": "City", name: "Granger", addressRegion: "IN" },
    { "@type": "City", name: "Fort Wayne", addressRegion: "IN" },
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
    "Custom Software Development",
    "Mobile App Development",
    "iOS App Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "SaaS Development",
  ],
  knowsAbout: [
    "Custom Software",
    "Mobile App Development",
    "iOS App Development",
    "Business Automation",
    "AI Chatbots",
    "SEO Software",
    "App Development",
  ],
};

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30 pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <SoftwarePageContent />
    </div>
  );
}
