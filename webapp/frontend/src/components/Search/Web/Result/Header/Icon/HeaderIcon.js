// React
import React from "react";

// Material
import { Public as PublicIcon } from "@material-ui/icons";

// Styles
import { useStyles, TorIcon } from "./HeaderIcon-styles";

const Icon = (props) => {
  // Variables
  const classes = useStyles();

  //JSX
  const view = (
    <div className={classes.root}>
      {props.source === "tor" ? (
        <TorIcon fontSize="inherit" />
      ) : (
        <PublicIcon className={classes.icon} fontSize="inherit" />
      )}
    </div>
  );

  return view;
};

export default Icon;
