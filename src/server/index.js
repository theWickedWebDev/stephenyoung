const config = require('config');
const compression = require('compression');
const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Router = require('react-router-dom').StaticRouter;
const App = require('../public/App').default;
const Helmet = require('react-helmet').Helmet;
const fs = require('fs');
const resumeBuilder = require('./resume-builder');
const html = require('./html').default;

const ChunkExtractor = require('@loadable/server').ChunkExtractor;

const REDIRECT_CODE = 301;

let getStats = () => {
    return JSON.parse(
        fs.readFileSync('./dist/public/stats.json', 'utf8')
    );
};

/**
* Start Server
*/
const app = express({ strict: true });

app.use(compression());

app.use('/static', express.static(path.resolve(__dirname, 'public/'), { maxAge: '7d' }));
app.use('/coverage', express.static(path.resolve(__dirname, '../coverage/lcov-report/'), { maxAge: '7d' }));
app.use('/storybook', express.static(path.resolve(__dirname, '../storybook-static/'), { maxAge: '7d' }));

app.get('/robots.txt', (req, res) => {
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
  const url = req.url;

  // Redirects trailing slashes
  const noTrailingSlash = !url.endsWith('/');
  const notHomepage = !url !== '/';
  const notAFile = !url.includes('.');
  if (noTrailingSlash && notHomepage && notAFile) {
    res.redirect(REDIRECT_CODE, `${url }/`);
    res.end();
  }

  const context = {};
  let modules = [];

  const extractor = new ChunkExtractor({ stats: getStats() });

  // Wrap your application using "collectChunks"
  const jsx = extractor.collectChunks(
    <Router location={url} context={context}>
      <App/>
    </Router>
  );

  // Render your application
  const component = ReactDOMServer.renderToString(jsx);

  const helmet = Helmet.renderStatic();

  // You can now collect your script tags
  const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
  // You can also collect your "preload/prefetch" links
  const linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();
  // And you can even collect your style tags (if you use "mini-css-extract-plugin")
  const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();

  const renderedHtml = html({
    url: url,
    helmet: helmet,
    component: component,
    scriptTags: scriptTags,
    linkTags: linkTags,
    styleTags: styleTags
  });

  let minify = require('html-minifier').minify;
  let minifiedHtml = minify(renderedHtml, {
    removeAttributeQuotes: true
  });

  if (context.url) {
    res.writeHead(REDIRECT_CODE, { Location: context.url });
    res.end();
  } else {
    res.send(minifiedHtml);
  }
});

module.exports = {
    app: app,
};
