import structuredData from './structured-data';

const GA = `
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

const GOOGLE_FONTS = `
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,500,700|Spartan:400,500,700&display=swap"
    rel="stylesheet"
  >
`;

const INTERNAL_CSS = `
  <link rel="stylesheet" type="text/css" href="/static/index.js.css">
`;

const INTERNAL_SCRIPTS = `
  <script src="/static/vendors~index.js.bundle.js"></script>
  <script src="/static/index.js.bundle.js"></script>
`;

const html = ({ helmet, component, req }) => `
  <html ${helmet.htmlAttributes.toString()}>
  <head>
    ${GA}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${GOOGLE_FONTS}
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${structuredData[req.url] ? structuredData[req.url] : ''}
    ${INTERNAL_CSS}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${component}</div>
    ${INTERNAL_SCRIPTS}
  </body>
  </html>
`;

export default html;
