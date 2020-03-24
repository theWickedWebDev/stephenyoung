import config from 'config';

import structuredData from './structured-data';

let GA = "";
if (config.get('env') === 'production') {
  GA = `
    <script async
      src="https://www.googletagmanager.com/gtag/js?id=UA-159258682-1">
    </script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-159258682-1');
    </script>
  `;
}

const GOOGLE_FONTS = `
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700|Spartan:400,500,700&display=swap"
    rel="stylesheet"
  >
`;

const html = ({ helmet, component, req }) => {

  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()} lang="en" xml:lang="en">
    <head>
      ${GA}
      ${GOOGLE_FONTS}
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${structuredData[req.url] ? structuredData[req.url] : ''}
      <link href="/static/index.css" rel="stylesheet"/>
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${component}</div>
      <script src="/static/index.js"></script>
      <script src="/static/runtime.bundle.js"></script>
    </body>
    </html>
  `
};

export default html;
