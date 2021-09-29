// React
import React from "react";

// Router
import { NavLink } from "react-router-dom";

// Material
import { AccountCircle as AccountIcon } from "@material-ui/icons";
import { Button, IconButton } from "@material-ui/core";

// Styles
import { useStyles } from "./HeaderAction-styles";

const HeaderAction = (props) => {
  // Variables
  const classes = useStyles();

  //JSX
  const view = (
    <div className={classes.root}>
      {props.isAuth ? (
        <IconButton
          component={NavLink}
          to="/account"
          edge="end"
          color="primary"
        >
          <AccountIcon />
        </IconButton>
      ) : (
        <Button
          component={NavLink}
          to="/signin"
          color="primary"
          variant="outlined"
        >
          Sign in
        </Button>
      )}
    </div>
  );

  return view;
};

export default HeaderAction;
