# ROLLBACK INSTRUCTIONS - Preselezione Varianti

Se vuoi tornare indietro e rimuovere la funzionalità di preselezione delle varianti, segui questi passaggi:

## File da ripristinare:

### 1. src/lib/embedded-data.ts
Nella funzione `searchProducts`, cambia:
```typescript
matchedVariant?: { id: number; name: string };
```
in:
```typescript
matchedVariant?: string;
```

E nella logica di ricerca:
```typescript
matchedVariant = { id: variant.id, name: variant.name };
```
in:
```typescript
matchedVariant = variant.name;
```

### 2. src/app/_components/ProductCard.tsx
**Rimuovi:**
- `preselectedVariantId?: number;` dalla interface
- `preselectedVariantId` dal parametro della funzione
- `useEffect` import e logica
- `isPreselected` state e `handleVariantChange`
- Le classi CSS condizionali nel select

**Ripristina:**
```typescript
const [selectedVariantId, setSelectedVariantId] = useState(
  product.variants[0]?.id ?? 0,
);

// E nel select:
onChange={(e) => setSelectedVariantId(Number(e.target.value))}
className="block w-full rounded-md border-2 border-orange-400 focus:border-orange-400 focus:ring-orange-400 sm:text-sm py-2 px-1"
```

### 3. src/app/page.tsx
**Rimuovi:**
- `preselectedVariantId={result.matchedVariant?.id}` dalla ProductCard
- Cambia `result.matchedVariant.name` in `result.matchedVariant`

## Quick Rollback Commands:
1. `git stash` (salva le modifiche attuali)
2. `git checkout HEAD~1` (torna al commit precedente)
3. O ripristina manualmente i file usando questo file come guida

La versione senza preselezione funzionava perfettamente e questa guida ti permette di tornare indietro in qualsiasi momento.