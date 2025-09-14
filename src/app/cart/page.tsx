"use client";

import { useCart } from "@/contexts/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  // Debug: vediamo cosa c'è negli item del carrello
  console.log('Cart items:', cartItems);

  // OLD PRICE CALCULATION - Commented for future use
  // const totalPrice = cartItems.reduce((total, item) => {
  //   // Prezzo fittizio per la demo
  //   const itemPrice = item.unit === 'WEIGHT' ? 1.00 : 1.00; 
  //   return total + itemPrice * item.quantity;
  // }, 0);

  // NEW CALCULATION - Separate subtotals by unit type
  const subtotalWeight = cartItems
    .filter(item => item.unit === 'WEIGHT')
    .reduce((total, item) => total + item.quantity, 0);

  const subtotalPieces = cartItems
    .filter(item => item.unit === 'PIECES')
    .reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">La Tua Lista della Spesa</h1>
        <p className="text-gray-500">
          Controlla gli articoli e procedi con l&apos;ordine.
        </p>
      </header>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg">La tua lista della spesa è vuota.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Lista Articoli */}
          <div className="space-y-4 lg:col-span-2">
            {/* CARD */}
            {cartItems.map(item => (
              <div key={item.variantId} className="flex flex-col items-start justify-between gap-2.5 rounded-lg border bg-white p-4 shadow-sm xs:flex-row xs:items-center xs:justify-between xs:gap-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                    <span className="text-xl">{item.icon || '🛒'}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold ">{item.variantName}</h3>
                    <p className="text-gray-400">{item.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Selettore Quantità */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(
                        item.variantId, 
                        item.quantity - (item.unit === 'WEIGHT' ? 0.25 : 1)
                      )}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-16 text-center font-medium">
                      {item.quantity} {item.unit === 'WEIGHT' ? 'Kg' : 'Pz'}
                    </span>
                    <button
                      onClick={() => updateQuantity(
                        item.variantId, 
                        item.quantity + (item.unit === 'WEIGHT' ? 0.25 : 1)
                      )}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.variantId)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
             <button onClick={clearCart} className="text-sm text-gray-500 hover:text-red-600 mt-4">
                Svuota la lista
            </button>
          </div>

          {/* Riepilogo Ordine */}
          <div className="rounded-lg border bg-white p-6 shadow-sm lg:col-span-1 h-fit">
            <h2 className="mb-4 text-xl font-semibold">Riepilogo</h2>
            <div className="space-y-2">
              {subtotalPieces > 0 && (
                <div className="flex justify-between">
                  <span>Subtotale Pezzi</span>
                  <span>{subtotalPieces.toFixed(2)} Pz.</span>
                </div>
              )}
              {subtotalWeight > 0 && (
                <div className="flex justify-between">
                  <span>Subtotale Kilogrammi</span>
                  <span>{subtotalWeight.toFixed(2)} Kg.</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Spedizione</span>
                <span className="text-green-600">Gratis</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold">
                <span>Totale</span>
                <span>{(subtotalPieces + subtotalWeight).toFixed(2)} articoli</span>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
              Invia Ordine (non funzionante)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}