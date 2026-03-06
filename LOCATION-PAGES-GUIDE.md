# Location + Service Landing Page Guide

A reusable guide for creating location-specific service landing pages on bryandevelops.com.

## Overview

Each location page targets local SEO keywords for a specific city + service combination (e.g., "web design Fort Wayne" or "SEO services South Bend"). The page follows the same structure and theme as its parent service page but with hyper-local content.

## Current Pages

| Service | South Bend | Fort Wayne |
|---------|-----------|------------|
| Web Development | /services/web-development/south-bend | /services/web-development/fort-wayne |
| Custom Software | /services/software/south-bend | /services/software/fort-wayne |
| SEO Services | /services/seo/south-bend | /services/seo/fort-wayne |

## Theme Per Service

| Service | Theme | Navbar | Background | Text Colors |
|---------|-------|--------|------------|-------------|
| Web Development | Light | `variant="light"` | `bg-[#f8f9fa]`, `pt-28` | `text-neutral-900`, `text-neutral-500` |
| Custom Software | Dark | `variant="dark"` | `bg-neutral-950` | `text-white`, `text-neutral-400` |
| SEO Services | Dark | `variant="dark"` | `bg-neutral-950` | `text-white`, `text-neutral-400` |

## Files to Create (per location page)

### 1. Page file: `src/app/services/[service]/[city-slug]/page.tsx`

```typescript
import type { Metadata } from "next";
import [CityService]Content from "@/components/[CityService]Content";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "[Service] in [City], IN | Bryan Develops",
  description: "...", // 150-160 chars, mention city + service + key differentiator
  keywords: [
    // 12-15 keywords combining city + service variations
    // Include "get more website traffic [city]" for SEO pages
  ],
  openGraph: {
    title: "[Service] in [City] | Bryan Develops",
    description: "...",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bryan Develops, [Service] in [City]",
  description: "...",
  url: "https://bryandevelops.com/services/[service]/[city-slug]",
  areaServed: [
    // Primary city + 4-5 nearby cities + state
    { "@type": "City", name: "[City]", addressRegion: "IN" },
    // ... nearby cities
    { "@type": "State", name: "Indiana" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "South Bend",
    addressRegion: "IN",
    addressCountry: "US",
  },
  serviceType: [
    // Match the parent service page's serviceType array
  ],
};
```

### 2. Content component: `src/components/[CityService]Content.tsx`

Naming convention: `[City][Service]Content.tsx`
- Examples: `FortWayneWebDevContent.tsx`, `SouthBendSoftwareContent.tsx`, `FortWayneSeoContent.tsx`

## Content Component Structure

Every location page follows this section layout:

```
1. Hero Section
   - Subtitle: "[Service], [City], IN"
   - H1 with city name in gradient text
   - Description mentioning the city
   - CTA buttons: primary (/contact) + secondary (/services/[service])
   - Subtext: "Based in South Bend, serving [City]..."

2. Pain Points Section (4 items)
   - City-specific problems
   - Reference local streets, neighborhoods, landmarks
   - Question + answer format

3. Services Grid (6 cards)
   - Same services as parent page
   - City name woven into descriptions where natural
   - Uses accentClasses color system (indigo, emerald, purple, amber, pink)

4. [Service-specific section]
   - Web Dev: Platforms grid (WordPress, Shopify, etc.)
   - SEO: simplSEO DIY alternative section
   - Software: (none extra)

5. Why Local Matters Section
   - For South Bend: "I live right here"
   - For other cities: "Based in South Bend, X hours away"
   - 3 value cards (Local, Direct/Transparent, Ongoing/Flexible)

6. Industries Served Grid
   - 6 industry cards
   - South Bend: Manufacturing, Healthcare, Startups, Restaurants, Real Estate, Professional Services
   - Fort Wayne: Contractors, Healthcare, Retail, Restaurants, Real Estate, Professional Services

7. CTA Section
   - "Serving [City] & [Region]"
   - Final heading + description
   - CTA buttons

8. Footer
   - Light: border-neutral-200, text-neutral-400
   - Dark: border-white/10, text-neutral-500
```

## Files to Modify (per location page)

### 3. ServicesPageContent.tsx

Add to the relevant service's `locations` array:

```typescript
locations: [
  { label: "South Bend, IN", href: "/services/[service]/south-bend" },
  { label: "Fort Wayne, IN", href: "/services/[service]/fort-wayne" },
  { label: "[New City], IN", href: "/services/[service]/[city-slug]" },
],
```

### 4. sitemap.ts

Add entry after the parent service's existing location entries:

```typescript
{ url: `${baseUrl}/services/[service]/[city-slug]`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
```

### 5. public/llms.txt

Add to the Pages section:

```
- [Service - City](https://bryandevelops.com/services/[service]/[city-slug])
```

### 6. public/llms-full.txt

Add to the service's "Location-specific pages" list and the Site Map section.

## Content Guidelines

### Do
- Reference specific neighborhoods, streets, and landmarks in the city
- Mention local industries relevant to that city
- Use unique copy for each city (not just find-and-replace city names)
- Include "get more website traffic" in SEO pages
- Include simplSEO section in SEO pages
- Use commas, periods, colons, or parentheses instead of em dashes
- Keep accent colors consistent with the service theme

### Don't
- Use em dashes (--) anywhere in content
- Copy content verbatim from the parent service page
- Use generic city references (be specific to neighborhoods)
- Forget to update all 4 support files (services page, sitemap, llms.txt, llms-full.txt)

## Nearby Cities Reference

### South Bend area (areaServed)
South Bend, Mishawaka, Granger, Osceola, Roseland

### Fort Wayne area (areaServed)
Fort Wayne, New Haven, Columbia City, Huntington, Auburn

### Future cities to consider
Elkhart, Mishawaka, Indianapolis, Bloomington, Lafayette

## Quick Checklist

- [ ] Create `src/app/services/[service]/[city-slug]/page.tsx`
- [ ] Create `src/components/[City][Service]Content.tsx`
- [ ] Add location to `ServicesPageContent.tsx`
- [ ] Add URL to `sitemap.ts`
- [ ] Add to `public/llms.txt`
- [ ] Add to `public/llms-full.txt`
- [ ] Run `npx next build` to verify
- [ ] Check no em dashes in content
