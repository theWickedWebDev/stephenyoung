const domain = require('domain');
const path = require('path');
const MiniCssExtractPlugin =  require("mini-css-extract-plugin");
const results = require('./test-results.json');

module.exports = {
  stories: ['../@thewickedwebdev/components/index.stories.js'],
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
        test: /@thewickedwebdev\/components\/+[.]js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              '@babel/env',
              '@babel/react',
              "@babel/preset-flow"
            ],
            "plugins": [
              "transform-es2015-modules-commonjs",
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-export-default-from"
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

    const plugins = [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
      }),
    ];

    config.module.rules = config.module.rules.concat(rules);
    config.plugins = config.plugins.concat(plugins);

    return config;
  },
};
