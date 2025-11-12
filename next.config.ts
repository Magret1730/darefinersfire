import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */

const nextConfig: NextConfig = {
  /* config options here */
  experimental: { allowedDevOrigins: ['http://192.168.2.15:3000', 'http://192.168.2.15:3001', 'http://localhost:3000'] } as any,
};

export default nextConfig;
