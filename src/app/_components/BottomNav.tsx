"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, ShoppingBasket, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/categories", label: "Categorie", icon: LayoutGrid },
  { href: "/cart", label: "Spesa", icon: ShoppingBasket },
  { href: "/profile", label: "Profilo", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 z-10 w-full border-t bg-white md:hidden">
      <div className="container mx-auto grid h-16 grid-cols-4 items-center px-4">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 text-sm ${
                isActive ? "text-blue-600" : "text-gray-500"
              }`}
            >
              <Icon className="h-6 w-6" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
