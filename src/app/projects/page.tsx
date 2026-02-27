import type { Metadata } from "next";
import WorkPageContent from "@/components/WorkPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Bryan Develops — Web Design, SEO & Software",
  description:
    "Explore the portfolio of Bryan Develops. Custom websites, SEO campaigns, and software projects built for businesses in South Bend, Indiana and across the country.",
  keywords: [
    "web design portfolio",
    "software projects South Bend",
    "SEO case studies",
    "Bryan Develops portfolio",
    "web developer projects Indiana",
  ],
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans selection:bg-indigo-500/30 pt-28">
      <Navbar variant="light" />
      <WorkPageContent />
    </div>
  );
}
