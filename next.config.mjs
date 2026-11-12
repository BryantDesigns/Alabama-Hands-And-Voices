import { legacyRedirects } from './src/lib/legacyRedirects.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
    outputFileTracingIncludes: {
        '/': ['./src/content/**/*'],
    },
    redirects() {
        return legacyRedirects
    },
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
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
