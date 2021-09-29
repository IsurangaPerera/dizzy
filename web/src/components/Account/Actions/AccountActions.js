// React
import React from "react";

// Router
import { useHistory } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";

// Material
import { Button } from "@material-ui/core";

// Store
import { deleteAccount, deleteToken } from "../../../store/actions";

// Styles
import { useStyles } from "./AccountActions-styles";

const AccountActions = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  // Handlers
  const signOutHandler = (event) => {
    event.preventDefault();
    dispatch(deleteToken());
    history.push("/main");
  };

  const deleteAccountHandler = (event) => {
    event.preventDefault();
    dispatch(deleteAccount());
    history.push("/main");
  };

  // JSX
  const view = (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        onClick={signOutHandler}
      >
        Sign out
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        type="submit"
        onClick={deleteAccountHandler}
      >
        Delete Account
      </Button>
    </div>
  );

  return view;
};

export default AccountActions;
