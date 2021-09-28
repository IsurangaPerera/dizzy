// Types
import * as types from "./types";

// Create
export const createTokenStart = () => ({
  type: types.CREATE_TOKEN_START,
});

export const createTokenSuccess = (token) => ({
  type: types.CREATE_TOKEN_SUCCESS,
  payload: token,
});

export const createTokenFailure = (error) => ({
  type: types.CREATE_TOKEN_FAILURE,
  payload: error,
});

// Get
export const getTokenStart = () => ({
  type: types.GET_TOKEN_START,
});

export const getTokenSuccess = (token) => ({
  type: types.GET_TOKEN_SUCCESS,
  payload: token,
});

export const getTokenFailure = (error) => ({
  type: types.GET_TOKEN_FAILURE,
  payload: error,
});

export const setRedirect = (location) => ({
  type: types.SET_REDIRECT,
  payload: location,
});

export const resetRedirect = () => ({
  type: types.RESET_REDIRECT,
});

export const reset = () => ({
  type: types.RESET,
});
