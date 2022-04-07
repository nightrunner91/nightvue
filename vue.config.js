const webpack = require('webpack')

module.exports = {
  publicPath: '/app/',
  devServer: {
    port: 8326,
  },
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
    ],
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: {
    extract: true
  },
  filenameHashing: false
}
