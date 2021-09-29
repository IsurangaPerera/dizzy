// React
import React from "react";

// PropTypes
import PropTypes from "prop-types";

// Router
import { NavLink } from "react-router-dom";

// Material
import { Link, Paper, Typography } from "@material-ui/core";

const SwitcherRaw = (props) => {
  // Variables
  const { classes, path, action, question, clicked } = props;

  // Handlers
  const actionClickedHandler = (event) => {
    event.preventDefault();
    clicked();
  };

  // JSX
  let link = null;
  if (path) {
    link = (
      <Link component={NavLink} to={path}>
        {action}
      </Link>
    );
  } else {
    link = (
      <Link href="#" onClick={actionClickedHandler}>
        {action}
      </Link>
    );
  }

  const view = (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        <Typography align="center" className={classes.typography}>
          {question}? {link}.
        </Typography>
      </Paper>
    </div>
  );

  return view;
};

// Typechecking
SwitcherRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
  }),
};

export default SwitcherRaw;
