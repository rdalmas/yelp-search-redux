import { createAction } from "redux-actions";
import fetch from "node-fetch";

import { actions as a, endpoints as e } from "../actions";

const loadingData = createAction(a.LOADING);
const fetchError = createAction(a.ERROR, error => error);

const searchBusinessAction = createAction(a.SEARCH_BUSINESS, data => data);

export const searchBusiness = (params) => async dispatch => {
  dispatch(loadingData());
  try {
    const urlParams = new URLSearchParams({...params});
    const resp = await fetch(`${e.SEARCH_BUSINESS}?${urlParams}`);
    const data = await resp.json();
    dispatch(searchBusinessAction(data));
  } catch (err) {
    dispatch(fetchError(err));
  }
};