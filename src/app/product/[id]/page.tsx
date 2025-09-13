"use client";

import { useParams } from "next/navigation";
import data from "../../../data.json";
import ProductCard from "@/app/_components/ProductCard";

export default function ProductPage() {
  const params = useParams();
  const productId = Number(params.id);

  // Cerca il prodotto in tutte le categorie
  let product = null;
  for (const category of data.categories) {
    product = category.products.find((p) => p.id === productId);
    if (product) break;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <ProductCard product={product} />
      </div>
    </main>
  );
}
