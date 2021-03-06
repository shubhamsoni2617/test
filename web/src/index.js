import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './scenes/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'core-js/es/map';
import 'core-js/es/set';
// import * as serviceWorker from './serviceWorker';
import './assets/scss/main.scss';

const history = createBrowserHistory();

ReactDOM.hydrate(
  <HelmetProvider>
    <Router history={history}>
      <App
        history={history}
        response={window.__INITIAL_DATA__ && window.__INITIAL_DATA__.response}
      />
    </Router>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
