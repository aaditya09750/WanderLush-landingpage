# ADR 0005: Sticky Curtain-Reveal Footer and Multi-Image Looping Carousels

## Status

Accepted

## Context

Luxury travel landing pages demand immersive motion design without sacrificing readability or performance. The initial implementation featured static accommodation images and a standard document-flow footer, lacking depth and limiting the interactive preview capability for travelers browsing diverse villa and resort options.

## Decision

1. Implement a sticky curtain-reveal footer pattern: The main page contents reside in a high-elevation container (`.content-curtain` with `z-index: 10`), revealing a pinned bottom footer (`z-index: 0`) with smooth scroll-driven translation (`y: -70px` to `0px`).
2. Add in-card continuous multi-photo gallery loops to `StayCard` with independent timers and active indicator dots.
3. Introduce client-side pagination chunked at 6 accommodations per page (`components/ui/Pagination.tsx`) with smooth auto-scroll to `#stays`.

## Consequences

- **Positive:** Elevates visual luxury and depth; provides comprehensive visual previews across 8 accommodation categories; avoids DOM bloat by paginating 6 items per view.
- **Negative:** Requires precise CSS stacking context (`z-index`) and scroll offset calculations to ensure consistent behavior across Safari, WebKit, and mobile browsers.
