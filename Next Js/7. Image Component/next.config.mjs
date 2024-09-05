/** @type {import('next').NextConfig} */
const nextConfig = {
    // It'll allow to load image from simplilearn.com
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.simplilearn.com',
                port: '',
            },
        ],
    },
};

export default nextConfig;
