// @ts-check
const { webpackPluginEvmts } = require('@evmts/webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Typechecking in NEXT.js is not yet supported but planned
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  webpack: config => {
    config.plugins.push(webpackPluginEvmts())
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
