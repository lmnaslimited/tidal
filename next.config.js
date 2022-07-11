/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = {  
    reactStrictMode: true,
    images: {
      domains: ["localhost", "res.cloudinary.com", "lmnas.com"],
    },
  };
} else if (process.env.NODE_ENV === "production") {
  module.exports = {
    reactStrictMode: true,
    images: {
      loader: 'cloudinary',
      path: 'https://res.cloudinary.com/lmnas/image/fetch/',
      domains: ["res.cloudinary.com"],
    },
    //assetPrefix: '/lmnas-cms-blog/'
  };
}