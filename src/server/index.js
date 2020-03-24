import config from 'config';
import compression from 'compression'
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import App from '../public/App'
import Helmet from 'react-helmet';
import fs from 'fs';
import resumeBuilder from './resume-builder';
import html from './html';

/**
* Start Server
*/
const app = express(({ strict: true }))

app.use(compression())

app.use('/static', express.static(path.resolve(__dirname, 'public/'), { maxAge: '7d' }))
app.use('/coverage', express.static(path.resolve(__dirname, 'public/coverage/'), { maxAge: '7d' }))

app.get('/robots.txt', (req, res) => {
  console.log(config);
  if (config.get('env') === 'staging') {
    res.sendFile(path.resolve(__dirname, 'public/assets/robots-staging.txt'));
  } else {
    res.sendFile(path.resolve(__dirname, 'public/assets/robots.txt'));
  }
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/assets/sitemap.xml'));
});

app.get('/*', (req, res) => {
  // Redirects trailing slashes
  const noTrailingSlash = !req.url.endsWith('/');
  const notHomepage = !req.url !== '/';
  const notAFile = !req.url.includes('.');
  if (noTrailingSlash &&  notHomepage && notAFile) {
    res.redirect(301, req.url + '/');
    res.end();
  }

  const context = {};
  let modules = [];

  const component = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App/>
    </Router>
  );

  const helmet = Helmet.renderStatic();

  const renderedHtml = html({ helmet, component, req, bundles: [] });

  var minify = require('html-minifier').minify;
  var minifiedHtml = minify(renderedHtml, {
    removeAttributeQuotes: true
  });

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  } else {
    res.send(minifiedHtml)
  }
})

module.exports = {
  app,
}
