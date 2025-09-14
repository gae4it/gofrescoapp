"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ProductCard } from "@/app/_components/ProductCard";

interface Product {
  id: number;
  name: string;
  icon: string;
  unit: string;
  variants: Array<{
    id: number;
    name: string;
  }>;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  unit: string;
}

interface CategoryData {
  products: Product[];
}

export default function ProductPage() {
  const params = useParams();
  const productId = params?.id ? Number(params.id) : 0;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Since we don't have a specific product API, we'll need to search through all categories
        const categoriesResponse = await fetch('/api/categories');
        const categories = await categoriesResponse.json() as Category[];
        
        // Search for the product in all categories
        for (const category of categories) {
          const categoryResponse = await fetch(`/api/category?id=${category.id}`);
          const categoryData = await categoryResponse.json() as CategoryData;
          
          const foundProduct = categoryData.products?.find((p: Product) => p.id === productId);
          if (foundProduct) {
            setProduct(foundProduct);
            break;
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    void fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      /* #### LOADER ####*/
      <div className="flex h-64 items-center justify-center">
        <span className="loader border-4 border-orange-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></span>
      </div>
    );
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
