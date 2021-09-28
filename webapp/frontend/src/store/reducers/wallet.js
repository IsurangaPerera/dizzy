// Types
import * as types from "../actions/wallet/types";

// Shared
import { updateObject } from "../../utils";

// State
const initialState = {
  id: "",
  data: {
    id: "",
    summary: [],
    links: [],
    moneyFlow: {},
    isBusy: true,
    error: null
  },
  transactions: {
    result: [],
    noResults: true,
    isPaged: false,
    pagination: {},
    isBusy: true,
    error: null
  },
  source: "flow"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      // Get
    case types.GET_WALLET_INFO_START: {
      return updateObject(state, {
        data: updateObject(state.data, {
          isBusy: true
        }),
        id: action.payload.id
      });
    }
    case types.GET_WALLET_TX_START: {
      return updateObject(state, {
        transactions: updateObject(state.transactions, {
          isBusy: true,
        }),
        source: action.payload.source
      });
    }
    case types.GET_WALLET_TX_SUCCESS: {
      return updateObject(state, {
        transactions: updateObject(state.transactions, {
          links: action.payload.data.links,
          summary: action.payload.data.summary,
          moneyFlow: action.payload.data.moneyFlow,
          isBusy: false,
        })
      });
    }
    case types.GET_WALLET_INFO_SUCCESS: {
      return updateObject(state, {
        data: updateObject(state.data, {
          links: action.payload.data.links,
          summary: action.payload.data.summary,
          moneyFlow: action.payload.data.moneyFlow,
          isBusy: false,
        })
      });
    }
    case types.GET_WALLET_INFO_FAILURE: {
      return updateObject(state, {
        data: updateObject(state.data, {
          error: action.payload,
          isBusy: false
        })
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
