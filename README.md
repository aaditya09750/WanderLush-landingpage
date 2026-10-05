### WANDERLUSH — RESPONSIVE LUXURY TRAVEL & ADVENTURE SHOWCASE (Next.js)

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4.7-black?style=for-the-badge&logo=framer&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-1.3.26-000000?style=for-the-badge&logo=javascript&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-00D4FF?style=for-the-badge&logo=css3&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-1.52.0-F56565?style=for-the-badge&logo=lucide&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

A modern, elegant, and fully responsive luxury travel showcase and accommodation discovery experience built with Next.js 16 (App Router), React 19, TypeScript 5.9, and Tailwind CSS v4. Features an immersive Mount Bromo volcanic editorial design, Lenis hardware-accelerated smooth scrolling, floating glassmorphic topbar navigation, interactive 5-tile journey grid with video triggers, filterable luxury villas and resort catalog with category chips, grayscale mountain panorama with dynamic focal zoom window, and editorial travel blog.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Core Features

**Lenis Hardware-Accelerated Smooth Scrolling** - Butter-smooth scrolling wired through a root layout provider, syncing with native browser wheel events and respecting `prefers-reduced-motion`.

**Persistent Floating Glassmorphic Topbar** - A top-anchored, translucent navigation bar with backdrop blur, brand logo, responsive navigation links, CTA schedule button, and smooth mobile drawer menu.

**Hero Banner with Panoramic Volcanic Backdrop** - Bold editorial headline ("Experience the Magic of Bromo"), frosted glass pill badge, primary action CTA with hover micro-animations, travel perspective insight cards, and quick social links.

**5-Tile Mount Bromo Journey Showcase** - Responsive asymmetric grid presenting Country Above the Clouds, Lava Jeep Tour, Bromo Hiking, Luhur Poten Temple, and Horse Riding with video preview badges, traveler avatar stacks, and smooth hover elevation.

**Atmospheric Landscape Story Section** - Tactile dotted canvas background highlighting Mount Bromo's surreal volcanic sea of sand, savannahs, and crater geology.

**Luxury Villas & Hotels Catalog with Interactive Filters** - Comprehensive accommodation catalog featuring interactive search triggers (Date, Budget, Guest), real-time category chips (Resort, Villa, Hotel, Cottage, Homestay, Eco Lodge), star rating badges, and price overlays.

**Panoramic Mountain Elevation Explorer** - Grayscale Mount Bromo panoramic vista highlighting Gunung Semeru (3676m), Gunung Widodaren (2614m), Gunung Bromo (2392m), and a hover-activated color focal window for Gunung Batok (2400m).

**Editorial Travel Stories Grid** - Curated blog section showcasing local cultural traditions, author credentials, sea of sand jeep expeditions, and sunrise viewpoints.

**Newsletter & Multi-Column Travel Index** - 4-column footer with email subscription form, social channels, legal links, and customer support channels.

## Technology Stack

| Technology    | Version | Purpose                                                                         |
| ------------- | ------- | ------------------------------------------------------------------------------- |
| Next.js       | 16.3.8  | App Router framework with Turbopack, SSR/SSG, and metadata API                  |
| React         | 19.2.6  | Modern component-driven UI with Server Components and client hooks              |
| TypeScript    | 5.9.3   | Static typing with strict mode for type-safe development                        |
| Tailwind CSS  | 4.1.17  | CSS-first utility styling with custom `@theme` tokens                           |
| Lenis         | 1.3.26  | Hardware-accelerated smooth scrolling with RAF loop                             |
| Framer Motion | 12.4.7  | Viewport reveal animations, smooth layout shifts, and micro-interactions        |
| Lucide React  | 1.52.0  | Crisp SVG icons for interactive interface controls                              |
| Manrope       | Google  | Contemporary sans-serif geometric typography via `next/font/google`             |
| ESLint        | 9.20.0  | Code linting with Next.js flat configuration                                    |
| Prettier      | 3.5.0   | Consistent code formatting with automated line wrapping                         |
| PostCSS       | 8.5.1   | CSS post-processing with `@tailwindcss/postcss`                                 |
| pnpm          | 9.15.4  | Package manager pinned via the `packageManager` field for reproducible installs |

## Quick Start

### Installation

```bash
# Clone the repository
git clone git@github.com:aaditya09750/wonderLush-Ui.git
cd wonderLush-Ui

# Install dependencies using pnpm
pnpm install

# Start development server with Turbopack
pnpm dev
```

### Build & Audit Commands

```bash
# Single command comprehensive verification (format, lint, typecheck, build)
pnpm verify

# TypeScript strict type checking
pnpm typecheck

# ESLint flat config audit
pnpm lint

# Format check with Prettier
pnpm format:check

# Build for production
pnpm build

# Start production server preview
pnpm start
```

## Project Structure

