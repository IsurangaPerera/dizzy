// Types
import * as types from "./types";


export const getWalletInfoStart = (id) => ({
  type: types.GET_WALLET_INFO_START,
  payload: id,
});

export const getWalletTxStart = (source) => ({
  type: types.GET_WALLET_TX_START,
  payload: source,
});

export const getWalletInfoSuccess = (data) => ({
  type: types.GET_WALLET_INFO_SUCCESS,
  payload: data,
});

export const getWalletTxSuccess = (data) => ({
  type: types.GET_WALLET_TX_SUCCESS,
  payload: data,
});

export const getWalletInfoFailure = (error) => ({
  type: types.GET_WALLET_INFO_FAILURE,
  payload: error,
});

export const reset = () => ({
  type: types.RESET,
});
