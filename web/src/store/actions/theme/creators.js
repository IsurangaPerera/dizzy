// Types
import * as types from './types';

// Set
export const setPaletteType = (type) => ({
  type: types.SET_PALETTE_TYPE,
  payload: type,
});

export const setThemeModeStart = () => ({
  type: types.SET_THEME_MODE_START,
});

export const setThemeModeSuccess = () => ({
  type: types.SET_THEME_MODE_SUCCESS,
});

export const setThemeModeFailure = (error) => ({
  type: types.SET_THEME_MODE_FAILURE,
  payload: error,
});

// Get
export const getThemeModeStart = () => ({
  type: types.GET_THEME_MODE_START,
});

export const getThemeModeSuccess = () => ({
  type: types.GET_THEME_MODE_SUCCESS,
});

export const getThemeModeFailure = (error) => ({
  type: types.GET_THEME_MODE_FAILURE,
  payload: error,
});

// Reset
export const reset = () => ({
  type: types.RESET,
});
