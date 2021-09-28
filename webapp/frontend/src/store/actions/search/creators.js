// Types
import * as types from "./types";

export const getResultsStart = (query) => ({
  type: types.GET_RESULTS_START,
  payload: query,
});

export const getResultsSuccess = (data) => ({
  type: types.GET_RESULTS_SUCCESS,
  payload: data,
});

export const getResultsFailure = (error) => ({
  type: types.GET_RESULTS_FAILURE,
  payload: error,
});

export const reset = () => ({
  type: types.RESET,
});