```
wonderLush-Ui/
├── app/                                # Next.js App Router root
│   ├── api/                            # API Route Handlers
│   │   ├── newsletter/route.ts         # POST /api/newsletter endpoint
│   │   └── stays/route.ts              # GET /api/stays endpoint
│   ├── globals.css                     # Global CSS entry importing Tailwind & modules
│   ├── layout.tsx                      # Root layout, Google fonts, JSON-LD schema
│   ├── not-found.tsx                   # Custom branded 404 page
│   ├── loading.tsx                     # Loading skeleton fallback
│   ├── error.tsx                       # Client error boundary
│   ├── page.tsx                        # Home page composing all sections
│   ├── robots.ts                       # Search engine crawler instructions
│   └── sitemap.ts                      # Dynamic XML sitemap generator
├── components/                         # Modular component library
│   ├── layout/                         # Structural layout & navigation
│   │   ├── Header.tsx                  # Floating glassmorphic topbar
│   │   ├── Footer.tsx                  # 4-column footer with newsletter
│   │   ├── Logo.tsx                    # Brand logo
│   │   ├── MobileNav.tsx               # Client drawer navigation
│   │   ├── SocialLinks.tsx             # Social media icon group
│   │   └── index.ts                    # Barrel export
│   ├── sections/                       # Full landing page sections
│   │   ├── HeroSection.tsx             # Volcanic banner with CTA
│   │   ├── JourneySection.tsx          # 5-tile Bromo tour showcase
│   │   ├── StorySection.tsx            # Dotted background landscape quote
│   │   ├── StaysSection.tsx            # Filterable villa & hotel catalog
│   │   ├── PanoramaSection.tsx         # Mountain peak vista & zoom window
│   │   ├── BlogSection.tsx             # Travel editorial stories
│   │   └── index.ts                    # Barrel export
│   ├── ui/                             # Reusable UI primitives
│   │   ├── Button.tsx                  # Polymorphic button variants
│   │   ├── RatingBadge.tsx             # Glassmorphic rating pill
│   │   ├── AnimatedSection.tsx         # Framer motion reveal container
│   │   ├── FeatureTile.tsx             # Journey highlight card
│   │   ├── StayCard.tsx                # Accommodation card
│   │   ├── BlogCard.tsx                # Editorial blog card
│   │   ├── SearchBar.tsx               # Date, budget, guest search trigger
│   │   ├── FilterChips.tsx             # Category filter chips
│   │   └── index.ts                    # Barrel export
│   └── index.ts                        # Master components barrel export
├── constants/                          # Centralized immutable datasets
│   ├── images.ts                       # High-resolution CDN assets
│   ├── navigation.ts                   # Header & footer routes
│   ├── journeys.ts                     # Tour activities array
│   ├── stays.ts                        # Accommodations dataset
│   ├── site.ts                         # Site metadata & peaks
│   └── index.ts                        # Barrel export
├── hooks/                              # Custom React hooks
│   ├── useMediaQuery.ts                # Breakpoint detection hook
│   ├── useMobileNav.ts                 # Mobile drawer & scroll-lock hook
│   ├── useStayFilter.ts                # Stay category filter hook
│   └── index.ts                        # Barrel export
├── lib/                                # Utilities & shared helpers
│   ├── cn.ts                           # Tailwind class merger (clsx + twMerge)
│   ├── animations.ts                   # Framer motion variants
│   ├── metadata.ts                     # JSON-LD & OpenGraph generator
│   └── index.ts                        # Barrel export
├── styles/                             # Modular domain stylesheets
│   ├── variables.css                   # Design tokens & color variables
│   ├── hero.css                        # Hero banner & topbar rules
│   ├── sections.css                    # Sections, buttons, and panorama
│   ├── cards.css                       # Tiles, cards, search, and chips
│   ├── footer.css                      # Footer layout & newsletter input
│   └── responsive.css                  # Consolidated media queries
└── types/                              # TypeScript interfaces & types
    ├── journey.ts                      # Journey & feature tile types
    ├── stay.ts                         # Stay item & category types
    ├── blog.ts                         # BlogPost & author types
    ├── newsletter.ts                   # Newsletter payload & API response
    └── index.ts                        # Barrel export
```

## Design System

### Color Palette

| Color Variable      | Hex / Value                 | Usage                           |
| ------------------- | --------------------------- | ------------------------------- |
| `--color-bg`        | `#eceeef`                   | Outer frame canvas backdrop     |
| `--color-surface`   | `#ffffff`                   | Card surfaces, active buttons   |
| `--color-dark`      | `#131313`                   | Primary text, dark accents      |
| `--color-dark-btn`  | `#181818`                   | Primary action button surfaces  |
| `--color-muted`     | `#747474`                   | Secondary descriptions, subtext |
| `--color-footer-bg` | `#171414`                   | 4-column footer background      |
| `--color-accent`    | `#ffd348`                   | Rating stars, focal peaks       |
| `--color-line`      | `rgba(255, 255, 255, 0.15)` | Glassmorphic dividers & borders |

### Typography Scale

- **Display Headline:** `clamp(42px, 5.35vw, 58px)` (Hero title)
- **Section Title:** `39px` (Journey, Blog)
- **Subtitle / Quote:** `23px` (Story landscape quote)
- **Card Title:** `15px` / `22px` (Feature tiles & blog articles)
- **Body & Captions:** `10px` / `9px` (Notes, filters, navigation)
- **Micro Labels:** `8px` / `7px` (Badges, peak elevation tags, buttons)

