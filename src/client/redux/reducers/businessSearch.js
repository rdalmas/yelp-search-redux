import { handleActions } from "redux-actions";

import { actions as a } from "../actions";

const defaultState = {
  business: [],
  loading: false,
  error: "",
  basicFilters: [
    // For now, the list of categories is static, 
    // but in the future it could be loaded from the category endpoints
    // https://www.yelp.com/developers/documentation/v3/category
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
      name: "limit", // TODO: implement pagination logic in a separated component
      defaultValue: 10,
      options: [10, 25, 50],
      type: "select" // TODO: implement select component
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
