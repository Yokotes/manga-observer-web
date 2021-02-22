import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { rootReducers } from './store';
import { createStore } from 'redux';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const clientStore = createStore(rootReducers, preloadedState);

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={clientStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root'),
);
