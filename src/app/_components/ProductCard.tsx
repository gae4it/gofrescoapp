"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { Plus, Minus, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    icon: string;
    unit: string;
    variants: { id: number; name: string }[];
  };
  preselectedVariantId?: number;
}

export function ProductCard({ product, preselectedVariantId }: ProductCardProps) {
  const { addToCart } = useCart();

  const [selectedVariantId, setSelectedVariantId] = useState(
    preselectedVariantId ?? product.variants[0]?.id ?? 0,
  );
  const [quantity, setQuantity] = useState(1);
  const [isPreselected, setIsPreselected] = useState(!!preselectedVariantId);

  // Effetto per rimuovere l'evidenziazione dopo 3 secondi
  useEffect(() => {
    if (isPreselected) {
      const timer = setTimeout(() => {
        setIsPreselected(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isPreselected]);

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId);

  const handleVariantChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVariantId(Number(e.target.value));
    // Rimuovi l'evidenziazione quando l'utente cambia manualmente
    setIsPreselected(false);
  };

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(
        {
          productId: product.id,
          variantId: selectedVariant.id,
          variantName: selectedVariant.name,
          name: product.name,
          icon: product.icon,
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
  /* #### PRODUCT CARD #### */
  <div className="flex flex-col overflow-hidden rounded-lg border border-orange-400 bg-white shadow-sm transition-transform hover:scale-[1.02]">
      <div className="flex items-center gap-4 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600">
          <span className="emoji text-2xl">{product.icon}</span>
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
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Variante
          </label>
          {/* #### VARIANT SELECTOR #### */}
          <select
            id={`variant-${product.id}`}
            value={selectedVariantId}
            onChange={handleVariantChange}
            className={`block w-full rounded-md border-2 focus:ring-orange-400 sm:text-sm py-2 px-1 transition-all duration-300 ${
              isPreselected 
                ? 'border-green-500 bg-green-50 shadow-md ring-2 ring-green-500/20' 
                : 'border-orange-400 focus:border-orange-400'
            }`}
          >
            {product.variants.map((variant) => (
              <option key={variant.id} value={variant.id}>
                {variant.name}
              </option>
            ))}
          </select>
        </div>

        {/* #### QTY SELECTOR #### */}
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
            <span className="w-16 text-center font-medium">
              {quantity} {product.unit === "WEIGHT" ? "Kg" : "Pz"}
            </span>
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
