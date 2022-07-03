/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains :["rb.gy"],
  },
  experimental:{
    images:{
      allowFutureImage :true
    }
  }
}


module.exports = nextConfig
