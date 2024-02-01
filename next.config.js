/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mongoose"]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.clerk.com'
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.dev'
            },
            {
                protocol: 'https',
                hostname: 'uplaodthing.com'
            },
            {
                protocol: 'https',
                hostname: 'plachold.co'
            }
        ]
    }
};

module.exports = nextConfig;
