// src/lib/mock-data.ts

import {
    Apple,
    Carrot,
    Beef,
    Fish,
    Milk,
    CookingPot,
    Sparkles,
    type LucideIcon,
  } from "lucide-react";
  
  export interface ProductVariant {
    id: number;
    name: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    icon: LucideIcon;
    unit: "WEIGHT" | "PIECES";
    variants: ProductVariant[];
  }
  
  export interface ProductCategory {
    id: number;
    name: string;
    icon: LucideIcon;
    products: Product[];
  }
  
  export const mockData: ProductCategory[] = [
    {
      id: 1,
      name: "Frutta e Verdura",
      icon: Carrot,
      products: [
        {
          id: 101,
          name: "Mele",
          icon: Apple,
          unit: "WEIGHT",
          variants: [
            { id: 1, name: "Kanzi" },
            { id: 2, name: "Granny Smith" },
            { id: 3, name: "Royal Gala" },
          ],
        },
        {
          id: 102,
          name: "Pomodori",
          icon: Carrot, // Usiamo un'icona generica per la verdura
          unit: "WEIGHT",
          variants: [
            { id: 4, name: "San Marzano" },
            { id: 5, name: "Ciliegino" },
            { id: 6, name: "Cuore di Bue" },
          ],
        },
        {
            id: 103,
            name: "Insalata",
            icon: Carrot,
            unit: "PIECES",
            variants: [
              { id: 7, name: "Lattuga" },
              { id: 8, name: "Rucola" },
              { id: 9, name: "Radicchio" },
            ],
        }
      ],
    },
    {
      id: 2,
      name: "Carne e Pesce",
      icon: Beef,
      products: [
        {
          id: 201,
          name: "Affettati",
          icon: Beef,
          unit: "PIECES",
          variants: [
            { id: 10, name: "Crudo di Parma" },
            { id: 11, name: "Cotto" },
            { id: 12, name: "Salame" },
          ],
        },
        {
          id: 202,
          name: "Conserve di Pesce",
          icon: Fish,
          unit: "PIECES",
          variants: [
            { id: 13, name: "Tonno in olio" },
            { id: 14, name: "Salmone affumicato" },
            { id: 15, name: "Sardine in olio" },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Dispensa",
      icon: CookingPot,
      products: [
        {
          id: 301,
          name: "Pasta",
          icon: CookingPot,
          unit: "PIECES",
          variants: [
            { id: 16, name: "Spaghetti" },
            { id: 17, name: "Penne" },
            { id: 18, name: "Fusilli" },
          ],
        },
        {
          id: 302,
          name: "Latte e Latticini",
          icon: Milk,
          unit: "PIECES",
          variants: [
            { id: 19, name: "Latte Intero" },
            { id: 20, name: "Yogurt Bianco" },
            { id: 21, name: "Mozzarella" },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Igiene e Casa",
      icon: Sparkles,
      products: [
        {
          id: 401,
          name: "Detersivi Piatti",
          icon: Sparkles,
          unit: "PIECES",
          variants: [
            { id: 22, name: "Liquido" },
            { id: 23, name: "Pastiglie" },
          ],
        },
        {
          id: 402,
          name: "Carta Igienica",
          icon: Sparkles,
          unit: "PIECES",
          variants: [
            { id: 24, name: "Doppia velina" },
            { id: 25, name: "Extra morbida" },
          ],
        },
      ],
    },
  ];
  
  // Funzione helper per trovare una categoria per ID
  export const getCategoryById = (id: number) => {
    return mockData.find((category) => category.id === id);
  };
  
