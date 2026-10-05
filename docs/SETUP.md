### WANDERLUSH — DEVELOPER ONBOARDING WALKTHROUGH

![Setup](https://img.shields.io/badge/Onboarding-Sub--30_Minutes-success?style=for-the-badge)
![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

**Developer:** Aaditya Gunjal - Full Stack Developer

Follow this step-by-step walkthrough to get WanderLush running locally from a clean clone in under 15 minutes.

---

## 1. Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v22.0.0` or higher ([Node.js Website](https://nodejs.org))
- **pnpm**: `v9.0.0` or higher (`corepack enable && corepack prepare pnpm@latest --activate`)
- **Git**: Installed and configured

---

## 2. Installation

```bash
# 1. Clone the repository
git clone git@github.com:aaditya09750/wonderLush-Ui.git
cd wonderLush-Ui

# 2. Install dependencies using pnpm
pnpm install
```

<!-- TODO: screenshot of successful pnpm install output -->

---

## 3. Environment Configuration

Copy the example environment variables:

```bash
cp .env.example .env.local
```

---

## 4. Running the Development Server

Start the Next.js Turbopack development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

<!-- TODO: screenshot of landing page running at localhost:3000 -->

---

## 5. Verification Commands

Before submitting code, always run the unified verification pipeline:

```bash
pnpm verify
```

<!-- TODO: screenshot of successful pnpm verify terminal output -->
