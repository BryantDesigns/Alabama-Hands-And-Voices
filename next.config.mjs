/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
                pathname: '/**',
            },
        ],
        domains: [],
        eslint: {
            ignoreDuringBuilds: true,
        },
    },
}

export default nextConfig
