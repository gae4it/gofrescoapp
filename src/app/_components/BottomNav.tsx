"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, ShoppingBasket, User, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/cart", label: "Carrello", icon: ShoppingBasket },
  { href: "/profile", label: "Profilo", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { getItemCount } = useCart();
  const [itemCount, setItemCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Gestisce l'idratazione client-side
  useEffect(() => {
    setIsClient(true);
    setItemCount(getItemCount());
  }, [getItemCount]);

  // Aggiorna il conteggio quando il carrello cambia
  useEffect(() => {
    if (isClient) {
      setItemCount(getItemCount());
    }
  }, [getItemCount, isClient]);

  return (
    <nav className="fixed bottom-0 z-10 w-full border-t bg-white md:hidden">
      <div className="container mx-auto grid h-16 grid-cols-4 items-center px-4">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          const isCart = href === "/cart";
          
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 text-sm cursor-pointer relative ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <div className="relative">
                <Icon className="h-6 w-6" />
                {isClient && isCart && itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {itemCount}
                  </span>
                )}
              </div>
              <span>{label}</span>
            </Link>
          );
        })}
        {/* Bottone Indietro */}
        <button
          type="button"
          onClick={() => router.back()}
          className="flex flex-col items-center justify-center gap-1 text-sm text-gray-500 hover:text-blue-600 cursor-pointer"
        >
          <ArrowLeft className="h-6 w-6" />
          <span>Indietro</span>
        </button>
      </div>
    </nav>
  );
}
