import { type NextRequest, NextResponse } from 'next/server';
import fruttaData from '../../../../public/data/frutta.json';
import verduraData from '../../../../public/data/verdura.json';
import alimentariData from '../../../../public/data/alimentari.json';
import casaData from '../../../../public/data/casa.json';

const dataMap = {
  1: fruttaData,
  2: verduraData,
  3: alimentariData,
  4: casaData,
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  if (!id) {
    return NextResponse.json({ error: 'Parametro id mancante.' }, { status: 400 });
  }
  
  try {
    const categoryId = Number(id);
    const categoryData = dataMap[categoryId as keyof typeof dataMap];
    
    if (!categoryData) {
      return NextResponse.json({ error: 'Categoria non trovata.' }, { status: 404 });
    }
    
    return NextResponse.json(categoryData);
  } catch (error) {
    console.error('Error loading category:', error);
    return NextResponse.json({ error: 'Impossibile leggere la categoria.' }, { status: 500 });
  }
}