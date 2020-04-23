import { createSelector } from "reselect";

const state = ({ appState }) => appState

export const isLoading = createSelector(
  state,
  ({ loading }) => loading
);