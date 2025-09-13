
# Project Change Log

This file summarizes the evolution of GoFresco from its original T3 Next.js template to the current, cleaner, database-free, AI-friendly structure.

---

## Initial State: T3 Next.js Project

- Started from a T3 stack template (Next.js, Prisma, tRPC, Tailwind CSS, etc.).
- Included database (PostgreSQL), Prisma ORM, and related environment/config files.
- Had more dependencies and boilerplate for full-stack development.

## Major Refactoring & Simplification

- **Database and Prisma removed:**
  - All database logic, Prisma files, and environment variables (e.g. `DATABASE_URL`) were deleted.
  - No backend database is used; all data is now local and static.
- **Data now in JSON files:**
  - Product and category data moved to `/data/*.json` (alimentari, casa, frutta, verdura).
  - Each file contains category info, products, variants, and emoji icons.
- **API routes simplified:**
  - Next.js API endpoints read directly from JSON files.
  - No ORM, no migrations, no seed scripts.
- **Dependencies reduced:**
  - Only essential packages for Next.js, React, Tailwind CSS, and tRPC remain.
  - No database, no authentication, no backend logic.

## UI & App Structure

- **Shopping list, not e-commerce:**
  - The "cart" is a persistent shopping list, not a checkout system.
  - No prices are shown or stored; the app is for planning, not purchasing.
- **Components:**
  - ProductCard: shows product, emoji, variants, and quantity selector.
  - CartContext: manages cart state and syncs to localStorage.
  - Category and Product pages: display products by category or individually.
- **Emojis and icon mapping:**
  - Every product and category uses an emoji for instant recognition.
  - `/src/lib/icon-mapper.ts` maps emojis to Lucide icons for UI consistency.

## Other Improvements

- **Cleaner codebase:**
  - Removed unused files, scripts, and environment configs.
  - Improved TypeScript types and React component structure.
- **Noindex meta tag:**
  - Added to prevent search engine indexing.
- **No authentication or payments:**
  - The app is stateless, simple, and easy to reason about for both humans and AI agents.

## Summary of Changes

- Migrated from T3 full-stack template to a static, frontend-only app.
- All data is now in flat JSON files, easy to parse and modify.
- Cart is a shopping list, not a checkout cart; no prices or payment logic.
- UI is mobile-first, clean, and uses emojis/icons for clarity.
- Codebase is minimal, dependency-light, and AI-friendly.

---

**This log is intended to help AI agents and developers quickly understand the project's history, structure, and design decisions.**