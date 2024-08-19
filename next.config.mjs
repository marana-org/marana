/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
    serverActions: {
      allowedOrigins: [
        "didactic-zebra-4647v6pqjrp35jv-3000.app.github.dev",
        "localhost:3000",
      ],
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hello",
        permanent: true,
      },
      {
        source: "/beta",
        destination: "/beta/auth/in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
