# ADR 0004: Barrel Export Architecture Across Domain Layers

## Status

Accepted

## Context

Deep, brittle import chains (e.g. `../../components/ui/Button/Button.tsx`) increase refactoring friction and decrease developer velocity.

## Decision

Establish `index.ts` barrel exports across all domain modules:

- `@/components/layout`
- `@/components/sections`
- `@/components/ui`
- `@/components`
- `@/hooks`
- `@/types`
- `@/constants`
- `@/lib`

## Consequences

- **Positive:** Intuitive, standardized top-level module imports; isolated internal file renames without breaking consumers.
- **Negative:** Circular dependencies must be avoided by keeping types and constants leaf-only.
