// React
import React, { useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Router
import { useLocation } from "react-router-dom";

// Querystring
import qs from "qs";

// Material
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

// Components
import WalletSummary from "./Summary/WalletSummary";
import WalletTopLinks from "./TopLinks/WalletTopLinks";
import WalletMoneyFlow from "./MoneyFlow/WalletMoneyFlow";
import WalletTabs from "./Tabs";
import WalletTransactions from "./Transactions/WalletTransactions";

// Store
import { getWalletInfo } from "../../store/actions";

// Styles
import { useStyles } from "./Wallet-styles";


export const Wallet = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const summary = useSelector((state) => state.wallet.data.summary);
  const links = useSelector((state) => state.wallet.data.links);
  const moneyFlow = useSelector((state) => state.wallet.data.moneyFlow);
  const source = useSelector((state) => state.wallet.source);

  // Hooks
  useEffect(() => {
    const id = qs.parse(location.search, { ignoreQueryPrefix: true }).id;
    dispatch(getWalletInfo(id));
  }, [dispatch, location]);

  let tabView;
  if(source === "flow") {
    tabView = <WalletMoneyFlow data={moneyFlow} />
  } else {
     tabView = <WalletTransactions />
  }

  const view = (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} item className={classes.root}>
            <WalletSummary summary={summary} />
          </Grid>
          <Grid xs={12} sm={6} item className={classes.root}>
            <WalletTopLinks links={links} />
          </Grid>
        </Grid>
          <Paper className={classes.paper}>
            <WalletTabs />
            {tabView}
          </Paper>
      </div>
  );

  return view;
};

export default Wallet;
