/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensures App Router is enabled
  },
  reactStrictMode: true, // Enables strict mode for React
  swcMinify: true, // Enables faster builds with SWC
  env: {
    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
    NEXT_PUBLIC_REDIRECT_URL: process.env.NEXT_PUBLIC_REDIRECT_URL,
  },
};

module.exports = nextConfig;
