### WANDERLUSH — SYSTEM ARCHITECTURE SPECIFICATION

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Architecture](https://img.shields.io/badge/Architecture-App_Router_SSR-blue?style=for-the-badge)

**Developer:** Aaditya Gunjal - Full Stack Developer

---

## 1. System Context Diagram

```mermaid
graph TD
    Client["Client Browser (Desktop/Mobile)"]

    subgraph NextServer["Next.js 16.3.8 Edge / Node Runtime"]
        RootLayout["RootLayout (Server Component)<br/>• Font Optimization (Manrope)<br/>• Structured Data (JSON-LD)<br/>• Preloaded Stylesheets"]
        HomePage["HomePage (Server Component)<br/>• Static Page Composition<br/>• Section Assembly"]

        subgraph RouteHandlers["API Route Handlers"]
            NewsletterRoute["POST /api/newsletter<br/>RFC 5322 Validation"]
            StaysRoute["GET /api/stays<br/>Category Query Filter"]
        end
    end

    subgraph ClientLeaves["Client Interactive Leaves ('use client')"]
        HeaderClient["Header & MobileNav<br/>State: drawer open/close"]
        HeroClient["HeroSection<br/>State: active slide & blur loop"]
        StaysFilterClient["StaysFilter & SearchBar<br/>State: category & search popovers"]
        PaginationClient["Pagination<br/>State: page index (6 per page)"]
        StayCardClient["StayCard<br/>State: active photo micro-carousel"]
        MotionWrappers["AnimatedSection & FeatureTile<br/>Framer Motion Reveal & Hover Blur"]
        FooterCurtain["Footer<br/>Scroll Parallax Curtain Reveal"]
    end

    Client -->|HTTP GET /| RootLayout
    RootLayout --> HomePage
    HomePage --> ClientLeaves
    Client -->|POST /api/newsletter| NewsletterRoute
    Client -->|GET /api/stays?category=Villa| StaysRoute
```

---

## 2. Request & Hydration Pipeline

1. **Initial Edge Request:**  
   The user agent requests `GET /`. Next.js executes the Server Components `app/layout.tsx` and `app/page.tsx` on the server.
2. **HTML Stream & Meta Injection:**  
   HTML is streamed to the browser with inlined JSON-LD structured schemas (`TravelAgency`, `TouristAttraction`), Google Font `Manrope` preload links, and CSS custom property tokens.
3. **Selective Hydration:**  
   Only the client interactive leaves (`Header`, `HeroSection`, `StaysSection`, `Pagination`, `StayCard`, `AnimatedSection`, `Footer`) hydrate React event handlers. The rest of the page remains pure HTML/CSS with zero runtime JS penalty.
4. **Optimistic Route Handler Interaction:**
   - Subscribing to the newsletter issues a lightweight `fetch("/api/newsletter", { method: "POST" })`.
   - Category filtering executes through client hook `useStayFilter` with instant state transition and pagination resets.

---

## 3. Data Flow Sequence Diagram

```mermaid
sequenceDiagram
    autonumber
    actor Traveler as Traveler
    participant App as Next.js App Router
    participant StaysAPI as /api/stays
    participant NewsAPI as /api/newsletter

    Note over Traveler, App: Page Load & Initial Render
    Traveler->>App: Request Landing Page (GET /)
    App->>App: Pre-render Server Components
    App-->>Traveler: Rendered HTML + Inlined JSON-LD + Critical CSS

    Note over Traveler, StaysAPI: Filter Accommodations & Paginate
    Traveler->>Traveler: Click category chip ("Resort") or Next Page
    Traveler->>StaysAPI: Fetch /api/stays?category=Resort
    StaysAPI-->>Traveler: 200 OK { data: [StayItem, ...] }
    Traveler->>Traveler: Slice active page (6 items) & smooth scroll to #stays

    Note over Traveler, NewsAPI: Newsletter Subscription
    Traveler->>Traveler: Enter email & submit footer form
    Traveler->>NewsAPI: POST /api/newsletter { email }
    NewsAPI->>NewsAPI: Validate RFC 5322 email regex
    NewsAPI-->>Traveler: 201 Created { success: true }
    Traveler->>Traveler: Display subscribed feedback
```

---

## 4. Key Architectural Patterns

### 4.1. Stationary In-Place Hero Slideshow
- **Zero-Shift Crossfade:** Destination slides crossfade using Framer Motion `AnimatePresence` with explicit `mode="wait"`, `y: 0`, and backdrop blur (`blur(12px)`), guaranteeing that editorial typography never shifts vertically during automated 5-second transitions.
- **Data Decoupling:** Destination metadata, coordinates, and high-resolution CDN assets are isolated within `@/constants/hero.ts` with strict TypeScript contracts in `@/types/hero.ts`.

### 4.2. In-Card Accommodation Carousel & Client Pagination
- **Independent Photo Cycling:** Each `StayCard` independently cycles through an internal `images` array with micro-dot navigation and auto-loop timers, allowing travelers to preview accommodations without leaving the catalog.
- **Client Pagination Engine:** Handled via `useStayFilter` hook chunking data to 6 items per page. Page transitions trigger window scroll restoration back to `#stays` with smooth easing.

### 4.3. Sticky Parallax Curtain Reveal Footer
- **Layered Visual Depth:** The main page sections are wrapped within a high-elevation container (`.content-curtain`, `z-index: 10`, `position: relative`, background canvas), sliding over a sticky bottom footer (`z-index: 0`).
- **Scroll Interpolation:** The footer tracks container scroll offsets via `useScroll` and `useTransform`, translating smoothly (`y: -70px` $\rightarrow$ `0px`) as the traveler scrolls to the bottom of the viewport.

---

## 5. Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-aaditya09750-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

- **Developer:** Aaditya Gunjal - Full Stack Developer
- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **LinkedIn:** [aaditya09750](https://www.linkedin.com/in/aaditya09750/)
- **Phone:** +91 84335 09521
