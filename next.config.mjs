/** @type {import('next').NextConfig} */

import withImages from "next-images";

export default {
  ...withImages(),
  webpack: (config, { isServer }) => {
    // Fix for Module not found: Can't resolve 'fs'
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  serverRuntimeConfig: {
    ALGO_NETWORK: process.env.ALGO_NETWORK,
  },
  // Will be available on both server and client
  publicRuntimeConfig: {
    ALGO_NETWORK: process.env.ALGO_NETWORK,
  },
};
