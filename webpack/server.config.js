const nodeExternals = require('webpack-node-externals');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isLocal = process.env.LOCAL;

const cleaner = new CleanWebpackPlugin({
  verbose: true,
  cleanAfterEveryBuildPatterns: ['*.*'],
});

const plugins = [];
if (isLocal) {
  plugins.push(cleaner);
}

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: {
    'index.js': path.resolve(__dirname, '../src/server/start.js')
  },
  module: {},
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]'
  },
  plugins: plugins
}
