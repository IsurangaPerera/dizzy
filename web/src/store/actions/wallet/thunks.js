// Axios
import axios from "axios";

// Redux
import { batch } from "react-redux";

// Creators
import * as creators from "./creators";
import { showAlert } from "../";


export const getWalletInfo = (id) => {
  return (dispatch, getState) => {
    dispatch(creators.getWalletInfoStart({ id }));
    const walletUrl = "/info/wallet?id=" + id;

    axios
      .get(walletUrl)
      .then((response) => {
        dispatch(creators.getWalletInfoSuccess(response.data));
      })
      .catch((error) => {
        batch(() => {
          dispatch(creators.getWalletInfoFailure(error));
          dispatch(showAlert());
        });
      });
  };
};

export const getWalletTx = (source) => {
  return (dispatch, getState) => {
    dispatch(creators.getWalletTxStart({ source }));

    // const walletTxUrl = "/info/wallet?id=" + id;
    // axios
    //   .get(walletTxUrl)
    //   .then((response) => {
    //     dispatch(creators.getWalletTxSuccess(response.data));
    //   })
    //   .catch((error) => {
    //     batch(() => {
    //       dispatch(creators.getWalletInfoFailure(error));
    //       dispatch(showAlert());
    //     });
    //   });
  }
};