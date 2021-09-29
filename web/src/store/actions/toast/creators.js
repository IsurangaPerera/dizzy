// Types
import * as types from "./types";

// Show
export const showAlert = (
  message = "Ops, something went wrong!",
  severity = "error",
  duration = 6000
) => ({
  type: types.SHOW_ALERT,
  payload: {
    message: message,
    severity: severity,
    duration: duration,
  },
});

// Hide
export const hideAlert = () => ({
  type: types.HIDE_ALERT,
});

// Reset
export const reset = () => ({
  type: types.RESET,
});
