"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, LayoutGrid, ShoppingBasket, User, ArrowLeft } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/cart", label: "Spesa", icon: ShoppingBasket },
  { href: "/profile", label: "Profilo", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 z-10 w-full border-t bg-white md:hidden">
      <div className="container mx-auto grid h-16 grid-cols-4 items-center px-4">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex flex-col items-center justify-center gap-1 text-sm cursor-pointer ${
                isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
              }`}
            >
              <Icon className="h-6 w-6" />
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
