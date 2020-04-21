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
      name: "category",
      defaultValue: "pizza"
    },
    {
      defaultValue: "Berlin, Germany",
      type: "text",
      name: "location",
      disabled: false
    },
    {
      name: "limit",
      defaultValue: 10,
      options: [10, 25, 50],
      type: "select" //TODO: implement select component and pagination logic in a separated component
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
