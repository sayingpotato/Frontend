/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [{
      source : "/register",
      destination : "/register/auth/self",
      permanent : false,   
    }]
  }
}

module.exports = nextConfig
