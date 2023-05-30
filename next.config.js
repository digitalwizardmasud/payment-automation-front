/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    EDokan_API : process.env.EDokan_API,
    EDokan_CLIENT : process.env.EDokan_CLIENT,
    EDokan_SECRET: process.env.EDokan_SECRET
  }
}

module.exports = nextConfig
