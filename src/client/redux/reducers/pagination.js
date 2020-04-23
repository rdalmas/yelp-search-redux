import { handleActions } from "redux-actions";

import { actions as a } from "../actions";

const defaultState = {
  limitOptions: [10, 25, 50],
  total: 0,
  limit: 10
};

const pagination = handleActions(
  {
    [a.SEARCH_BUSINESS]: (state, action) => {
      return ({
      ...state,
      total: action.payload.total
    })}
  },
  defaultState
);

export default pagination;
