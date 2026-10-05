### WANDERLUSH — CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-10-06

### Added

- Complete migration from Vite React SPA to Next.js 16.3.8 App Router.
- Full server-side rendering (SSR) and automated pre-rendering for optimal Core Web Vitals.
- Comprehensive barrel-export architecture across `components`, `layout`, `sections`, `ui`, `hooks`, `types`, `constants`, and `lib`.
- Inlined JSON-LD structured schemas (`TravelAgency`, `TouristAttraction`) and OpenGraph metadata.
- Unified `pnpm verify` script combining format checks, Next.js linting, TypeScript compiler checks, and production compilation.
- API route handlers for `/api/newsletter` and `/api/stays`.
- Responsive media queries and modular CSS design tokens.
