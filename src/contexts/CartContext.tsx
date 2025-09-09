"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Definiamo i tipi per gli oggetti nel carrello
interface CartItem {
  productId: number;
  variantId: number;
  name: string;
  variantName: string;
  quantity: number;
  unit: 'WEIGHT' | 'PIECES';
}

// Definiamo i tipi per il contesto
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (variantId: number) => void;
  updateQuantity: (variantId: number, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

// Creiamo il contesto con un valore di default
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizzato per usare il contesto più facilmente
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Definiamo le props per il Provider
interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Carica il carrello dal localStorage al primo render
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('shopping-cart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      setCartItems([]);
    }
  }, []);

  // Salva il carrello nel localStorage ogni volta che cambia
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.variantId === item.variantId);
      if (existingItem) {
        // Se l'articolo esiste già, aggiorna la quantità
        return prevItems.map(i =>
          i.variantId === item.variantId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      // Altrimenti, aggiungi il nuovo articolo
      return [...prevItems, { ...item, quantity }];
    });
  };

  const removeFromCart = (variantId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.variantId !== variantId));
  };

  const updateQuantity = (variantId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(variantId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.variantId === variantId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + 1, 0); // Conta gli articoli unici
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}