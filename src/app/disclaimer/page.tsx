"use client";

import Link from "next/link";
import { AlertTriangle, ShoppingCart, DollarSign, Truck, Scale, MessageCircle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 max-w-4xl">
      <header className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          ← Torna alla Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Disclaimer Legale</h1>
        <p className="text-gray-500 mt-2">
          Ultimo aggiornamento: 27 settembre 2025
        </p>
      </header>

      <div className="prose max-w-none space-y-8">
        {/* Avviso principale */}
        <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-semibold m-0 text-yellow-800">Avviso Importante</h2>
          </div>
          <div className="space-y-3 text-yellow-800">
            <p className="font-medium text-lg">
              ⚠️ GoFrescoApp NON è un negozio online o una piattaforma di e-commerce
            </p>
            <p>
              Il nostro servizio si limita a facilitare la creazione e l&apos;invio di liste 
              della spesa digitali ai negozi locali. Non vendiamo prodotti, non processiamo 
              pagamenti e non gestiamo direttamente le transazioni commerciali.
            </p>
          </div>
        </section>

        {/* Natura del servizio */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Natura del Servizio</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">✅ Cosa facciamo:</h3>
              <ul className="list-disc pl-6 space-y-1 text-green-700">
                <li>Forniamo un catalogo digitale di prodotti alimentari</li>
                <li>Permettiamo di creare liste della spesa personalizzate</li>
                <li>Inviamo le liste ai negozi tramite email</li>
                <li>Conserviamo la cronologia delle liste inviate</li>
                <li>Facilitiamo la comunicazione tra clienti e negozi</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-medium text-red-800 mb-2">❌ Cosa NON facciamo:</h3>
              <ul className="list-disc pl-6 space-y-1 text-red-700">
                <li>Non vendiamo direttamente prodotti alimentari</li>
                <li>Non processiamo pagamenti o transazioni</li>
                <li>Non gestiamo inventario o magazzino</li>
                <li>Non effettuiamo consegne fisiche</li>
                <li>Non garantiamo disponibilità dei prodotti</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer prezzi */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="h-6 w-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Disclaimer sui Prezzi</h2>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
            <div className="space-y-4 text-orange-800">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-medium mb-2">🏷️ Prezzi indicativi o assenti:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>I prezzi mostrati (se presenti) sono puramente <strong>indicativi</strong></li>
                  <li>I prezzi reali sono determinati esclusivamente dal negozio</li>
                  <li>Non siamo responsabili per discrepanze nei prezzi</li>
                  <li>I prezzi possono variare senza preavviso</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h3 className="font-medium mb-2">💰 Nessuna transazione finanziaria:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Non accettiamo pagamenti attraverso la piattaforma</li>
                  <li>I pagamenti avvengono direttamente con il negozio</li>
                  <li>Non siamo parte di alcun contratto di vendita</li>
                  <li>Non siamo responsabili per dispute sui pagamenti</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer disponibilità */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Disponibilità dei Prodotti</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Nessuna garanzia di disponibilità:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>La presenza di un prodotto nel catalogo <strong>non garantisce</strong> la sua disponibilità</li>
                    <li>I negozi possono essere temporaneamente privi di alcuni prodotti</li>
                    <li>La stagionalità può influenzare la disponibilità</li>
                    <li>Possono verificarsi discontinuità nella fornitura</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Prodotti sostitutivi:</h3>
              <p className="text-gray-700">
                In caso di indisponibilità, il negozio può proporre prodotti alternativi 
                o sostitutivi. L&apos;accettazione di tali sostituzioni è a discrezione del cliente 
                e viene gestita direttamente dal negozio.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer consegne */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Consegne e Logistica</h2>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <div className="space-y-4 text-purple-800">
              <div className="bg-white p-4 rounded border">
                <h3 className="font-medium mb-2">🚚 Responsabilità delle consegne:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Le consegne sono gestite esclusivamente dai <strong>negozi partner</strong></li>
                  <li>Non siamo responsabili per ritardi o mancate consegne</li>
                  <li>Tempi e modalità di consegna sono definiti dal negozio</li>
                  <li>Costi di consegna sono a carico del cliente (se applicabili)</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded border">
                <h3 className="font-medium mb-2">📍 Aree di consegna:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Ogni negozio definisce le proprie zone di consegna</li>
                  <li>Non garantiamo copertura per tutte le aree</li>
                  <li>Le zone di consegna possono cambiare senza preavviso</li>
                  <li>Verifica sempre con il negozio la disponibilità per la tua zona</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Limitazioni responsabilità */}
        <section className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-semibold m-0 text-red-800">Limitazioni di Responsabilità</h2>
          </div>
          
          <div className="space-y-4 text-red-800">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium mb-2">🚫 Esclusioni di responsabilità:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Qualità dei prodotti:</strong> Non siamo responsabili per la qualità, freschezza o sicurezza degli alimenti</li>
                <li><strong>Problemi di salute:</strong> Non siamo responsabili per allergie, intolleranze o problemi di salute</li>
                <li><strong>Danni economici:</strong> Non rispondiamo di perdite economiche dirette o indirette</li>
                <li><strong>Interruzioni del servizio:</strong> Il servizio può essere temporaneamente non disponibile</li>
                <li><strong>Errori nella lista:</strong> Errori nell&apos;invio o nel contenuto delle liste</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium mb-2">⚖️ Limitazioni di danno:</h3>
              <p className="text-gray-700">
                In nessun caso la nostra responsabilità supererà l&apos;ammontare di 
                <strong> €0 (zero)</strong>, dato che il servizio è fornito gratuitamente. 
                Non saremo responsabili per danni consequenziali, incidentali, 
                speciali o punitivi di qualsiasi natura.
              </p>
            </div>
          </div>
        </section>

        {/* Dispute e reclami */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Dispute e Reclami</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">🏪 Problemi con i negozi:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Per problemi di qualità, prezzi o consegne contatta <strong>direttamente il negozio</strong></li>
                <li>Ogni negozio ha le proprie politiche di reso e rimborso</li>
                <li>Le dispute commerciali sono tra cliente e negozio</li>
                <li>Possiamo facilitare la comunicazione se necessario</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">💻 Problemi tecnici:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Per problemi con l&apos;app contatta il nostro supporto</li>
                <li>Segnala bug o malfunzionamenti</li>
                <li>Problemi di invio delle liste</li>
                <li>Difficoltà nell&apos;uso della piattaforma</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Informazioni nutrizionali */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Informazioni Nutrizionali e Allergeni</h2>
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-3 text-yellow-800">
                <h3 className="font-medium">⚠️ Importante per allergici e intolleranti:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Le informazioni nutrizionali mostrate potrebbero non essere aggiornate</li>
                  <li>Gli allergeni possono non essere correttamente indicati</li>
                  <li><strong>Verifica sempre con il negozio</strong> prima dell&apos;acquisto</li>
                  <li>Non siamo responsabili per reazioni allergiche</li>
                  <li>In caso di allergie gravi, comunica sempre con il venditore</li>
                </ul>
                <p className="font-medium bg-white p-3 rounded border">
                  <strong>Raccomandazione:</strong> Per allergeni e informazioni nutrizionali 
                  specifiche, fai sempre riferimento alle etichette originali dei prodotti 
                  o consulta direttamente il personale del negozio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aggiornamenti catalogo */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Aggiornamenti del Catalogo</h2>
          <div className="bg-white border rounded-lg p-4">
            <div className="space-y-3 text-gray-700">
              <p>
                Il catalogo dei prodotti viene aggiornato periodicamente, ma potrebbero 
                verificarsi discrepanze tra quanto mostrato e la realtà del negozio.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Prodotti stagionali:</strong> Possono non essere disponibili fuori stagione</li>
                <li><strong>Nuovi prodotti:</strong> Il negozio può avere prodotti non ancora nel nostro catalogo</li>
                <li><strong>Prodotti discontinui:</strong> Alcuni prodotti possono essere stati ritirati dal mercato</li>
                <li><strong>Marchi e formati:</strong> Possono variare rispetto a quanto mostrato</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contatti e supporto */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-4">Contatti e Supporto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-gray-900 mb-2">📧 Supporto Tecnico:</h3>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Email:</strong> support@gofrescoapp.com</li>
                <li><strong>Problemi:</strong> Bug, malfunzionamenti, liste non inviate</li>
                <li><strong>Risposta:</strong> Entro 24-48 ore</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-gray-900 mb-2">⚖️ Questioni Legali:</h3>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Email:</strong> legal@gofrescoapp.com</li>
                <li><strong>Argomenti:</strong> Reclami, dispute, questioni legali</li>
                <li><strong>Risposta:</strong> Entro 5 giorni lavorativi</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Validità disclaimer */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Validità del Disclaimer</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              Questo disclaimer è parte integrante dei nostri Termini di Servizio 
              e ha validità legale secondo la legislazione italiana ed europea.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Utilizzando il servizio accetti integralmente questo disclaimer</li>
              <li>Se non accetti questi termini, non utilizzare il servizio</li>
              <li>Il disclaimer può essere aggiornato periodicamente</li>
              <li>Gli aggiornamenti saranno comunicati attraverso il sito</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Data ultima modifica:</strong> 27 settembre 2025<br />
              <strong>Versione:</strong> 1.0<br />
              <strong>Legge applicabile:</strong> Repubblica Italiana
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}