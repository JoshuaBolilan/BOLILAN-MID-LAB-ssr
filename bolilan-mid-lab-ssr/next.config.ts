// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ allow LAN access for development
  experimental: {
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.19:3000"],
  },
};

module.exports = nextConfig;
