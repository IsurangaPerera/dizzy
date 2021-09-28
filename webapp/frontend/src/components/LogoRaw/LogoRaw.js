// React
import React from "react";

// PropTypes
import PropTypes from "prop-types";

// Router
import { NavLink } from "react-router-dom";

// Material
import { Link, Typography } from "@material-ui/core";

const LogoRaw = (props) => {
  // Variables
  const { classes, variant } = props;

  // JSX
  const view = (
    <div className={classes.root}>
      <Link className={classes.link} component={NavLink} to="/main">
        {/* replace with a logo img with dynamic colors when available */}
        <Typography variant={variant || "h1"}>Toshi</Typography>
      </Link>
    </div>
  );

  return view;
};

// Typechecking
LogoRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
};

export default LogoRaw;
