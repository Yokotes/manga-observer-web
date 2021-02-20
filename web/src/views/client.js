import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { rootReducers } from './store';
import { createStore } from 'redux';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const clientStore = createStore(rootReducers, preloadedState);

ReactDOM.hydrate(
  <StaticRouter location={window.location.pathname}>
    <Provider store={clientStore}>
      <App />
    </Provider>
  </StaticRouter>,
  document.querySelector('#root'),
);
