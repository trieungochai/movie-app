
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

// module.exports = withCss(withSass());

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}