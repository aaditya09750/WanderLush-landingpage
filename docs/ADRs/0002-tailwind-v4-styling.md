# ADR 0002: Tailwind CSS v4 with Modular Domain Stylesheets

## Status

Accepted

## Context

The previous application relied on a 13.7 KB monolithic `index.css` mixed with Vite Tailwind integration. As the application grows, maintaining a single dense CSS file causes selector collisions and low readability.

## Decision

Integrate Tailwind CSS v4 via `@tailwindcss/postcss` into Next.js, and refactor the styles into modular stylesheets (`variables.css`, `hero.css`, `cards.css`, `sections.css`, `footer.css`, `responsive.css`) imported into `globals.css`.

## Consequences

- **Positive:** Clear separation of design tokens and responsive media queries; high maintainability; zero runtime CSS-in-JS overhead.
- **Negative:** Styles must be kept aligned with CSS custom properties.
