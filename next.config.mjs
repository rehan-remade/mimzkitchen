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
};

export default nextConfig;
