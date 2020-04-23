import { combineReducers } from "redux";

import businessSearch from "./businessSearch";
import pagination from "./pagination";
import appState from "./appState";

export default combineReducers({
  businessSearch,
  pagination,
  appState
});