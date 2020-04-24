import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { hydrate, render } from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from '../configureStore'
import TopBar from './components/TopBar/TopBar';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;
console.log("PRELOADED STATE => ", preloadedState)
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState)

const method = !!module.hot ? render : hydrate


method(
  <Provider store={store}>
    <Router>
      <TopBar title="Yelp Search" />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
