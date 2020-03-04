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
import structuredData from './structured-data';

/**
* Start Server
*/
const app = express(({ strict: true }))

app.use(compression())

app.use('/static', express.static(path.resolve(__dirname, 'public/')))

// Generates and compiles a PDF of my resume
// based on the JSON data in this repo
const getTranslations = locale => {
  let translations;

  if (locale && locale === 'fr_fr') {
    translations = require('../public/assets/copy/fr_fr.json');
  } else if (locale && locale === 'es_es') {
    translations = require('../public/assets/copy/es_es.json');
  } else {
    translations = require('../public/assets/copy/en_us.json');
  }

  return translations;
}

app.get('/robots.txt', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/assets/robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/assets/sitemap.xml'));
});

// resume.pdf?locale=es_es
app.get('/resume.pdf', (req, res) => {
  resumeBuilder(req, res, getTranslations(req.query.locale));
});

app.get('/*', (req, res) => {

  // Redirects trailing slashes
  const noTrailingSlash = !req.url.endsWith('/');
  const notHomepage = !req.url !== '/';
  const notAFile = !req.url.includes('.');
  if (noTrailingSlash &&  notHomepage && notAFile) {
    res.redirect(301, req.url + '/')
  }

  const context = {};

  const component = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App/>
    </Router>
  )

  const helmet = Helmet.renderStatic();

  const html = `
    <html ${helmet.htmlAttributes.toString()}>
    <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159258682-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-159258682-1');
      </script>

      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="author" content="Stephen Young">
      <script src="https://kit.fontawesome.com/4042efa8d7.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" type="text/css" href="/static/index.js.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700|Spartan:400,500,700&display=swap" rel="stylesheet">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${structuredData[req.url] ? structuredData[req.url] : ''}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${component}</div>

      <script src="/static/vendors~index.js.bundle.js"></script>
      <script src="/static/index.js.bundle.js"></script>
    </body>
    </html>
  `

  if (context.url) {
    res.writeHead(301, { Location: context.url })
    res.end()
  } else {
    res.send(html)
  }
})

const { PORT = 3000 } = process.env

app.listen(PORT, () => console.log('######## app running ########'))