### Font Family

**Manrope** — Contemporary geometric sans-serif loaded natively via `next/font/google` for zero layout shifts and rapid font preloading.

## Website Sections

### Header & Navigation

- Fixed/absolute glass topbar with deep backdrop blur
- Responsive navigation links with hover opacity transitions
- Schedule Now pill button with inverted hover effect
- Full-screen slide-down drawer menu for mobile viewports

### Hero Section

- High-resolution Mount Bromo volcanic backdrop
- Frosted glass eyebrow pill badge with smooth spring reveal
- Primary Explore Now CTA with animated arrow gap expansion
- Perspective travel insights notes and social channel icon dock

### The Journey of Bromo

- 5-tile responsive asymmetric showcase
- Video play indicator badges and traveler avatar stacks
- Split editorial description with Remind Me and Learn More actions

### Story Section

- Minimalist tactile dotted canvas background
- Editorial reflection on Mount Bromo's surreal volcanic crater sea of sand

### Selection of Stays

- Accommodation catalog with real-time category filtering (Resort, Villa, Hotel, Cottage, etc.)
- Integrated date, budget, and guest search triggers
- Glassmorphic 4.9 rating badges, location tags, and pricing badges

### Panorama Mountain Explorer

- High-contrast grayscale Mount Bromo vista
- Elevation marker pills for Gunung Semeru (+3676m), Gunung Widodaren (+2614m), Gunung Bromo (+2392m)
- Interactive color focal window for Gunung Batok (+2400m) with hover zoom

### Travel Blog Around Bromo

- Featured main article with author avatar, publication date, and travel badge
- Secondary editorial cards highlighting sea of sand jeep tours and sunrise viewpoints

### Newsletter & Footer

- 4-column navigation index covering About, Support, FAQ, and Newsletter
- Email input form with RFC 5322 validation and API integration
- Copyright note and social links

## Responsive Breakpoints

| Breakpoint | Target Devices     | Key Layout Adaptations                                    |
| ---------- | ------------------ | --------------------------------------------------------- |
| < 540px    | Mobile phones      | Horizontal scroll-snap journey cards, compact search pill |
| ≤ 800px    | Tablets & iPads    | 2-column journey grid, single-column stays, mobile drawer |
| > 800px    | Laptops & Desktops | 3-column asymmetric layout, fixed 968px luxury canvas     |

## Animation Library

- **Framer Motion Viewport Reveal:** Staggered opacity and translateY reveal transitions with easing curves.
- **Hero Stagger:** Smooth entrance animation for title, eyebrow badge, and CTA.
- **Interactive Focal Window:** Smooth hover scale expansion on Mount Bromo mountain peaks.
- **Accessibility:** Full compliance with `prefers-reduced-motion: reduce`.

## Customization Guide

### Updating Accommodations & Categories

1. Open `src/constants/stays.ts` to add or update villas, pricing, and category classifications.
2. Edit `STAY_FILTERS` to configure category chips displayed on the accommodation catalog.

### Modifying Journeys & Photography

1. Open `src/constants/journeys.ts` to update tour titles, activity badges, and background imagery.
2. Update high-resolution photography URLs in `src/constants/images.ts`.

### Updating Brand & Metadata

1. Configure canonical domain, descriptions, and contact credentials in `src/constants/site.ts`.

## Browser Compatibility

![Chrome](https://img.shields.io/badge/Chrome-90+-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-88+-FF7139?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-14+-000000?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-90+-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)

**Full Support** - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+  
**Next.js Server Components** - Native edge rendering across all modern platforms  
**Glassmorphism Filters** - Browsers supporting `backdrop-filter`

## Performance Features

**Next.js 16 App Router Optimizations**

- React 19 Server Components by default for near-zero client hydration overhead
- Pre-rendered static pages with automated route segment caching
- Native font optimization via `next/font/google` for zero layout shifts (CLS = 0)
- AVIF and WebP image generation via `next/image`

**Type-Safe Architecture**

- 100% strict TypeScript typing across all components, props, and constants
- No implicit `any` throughout the codebase
- Clean path aliases (`@/*`) mapping to `src/*`
- Automated Prettier and ESLint code quality standards

## Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-aadityagunjal0975-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

**Get In Touch**

- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **Phone:** +91 84335 09521
- **LinkedIn:** [aadityagunjal0975](https://www.linkedin.com/in/aadityagunjal0975/)
- **Location:** Dombivli, Maharashtra, India

**Professional Inquiries Welcome** - Open to freelance projects, collaboration opportunities, and full-time engineering roles.

## License

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

```
MIT License

Copyright (c) 2026 Aaditya Gunjal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

**Wanderlush Luxury Travel Showcase (Next.js)** - Mount Bromo luxury tourism experience built with Next.js 16 App Router, React 19 Server Components, Tailwind CSS v4, and strict TypeScript.
