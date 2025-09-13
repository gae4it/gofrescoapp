import fs from 'fs';
import path from 'path';
import { type NextRequest, NextResponse } from 'next/server';

const dataDir = path.resolve(process.cwd(), 'data');

interface CategoryData {
  id: number;
  name: string;
  icon: string;
  unit: string;
  products: unknown[];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Parametro id mancante.' }, { status: 400 });
  }
  
  try {
    const files = fs.readdirSync(dataDir);
    const file = files.find((f) => f.endsWith('.json') && f.startsWith(getFilePrefix(Number(id))));
    
    if (!file) {
      return NextResponse.json({ error: 'Categoria non trovata.' }, { status: 404 });
    }
    
    const filePath = path.join(dataDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(content) as CategoryData;
    
    return NextResponse.json(json);
  } catch (error) {
    console.error('Error loading category:', error);
    return NextResponse.json({ error: 'Impossibile leggere la categoria.' }, { status: 500 });
  }
}

function getFilePrefix(id: number): string {
  switch (id) {
    case 1: return 'frutta';
    case 2: return 'verdura';
    case 3: return 'alimentari';
    case 4: return 'casa';
    default: return '';
  }
}