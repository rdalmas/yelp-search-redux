import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BusinessSearch from "./pages/BusinessSearch";
import ErrorBoundary from "./ErrorBoundary";

export const App = () => (
  <ErrorBoundary>
    <Switch>
      <Route exact path="/" component={BusinessSearch} />
    </Switch>
  </ErrorBoundary>
);

export default App;
