import express from "express"
import React from "react"
// import { renderToString } from "react-dom/server"
// import { StaticRouter, matchPath } from "react-router-dom"
import serialize from "serialize-javascript"
// import Helmet from "react-helmet";
// import App from '../src/scenes/App'
// import routes from '../src/scenes/App/routes'
// import manifest from '../build/asset-manifest.json';
var path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, '../build')));

app.get("*", (req, res, next) => {
  // const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}

  // const promise = activeRoute.fetchInitialData
  //   ? activeRoute.fetchInitialData(req.path)
  //   : Promise.resolve()

  // promise.then((response) => {
  //   const context = { data: response.data }
  //   const modules = [];
  //   const markup = renderToString(
  //     <StaticRouter location={req.url} context={context}>
  //       <App />
  //     </StaticRouter>
  //   )
  //   // Let's give ourself a function to load all our page-specific JS assets for code splitting
  //   const extractAssets = (assets, chunks) =>
  //     Object.keys(assets)
  //       .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
  //       .map(k => assets[k]);

  //   // Let's format those assets into pretty <script> tags
  //   const extraChunks = extractAssets(manifest, modules).map(
  //     c => `<script type="text/javascript" src="/${c.replace(/^\//, '')}"></script>`
  //   );

  //   // We need to tell Helmet to compute the right meta tags, title, and such
  //   const helmet = Helmet.renderStatic();

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

  res.send(`<!doctype html>
    <html>
      <head>
        ${helmet.htmlAttributes.toString()}
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="app"></div>
        ${extraChunks.join('')}
        <script>window.__INITIAL_DATA__ = ${serialize(response.data)}</script>
      </body>
    </html>
  `)


})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})

/*
  1) Just get shared App rendering to string on server then taking over on client.
  2) Pass data to <App /> on server. Show diff. Add data to window then pick it up on the client too.
  3) Instead of static data move to dynamic data (github gists)
  4) add in routing.
*/
