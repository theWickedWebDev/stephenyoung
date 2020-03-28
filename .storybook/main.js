const domain = require('domain');
const path = require('path');
const MiniCssExtractPlugin =  require("mini-css-extract-plugin");
const results = require('./test-results.json');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-jest/register',
  ],
  webpackFinal: async config => {
    const rules = [
      {
        test: /components\/+[.]js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [ '@babel/env' ],
              [ '@babel/react' ],
            ],
            "plugins": [
              "transform-es2015-modules-commonjs",
              "@babel/plugin-proposal-class-properties",
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          { loader: 'sass-loader' },
        ],
      }
    ];

    const alias = {
      layouts: path.resolve(__dirname, '../src/public/layouts/'),
      components: path.resolve(__dirname, '../src/public/components/src/'),
      pages: path.resolve(__dirname, '../src/public/pages/'),
    };

    const plugins = [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ];

    config.resolve.alias = { ...config.resolve.alias, ...alias };
    config.module.rules = config.module.rules.concat(rules);
    config.plugins = config.plugins.concat(plugins);

    return config;
  },
};
