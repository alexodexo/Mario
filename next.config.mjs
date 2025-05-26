// next.config.mjs - Optimiert für GKE/Docker Deployment
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // WICHTIG: Standalone output für optimierte Docker Images
  output: 'standalone',
  
  // Bilder von Firebase Storage
  images: {
    domains: ['storage.googleapis.com'],
    // Optimierung für Production
    minimumCacheTTL: 60,
    formats: ['image/webp'],
  },
  
  // Deaktiviere Telemetrie
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  
  // Production Optimierungen
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Sicherheits-Header
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  
  // Webpack Optimierungen für Production
  webpack: (config, { isServer }) => {
    // Optimierungen nur für Client-Bundle
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          // Firebase chunk
          firebase: {
            name: 'firebase',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@firebase|firebase)[\\/]/,
            priority: 30,
            reuseExistingChunk: true,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      };
    }
    
    return config;
  },
};

export default nextConfig;