// React
import React from "react";

// PropTypes
import PropTypes from "prop-types";

// Material
import { CircularProgress } from "@material-ui/core";

export const LazyProgressRaw = (props) => {
  // Variables
  const { classes } = props;

  // JXS
  const view = (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
  return view;
};

// Typechecking
LazyProgressRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
};

export default LazyProgressRaw;
