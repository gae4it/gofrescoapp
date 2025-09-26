import { NextResponse } from 'next/server';

interface CategoryData {
  id: number;
  name: string;
  icon: string;
  unit: string;
  products: unknown[];
}

async function fetchCategoryData(filename: string): Promise<CategoryData> {
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://gofrescoapp.netlify.app'
    : 'http://localhost:3000';
  
  const response = await fetch(`${baseUrl}/data/${filename}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filename}`);
  }
  return response.json() as Promise<CategoryData>;
}

export async function GET() {
  try {
    const files = ['frutta.json', 'verdura.json', 'alimentari.json', 'casa.json'];
    
    const categories = await Promise.all(
      files.map(async (file) => {
        try {
          const json = await fetchCategoryData(file);
          return {
            id: json.id,
            name: json.name,
            icon: json.icon,
            unit: json.unit,
          };
        } catch (error) {
          console.error(`Error loading ${file}:`, error);
          return null;
        }
      })
    );

    // Filter out null values and apply manual order
    const validCategories = categories.filter((cat): cat is CategoryData => cat !== null);
    
    const manualOrder = ["Frutta", "Verdura", "Alimentari", "Prodotti per la Casa"];
    const orderedCategories = manualOrder
      .map((name) => validCategories.find((cat) => cat.name === name))
      .filter((cat): cat is CategoryData => cat !== undefined);

    console.log('Categories in order:', orderedCategories.map(c => c.name));
    
    return NextResponse.json(orderedCategories);
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json({ error: 'Impossibile leggere le categorie.' }, { status: 500 });
  }
}