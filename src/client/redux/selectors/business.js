import { createSelector } from "reselect";

const businessState = state => state.business;

export const getBusiness = createSelector(
  businessState,
  data => data.business 
);