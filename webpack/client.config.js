const config = require('config');
const log = require('loglevel');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const CleanObsoleteChunks = require("webpack-clean-obsolete-chunks");
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isLocal = process.env.LOCAL;
const PUBLIC_PATH = config.publicPath;

log.info({PUBLIC_PATH});

const plugins = [
  new CleanObsoleteChunks(),
  new CopyPlugin([
    { from: 'src/public/assets/', to: './assets/' },
  ]),
  new LodashModuleReplacementPlugin(),
  new BundleAnalyzerPlugin({
      analyzerPort: '8585',
      openAnalyzer: false,
      analyzerMode: 'static',
      generateStatsFile: true,
    }),
  new LoadablePlugin({ filename: 'stats.json' })
];

if (isLocal) {
  plugins.push(
    new CleanWebpackPlugin({
      verbose: true,
    })
  );
}

module.exports = {
  target: 'web',
  entry: {
    'main': path.resolve(__dirname, '../src/public/index.js')
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context
            .match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    filename: '[name].bundle.js',
    chunkFilename: '[name]-[hash].js',
    publicPath: PUBLIC_PATH,
  },
  plugins: plugins,
}
