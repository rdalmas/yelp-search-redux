import { handleActions } from "redux-actions";

import { actions as a } from "../actions";

const defaultState = {
  loading: false,
  error: ""
};

const appState = handleActions(
  {
    [a.SEARCH_BUSINESS]: state => ({
      ...state,
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

export default appState;