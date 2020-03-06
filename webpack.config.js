const webpackMerge = require('webpack-merge');
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

const common = require('./webpack/base.config');
const serverConfig = require(`./webpack/server.config`);
const clientConfig = require(`./webpack/client.config`);

//const env = envs[process.env.NODE_ENV || 'development'];

const server = webpackMerge(common, serverConfig);
const client = webpackMerge(common, clientConfig);


module.exports = [server, client]
