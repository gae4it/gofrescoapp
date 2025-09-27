/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forza la build a includere tutti i dati statici
  outputFileTracingIncludes: {
    '/api/categories': ['./src/lib/embedded-data.ts'],
    '/api/category': ['./src/lib/embedded-data.ts'],
  },
  
  // Ottimizzazioni per Netlify
  output: 'standalone',
  
  // Headers di sicurezza per bloccare bot e crawler
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Blocco robot e crawler
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, nosnippet, noarchive, noimageindex, notranslate'
          },
          // Prevenzione caching
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate, max-age=0'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Expires',
            value: '0'
          },
          // Sicurezza generale
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          }
        ],
      },
    ];
  },
  
  // Assicura che le API routes siano trattate come serverless functions
  async rewrites() {
    return [];
  },
};

export default nextConfig;