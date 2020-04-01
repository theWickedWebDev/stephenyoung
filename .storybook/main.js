const domain = require('domain');
const path = require('path');
const MiniCssExtractPlugin =  require("mini-css-extract-plugin");

module.exports = {
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
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              '@babel/env',
              '@babel/react',
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
