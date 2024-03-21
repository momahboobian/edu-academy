/** @type {import('next').NextConfig} */

const withSass = require("@zeit/next-sass");

module.exports = withSass({
  sassOptions: {
    includePaths: ["app/sass"],
  },
  images: {
    domains: ["utfs.io"],
  },
});
