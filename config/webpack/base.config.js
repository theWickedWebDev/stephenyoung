const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const MiniCssExtractPlugin =  require("mini-css-extract-plugin");

const isDevelopment = process.env.NODE_ENV === 'development'

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['react', 'es2015'],
      plugins: ['transform-class-properties']
    }
  }
}

const cssLoader = {
  loader: 'css-loader',
  options: { importLoaders: 1 },
};

const css = {
  test: /\.css$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoader,
    { loader: 'postcss-loader'},
  ],
};

const scss = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoader,
    { loader: 'postcss-loader' },
    { loader: 'sass-loader' },
  ],
};

const baseConfig = {
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      js,
      css,
      scss,
    ],
  },
  resolve: {
    alias: {
      layouts: path.resolve(__dirname, '../../src/public/layouts/'),
      components: path.resolve(__dirname, '../../src/public/components/'),
      pages: path.resolve(__dirname, '../../src/public/pages/'),
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ]
};

module.exports = baseConfig;
