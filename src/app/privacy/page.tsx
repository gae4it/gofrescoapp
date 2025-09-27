"use client";

import Link from "next/link";
import { Shield, Mail, Database, Globe, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 max-w-4xl">
      <header className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          ← Torna alla Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">
          Ultimo aggiornamento: 27 settembre 2025
        </p>
      </header>

      <div className="prose max-w-none space-y-8">
        {/* Introduzione */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold m-0">Chi siamo e cosa facciamo</h2>
          </div>
          <p className="text-gray-700 m-0">
            GoFrescoApp è un servizio di creazione e invio di liste della spesa digitali. 
            Non siamo un e-commerce: aiutiamo i clienti a organizzare e inviare le loro 
            liste della spesa ai negozi locali.
          </p>
        </section>

        {/* Dati che raccogliamo */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Quali dati raccogliamo</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Dati forniti volontariamente:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Nome e Cognome</strong> - per identificare l&apos;ordine</li>
                <li><strong>Email</strong> - per inviare conferme e comunicazioni</li>
                <li><strong>Numero di telefono</strong> - per contatti relativi alla consegna</li>
                <li><strong>Indirizzo di consegna</strong> - per il recapito della spesa</li>
                <li><strong>Note aggiuntive</strong> - informazioni opzionali per la consegna</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Dati tecnici:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Cronologia carrello</strong> - salvata nel browser (localStorage)</li>
                <li><strong>Cronologia ordini</strong> - salvata nel browser (localStorage)</li>
                <li><strong>Indirizzo IP</strong> - per sicurezza e analisi tecniche</li>
                <li><strong>Tipo di browser</strong> - per compatibilità del servizio</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Come usiamo i dati */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-6 w-6 text-orange-600" />
            <h2 className="text-xl font-semibold">Come utilizziamo i tuoi dati</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Finalità principali:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Processare e inviare le liste della spesa</li>
                <li>Inviare conferme via email</li>
                <li>Contattarti per problemi con l&apos;ordine</li>
                <li>Migliorare il servizio</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Base giuridica:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Consenso</strong> - per invio email e comunicazioni</li>
                <li><strong>Esecuzione contratto</strong> - per erogare il servizio</li>
                <li><strong>Interesse legittimo</strong> - per sicurezza e miglioramenti</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Condivisione dati */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Condivisione e trasferimento dati</h2>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <h3 className="font-medium text-yellow-800 mb-2">⚠️ Importante: Trasferimento dati negli USA</h3>
            <p className="text-yellow-700">
              Il nostro servizio è ospitato su <strong>Netlify (USA)</strong>. I tuoi dati potrebbero 
              essere trasferiti e elaborati negli Stati Uniti. Netlify rispetta gli standard di 
              protezione GDPR attraverso Standard Contractual Clauses.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Condividiamo i dati solo con:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Netlify</strong> - hosting e infrastruttura</li>
                <li><strong>Resend</strong> - servizio di invio email</li>
                <li><strong>Negozi partner</strong> - solo le informazioni necessarie per l&apos;ordine</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">NON condividiamo mai i dati con:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Aziende di marketing o pubblicitarie</li>
                <li>Social media o piattaforme di tracking</li>
                <li>Terze parti per finalità commerciali</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conservazione */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Conservazione dei dati</h2>
          <div className="bg-white border rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Email e dati ordine:</strong> Conservati per 2 anni dall&apos;ultimo ordine</li>
              <li><strong>Dati nel browser:</strong> Rimangono fino a quando non li cancelli</li>
              <li><strong>Log tecnici:</strong> Eliminati automaticamente dopo 30 giorni</li>
            </ul>
          </div>
        </section>

        {/* Diritti GDPR */}
        <section className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold mb-4">I tuoi diritti (GDPR)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Hai il diritto di:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li><strong>Accesso</strong> - sapere quali dati abbiamo</li>
                <li><strong>Rettifica</strong> - correggere dati errati</li>
                <li><strong>Cancellazione</strong> - eliminare i tuoi dati</li>
                <li><strong>Portabilità</strong> - scaricare i tuoi dati</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Come esercitare i diritti:</h3>
              <div className="bg-white p-3 rounded border">
                <p className="text-sm text-gray-600 mb-2">Contattaci via email:</p>
                <p className="font-medium text-gray-900">privacy@gofrescoapp.com</p>
                <p className="text-xs text-gray-500 mt-1">
                  Risponderemo entro 30 giorni dalla richiesta
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sicurezza */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Sicurezza dei dati</h2>
          <div className="bg-white border rounded-lg p-4">
            <p className="text-gray-700 mb-3">Proteggiamo i tuoi dati attraverso:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li><strong>Crittografia HTTPS</strong> - tutte le comunicazioni sono crittografate</li>
              <li><strong>Storage sicuro</strong> - dati archiviati su server protetti</li>
              <li><strong>Accesso limitato</strong> - solo il personale autorizzato può accedere</li>
              <li><strong>Monitoraggio</strong> - controllo costante per attività sospette</li>
            </ul>
          </div>
        </section>

        {/* Cookies e localStorage */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Cookies e localStorage</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">localStorage del browser:</h3>
              <p className="text-gray-700">
                Usiamo il localStorage del tuo browser per salvare il carrello e la cronologia 
                degli ordini. Questi dati rimangono sul tuo dispositivo e non vengono inviati 
                ai nostri server se non quando effettui un ordine.
              </p>
            </div>
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Cookies essenziali:</h3>
              <p className="text-gray-700">
                Usiamo solo cookies tecnici necessari per il funzionamento del sito. 
                Non utilizziamo cookies di profilazione o tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Minori */}
        <section className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-xl font-semibold mb-4">Protezione dei minori</h2>
          <p className="text-red-800">
            <strong>Il nostro servizio non è destinato a minori di 16 anni.</strong> Se scopriamo 
            che abbiamo raccolto dati di un minore senza consenso, procederemo immediatamente 
            alla loro cancellazione. Se sei genitore e hai scoperto che tuo figlio ci ha fornito 
            dati personali, contattaci.
          </p>
        </section>

        {/* Modifiche */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Modifiche alla Privacy Policy</h2>
          <div className="bg-white border rounded-lg p-4">
            <p className="text-gray-700">
              Potremmo aggiornare questa Privacy Policy occasionalmente. Ti informeremo 
              di eventuali modifiche sostanziali tramite email o attraverso un avviso 
              sul nostro sito. Continuando a utilizzare il servizio dopo le modifiche, 
              accetti la nuova Privacy Policy.
            </p>
          </div>
        </section>

        {/* Contatti */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold m-0">Contatti</h2>
          </div>
          <div className="space-y-2 text-gray-700">
            <p><strong>Per questioni sulla privacy:</strong></p>
            <p>Email: <strong>privacy@gofrescoapp.com</strong></p>
            <p className="text-sm text-gray-500 mt-4">
              Hai anche il diritto di presentare reclamo all&apos;Autorità Garante per la 
              Protezione dei Dati Personali se ritieni che il trattamento dei tuoi dati 
              violi il GDPR.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}