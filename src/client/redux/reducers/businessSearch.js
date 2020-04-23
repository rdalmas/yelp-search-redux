import { handleActions } from "redux-actions";

import { actions as a } from "../actions";
import types from "../../components/Search/filterTypes";

// In the future, with the need of implementing new search pages (api currently supports phone, transactions)
// there are 2 choices: 
// 1) Create new reducers for each search page and defining basic filters as of now (current approach)
// 2) Generalize one reducer to be the search reducer, with an action that receives an endpoint and params as a payload
// and define the basic/advanced filters on each search component passing them as usual to the search component
// TLDR: Thoughts about specializing component or reducer

const defaultState = {
  business: [],
  basicFilters: [
    {
      options: ["pizza", "burguer", "sushi"], // this can be easily loaded from the api
      type: types.radio,
      name: "categories",
      defaultValue: "pizza"
    },
    {
      helpText: "Examples: 'New York City', 'NYC', '350 5th Ave, New York, NY 10118",
      defaultValue: "Berlin, Germany",
      type: types.text,
      name: "location",
      disabled: true
    },
    {
      name: "limit",
      defaultValue: 10,
    },
    {
      name: "offset",
      defaultValue: 0
    }
  ]
};

const business = handleActions(
  {
    [a.SEARCH_BUSINESS]: (state, action) => {
      return ({
      ...state,
      business: action.payload.businesses,
      loading: false
    })}
  },
  defaultState
);

export default business;
