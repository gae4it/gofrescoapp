import { NextResponse } from 'next/server';
import { getAllCategories } from '@/lib/embedded-data';

export async function GET() {
  try {
    const categories = getAllCategories();
    console.log('Categories in order:', categories.map(c => c.name));
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error loading categories:', error);
    return NextResponse.json({ error: 'Impossibile leggere le categorie.' }, { status: 500 });
  }
}