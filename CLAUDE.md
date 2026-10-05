### WANDERLUSH — AI CODING ASSISTANT REPO MAP (CLAUDE.md)

![AI-Ready](https://img.shields.io/badge/Agent-Onboarding-blue?style=for-the-badge)

**Developer:** Aaditya Gunjal - Full Stack Developer

## Architecture & Conventions

- **Framework:** Next.js 16.3.8 (App Router), React 19.2.6, TypeScript 5.9.3, Tailwind CSS 4.1.17, Framer Motion 12.4.7.
- **Package Manager:** `pnpm` exclusively. Do not use `npm` or `yarn`.
- **Quality Gate:** Run `pnpm verify` (runs format check, linting, typecheck, build).
- **Paths & Aliases:** Path alias `@/*` maps to `./*` (root directory, no `src/` wrapper).
- **Barrel Exports:** Every domain module has an `index.ts`. Import from `@/components/layout`, `@/components/ui`, `@/hooks`, `@/types`, `@/constants`, `@/lib`.
- **Server vs Client Components:**
  - `app/layout.tsx` and `app/page.tsx` are Server Components.
  - Interactive leaves (`Header.tsx`, `HeroSection.tsx`, `StaysSection.tsx`, `Pagination.tsx`, `StayCard.tsx`, `AnimatedSection.tsx`, `FeatureTile.tsx`, `Footer.tsx`) must declare `"use client";`.
- **Key Motion Conventions:**
  - Stationary in-place transitions: Keep `y: 0` during crossfade transitions to prevent vertical layout shifts.
  - Curtain reveal footer: Main page content wrapped in `.content-curtain` (`z-index: 10`), revealing sticky footer underneath (`y: -70px` $\rightarrow$ `0px`).
  - Stays catalog: 8 categories (`All`, `Resort`, `Villa`, `Hotel`, `Cottage`, `Homestay`, `Guesthouse`, `Eco Lodge`), 6 items per page pagination with smooth auto-scroll to `#stays`.

## Key Commands

```bash
pnpm dev       # Start Turbopack dev server (http://localhost:3000)
pnpm verify    # Run format, lint, typecheck, and build in sequence
pnpm build     # Next.js production build
pnpm typecheck # Strict TypeScript compiler check
pnpm lint      # ESLint 9 audit
```

## Contact & Developer Links

- **Developer:** Aaditya Gunjal - Full Stack Developer
- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **LinkedIn:** [aaditya09750](https://www.linkedin.com/in/aaditya09750/)
- **Phone:** +91 84335 09521
