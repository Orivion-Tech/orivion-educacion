/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
];

const isDev = process.env.NODE_ENV !== 'production';
const scriptSrc = "script-src 'self' 'unsafe-inline'" + (isDev ? " 'unsafe-eval'" : '');
const csp = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https:",
  "frame-ancestors 'none'"
].join('; ');

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  experimental: {
    scrollRestoration: true
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          ...securityHeaders,
          {
            key: 'Content-Security-Policy',
            value: csp
          }
        ]
      }
    ];
  }
};

export default nextConfig;
