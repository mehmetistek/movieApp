/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental:{
    appDir: true,
  },
  images:{
    domains: ["image.tmdb.org"]
  }
  // reactStrictMode: true,
};

export default nextConfig;
