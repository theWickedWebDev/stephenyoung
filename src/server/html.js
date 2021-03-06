import config from 'config';

let GA = '';
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

const html = ({ url, helmet, component, scriptTags, linkTags, styleTags }) => {
  return `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()} lang="en" xml:lang="en">
    <head>
      ${GA}
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${styleTags}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="root">${component}</div>
      ${linkTags}
      ${scriptTags}
    </body>
    </html>
  `;
};

export default html;
