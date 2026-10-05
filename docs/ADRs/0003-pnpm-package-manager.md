# ADR 0003: Adoption of pnpm Package Manager and Unified Verification

## Status

Accepted

## Context

NPM flat `node_modules` causes phantom dependency leakage and slower installation speeds. Developers also need a unified command to verify code cleanliness and build integrity before submitting changes.

## Decision

Adopt `pnpm` exclusively across all scripts and documentation, and introduce `pnpm verify` to run Prettier formatting checks, Next.js ESLint 9 checks, TypeScript compiler checks, and production compilation in sequence.

## Consequences

- **Positive:** Fast, content-addressable dependency storage; strict dependency resolution; single deterministic quality gate (`pnpm verify`).
- **Negative:** Developers must have `pnpm` installed globally.
