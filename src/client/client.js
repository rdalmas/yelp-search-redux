import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';

hydrate(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
