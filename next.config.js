/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    BACKEND_AUTH_URL: process.env.BACKEND_AUTH_URL || 'https://api.chavaramatrimony.com/auth/login',
    BACKEND_API_URL: process.env.BACKEND_API_URL || 'https://api.chavaramatrimony.com',
  },
}

module.exports = nextConfig
