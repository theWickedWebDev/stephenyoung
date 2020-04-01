const webpackMerge = require('webpack-merge');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const { baseConfig } = require('./webpack/base.config');
const serverConfig = require('./webpack/server.config');
const clientConfig = require('./webpack/client.config');

if (process.env.NODE_ENV === 'production') {
  console.log('PRODUCTION - BANG');
}
const server = webpackMerge(baseConfig, serverConfig);
const client = webpackMerge(baseConfig, clientConfig(process.env.NODE_ENV));

module.exports = [server, client]
