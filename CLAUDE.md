### WANDERLUSH — AI CODING ASSISTANT REPO MAP (CLAUDE.md)

![AI-Ready](https://img.shields.io/badge/Agent-Onboarding-blue?style=for-the-badge)

**Developer:** Aaditya Gunjal - Full Stack Developer

## Architecture & Conventions

- **Framework:** Next.js 16.3.8 (App Router), React 19.2.6, TypeScript 5.9.3, Tailwind CSS 4.1.17, Framer Motion 12.4.7.
- **Package Manager:** `pnpm` exclusively. Do not use `npm` or `yarn`.
- **Quality Gate:** Run `pnpm verify` (runs format check, linting, typecheck, build).
- **Paths & Aliases:** Path alias `@/*` maps to `./src/*`.
- **Barrel Exports:** Every domain module has an `index.ts`. Import from `@/components/layout`, `@/components/ui`, `@/hooks`, `@/types`, `@/constants`, `@/lib`.
- **Server vs Client Components:**
  - `src/app/layout.tsx` and `src/app/page.tsx` are Server Components.
  - Interactive leaves (`Header.tsx`, `StaysSection.tsx`, `AnimatedSection.tsx`, `FeatureTile.tsx`) must declare `"use client";`.

## Key Commands

```bash
pnpm dev       # Start Turbopack dev server (http://localhost:3000)
pnpm verify    # Run format, lint, typecheck, and build in sequence
pnpm build     # Next.js production build
pnpm typecheck # Strict TypeScript compiler check
pnpm lint      # ESLint 9 audit
```
