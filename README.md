# GoFresco App

## Overview

GoFresco is a Next.js app designed as a modern, mobile-friendly grocery shopping list. It is **not** a traditional e-commerce: users create and manage a shopping list, but do not purchase items or see prices. The app is optimized for speed, simplicity, and clarity, making it ideal for collaborative or personal grocery planning.

## Architecture & Data

- **Frontend:** Next.js (React), Tailwind CSS for UI, tRPC for API routes.
- **Data:** All products and categories are stored in flat JSON files in `/data`. No database is used; this makes the app portable and easy to deploy or modify.
- **API:** Category and product data are served via simple API routes that read from JSON files.
- **State:** The shopping list ("cart") is managed in React context and persisted in `localStorage`.

## Folder Structure (Key Parts)

- `/data/` — JSON files for all categories and products. Each file (e.g. `casa.json`, `frutta.json`) contains a category with products, variants, and an emoji icon.
- `/src/app/` — Main Next.js app pages and components.
	- `_components/ProductCard.tsx`: UI for each product, with emoji, variant selector, and quantity controls.
	- `cart/page.tsx`: The shopping list page, showing all items added by the user.
	- `category/[id]/page.tsx`: Lists products for a given category.
	- `product/[id]/page.tsx`: Shows details for a single product.
- `/src/contexts/CartContext.tsx` — Handles cart state, add/remove/update logic, and localStorage sync.
- `/src/lib/icon-mapper.ts` — Maps product emojis to Lucide icons for consistent UI.

## Product & Category Data

- Each product has: `id`, `name`, `icon` (emoji), `unit` ("WEIGHT" or "PIECES"), and `variants` (e.g. "liquidi", "in polvere").
- Categories group products and have their own emoji icon.
- Example: `casa.json` contains household products like detergents, each with variants and an emoji.

## Emoticons & Icon Mapping

- **Emojis** are used for every product and category to make the UI friendly and instantly recognizable.
- The file `/src/lib/icon-mapper.ts` maps each emoji to a Lucide icon, so the UI can show both emoji and a matching vector icon.
- This mapping is designed for clarity and accessibility, helping users (and AI agents) quickly identify product types.

## Cart Logic & No Prices

- The "cart" is a **shopping list**, not a checkout cart. No prices are shown or stored.
- Users select products, variants, and quantities (by weight or pieces), then add them to their list.
- The cart is stored in React context and synced to localStorage for persistence.
- **No prices:** This is intentional. GoFresco is for planning and organizing shopping, not for purchasing. This makes the app suitable for collaborative family lists, market planning, or personal use where prices are irrelevant or variable.

## Why This Structure Is AI-Friendly

- **Flat JSON data:** Easy for AI agents to parse, modify, or extend.
- **Clear separation:** UI, data, and logic are modular and well-commented.
- **Emojis and icons:** Help AI and users understand product categories at a glance.
- **No authentication or payments:** The app is stateless and simple to reason about.

## Deployment

No database required. Deploy to Vercel, Netlify, or any static host. All data is local and read-only.

## Palette Colori

La palette colori principale di GoFresco App:

| Nome         | Tailwind CSS | Hex        | Utilizzo principale                |
|--------------|--------------|------------|------------------------------------|
| Verde Erba   | green-600    | #16A34A    | Logo "Go", badge, accenti positivi |
| Arancione    | orange-400   | #FB923C    | Logo "Fresco", bordi, highlights   |
| Blu Primario | blue-600     | #2563EB    | Bottoni, focus, elementi attivi    |
| Rosso        | red-500      | #EF4444    | Badge quantità, errori, rimozione  |
| Grigio       | gray-100-800 | #F3F4F6... | Sfondo, testo, separatori          |

Tutti i colori sono gestiti tramite classi Tailwind per coerenza e accessibilità.

---

**Summary for AI agents:**
- Shopping list app, not e-commerce
- Data in `/data/*.json` (products, categories, emojis)
- Cart is a list, no prices
- Emoji-to-icon mapping for UI clarity
- All logic in React context and components
- No authentication, payments, or backend database
