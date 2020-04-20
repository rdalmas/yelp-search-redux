import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BusinessSearch from "./pages/BusinessSearch";

const App = () => (
  <Switch>
    <Route exact path="/" component={BusinessSearch} />
  </Switch>
);

export default App;
