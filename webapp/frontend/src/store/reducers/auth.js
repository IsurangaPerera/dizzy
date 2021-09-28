// Types
import * as types from "../actions/auth/types";

// Shared
import { updateObject } from "../../utils";

// State
const initialState = {
  data: {
    token: null,
    redirectTo: null,
  },
  error: null,
  isBusy: false,
  isInit: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Create
    case types.CREATE_TOKEN_START: {
      return updateObject(state, {
        error: null,
        isBusy: true,
      });
    }
    case types.CREATE_TOKEN_SUCCESS: {
      return updateObject(state, {
        data: updateObject(state.data, {
          token: action.payload,
        }),
        isBusy: false,
      });
    }
    case types.CREATE_TOKEN_FAILURE: {
      return updateObject(state, {
        error: action.payload,
        isBusy: false,
      });
    }
    // Get
    case types.GET_TOKEN_START: {
      return updateObject(state, {
        error: null,
        isBusy: true,
      });
    }
    case types.GET_TOKEN_SUCCESS: {
      return updateObject(state, {
        data: updateObject(state.data, {
          token: action.payload,
        }),
        isBusy: false,
        isInit: true,
      });
    }
    case types.GET_TOKEN_FAILURE: {
      return updateObject(state, {
        error: action.payload,
        isBusy: false,
        isInit: true,
      });
    }
    // Redirect
    case types.SET_REDIRECT: {
      return updateObject(state, {
        data: updateObject(state.data, {
          redirectTo: action.payload,
        }),
      });
    }
    case types.RESET_REDIRECT: {
      return updateObject(state, {
        data: updateObject(state.data, {
          redirectTo: null,
        }),
      });
    }
    // Reset
    case types.RESET: {
      return updateObject(initialState, {
        isInit: true,
      });
    }
    // Default
    default: {
      return state;
    }
  }
};

export default reducer;
