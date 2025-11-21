import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.adkey-seo.com',
        pathname: '/storage/images/**',
      },
    ],
  },
};

export default nextConfig;
