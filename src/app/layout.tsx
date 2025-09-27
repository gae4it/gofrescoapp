import "@/styles/globals.css";

import { Geist } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { CartProvider } from "@/contexts/CartContext";
import { OrderHistoryProvider } from "@/contexts/OrderHistoryContext";
import { Navbar } from "@/app/_components/Navbar";
import { BottomNav } from "@/app/_components/BottomNav";
import Link from "next/link";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "GoFrescoApp - La tua spesa online",
  description: "Fai la spesa online in modo semplice e veloce con GoFrescoApp.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/favicon.svg", sizes: "180x180" }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${geist.variable}`}> 
      <head>
        {/* Blocco completo di tutti i robot e motori di ricerca */}
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="slurp" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        
        {/* Blocco specifico per robot AI */}
        <meta name="ChatGPT-User" content="noindex, nofollow" />
        <meta name="GPTBot" content="noindex, nofollow" />
        <meta name="Google-Extended" content="noindex, nofollow" />
        <meta name="anthropic-ai" content="noindex, nofollow" />
        <meta name="Claude-Web" content="noindex, nofollow" />
        <meta name="PerplexityBot" content="noindex, nofollow" />
        <meta name="YouBot" content="noindex, nofollow" />
        <meta name="CCBot" content="noindex, nofollow" />
        <meta name="Omgilibot" content="noindex, nofollow" />
        <meta name="FacebookBot" content="noindex, nofollow" />
        <meta name="Applebot" content="noindex, nofollow" />
        
        {/* Prevenzione caching e archiviazione */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body /* suppressHydrationWarning={true} */>
        <TRPCReactProvider>
          <CartProvider>
            <OrderHistoryProvider>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-grow bg-gray-50">
                  {children}
                  
                  {/* Footer with Legal Links */}
                  <footer className="bg-gray-50 py-6 text-center mb-20 md:mb-0">
                    {/* Legal Links */}
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
                        <Link 
                          href="/privacy" 
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Privacy Policy
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link 
                          href="/terms" 
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Termini d&apos;Uso
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link 
                          href="/cookies" 
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Cookie Policy
                        </Link>
                        <span className="text-gray-400">•</span>
                        <Link 
                          href="/disclaimer" 
                          className="text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          Disclaimer
                        </Link>
                      </div>
                    </div>
                    
                    {/* Copyright */}
                    <div>
                      <a 
                        href="http://gofrescoapp.netlify.app/" 
                        className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GoFrescoApp © 2025
                      </a>
                    </div>
                  </footer>
                </main>
                <BottomNav />
              </div>
            </OrderHistoryProvider>
          </CartProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}