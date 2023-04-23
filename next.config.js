/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI: "mongodb+srv://somugowda8050:nibyula1999@cluster0.brnpw2i.mongodb.net/next13-app",
    NEXTAUTH_SECRET: "somanathgoudar",
  },
}

module.exports = nextConfig
