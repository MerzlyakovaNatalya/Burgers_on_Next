/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  env: {
    SERVER: process.env.SERVER,
  },
};

module.exports = {
  env: {
    LOCAL: process.env.LOCAL,
  },
};
