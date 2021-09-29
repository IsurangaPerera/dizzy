// Types
import * as types from "./types";

// Toggle
export const setPaletteType = (type) => ({
  type: types.SET_PALETTE_TYPE,
  payload: type,
});

// Reset
export const reset = () => ({
  type: types.RESET,
});
