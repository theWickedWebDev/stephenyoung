import compression from 'compression'
import express from 'express'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import App from '../public/App'

const app = express()

app.use(compression())

app.use('/static', express.static(path.resolve(__dirname, 'public/')))

app.get('/*', (req, res) => {
  const context = {}

  const component = ReactDOMServer.renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>
  )

  const html = `
  <!doctype html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <script src="https://kit.fontawesome.com/4042efa8d7.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" type="text/css" href="/static/index.js.css">
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700|Spartan:400,500,700&display=swap" rel="stylesheet">
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

      <link rel="apple-touch-icon" sizes="57x57" href="/static/assets/favicon/apple-icon-57x57.png">
      <link rel="apple-touch-icon" sizes="60x60" href="/static/assets/favicon/apple-icon-60x60.png">
      <link rel="apple-touch-icon" sizes="72x72" href="/static/assets/favicon/apple-icon-72x72.png">
      <link rel="apple-touch-icon" sizes="76x76" href="/static/assets/favicon/apple-icon-76x76.png">
      <link rel="apple-touch-icon" sizes="114x114" href="/static/assets/favicon/apple-icon-114x114.png">
      <link rel="apple-touch-icon" sizes="120x120" href="/static/assets/favicon/apple-icon-120x120.png">
      <link rel="apple-touch-icon" sizes="144x144" href="/static/assets/favicon/apple-icon-144x144.png">
      <link rel="apple-touch-icon" sizes="152x152" href="/static/assets/favicon/apple-icon-152x152.png">
      <link rel="apple-touch-icon" sizes="180x180" href="/static/assets/favicon/apple-icon-180x180.png">
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/assets/favicon/android-icon-192x192.png">
      <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon/favicon-32x32.png">
      <link rel="icon" type="image/png" sizes="96x96" href="/static/assets/favicon/favicon-96x96.png">
      <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/favicon/favicon-16x16.png">
      <link rel="manifest" href="/static/assets/favicon/manifest.json">
      <meta name="msapplication-TileColor" content="#ffffff">
      <meta name="msapplication-TileImage" content="/static/assets/favicon/ms-icon-144x144.png">
      <meta name="theme-color" content="#ffffff">

      <meta property="og:title" content="Senior Software Developer - Stephen Young">
      <meta property="og:site_name" content="The Wicked Web Dev">
      <meta property="og:url" content="https://www.thewickedweb.dev">
      <meta property="og:description" content="">
      <meta property="og:type" content="website">
      <meta property="og:image" content="http://ec2-3-80-206-59.compute-1.amazonaws.com/static/assets/old-time-image.jpg">
      <meta property="og:type" content="video">
        <meta property="og:video:url" content="https://www.youtube.com/embed/r_oxHVlr9aI">
        <meta property="og:video:secure_url" content="https://www.youtube.com/embed/r_oxHVlr9aI">
        <meta property="og:video:type" content="text/html">
        <meta property='og:video' content='https://www.youtube.com/v/r_oxHVlr9aI?version=3&amp;autohide=1' />
        <meta property='og:video:secure_url' content='https://www.youtube.com/v/r_oxHVlr9aI?version=3&amp;autohide=1' />
        <meta property="og:video:type" content="application/x-shockwave-flash">

      <meta property="al:ios:app_name" content="YouTube">
      <meta property="al:ios:url" content="vnd.youtube://www.youtube.com/watch?v=r_oxHVlr9aI&amp;feature=applinks">
      <meta property="al:android:url" content="vnd.youtube://www.youtube.com/watch?v=r_oxHVlr9aI&amp;feature=applinks">
      <meta property="al:android:app_name" content="YouTube">
      <meta property="al:android:package" content="com.google.android.youtube">
      <meta property="al:web:url" content="https://www.youtube.com/watch?v=r_oxHVlr9aI&amp;feature=applinks">

    </head>
    <body>
      <div id="root">${component}</div>
      <script src="/static/vendors~index.js.bundle.js"></script>
      <script src="/static/index.js.bundle.js"></script>
      <script>
        AOS.init();
      </script>
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
