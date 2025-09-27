"use client";

import Link from "next/link";
import { FileText, Users, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:px-6 max-w-4xl">
      <header className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          ← Torna alla Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Condizioni d&apos;Uso</h1>
        <p className="text-gray-500 mt-2">
          Ultimo aggiornamento: 27 settembre 2025
        </p>
      </header>

      <div className="prose max-w-none space-y-8">
        {/* Introduzione */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold m-0">Benvenuto in GoFrescoApp</h2>
          </div>
          <p className="text-gray-700 m-0">
            Utilizzando GoFrescoApp accetti le presenti Condizioni d&apos;Uso. Ti invitiamo a 
            leggerle attentamente prima di utilizzare il nostro servizio.
          </p>
        </section>

        {/* Definizioni */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Definizioni</h2>
          <div className="bg-white border rounded-lg p-4">
            <dl className="space-y-3">
              <div>
                <dt className="font-medium text-gray-900">Servizio:</dt>
                <dd className="text-gray-700 ml-4">GoFrescoApp - piattaforma web per creare e inviare liste della spesa</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Utente:</dt>
                <dd className="text-gray-700 ml-4">Chiunque utilizzi o acceda al nostro servizio</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Lista della Spesa:</dt>
                <dd className="text-gray-700 ml-4">Elenco di prodotti alimentari selezionati dall&apos;utente</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Partner/Negozio:</dt>
                <dd className="text-gray-700 ml-4">Attività commerciali che ricevono le liste della spesa</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Natura del servizio */}
        <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-6 w-6 text-yellow-600" />
            <h2 className="text-xl font-semibold m-0">Natura del Servizio</h2>
          </div>
          <div className="space-y-3 text-gray-700">
            <p className="font-medium text-yellow-800">
              ⚠️ GoFrescoApp NON è un e-commerce o negozio online
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Facilitiamo la comunicazione tra clienti e negozi locali</li>
              <li>Non vendiamo prodotti direttamente</li>
              <li>Non gestiamo pagamenti o transazioni finanziarie</li>
              <li>Non garantiamo disponibilità o prezzi dei prodotti</li>
              <li>Ogni transazione avviene direttamente con il negozio</li>
            </ul>
          </div>
        </section>

        {/* Come funziona */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Come Funziona il Servizio</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="font-medium text-gray-900">Cosa facciamo:</h3>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Forniamo un catalogo di prodotti alimentari</li>
                <li>Permettiamo di creare liste della spesa digitali</li>
                <li>Inviamo le liste ai negozi partner via email</li>
                <li>Conserviamo la cronologia delle tue liste</li>
                <li>Forniamo un servizio gratuito di organizzazione</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="h-5 w-5 text-red-600" />
                <h3 className="font-medium text-gray-900">Cosa NON facciamo:</h3>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Non processiamo pagamenti</li>
                <li>Non garantiamo disponibilità prodotti</li>
                <li>Non fissiamo prezzi</li>
                <li>Non gestiamo le consegne fisiche</li>
                <li>Non siamo responsabili per la qualità dei prodotti</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Responsabilità dell'utente */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Responsabilità dell&apos;Utente</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Utilizzo corretto:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Fornire informazioni accurate e veritiere</li>
                <li>Utilizzare il servizio solo per scopi legittimi</li>
                <li>Non inserire contenuti offensivi o illegali</li>
                <li>Rispettare i diritti di proprietà intellettuale</li>
                <li>Non tentare di compromettere la sicurezza del servizio</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Divieti specifici:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Uso automatizzato o scraping del servizio</li>
                <li>Tentativi di accesso non autorizzato</li>
                <li>Invio di spam o contenuti dannosi</li>
                <li>Violazione delle leggi applicabili</li>
                <li>Interferenza con il normale funzionamento</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitazioni di responsabilità */}
        <section className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-xl font-semibold mb-4">Limitazioni di Responsabilità</h2>
          <div className="space-y-4 text-gray-700">
            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-red-800 mb-2">Esclusioni importanti:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Disponibilità prodotti:</strong> Non garantiamo che i prodotti nella lista siano disponibili</li>
                <li><strong>Prezzi:</strong> I prezzi possono variare e non sono sotto il nostro controllo</li>
                <li><strong>Qualità:</strong> Non siamo responsabili per la qualità dei prodotti forniti</li>
                <li><strong>Consegne:</strong> Tempi e modalità di consegna sono gestiti dal negozio</li>
                <li><strong>Interruzioni:</strong> Il servizio può essere temporaneamente non disponibile</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border">
              <h3 className="font-medium text-red-800 mb-2">Limitazioni di danno:</h3>
              <p>
                In nessun caso saremo responsabili per danni diretti, indiretti, incidentali 
                o consequenziali derivanti dall&apos;uso del servizio, inclusi ma non limitati a 
                perdite economiche, danni all&apos;immagine o perdita di opportunità commerciali.
              </p>
            </div>
          </div>
        </section>

        {/* Proprietà intellettuale */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Proprietà Intellettuale</h2>
          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Nostri diritti:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>GoFrescoApp, logo e design sono di nostra proprietà</li>
                <li>Il codice sorgente e l&apos;architettura sono protetti</li>
                <li>I database e l&apos;organizzazione dei contenuti sono riservati</li>
                <li>Non concediamo licenze per uso commerciale senza autorizzazione</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Tuoi diritti:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Mantieni la proprietà delle tue liste della spesa</li>
                <li>Puoi esportare e cancellare i tuoi dati in qualsiasi momento</li>
                <li>Hai una licenza limitata per l&apos;uso personale del servizio</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modifiche e cessazione */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Modifiche del Servizio e Cessazione</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Modifiche al servizio:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Possiamo modificare il servizio in qualsiasi momento</li>
                <li>Ti informeremo delle modifiche sostanziali</li>
                <li>Nuove funzionalità potrebbero avere termini aggiuntivi</li>
                <li>Possiamo rimuovere funzionalità con preavviso</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Cessazione dell&apos;account:</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Puoi cessare l&apos;uso in qualsiasi momento</li>
                <li>Possiamo sospendere l&apos;accesso per violazioni</li>
                <li>I dati locali rimarranno nel tuo browser</li>
                <li>I dati sui nostri server seguiranno la Privacy Policy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legge applicabile */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Legge Applicabile e Giurisdizione</h2>
          <div className="bg-white border rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Legge applicabile:</strong> Le presenti condizioni sono governate dalla legge italiana</li>
              <li><strong>Giurisdizione:</strong> Per eventuali controversie è competente il Tribunale italiano competente per territorio</li>
              <li><strong>Risoluzione controversie:</strong> Incoraggiamo la risoluzione amichevole prima di ricorrere alle vie legali</li>
              <li><strong>Mediazione:</strong> Disponibili a procedure di mediazione per risolvere le dispute</li>
            </ul>
          </div>
        </section>

        {/* Modifica termini */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Modifiche ai Termini</h2>
          <div className="bg-white border rounded-lg p-4">
            <p className="text-gray-700 mb-3">
              Ci riserviamo il diritto di modificare questi termini in qualsiasi momento. 
              Le modifiche entreranno in vigore immediatamente dopo la pubblicazione.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Le modifiche sostanziali saranno notificate via email</li>
              <li>Continua utilizzo implica accettazione dei nuovi termini</li>
              <li>Se non accetti le modifiche, devi cessare l&apos;uso del servizio</li>
              <li>Le versioni precedenti non saranno più valide</li>
            </ul>
          </div>
        </section>

        {/* Contatti */}
        <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold mb-4">Contatti</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Per domande sui Termini d&apos;Uso:</strong></p>
            <p>Email: <strong>legal@gofrescoapp.com</strong></p>
            <p>Email: <strong>support@gofrescoapp.com</strong></p>
            <p className="text-sm text-gray-500 mt-4">
              Cercheremo di rispondere a tutte le domande entro 48 ore lavorative.
            </p>
          </div>
        </section>

        {/* Validità */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Validità e Separabilità</h2>
          <p className="text-gray-700">
            Se una parte di questi termini dovesse risultare invalida o inapplicabile, 
            le restanti parti rimarranno in pieno vigore ed effetto. In tal caso, 
            la parte invalida sarà sostituita con disposizioni valide che riflettano 
            il più possibile l&apos;intenzione originale.
          </p>
        </section>
      </div>
    </div>
  );
}