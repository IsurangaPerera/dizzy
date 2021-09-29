// Types
import * as types from "../actions/toast/types";

// Shared
import { updateObject } from "../../utils";

// State
const initialState = {
  duration: null,
  severity: null,
  message: null,
  open: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Show
    case types.SHOW_ALERT: {
      return { ...action.payload, open: true };
    }
    // Hide
    case types.HIDE_ALERT: {
      return updateObject(state, {
        open: false,
      });
    }
    // Reset
    case types.RESET: {
      return initialState;
    }
    // Default
    default: {
      return state;
    }
  }
};

export default reducer;
