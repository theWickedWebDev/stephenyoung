const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    'index': path.resolve(__dirname, '../src/public/index.js')
  },
  optimization: {
    nodeEnv: 'production',
    mangleWasmImports: true,
    usedExports: true,
    namedModules: true,
    runtimeChunk: {
      name: 'runtime',
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
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
    new CopyPlugin([
      { from: 'src/public/assets/', to: './assets/' },
      { from: 'coverage/lcov-report/', to: './coverage/' },
    ]),
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new LodashModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
        analyzerPort: '8585',
        openAnalyzer: false,
        analyzerMode: 'static',
        generateStatsFile: true,
      }),
  ],
}
