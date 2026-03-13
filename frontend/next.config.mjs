import path from 'node:path';
import { fileURLToPath } from 'node:url';

const configDir = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(configDir, '..');
const isProduction = process.env.NODE_ENV === 'production';

const backendOrigin = process.env.BACKEND_URL ?? 'http://localhost:8000';
const connectSources = [
  "'self'",
  backendOrigin,
];

if (!isProduction) {
  connectSources.push('ws:', 'http://localhost:3000');
}

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProduction ? '' : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob:",
  "media-src 'self' data: blob:",
  "frame-src 'self'",
  `connect-src ${connectSources.join(' ')}`,
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  isProduction ? 'upgrade-insecure-requests' : '',
]
  .filter(Boolean)
  .join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  turbopack: {
    root: workspaceRoot,
  },

  async headers() {
    const commonSecurityHeaders = [
      { key: 'Content-Security-Policy', value: contentSecurityPolicy },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'X-DNS-Prefetch-Control', value: 'off' },
      { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      ...(isProduction
        ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' }]
        : []),
    ];

    return [
      {
        source: '/(.*)',
        headers: commonSecurityHeaders,
      },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*.(jpg|jpeg|png|svg|webp|avif|ico)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.BACKEND_URL
          ? `${process.env.BACKEND_URL}/:path*`
          : 'http://localhost:8000/:path*',
      },
    ];
  },
};

export default nextConfig;
