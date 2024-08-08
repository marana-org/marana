/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/hello",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
