import { handleActions } from "redux-actions";

import { actions as a } from "../actions";

const defaultState = {
  business: [],
  loading: false,
  error: ""
};

const business = handleActions(
  {
    [a.SEARCH_BUSINESS]: (state, action) => ({
      ...state,
      business: action.payload.data,
      loading: false
    }),
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
