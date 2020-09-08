const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      }),
      // new CompressionPlugin({
      //   test: /\.js(\?.*)?$/i
      // })
    ],
    // optimization: {
    //   nodeEnv: 'production',
    //   minimize: true
    // }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  css: {
    extract: false
  },
  filenameHashing: false
}