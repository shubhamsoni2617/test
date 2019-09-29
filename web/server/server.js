import express from 'express';
import request from 'request';
import React from 'react';
// import { renderToString } from "react-dom/server"
// import { StaticRouter, matchPath } from "react-router-dom"
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
// import App from '../src/scenes/App'
// import routes from '../src/scenes/App/routes'
import manifest from '../build/asset-manifest.json';
var bodyParser = require('body-parser');
var path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sistic/docroot/**', function(req, res) {
  var newurl = `${req.hostname}:8081${req.originalUrl}`;
  request
    .post({
      url: newurl,
      body: JSON.stringify(req.body),
      headers: req.headers
    })
    .pipe(res);
});

app.get('/sistic/docroot/**', function(req, res) {
  var newurl = `${req.hostname}:8081${req.originalUrl}`;
  request(newurl).pipe(res);
});

app.get('*', (req, res, next) => {
  res.status(200).sendFile(path.resolve(__dirname, '../build', 'index.html'));
  // const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  // const promise = activeRoute.fetchInitialData
  //   ? activeRoute.fetchInitialData(req.path)
  //   : Promise.resolve()

  // const modules = [];
  // promise.then((response) => {
  //   const context = { data: response.data }
  //   const markup = renderToString(
  //     <StaticRouter location={req.url} context={context}>
  //       <App />
  //     </StaticRouter>
  //   )
  // Let's give ourself a function to load all our page-specific JS assets for code splitting
  // const extractAssets = (assets, chunks) =>
  //   Object.keys(assets)
  //     .filter(asset => asset.indexOf('.js') > -1 && asset.indexOf('.js.map') === -1 && asset !== 'service-worker.js')
  //     .map(k => assets[k]);

  // Let's format those assets into pretty <script> tags
  // const extraChunks = extractAssets(manifest.files, modules).map(
  //   c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
  // );

  //   // We need to tell Helmet to compute the right meta tags, title, and such
  // const helmet = Helmet.renderStatic();

  //   res.send(`<!doctype html>
  //   <html>
  //     <head>
  //       ${helmet.htmlAttributes.toString()}
  //       ${helmet.title.toString()}
  //       ${helmet.meta.toString()}
  //     </head>
  //     <body>
  //       <div id="app">${markup}</div>
  //       ${extraChunks.join('')}
  //       <script>window.__INITIAL_DATA__ = ${serialize(response.data)}</script>
  //     </body>
  //   </html>
  // `)
  // }).catch(next)

  // res.send(`<!doctype html>
  //   <html>
  //     <head>
  //       ${helmet.htmlAttributes.toString()}
  //       ${helmet.title.toString()}
  //       ${helmet.meta.toString()}
  //     </head>
  //     <body>
  //       <div id="app"></div>
  //       ${extraChunks.join('')}
  //     </body>
  //   </html>
  // `)
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
