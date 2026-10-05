### WANDERLUSH — CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-10-06

### Added

- 100vh full-bleed Hero Section with continuous 4-slide auto-looping carousel and stationary in-place blur crossfade transitions.
- Extracted hero carousel data and TypeScript models into `@/constants/hero.ts` and `@/types/hero.ts`.
- Expanded stay categories to 8 options (`All`, `Resort`, `Villa`, `Hotel`, `Cottage`, `Homestay`, `Guesthouse`, `Eco Lodge`) with high-resolution imagery for all categories.
- In-card continuous multi-photo gallery carousels with micro-dot navigation and automated looping.
- Client-side pagination engine (`components/ui/Pagination.tsx`) chunked at 6 accommodations per page with automated smooth scrolling to `#stays`.
- Interactive search popovers for date range selection, nightly budget tiers, and guest count steppers.
- Journey expedition cards with on-hover background image blur (`blur(14px)`), minimal frosted glass travel specs (elevation, duration), and clean action buttons.
- Sticky bottom parallax curtain reveal footer (`.content-curtain` scroll transform `y: -70px` to `0px`).
- Luxury custom 8px scrollbar for WebKit and Firefox browsers matching WanderLush dark aesthetic tokens.

### Changed

- Synchronized live production deployment URL across site constants, OpenGraph metadata, sitemap generator, `robots.txt`, and documentation to `https://wanderlush-eight.vercel.app/`.
- Refined footer responsive layout for mobile viewports into a streamlined 3-column navigation flow.
- Upgraded `/api/stays` route handler to support query filtering across all 8 stay categories and multi-image schemas.
- Enhanced `@/hooks/useStayFilter` to maintain pagination state and trigger automatic page-top scroll on index change.

### Fixed

- Eliminated vertical layout shift and bounce during hero text and backdrop transitions by setting translation offset to zero.
- Resolved hover overlay ghosting and contrast conflicts on mobile touch screens for journey expedition cards.

## [1.0.0] - 2026-10-06

### Added

- Complete migration from Vite React SPA to Next.js 16.3.8 App Router.
- Full server-side rendering (SSR) and automated pre-rendering for optimal Core Web Vitals.
- Comprehensive barrel-export architecture across `components`, `layout`, `sections`, `ui`, `hooks`, `types`, `constants`, and `lib`.
- Inlined JSON-LD structured schemas (`TravelAgency`, `TouristAttraction`) and OpenGraph metadata.
- Unified `pnpm verify` script combining format checks, Next.js linting, TypeScript compiler checks, and production compilation.
- API route handlers for `/api/newsletter` and `/api/stays`.
- Responsive media queries and modular CSS design tokens.
