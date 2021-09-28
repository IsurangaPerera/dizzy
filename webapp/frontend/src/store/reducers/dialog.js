// Types
import * as types from "../actions/dialog/types";

// Shared
import { updateObject } from "../../utils";

// State
const initialState = {
  feedback: {
    open: false,
  },
  tag: {
    open: false,
    pageId: null,
  },
  alert: {
    open: false,
    query: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Show
    case types.SHOW_FEEDBACK_DIALOG: {
      return updateObject(state, {
        feedback: updateObject(state.feedback, {
          open: true,
        }),
      });
    }
    case types.SHOW_TAG_DIALOG: {
      return updateObject(state, {
        tag: updateObject(state.tag, {
          open: true,
          pageId: action.payload,
        }),
      });
    }
    case types.SHOW_ALERT_DIALOG: {
      return updateObject(state, {
        alert: updateObject(state.alert, {
          open: true,
          query: action.payload,
        }),
      });
    }
    // Hide
    case types.HIDE_FEEDBACK_DIALOG: {
      return updateObject(state, {
        feedback: updateObject(state.feedback, {
          open: false,
        }),
      });
    }
    case types.HIDE_TAG_DIALOG: {
      return updateObject(state, {
        tag: updateObject(state.tag, {
          open: false,
        }),
      });
    }
    case types.HIDE_ALERT_DIALOG: {
      return updateObject(state, {
        alert: updateObject(state.alert, {
          open: false,
        }),
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
