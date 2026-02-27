import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact | Bryan Develops — Get a Free Quote",
  description:
    "Get in touch with Bryan Develops for custom web design, SEO, and software development. Free consultations for businesses in South Bend and nationwide.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans selection:bg-indigo-500/30 pt-28">
      <Navbar variant="dark" />
      <ContactPageContent />
    </div>
  );
}
