const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanObsoleteChunks = require("webpack-clean-obsolete-chunks");
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    'main': path.resolve(__dirname, '../src/public/index.js')
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          ecma: 8,
          mangle: false,
          keep_classnames: true,
          keep_fnames: true
        }
      })
    ],
    splitChunks: {
      chunks: 'all', // 'all'
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
          minChunks: 2
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  output: {
   path: path.resolve(__dirname, '../dist/public'),
   filename: '[name].bundle.js',
   chunkFilename: '[name].js',
   publicPath: '/static/',
  },
  plugins: [
    new LoadablePlugin({ filename: 'stats.json' }),
    new CleanObsoleteChunks(),
    new CopyPlugin([
      { from: 'src/public/assets/', to: './assets/' },
      // { from: 'coverage/lcov-report/', to: './coverage/' },
    ]),
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        analyzerPort: '8585',
        openAnalyzer: false,
        analyzerMode: 'static',
        generateStatsFile: true,
      }),
  ],
}
