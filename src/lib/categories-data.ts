// Static import dei dati delle categorie per massima compatibilità
import fruttaData from '../../public/data/frutta.json';
import verduraData from '../../public/data/verdura.json';
import alimentariData from '../../public/data/alimentari.json';
import casaData from '../../public/data/casa.json';

export interface CategoryData {
  id: number;
  name: string;
  icon: string;
  unit: string;
  products: Array<{
    id: number;
    name: string;
    icon: string;
    variants: Array<{
      id: number;
      name: string;
    }>;
  }>;
}

// Dati delle categorie
const categoriesData: CategoryData[] = [
  fruttaData,
  verduraData,
  alimentariData,
  casaData,
];

// Funzione per ottenere tutte le categorie
export function getAllCategories() {
  const manualOrder = ["Frutta", "Verdura", "Alimentari", "Prodotti per la Casa"];
  
  return manualOrder
    .map((name) => categoriesData.find((cat) => cat.name === name))
    .filter((cat): cat is CategoryData => cat !== undefined)
    .map((cat) => ({
      id: cat.id,
      name: cat.name,
      icon: cat.icon,
      unit: cat.unit,
    }));
}

// Funzione per ottenere una singola categoria
export function getCategoryById(id: number): CategoryData | null {
  return categoriesData.find((cat) => cat.id === id) ?? null;
}