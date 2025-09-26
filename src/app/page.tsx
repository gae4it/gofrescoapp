"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard } from "@/app/_components/ProductCard";
import { searchProducts } from "@/lib/embedded-data";

type Category = {
  id: number;
  name: string;
  icon: string;
};

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchProducts>>([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => {
        // Assicura che sia sempre un array di Category
        if (Array.isArray(data)) {
          setCategories(
            data.filter((cat: unknown): cat is Category => {
              if (typeof cat === "object" && cat !== null) {
                const obj = cat as Record<string, unknown>;
                return (
                  typeof obj.id === "number" &&
                  typeof obj.name === "string" &&
                  typeof obj.icon === "string"
                );
              }
              return false;
            })
          );
        } else {
          setCategories([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setCategories([]);
        setLoading(false);
      });
  }, []);

  // Gestione ricerca
  const handleSearchChange = (query: string, isActive: boolean) => {
    setSearchQuery(query);
    setIsSearching(isActive);
    
    if (query.length >= 2) {
      const results = searchProducts(query);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      {/* Header principale */}
      {!isSearching && (
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            La tua spesa, semplice e fresca
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Scegli una categoria per iniziare.
          </p>
        </header>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex h-64 items-center justify-center">
          <span className="loader border-4 border-orange-400 border-t-transparent rounded-full w-12 h-12 animate-spin"></span>
        </div>
      )}

      {/* Barra di ricerca */}
      {!loading && (
        <SearchBar onSearchChange={handleSearchChange} />
      )}

      {/* Risultati ricerca */}
      {isSearching && !loading && (
        <div>
          {/* Mostra il testo dei risultati solo se c'è una query */}
          {searchQuery.length >= 2 && (
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {searchResults.length > 0 ? 
                  `${searchResults.length} risultat${searchResults.length === 1 ? 'o' : 'i'} per "${searchQuery}"` : 
                  `Nessun risultato per "${searchQuery}"`
                }
              </h2>
            </div>
          )}
          
          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {searchResults.map((result) => (
                <ProductCard
                  key={result.product.id}
                  product={result.product}
                  preselectedVariantId={result.matchedVariant?.id}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Categorie (nascoste durante ricerca) */}
      {!isSearching && !loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {categories.length > 0 ? (
            categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group flex flex-col items-center justify-center gap-4 rounded-xl border border-orange-400 bg-white p-6 text-center shadow-sm transition-all hover:scale-105 hover:shadow-lg"
              >
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white-100 text-blue-600 transition-colors group-hover:text-blue-600">
                  <span className="text-8xl">{category.icon}</span>
                </div>
                <span className="text-lg font-semibold">{category.name}</span>
              </Link>
            ))
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              Nessuna categoria disponibile.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
