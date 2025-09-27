"use client";

import { useOrderHistory } from "@/contexts/OrderHistoryContext";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag, Mail, Phone, Calendar, RotateCcw, Trash2, Package, CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProfilePage() {
  const { orders, clearHistory, reorderItems } = useOrderHistory();
  const { addToCart } = useCart();
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleReorder = (orderId: string) => {
    const items = reorderItems(orderId);
    items.forEach(item => {
      addToCart({
        productId: item.productId,
        variantId: item.variantId,
        name: item.name,
        variantName: item.variantName,
        icon: item.icon,
        unit: item.unit
      }, item.quantity);
    });
    
    alert(`✅ Ordine aggiunto al carrello!\n\nSono stati aggiunti ${items.length} articoli al tuo carrello.`);
  };

  const handleClearHistory = () => {
    clearHistory();
    setShowClearConfirm(false);
    alert("✅ Cronologia eliminata con successo!");
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("it-IT", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Area Utente</h1>
        <p className="text-gray-500">
          Gestisci la tua cronologia delle spese e riordina facilmente.
        </p>
      </header>

      <div className="space-y-6">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-green-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">Ordini Totali</p>
                <p className="text-2xl font-bold text-green-600">{orders.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-blue-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">Ordini Inviati</p>
                <p className="text-2xl font-bold text-blue-600">
                  {orders.filter(order => order.status === 'sent').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-orange-200 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">Articoli Totali</p>
                <p className="text-2xl font-bold text-orange-600">
                  {orders.reduce((total, order) => total + order.items.length, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders History */}
        <div className="bg-white rounded-lg border border-orange-400 shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Cronologia Ordini</h2>
              {orders.length > 0 && (
                <button
                  onClick={() => setShowClearConfirm(true)}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                  Pulisci Cronologia
                </button>
              )}
            </div>
          </div>

          <div className="p-6">
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Nessun ordine ancora</h3>
                <p className="text-gray-500 mb-6">
                  Inizia a fare la spesa e i tuoi ordini appariranno qui.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Inizia la Spesa
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-6 hover:bg-gray-50 transition-colors">
                    {/* Order Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Lista della Spesa</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(order.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Package className="h-4 w-4" />
                              {order.items.length} articoli
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleReorder(order.id)}
                        className="flex items-center gap-2 px-3 py-2 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Riordina
                      </button>
                    </div>

                    {/* Customer Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="font-medium">{order.customerInfo.name}</span>
                        <span className="text-gray-500">({order.customerInfo.email})</span>
                      </div>
                      {order.customerInfo.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-600">{order.customerInfo.phone}</span>
                        </div>
                      )}
                    </div>

                    {/* Order Items */}
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 mb-3">Articoli ordinati:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {order.items.slice(0, 6).map((item) => (
                          <div key={item.variantId} className="flex items-center justify-between text-sm py-2 px-3 bg-gray-50 rounded">
                            <div className="flex items-center gap-2">
                              <span>{item.icon}</span>
                              <div>
                                <span className="text-gray-600">{item.name}</span>
                                <span className="font-medium ml-1">{item.variantName}</span>
                              </div>
                            </div>
                            <span className="font-medium">
                              {item.quantity} {item.unit === 'WEIGHT' ? 'Kg' : 'Pz'}
                            </span>
                          </div>
                        ))}
                        {order.items.length > 6 && (
                          <div className="col-span-full text-center text-sm text-gray-500 py-2">
                            ... e altri {order.items.length - 6} articoli
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Clear History Confirmation Modal */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Conferma eliminazione</h3>
            <p className="text-gray-600 mb-6">
              Sei sicuro di voler eliminare tutta la cronologia degli ordini? 
              Questa azione non può essere annullata.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Annulla
              </button>
              <button
                onClick={handleClearHistory}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
              >
                Elimina tutto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
