/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_PRIVATE_KEY: process.env.NEXT_PUBLIC__APP_PRIVATE_KEY,
  },
};

module.exports = nextConfig;
