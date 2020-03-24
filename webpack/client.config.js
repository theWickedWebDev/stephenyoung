const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    'index': path.resolve(__dirname, '../src/public/index.js')
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '-',
      chunks: 'all'
    }
  },
  output: {
   path: path.resolve(__dirname, '../dist/public'),
   filename: '[name].bundle.js',
   chunkFilename: '[name].bundle.js',
   publicPath: '/static/',
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/public/assets/', to: './assets/' },
      { from: 'coverage/lcov-report/', to: './coverage/' },
    ]),
  ],
}
