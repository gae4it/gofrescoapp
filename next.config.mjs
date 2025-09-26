/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forza la build a includere tutti i dati statici
  outputFileTracingIncludes: {
    '/api/categories': ['./src/lib/embedded-data.ts'],
    '/api/category': ['./src/lib/embedded-data.ts'],
  },
  
  // Ottimizzazioni per Netlify
  output: 'standalone',
  
  // Assicura che le API routes siano trattate come serverless functions
  async rewrites() {
    return [];
  },
};

export default nextConfig;