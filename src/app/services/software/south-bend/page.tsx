import type { Metadata } from "next";
import SouthBendSoftwareContent from "@/components/SouthBendSoftwareContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Custom Software & App Development in South Bend, IN | Bryan Develops",
  description:
    "Custom software development and app development in South Bend, Indiana. Workflow automation, AI chatbots, business dashboards, and mobile apps. Based locally in South Bend. Free consultation.",
  keywords: [
    "custom software South Bend",
    "software developer South Bend Indiana",
    "app development South Bend IN",
    "business automation South Bend",
    "AI chatbot South Bend",
    "custom dashboard South Bend",
    "mobile app developer South Bend",
    "software company South Bend Indiana",
    "workflow automation South Bend",
    "SaaS developer South Bend",
    "web app developer South Bend",
    "South Bend software engineer",
    "app developer near Notre Dame",
    "custom software Mishawaka",
    "software development company South Bend",
  ],
  openGraph: {
    title: "Custom Software & App Development in South Bend | Bryan Develops",
    description:
      "Custom software, mobile apps, AI tools, and business automation for South Bend businesses. Based locally.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, Custom Software & App Development in South Bend",
  description:
    "Custom software development, mobile app development, workflow automation, and AI tools for businesses in South Bend, Mishawaka, Granger, and the greater Michiana area.",
  url: "https://bryandevelops.com/services/software/south-bend",
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
    "Custom Software Development",
    "Mobile App Development",
    "Workflow Automation",
    "AI Chatbot Development",
    "Business Dashboard Development",
    "SaaS Development",
  ],
};

export default function SouthBendSoftwarePage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="dark" />
      <SouthBendSoftwareContent />
    </div>
  );
}
