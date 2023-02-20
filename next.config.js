/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = nextConfig;

export default module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hswstatic.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
  reactStrictMode: true,
};
