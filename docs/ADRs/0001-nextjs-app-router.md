# ADR 0001: Migration to Next.js 16 App Router

## Status

Accepted

## Context

The legacy application was built as a single-page Vite application where all components were bundled into client-side JavaScript. This caused poor organic SEO visibility, no structured data markup for search engine crawlers, and delayed First Contentful Paint.

## Decision

Migrate the frontend architecture to Next.js 16.3.8 using the App Router (`src/app/`), running React 19 Server Components by default.

## Consequences

- **Positive:** Automatic SSR and static optimization, native `next/font/google` and `next/image` pipelines, built-in dynamic sitemaps and robots.txt, inlined JSON-LD metadata.
- **Negative:** Client interactive code must be explicitly designated using the `"use client";` boundary directive.
