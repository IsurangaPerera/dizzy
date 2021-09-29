// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Material
import { Tabs, Tab } from "@material-ui/core";

// Styles
import { useStyles } from "./WalletTabs-styles";

// Store
import { getWalletTx } from "../../../store/actions";


const WalletTabs = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const source = useSelector((state) => state.wallet.source);
  const sources = ['flow', 'transactions'];

  // Handlers
  const handleChange = (event, index) => {
    const source = sources[index];
    dispatch(getWalletTx(source))
  };

  const view = (
      <Tabs classes={{root: classes.tabs, indicator: classes.tabIndicator}} value={sources.indexOf(source)}
            onChange={handleChange}>
        <Tab className={classes.tab} disableRipple label="Money Flow"/>
        <Tab className={classes.tab} disableRipple label="Transactions"/>
      </Tabs>
  );

  return view;
};

export default WalletTabs;
