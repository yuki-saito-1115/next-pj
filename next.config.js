/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/storybook',
        destination: '/storybook/index.html',
      },
    ];
  },
}

module.exports = nextConfig
