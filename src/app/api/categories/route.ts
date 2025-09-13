import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataDir = path.resolve(process.cwd(), 'data');

interface CategoryData {
  id: number;
  name: string;
  icon: string;
  unit: string;
  products: unknown[];
}

export async function GET() {
  try {
    const files = fs.readdirSync(dataDir);
    let categories = files
      .filter((file) => file.endsWith('.json'))
      .map((file) => {
        const filePath = path.join(dataDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const json = JSON.parse(content) as CategoryData;
        return {
          id: json.id,
          name: json.name,
          icon: json.icon,
          unit: json.unit,
        };
      });

    // Ordine manuale
    const manualOrder = ["Frutta", "Verdura", "Alimentari", "Prodotti per la Casa"];
    categories = manualOrder
      .map((name) => categories.find((cat) => cat.name === name))
      .filter((cat): cat is CategoryData => cat !== undefined);

    console.log('Categories in order:', categories.map(c => c.name));
    
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json({ error: 'Impossibile leggere le categorie.' }, { status: 500 });
  }
}