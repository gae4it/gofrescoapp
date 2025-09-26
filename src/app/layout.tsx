import "@/styles/globals.css";

import { Geist } from "next/font/google";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/app/_components/Navbar";
import { BottomNav } from "@/app/_components/BottomNav";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "GoFrescoApp - La tua spesa online",
  description: "Fai la spesa online in modo semplice e veloce con GoFrescoApp.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${geist.variable}`}> 
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <TRPCReactProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow bg-gray-50 pb-20 md:pb-0">
                {children}
              </main>
              <BottomNav />
              
              {/* Footer Copyright */}
              <footer className="bg-gray-50 py-4 text-center">
                <a 
                  href="http://gofrescoapp.netlify.app/" 
                  className="text-gray-500 text-sm hover:text-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GoFrescoApp © 2025
                </a>
              </footer>
            </div>
          </CartProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}