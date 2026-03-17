/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2tphzoqtq9aupm3q.public.blob.vercel-storage.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mimzskitchen.co.uk" }],
        destination: "https://www.mimzskitchen.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mimzskitchen.co.uk" }],
        destination: "https://www.mimzskitchen.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
