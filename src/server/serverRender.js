import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';

import configureStore from '../configureStore'
import generatePage from "./generatePage";
import App from '../client/App';
import { searchBusiness } from "../client/redux/actions/businessSearch";

export default async function serverRender(req, res) {
    const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
    const store = configureStore()
    const context = {};
    const params = {
      limit: 10,
      categories: "pizza",
      location: "Berlin, Germany",
      offset: 0
    }
    store.dispatch(searchBusiness(params))
      .then(() => {
        // WARNING: See the following for security issues around embedding JSON in HTML:
        // https://redux.js.org/recipes/server-rendering/#security-considerations
        const preloadedState = store.getState();

        const markup = renderToString(
          <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
          </Provider>
        );
        
        if (context.url) {
          res.redirect(context.url);
        } else {
          res.status(200).send(generatePage(assets, markup, preloadedState));
        }
      })
  };