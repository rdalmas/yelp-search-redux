import { createSelector } from "reselect";

const paginationState = ({ pagination }) => pagination

export const getPaginationData = createSelector(
  paginationState,
  ({ total, limit }) => {
    return {
      total, limit
    }
  }
);