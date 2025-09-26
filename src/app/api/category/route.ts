import { type NextRequest, NextResponse } from 'next/server';
import { getCategoryById } from '@/lib/embedded-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Parametro id mancante.' }, { status: 400 });
  }
  
  try {
    const categoryData = getCategoryById(Number(id));
    
    if (!categoryData) {
      return NextResponse.json({ error: 'Categoria non trovata.' }, { status: 404 });
    }
    
    return NextResponse.json(categoryData);
  } catch (error) {
    console.error('Error loading category:', error);
    return NextResponse.json({ error: 'Impossibile leggere la categoria.' }, { status: 500 });
  }
}