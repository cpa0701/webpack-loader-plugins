/**
 * Create by Pengan Chen on 2020/11/6
 */
const path = require('path')
const CopyrightWebpackPlugin = require('./plugins/copyright-webpack-plugin')
module.exports = {
  mode: "development",
  entry: {
    main: './src/index.js'
  },
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [{
      test: /\.js/,
      // use:[path.resolve(__dirname,'./loaders/replaceLoader.js')]
      use: [{
        loader: 'replaceLoader.js',
      }, {
        loader: 'replaceAsyncLoader.js',
        options: {
          name: 'lee'
        }
      }]
    }]
  },
  plugins: [
    new CopyrightWebpackPlugin({
      name: 'dell'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  }
}
