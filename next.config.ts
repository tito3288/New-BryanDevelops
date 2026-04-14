import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/website-design-development",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/website-design-development/",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/best-website-builders",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/best-website-builders/",
        destination: "/services/web-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
