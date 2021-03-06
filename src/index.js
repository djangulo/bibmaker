/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import { jsx } from '@emotion/core';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import * as serviceWorker from './serviceWorker';
import { Loader, Dimmer } from 'semantic-ui-react';

import './index.css';
import App from './App';

import 'semantic-ui-css/semantic.min.css';
import('./i18n').then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <React.Suspense
          fallback={
            <Dimmer active>
              <Loader>Loading...</Loader>
            </Dimmer>
          }
        >
          <App />
        </React.Suspense>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
