/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ['preview-chat-a75b88c3-2920-4c75-aac7-7533a927ed04.space.z.ai'],
  },
}

module.exports = nextConfig