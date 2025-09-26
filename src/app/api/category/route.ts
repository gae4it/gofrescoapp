import { type NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Parametro id mancante.' }, { status: 400 });
  }
  
  try {
    const filename = getFilename(Number(id));
    if (!filename) {
      return NextResponse.json({ error: 'Categoria non trovata.' }, { status: 404 });
    }
    
    const json = await fetchCategoryData(filename);
    return NextResponse.json(json);
  } catch (error) {
    console.error('Error loading category:', error);
    return NextResponse.json({ error: 'Impossibile leggere la categoria.' }, { status: 500 });
  }
}

function getFilename(id: number): string | null {
  switch (id) {
    case 1: return 'frutta.json';
    case 2: return 'verdura.json';
    case 3: return 'alimentari.json';
    case 4: return 'casa.json';
    default: return null;
  }
}