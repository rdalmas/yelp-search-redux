import { handleActions } from "redux-actions";

import { actions as a } from "../actions";

const defaultState = {
  business: [],
  total: 0,
  loading: false,
  error: "",
  basicFilters: [
    {
      options: ["pizza", "burguer", "sushi"],
      type: "radio",
      name: "categories",
      defaultValue: "pizza"
    },
    {
      helpText: "Examples: 'New York City', 'NYC', '350 5th Ave, New York, NY 10118",
      defaultValue: "Berlin, Germany",
      type: "text",
      name: "location",
      disabled: true
    },
    {
      name: "limit",
      defaultValue: 10,
    }
  ]
};

const business = handleActions(
  {
    [a.SEARCH_BUSINESS]: (state, action) => {
      return ({
      ...state,
      total: action.payload.total,
      business: action.payload.businesses,
      loading: false
    })},
    [a.LOADING]: state => ({
      ...state,
      loading: true
    }),
    [a.ERROR]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.message
    })
  },
  defaultState
);

export default business;
