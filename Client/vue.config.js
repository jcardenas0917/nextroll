const webpack = require("webpack");

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001/',
        ws: true,
        changeOrigin: true
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      })
    ]
  }
};
