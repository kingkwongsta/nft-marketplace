/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.alchemy.com",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
        // port: "",
        // pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },
  reactStrictMode: true,
};
