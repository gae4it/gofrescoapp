# Project Modification Log

This file automatically tracks all modifications made by the Gemini CLI.

---

## Stato di Avanzamento del Prompt `startingprompt.md` (9 Settembre 2025)

### Cambio di Strategia

Su richiesta, lo sviluppo si concentrerà prima sulla costruzione dell'interfaccia utente (UI) con dati fittizi (mock data). I passaggi relativi al database e all'API backend verranno posticipati.

### In Corso:

#### Passo 1: Sviluppo dell'Interfaccia Utente (Next.js & React)

- **Gestione Stato Lista Spesa:**
  - Crea `src/contexts/CartContext.tsx` per gestire la lista della spesa e salvarla in `localStorage`.
- **Componenti (`src/app/_components/`):**
  - `ProductCard.tsx`: Mostra prodotto, varianti, selettore quantità e bottone "Aggiungi alla Lista della Spesa".
  - `Navbar.tsx`: Include link a `/cart` con badge articoli.
  - `BottomNav.tsx`: Menu di navigazione inferiore per mobile.
- **Pagine (App Router):**
  - Home (`/page.tsx`): Mostra le categorie.
  - Pagina Categoria (`/category/[id]/page.tsx`): Mostra i prodotti di una categoria.
  - Pagina Lista Spesa (`/cart/page.tsx`): Mostra il riepilogo della lista e il form di invio ordine.
- **Requisiti UI/UX e Funzionali:**
  - Assicurare un design pulito, minimalista, mobile-first e responsive.
  - Utilizzare icone grandi e chiare.
  - Usare la terminologia "Lista della Spesa".
  - Implementare una barra di ricerca nella `Navbar`.

### Posticipato:

#### Passo 2: Definizione dello Schema del Database

- Modifica il file `prisma/schema.prisma`.

#### Passo 3: Popolamento del Database (Seed)

- Crea uno script di seed in `prisma/seed.ts`.

#### Passo 4: Sviluppo dell'API Backend (tRPC)

- Crea i router tRPC in `src/server/api/routers/`.

---

## Consigli per il Processo di Deploy (8 Settembre 2025)

... (sezione invariata) ...