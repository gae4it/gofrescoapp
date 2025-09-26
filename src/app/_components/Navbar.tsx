"use client";

import Link from "next/link";
import { ShoppingBasket, Home, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-gray-800">
         <span className="text-green-600">Go</span>
         <span className="text-orange-400">Fresco</span>App
        </Link>
        <div className="flex items-center gap-4">
          {/* La barra di ricerca verrà implementata in seguito */}
          {/* <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="search"
              placeholder="Cerca prodotti..."
              className="w-full rounded-lg bg-gray-100 pl-8 pr-4 py-2 text-sm"
            />
          </div> */}
          
          {/* #### HOME ICON #### */}
          <Link
            href="/"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-green-600 hover:bg-gray-100"
            aria-label="Home"
          >
            <Home className="h-5 w-5" />
          </Link>
          
          {/* #### CART ICON #### */}
          <Link
            href="/cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-orange-400 hover:bg-gray-100"
            aria-label="Lista della Spesa"
          >
            <ShoppingBasket className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>

          {/* #### BACK BUTTON #### */}
          <button
            onClick={() => router.back()}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border hover:bg-gray-100"
            style={{ borderColor: '#1E2939' }}
            aria-label="Indietro"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
        </div>
      </div>
    </header>
  );
}
