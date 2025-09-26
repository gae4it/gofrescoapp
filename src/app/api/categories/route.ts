import { NextResponse } from 'next/server';
import fruttaData from '../../../../public/data/frutta.json';
import verduraData from '../../../../public/data/verdura.json';
import alimentariData from '../../../../public/data/alimentari.json';
import casaData from '../../../../public/data/casa.json';

interface CategoryData {
  id: number;
  name: string;
  icon: string;
  unit: string;
  products: unknown[];
}

export async function GET() {
  try {
    const allData = [fruttaData, verduraData, alimentariData, casaData];
    
    const categories = allData.map((json) => ({
      id: json.id,
      name: json.name,
      icon: json.icon,
      unit: json.unit,
    }));

    // Ordine manuale
    const manualOrder = ["Frutta", "Verdura", "Alimentari", "Prodotti per la Casa"];
    const orderedCategories = manualOrder
      .map((name) => categories.find((cat) => cat.name === name))
      .filter((cat): cat is CategoryData => cat !== undefined);

    console.log('Categories in order:', orderedCategories.map(c => c.name));
    
    return NextResponse.json(orderedCategories);
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json({ error: 'Impossibile leggere le categorie.' }, { status: 500 });
  }
}