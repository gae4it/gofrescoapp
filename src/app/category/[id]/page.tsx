"use client";

import { ProductCard } from "@/app/_components/ProductCard";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ProductVariant = { id: number; name: string };
type Product = {
  id: number;
  name: string;
  unit: string;
  variants: ProductVariant[];
};
type Category = {
  id: number;
  name: string;
  unit: string;
  products: Product[];
};
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params?.id ? Number(params.id) : 0;
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetch(`/api/category?id=${categoryId}`)
      .then((res) => res.json())
      .then((data: Category) => {
        setCategory(data);
        setLoading(false);
      });
  }, [categoryId]);

  // Se la categoria non esiste, mostra una pagina 404

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <header className="mb-8 flex items-center gap-4">
        <Link href="/" className="rounded-full p-2 hover:bg-gray-200">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
          <p className="text-gray-500">
            Scegli i prodotti da aggiungere alla tua lista della spesa.
          </p>
        </div>
      </header>

      {category.products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p>Nessun prodotto trovato in questa categoria.</p>
        </div>
      )}
    </div>
  );
}
