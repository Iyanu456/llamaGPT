/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Routes this applies to
                source: "/api/hello",
                // Headers
                headers: [
                    {
                        key: "Access-Control-Allow-Credentials",
                        value: "true",
                    },
                    // Allow for specific domains to have access or * for all
                    {
                        key: "Access-Control-Allow-Origin",
                        value: "http://localhost:3000",
                        // DOES NOT WORK
                        // value: process.env.ALLOWED_ORIGIN,
                    },
                    // Allows for specific methods accepted
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET, POST, PUT, DELETE, OPTIONS",
                    },
                    // Allows for specific headers accepted (These are a few standard ones)
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, Accept, Content-Type, Authorization, Content-Length",
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
