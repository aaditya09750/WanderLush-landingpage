### WANDERLUSH — CONTRIBUTION GUIDELINES

![Next.js](https://img.shields.io/badge/Next.js-16.3.8-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-9.15.4-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

**Developer:** Aaditya Gunjal - Full Stack Developer

Thank you for contributing to WanderLush! To maintain production quality and clean git history, please follow these guidelines.

---

## 1. Development Workflow

1. Fork and clone the repository.
2. Ensure you have Node.js 22+ and pnpm 9+ installed.
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
5. Start the development server:
   ```bash
   pnpm dev
   ```

---

## 2. Conventional Commits

We follow Conventional Commits standard:

- `feat: add new stay card review counter`
- `fix: resolve mobile navigation backdrop blur on safari`
- `docs: update setup walkthrough in docs/SETUP.md`
- `refactor: optimize barrel exports in src/components`

---

## 3. Quality Gate Before Opening a Pull Request

Every pull request must pass the consolidated verification script:

```bash
pnpm verify
```

This runs:

- `pnpm run format:check` (Prettier)
- `pnpm run lint` (ESLint 9 Next.js configuration)
- `pnpm run typecheck` (`tsc --noEmit`)
- `pnpm run build` (Next.js production compile)

---

## 4. Contact & Support

- **Developer:** Aaditya Gunjal - Full Stack Developer
- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **LinkedIn:** [aadityagunjal0975](https://www.linkedin.com/in/aadityagunjal0975/)
- **Phone:** +91 84335 09521
