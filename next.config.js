/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/*",
      },
    ],
  },
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["bcrypt", "@prisma/client"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
}

module.exports = nextConfig
