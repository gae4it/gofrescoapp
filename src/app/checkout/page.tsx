"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { Mail, User, Home, Phone, MapPin, Info } from "lucide-react";

interface CustomerData {
  nome: string;
  cognome: string;
  indirizzo: string;
  numeroCivico: string;
  citofono: string;
  scalaInterno: string;
  altreInformazioni: string;
  telefono: string;
  email: string;
}

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [customerData, setCustomerData] = useState<CustomerData>({
    nome: "",
    cognome: "",
    indirizzo: "",
    numeroCivico: "",
    citofono: "",
    scalaInterno: "",
    altreInformazioni: "",
    telefono: "",
    email: "",
  });

  // Calcolo subtotali (stesso codice della pagina cart)
  const subtotalWeight = cartItems
    .filter(item => item.unit === 'WEIGHT')
    .reduce((total, item) => total + item.quantity, 0);

  const subtotalPieces = cartItems
    .filter(item => item.unit === 'PIECES')
    .reduce((total, item) => total + item.quantity, 0);

  // Aspetta che il componente sia caricato prima di verificare il carrello
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Redirect se il carrello è vuoto, ma solo dopo che il componente è caricato
  useEffect(() => {
    if (isLoaded && cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems.length, router, isLoaded]);

  // Mostra loading durante l'hydration o se il carrello è vuoto
  if (!isLoaded || (isLoaded && cartItems.length === 0)) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-500">
          {!isLoaded ? "Caricamento..." : "Reindirizzamento in corso..."}
        </p>
      </div>
    );
  }

  const handleInputChange = (field: keyof CustomerData, value: string) => {
    setCustomerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    const requiredFields: (keyof CustomerData)[] = [
      "nome", "cognome", "indirizzo", "numeroCivico", "telefono", "email"
    ];
    return requiredFields.every(field => customerData[field].trim() !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerData,
          cartItems,
        }),
      });

      const result = await response.json() as { error?: string; success?: boolean; message?: string };

      if (response.ok) {
        alert(`✅ Lista inviata con successo!\n\nRiceverai una conferma via email a: ${customerData.email}\n\nGrazie per aver scelto GoFrescoApp!`);
        // Redirect to home or thank you page
        router.push('/');
      } else {
        alert(`❌ Errore: ${result.error ?? 'Errore sconosciuto'}\n\nRiprova o contattaci direttamente.`);
      }
      
    } catch (error) {
      console.error("Errore nell'invio:", error);
      alert("❌ Errore di connessione. Controlla la tua connessione internet e riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Dati per la Consegna</h1>
        <p className="text-gray-500">
          Inserisci i tuoi dati per completare la lista della spesa.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Formulario */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg border border-orange-400 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <User className="h-5 w-5 text-green-600" />
                Informazioni Personali
              </h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    value={customerData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                    placeholder="Mario"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cognome" className="block text-sm font-medium text-gray-700">
                    Cognome *
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    value={customerData.cognome}
                    onChange={(e) => handleInputChange("cognome", e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                    placeholder="Rossi"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-orange-400 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Home className="h-5 w-5 text-green-600" />
                Indirizzo di Consegna
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label htmlFor="indirizzo" className="block text-sm font-medium text-gray-700">
                      Indirizzo *
                    </label>
                    <input
                      type="text"
                      id="indirizzo"
                      value={customerData.indirizzo}
                      onChange={(e) => handleInputChange("indirizzo", e.target.value)}
                      className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                      placeholder="Via Roma"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="numeroCivico" className="block text-sm font-medium text-gray-700">
                      Numero Civico *
                    </label>
                    <input
                      type="text"
                      id="numeroCivico"
                      value={customerData.numeroCivico}
                      onChange={(e) => handleInputChange("numeroCivico", e.target.value)}
                      className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="citofono" className="block text-sm font-medium text-gray-700">
                      Citofono
                    </label>
                    <input
                      type="text"
                      id="citofono"
                      value={customerData.citofono}
                      onChange={(e) => handleInputChange("citofono", e.target.value)}
                      className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                      placeholder="Rossi"
                    />
                  </div>

                  <div>
                    <label htmlFor="scalaInterno" className="block text-sm font-medium text-gray-700">
                      Scala/Interno
                    </label>
                    <input
                      type="text"
                      id="scalaInterno"
                      value={customerData.scalaInterno}
                      onChange={(e) => handleInputChange("scalaInterno", e.target.value)}
                      className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                      placeholder="Scala A, Int. 3"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="altreInformazioni" className="block text-sm font-medium text-gray-700">
                    Altre informazioni per la consegna
                  </label>
                  <textarea
                    id="altreInformazioni"
                    rows={3}
                    value={customerData.altreInformazioni}
                    onChange={(e) => handleInputChange("altreInformazioni", e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                    placeholder="Piano terra, suonare forte..."
                  />
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-orange-400 bg-white p-6 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                <Phone className="h-5 w-5 text-green-600" />
                Contatti
              </h2>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                    Numero di Telefono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    value={customerData.telefono}
                    onChange={(e) => handleInputChange("telefono", e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                    placeholder="+39 333 1234567"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={customerData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-1 block w-full rounded-md border-2 border-orange-400 px-3 py-2 focus:border-orange-400 focus:ring-orange-400 sm:text-sm"
                    placeholder="mario.rossi@email.com"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Disclaimer Card */}
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p className="font-medium text-gray-900 mb-2">Informazioni Importanti</p>
                  <p>
                    Il seguente ordine verrà effettuato sotto forma di &quot;Lista della Spesa&quot;. 
                    Non sono presenti prezzi e non è garantita la presenza di tutti i prodotti selezionati. 
                    Per ulteriori informazioni contattateci direttamente in negozio. 
                    <br />
                    Grazie e buona spesa!
                  </p>
                </div>
              </div>
            </div>

            {/* Bottone Invio */}
            <button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className={`w-full rounded-md py-3 px-4 text-sm font-medium text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
                isFormValid() && !isSubmitting
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Invio in corso...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Invia Lista della Spesa
                </div>
              )}
            </button>
          </form>
        </div>

        {/* Riepilogo Ordine */}
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-orange-400 bg-white p-6 shadow-sm sticky top-4">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <MapPin className="h-5 w-5 text-green-600" />
              Riepilogo Lista
            </h2>
            
            <div className="space-y-3 mb-4">
              {cartItems.slice(0, 3).map(item => (
                <div key={item.variantId} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500">{item.name}</span>
                      <span className="font-medium"> {item.variantName}</span>
                    </div>
                  </div>
                  <span className="font-medium">
                    {item.quantity} {item.unit === 'WEIGHT' ? 'Kg' : 'Pz'}
                  </span>
                </div>
              ))}
              
              {cartItems.length > 3 && (
                <p className="text-sm text-gray-500">
                  ... e altri {cartItems.length - 3} articoli
                </p>
              )}
            </div>

            <div className="border-t pt-4 space-y-2">
              {subtotalPieces > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Subtotale Pezzi</span>
                  <span className="font-medium">{subtotalPieces.toFixed(2)} Pz.</span>
                </div>
              )}
              {subtotalWeight > 0 && (
                <div className="flex justify-between text-sm">
                  <span>Subtotale Kilogrammi</span>
                  <span className="font-medium">{subtotalWeight.toFixed(2)} Kg.</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span>Spedizione</span>
                <span className="text-green-600 font-medium">Gratis</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold">
                <span>Totale</span>
                <span>{(subtotalPieces + subtotalWeight).toFixed(2)} articoli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}