"use client";

import Link from "next/link";
import { Cookie, Settings, Database, Shield, Info } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 max-w-4xl">
      <header className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          ← Torna alla Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="text-gray-500 mt-2">
          Ultimo aggiornamento: 27 settembre 2025
        </p>
      </header>

      <div className="prose max-w-none space-y-8">
        {/* Introduzione */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold m-0">Cosa sono i Cookies</h2>
          </div>
          <p className="text-gray-700 m-0">
            I cookies sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
            quando visiti un sito web. GoFrescoApp utilizza principalmente il <strong>localStorage</strong> del 
            browser per salvare i tuoi dati, che è più sicuro e privato dei cookies tradizionali.
          </p>
        </section>

        {/* LocalStorage */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">localStorage: La Nostra Scelta Principale</h2>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-4">
            <h3 className="font-medium text-green-800 mb-2">✅ Vantaggi del localStorage:</h3>
            <ul className="list-disc pl-6 space-y-1 text-green-700">
              <li><strong>Privacy</strong> - I dati rimangono solo sul tuo dispositivo</li>
              <li><strong>Controllo</strong> - Puoi cancellare i dati quando vuoi</li>
              <li><strong>Sicurezza</strong> - Non vengono inviati automaticamente ai server</li>
              <li><strong>Capacità</strong> - Può contenere più dati dei cookies</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Cosa salviamo nel localStorage:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Carrello della spesa:</h4>
                  <ul className="list-disc pl-6 text-sm text-gray-600">
                    <li>Prodotti selezionati</li>
                    <li>Quantità</li>
                    <li>Varianti scelte</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Cronologia ordini:</h4>
                  <ul className="list-disc pl-6 text-sm text-gray-600">
                    <li>Liste inviate in passato</li>
                    <li>Date degli ordini</li>
                    <li>Informazioni di consegna</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Come gestire il localStorage:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nel browser:</strong></p>
                <ul className="list-disc pl-6 text-sm">
                  <li>Chrome: Impostazioni → Privacy e sicurezza → Cancella dati di navigazione</li>
                  <li>Firefox: Impostazioni → Privacy e sicurezza → Gestione dati</li>
                  <li>Safari: Preferenze → Privacy → Gestisci dati siti web</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Nell&apos;app:</strong> Usa il pulsante &quot;Pulisci cronologia&quot; nella pagina profilo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cookies tecnici */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Settings className="h-6 w-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Cookies Tecnici (Essenziali)</h2>
          </div>
          
          <div className="bg-white border rounded-lg p-4">
            <p className="text-gray-700 mb-3">
              Utilizziamo un numero minimo di cookies tecnici necessari per il funzionamento del sito:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 font-medium text-gray-900">Nome Cookie</th>
                    <th className="text-left py-2 font-medium text-gray-900">Scopo</th>
                    <th className="text-left py-2 font-medium text-gray-900">Durata</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b">
                    <td className="py-2"><code>__session</code></td>
                    <td className="py-2">Gestione sessione utente</td>
                    <td className="py-2">Sessione</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2"><code>csrf_token</code></td>
                    <td className="py-2">Protezione da attacchi CSRF</td>
                    <td className="py-2">24 ore</td>
                  </tr>
                  <tr>
                    <td className="py-2"><code>lang_pref</code></td>
                    <td className="py-2">Preferenza lingua</td>
                    <td className="py-2">30 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500 mt-3">
              <strong>Nota:</strong> Questi cookies sono essenziali per il funzionamento del sito 
              e non richiedono il consenso secondo la normativa europea.
            </p>
          </div>
        </section>

        {/* Cosa NON usiamo */}
        <section className="bg-red-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-red-600" />
            <h2 className="text-xl font-semibold m-0">Cosa NON Usiamo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-red-800 mb-2">❌ NON usiamo cookies di:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Profilazione</strong> - per creare profili utente</li>
                <li><strong>Marketing</strong> - per pubblicità mirata</li>
                <li><strong>Tracking</strong> - per seguire la navigazione</li>
                <li><strong>Social Media</strong> - pixel di Facebook, Google, etc.</li>
                <li><strong>Analytics invasivi</strong> - Google Analytics o simili</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-red-800 mb-2">❌ NON condividiamo dati con:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Aziende pubblicitarie</li>
                <li>Data brokers</li>
                <li>Piattaforme social</li>
                <li>Servizi di analytics esterni</li>
                <li>Reti pubblicitarie</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded border mt-4">
            <p className="text-gray-700">
              <strong>La nostra filosofia:</strong> Crediamo nella privacy per design. 
              Raccogliamo solo i dati strettamente necessari per fornire il servizio 
              e non li usiamo mai per scopi commerciali o pubblicitari.
            </p>
          </div>
        </section>

        {/* Servizi esterni */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Servizi di Terze Parti</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Netlify (Hosting):</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Scopo:</strong> Hosting del sito web e CDN</li>
                <li><strong>Dati:</strong> Indirizzo IP, user agent, log di accesso</li>
                <li><strong>Conservazione:</strong> 30 giorni (log automatici)</li>
                <li><strong>Privacy:</strong> <a href="https://www.netlify.com/privacy/" className="text-blue-600 underline" target="_blank" rel="noopener">Netlify Privacy Policy</a></li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Resend (Email):</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Scopo:</strong> Invio email con le liste della spesa</li>
                <li><strong>Dati:</strong> Email destinatario, contenuto lista</li>
                <li><strong>Conservazione:</strong> 30 giorni (log di invio)</li>
                <li><strong>Privacy:</strong> <a href="https://resend.com/privacy" className="text-blue-600 underline" target="_blank" rel="noopener">Resend Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Controllo e gestione */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Info className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Come Gestire i Tuoi Dati</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Gestione Browser:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Cookies:</strong> Disabilita nelle impostazioni browser</li>
                <li><strong>localStorage:</strong> Cancella dai dati del sito</li>
                <li><strong>Modalità Incognito:</strong> Non salva dati persistenti</li>
                <li><strong>Estensioni:</strong> Usa ad-blocker per maggiore privacy</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Gestione App:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Cronologia:</strong> Pulsante &quot;Pulisci cronologia&quot; nel profilo</li>
                <li><strong>Carrello:</strong> Si svuota dopo ogni ordine</li>
                <li><strong>Dati account:</strong> Contattaci per cancellazione completa</li>
                <li><strong>Email:</strong> Unsubscribe dai link nelle email</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Consenso e base giuridica */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-4">Consenso e Base Giuridica</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-gray-900 mb-2">Cookies essenziali:</h3>
              <p className="text-gray-700">
                Non richiedono consenso perché sono necessari per il funzionamento del sito 
                (Art. 122 del Codice Privacy italiano).
              </p>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-gray-900 mb-2">localStorage:</h3>
              <p className="text-gray-700">
                I dati rimangono sul tuo dispositivo e vengono utilizzati solo per migliorare 
                la tua esperienza d&apos;uso. Base giuridica: interesse legittimo e consenso implicito.
              </p>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-gray-900 mb-2">Servizi esterni:</h3>
              <p className="text-gray-700">
                I dati vengono condivisi solo per l&apos;erogazione del servizio richiesto. 
                Base giuridica: esecuzione del contratto.
              </p>
            </div>
          </div>
        </section>

        {/* Aggiornamenti */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Aggiornamenti della Cookie Policy</h2>
          <div className="bg-white border rounded-lg p-4">
            <p className="text-gray-700 mb-3">
              Questa Cookie Policy potrebbe essere aggiornata per riflettere cambiamenti 
              nei nostri servizi o nella normativa applicabile.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Gli aggiornamenti saranno pubblicati in questa pagina</li>
              <li>La data di ultimo aggiornamento sarà sempre visibile in alto</li>
              <li>Modifiche sostanziali saranno comunicate via email</li>
              <li>Ti consigliamo di controllare periodicamente questa pagina</li>
            </ul>
          </div>
        </section>

        {/* Contatti */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-4">Contatti</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Per domande sui cookies e privacy:</strong></p>
            <p>Email: <strong>privacy@gofrescoapp.com</strong></p>
            <p>Email: <strong>cookies@gofrescoapp.com</strong></p>
            <p className="text-sm text-gray-500 mt-4">
              Risponderemo a tutte le domande sui cookies e sulla gestione 
              dei tuoi dati entro 48 ore lavorative.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}