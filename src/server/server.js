import App from '../client/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import configureStore from '../configureStore'
import generatePage from "./generatePage";

const store = configureStore()

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    
    //TODO: implement routes
    //TODO: implement preload state dispatching search action with default parameters

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(generatePage(assets, markup));
    }
  });

export default server;
