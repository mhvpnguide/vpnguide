/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
            {
                protocol: "http",
                hostname: "*",
            }
        ]
    },
    redirects: async () => {
        return [
            {
                source: "/admin",
                destination: "https://shark-app-4dsd9.ondigitalocean.app/admin",
                permanent: true
            }
        ];
    },
    webpack(config) {
        // Prevent minification or optimization of the OptinMonster script
        config.optimization = {
            ...config.optimization,
            minimize: true,
            minimizer: [
                new (require('terser-webpack-plugin'))({
                    exclude: /a\.omappapi\.com/, // Exclude the OptinMonster script
                }),
            ],
        };
        return config;
    }
};

export default nextConfig;
