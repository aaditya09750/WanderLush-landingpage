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
        StaysFilterClient["StaysFilter & SearchBar<br/>State: active category"]
        MotionWrappers["AnimatedSection & FeatureTile<br/>Framer Motion Reveal"]
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
   The user agent requests `GET /`. Next.js executes the Server Components `src/app/layout.tsx` and `src/app/page.tsx` on the server.
2. **HTML Stream & Meta Injection:**  
   HTML is streamed to the browser with inlined JSON-LD structured schemas (`TravelAgency`, `TouristAttraction`), Google Font `Manrope` preload links, and CSS custom property tokens.
3. **Selective Hydration:**  
   Only the client interactive leaves (`Header`, `StaysSection`, `AnimatedSection`) hydrate React event handlers. The rest of the page remains pure HTML/CSS with zero runtime JS penalty.
4. **Optimistic Route Handler Interaction:**
   - Subscribing to the newsletter issues a lightweight `fetch("/api/newsletter", { method: "POST" })`.
   - Category filtering executes through client hook `useStayFilter` with instant state transition.

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

    Note over Traveler, StaysAPI: Filter Accommodations
    Traveler->>Traveler: Click category chip ("Resort")
    Traveler->>StaysAPI: Fetch /api/stays?category=Resort
    StaysAPI-->>Traveler: 200 OK { data: [StayItem, ...] }
    Traveler->>Traveler: Re-render accommodation grid

    Note over Traveler, NewsAPI: Newsletter Subscription
    Traveler->>Traveler: Enter email & submit footer form
    Traveler->>NewsAPI: POST /api/newsletter { email }
    NewsAPI->>NewsAPI: Validate RFC 5322 email regex
    NewsAPI-->>Traveler: 201 Created { success: true }
    Traveler->>Traveler: Display subscribed feedback
```

---

## 4. Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-aadityagunjal0975-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

- **Developer:** Aaditya Gunjal - Full Stack Developer
- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **LinkedIn:** [aadityagunjal0975](https://www.linkedin.com/in/aadityagunjal0975/)
- **Phone:** +91 84335 09521
