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
      ]
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production' ? true : false,
    },
    webpack(config) {
      // Exclude OptinMonster's script from automatic optimization
      config.optimization.splitChunks = {
        cacheGroups: {
          optinMonsterGroup: {
            test: /a\.omappapi\.com/,
            name: 'optinMonster',
            chunks: 'all',
            enforce: true,
          },
        },
      };
  
      return config;
    },
  };
  
  export default nextConfig;
  