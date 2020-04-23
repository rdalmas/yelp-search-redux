import { createAction } from "redux-actions";

import { actions as a } from "../actions";

export const loadingData = createAction(a.LOADING);
export const fetchError = createAction(a.ERROR, error => error);
