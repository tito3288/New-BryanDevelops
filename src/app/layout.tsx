import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Develops | Web Design, SEO & Custom Software — South Bend, IN",
  icons: {
    icon: "/Bryan-Develops-logo-2.png",
  },
  description:
    "Custom web design, SEO optimization, and software development by Bryan Develops. Helping businesses in South Bend and nationwide with websites, search rankings, and custom apps that drive real results.",
  keywords: [
    "web design south bend",
    "SEO south bend",
    "custom software development",
    "web developer indiana",
    "small business website",
    "SEO optimization",
    "custom web apps",
    "Bryan Develops",
  ],
  openGraph: {
    title: "Bryan Develops | Web Design, SEO & Custom Software",
    description:
      "Custom websites, SEO strategies, and software built for businesses. Standing out online? That's where I come in.",
    type: "website",
    locale: "en_US",
    siteName: "Bryan Develops",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops",
  url: "https://bryandevelops.com",
  description:
    "Custom web design, SEO optimization, and software development helping businesses stand out online.",
  areaServed: [
    { "@type": "City", name: "South Bend", containedInPlace: { "@type": "State", name: "Indiana" } },
    { "@type": "Country", name: "United States" },
  ],
  serviceType: [
    "Web Design",
    "SEO Optimization",
    "Custom Software Development",
    "Web Development",
    "Branding",
  ],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Bend",
    addressRegion: "IN",
    addressCountry: "US",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
