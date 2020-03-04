const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const MiniCssExtractPlugin =  require("mini-css-extract-plugin");
const ReplacePlugin = require('webpack-plugin-replace');

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
    new ReplacePlugin({
      exclude: [
        /node_modules/,
        filepath => filepath.includes('ignore')
      ],
      patterns: [{
        regex: /throw\s+(new\s+)?(Type|Reference)?Error\s*\(/g,
        value: 'return;('
      }],
      values: {
        S3_URL: JSON.stringify('https://cdn.thewickedweb.dev'),
        //S3_URL: JSON.stringify('http://s3.thewickedweb.dev.s3.amazonaws.com'),
        S3_IMAGES_PATH: JSON.stringify('/images'),
        S3_IMAGES_GALLERY_PATH: JSON.stringify('/gallery'),
        S3_RESUME_PATH: JSON.stringify('/resume'),
        S3_FLAGS_PATH: JSON.stringify('/flags'),
        S3_AVATAR_PATH: JSON.stringify('/avatar'),
        S3_LOGOS_PATH: JSON.stringify('/logo'),
        BREAKPOINTS: JSON.stringify({
          mobile: 500,
          tablet: 800,
          desktop: 1100,
        }),
        // S3_URL: JSON.stringify('https://s3.thewickedweb.dev'),
      }
    })
  ]
};

module.exports = baseConfig;
