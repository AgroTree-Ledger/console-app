/** @type {import('next').NextConfig} */
import NextBundleAnalyzer from '@next/bundle-analyzer'
const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    config.externals.push(
      "pino-pretty",
      "lokijs",
      // "crypto",
      "http",
      "https",
      "crypto-browserify"
    );
    return config;
  },
  transpilePackages: ["crypto-js"],
  images: {
    remotePatterns: [
      {
        hostname: "gateway.irys.xyz",
        protocol: "https",
      },
      {
        hostname: "arweave.net",
        protocol: "https",
      },
      {
        hostname: "utfs.io",
        protocol: "https",
      }, {
        hostname: "ikcaxhjlvvpenmyrfonpc.supabase.co",
        protocol: "https",
      }
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
