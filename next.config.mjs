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
    redirects:async()=>{
        return[
            {
                source:"/admin",
                destination:"https://shark-app-4dsd9.ondigitalocean.app/admin",
                permanent:true
            }
        ]
    }
};

export default nextConfig;
