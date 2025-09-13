"use client";

import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    unit: string;
    variants: { id: number; name: string }[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const [selectedVariantId, setSelectedVariantId] = useState(
    product.variants[0]?.id ?? 0,
  );
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(
        {
          productId: product.id,
          variantId: selectedVariant.id,
          variantName: selectedVariant.name,
          name: product.name,
          unit: product.unit as "WEIGHT" | "PIECES",
        },
        quantity,
      );
      setQuantity(1);
    }
  };

  const handleQuantityChange = (amount: number) => {
    if (product.unit === "WEIGHT") {
      setQuantity((prev) => Math.max(0.25, prev + amount));
    } else {
      setQuantity((prev) => Math.max(1, prev + amount));
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex items-center gap-4 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600">
          <span className="text-2xl">🛒</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-500">
            Unità: {product.unit === "WEIGHT" ? "Peso (kg)" : "Pezzi"}
          </p>
        </div>
      </div>

      <div className="flex-grow space-y-4 p-4">
        {/* Selettore Variante */}

        <div>
          <label
            htmlFor={`variant-${product.id}`}
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Variante
          </label>
          <select
            id={`variant-${product.id}`}
            value={selectedVariantId}
            onChange={(e) => setSelectedVariantId(Number(e.target.value))}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.name}
              </option>
            ))}
          </select>
        </div>

        {/* Selettore Quantità */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-gray-700">Quantità</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                handleQuantityChange(product.unit === "WEIGHT" ? -0.25 : -1)
              }
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
              aria-label="Diminuisci quantità"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-10 text-center font-medium">{quantity}</span>
            <button
              onClick={() =>
                handleQuantityChange(product.unit === "WEIGHT" ? 0.25 : 1)
              }
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
              aria-label="Aumenta quantità"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottone Aggiungi */}
      <div className="mt-auto border-t p-4">
        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        >
          <ShoppingCart className="h-4 w-4" />
          Aggiungi alla Lista
        </button>
      </div>
    </div>
  );
}
