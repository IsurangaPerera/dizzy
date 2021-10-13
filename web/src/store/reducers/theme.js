// Types
import * as types from '../actions/theme/types';

// Shared
import { updateObject } from '../../utils';

// Defaults
const palettes = {
  light: {
    type: 'light',
    primary: {
      light: '#4791db',
      main: '#1976d2',
      dark: '#115293',
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
    },
  },
  dark: {
    type: 'dark',
    primary: {
      light: '#a6d4fa',
      main: '#90caf9',
      dark: '#648dae',
    },
    secondary: {
      light: '#f6a5c0',
      main: '#f48fb1',
      dark: '#aa647b',
    },
  },
};

// State
const initialState = {
  palette: {
    ...palettes.light,
  },
  error: null,
  isBusy: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Set
    case types.SET_PALETTE_TYPE: {
      return updateObject(state, {
        palette: palettes[action.payload],
      });
    }
    case types.SET_THEME_MODE_START: {
      return updateObject(state, {
        isBusy: true,
      });
    }
    case types.SET_THEME_MODE_SUCCESS: {
      return updateObject(state, {
        isBusy: false,
      });
    }
    case types.SET_THEME_MODE_FAILURE: {
      return updateObject(state, {
        isBusy: false,
        error: action.payload,
      });
    }
    // Get
    case types.GET_THEME_MODE_START: {
      return updateObject(state, {
        isBusy: true,
      });
    }
    case types.GET_THEME_MODE_SUCCESS: {
      return updateObject(state, {
        isBusy: false,
      });
    }
    case types.GET_THEME_MODE_FAILURE: {
      return updateObject(state, {
        isBusy: false,
        error: action.payload,
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
