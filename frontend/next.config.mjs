/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          { source: '/', destination: '/web' },
          { source: '/about', destination: '/web/about' },
        ];
      },



};

export default nextConfig;
