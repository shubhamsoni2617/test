import express from 'express';
import request from 'request';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
import App from '../src/scenes/App';
import routes from '../src/scenes/App/routes';
import manifest from '../build/asset-manifest.json';
import AdvertisementService from '../src/shared/services/AdvertisementService';
import Constants from '../src/shared/constants';
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, '../build/static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/sistic/docroot/**', function(req, res) {
  var newurl = `http://192.168.10.195:8081${req.originalUrl}`;
  if (req.body && Object.keys(req.body).length !== 0) {
    request
      .post({
        url: newurl,
        body: JSON.stringify(req.body),
        headers: req.headers
      })
      .on('error', function(err) {
        console.error(err);
      })
      .pipe(res);
  } else {
    req.pipe(request.post(newurl)).pipe(res);
  }
});

app.get('/sistic/docroot/**', function(req, res) {
  var newurl = `http://192.168.10.195:8081${req.originalUrl}`;
  request
    .get(newurl)
    .on('error', function(err) {
      console.error(err);
    })
    .pipe(res);
});

app.get('*', (req, res, next) => {
  var filePath = path.join(__dirname, '../build', 'index.html');
  fs.readFile(filePath, { encoding: 'utf-8' }, function(err, data) {
    const params = {
      client: Constants.CLIENT,
      page: 1
    };
    if (!err) {
      Promise.all(App.getInitialData())
        .then(result => {
          if (result && result[0].data) {
            var dataObject = {
              leaderBoardData: result[0].data,
              venuesData: result[1].data,
              genreData: result[2].data,
              findAnEventAddsData: result[3].data
            };
            const markup = renderToString(
              <StaticRouter location={req.url} context={{ data: result }}>
                <App response={dataObject} />
              </StaticRouter>
            );

            var html = data
              .replace(
                '<div id="root"></div>',
                '<div id="root">' + markup + '</div>'
              )
              .replace(
                '<script id="server-app-state" type="application/json">{}</script>',
                '<script>window.__INITIAL_DATA__ = ' +
                  serialize(dataObject) +
                  '</script>'
              );
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(html);
            res.end();
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log(err);
    }
  });
  // res.status(200).sendFile(path.resolve(__dirname, '../build', 'index.html'));
  // const activeRoute = routes.find(route => matchPath(req.url, route)) || {};

  // const promise = activeRoute.fetchInitialData
  //   ? activeRoute.fetchInitialData(req.path)
  //   : Promise.resolve();

  // const modules = [];
  // promise
  //   .then(response => {
  //     // const context = { data: response.data };
  //     const context = {};
  //     const markup = renderToString(
  //       <StaticRouter location={req.url} context={context}>
  //         <App />
  //       </StaticRouter>
  //     );

  //     //Extracting CSS assets
  //     const extractCssAssets = (assets, chunks) =>
  //       Object.keys(assets)
  //         .filter(
  //           asset =>
  //             asset.indexOf('.css') > -1 &&
  //             asset.indexOf('.css.map') === -1 &&
  //             asset !== 'service-worker.js'
  //         )
  //         .map(k => assets[k]);

  //     // Let's format those assets into pretty <script> tags
  //     const extraCssChunks = extractCssAssets(manifest.files, modules).map(
  //       c => `<link href="/${c.replace(/^\//, '')}" rel="stylesheet">`
  //     );
  //     // Let's give ourself a function to load all our page-specific JS assets for code splitting
  //     const extractAssets = (assets, chunks) =>
  //       Object.keys(assets)
  //         .filter(
  //           asset =>
  //             asset.indexOf('.js') > -1 &&
  //             asset.indexOf('.js.map') === -1 &&
  //             asset !== 'service-worker.js'
  //         )
  //         .map(k => assets[k]);

  //     // Let's format those assets into pretty <script> tags
  //     const extraChunks = extractAssets(manifest.files, modules).map(
  //       c =>
  //         `<script type="text/javascript" src="/${c.replace(
  //           /^\//,
  //           ''
  //         )}"></script>`
  //     );

  //     // We need to tell Helmet to compute the right meta tags, title, and such
  //     const helmet = Helmet.renderStatic();

  //     res.send(`<!doctype html>
  //   <html>
  //     <head>
  //       ${helmet.htmlAttributes.toString()}
  //       ${helmet.title.toString()}
  //       ${helmet.meta.toString()}
  //       ${extraCssChunks.join('')}
  //     </head>
  //     <body>
  //     <div id="app">${markup}</div>
  //       ${extraChunks.join('')}

  //     </body>
  //   </html>
  // `);
  //   })
  //   .catch(next);

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
