const config = require('config');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const MiniCssExtractPlugin =  require("mini-css-extract-plugin");
const ReplacePlugin = require('webpack-plugin-replace');

const isDevelopment = process.env.NODE_ENV !== 'production';

const js = {
  test: /\.js$/,
  exclude: [
    /node_modules/
  ],
  use: {
    loader: 'babel-loader',
    options: {
      "presets": [
        [
          '@babel/env',
          {
            targets: {
              esmodules: false
            },
            modules: false,
          }
        ],
        '@babel/react',
        "@babel/preset-flow"
      ],
      "plugins": [
        "transform-es2015-modules-commonjs",
        "@babel/plugin-proposal-class-properties",
        "@loadable/babel-plugin"
      ],
    }
  }
}

const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
  },
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

const svg = {
  test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  use: [
    { loader: 'file-loader' },
  ],
};

const rules = [
  css,
  scss,
  svg,
  js,
];

const baseConfig = {
  mode: 'production',
  module: {
    rules: rules,
  },
  resolve: {
    alias: {
      layouts: path.resolve(__dirname, '../src/public/layouts/'),
      components: path.resolve(__dirname, '../src/public/local-components/'),
      pages: path.resolve(__dirname, '../src/public/pages/'),
      'variables.scss': path.resolve(__dirname, '../src/public/variables.scss'),
    }
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
        WEBSITE_URL: JSON.stringify('https://www.thewickedweb.dev'),
        S3_URL: JSON.stringify('https://cdn.thewickedweb.dev'),
        BREAKPOINTS: JSON.stringify({
          mobile: 500,
          tablet: 800,
          desktop: 1100,
        }),
      }
    }),
    new MiniCssExtractPlugin(),
  ]
};

module.exports = {
  baseConfig,
  rules,
}
