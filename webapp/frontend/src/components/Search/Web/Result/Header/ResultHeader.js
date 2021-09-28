// React
import React from "react";

// Material
import { Typography } from "@material-ui/core";

// Componets
import Icon from "./Icon";

// Styles
import { useStyles } from "./ResultHeader-styles";

const ResultHeader = (props) => {
  // Variables
  const classes = useStyles();

  //JSX
  const view = (
    <div className={classes.root}>
      <Icon source={props.source} />
      <Typography color="textSecondary" variant="caption">
        {props.url}
      </Typography>
    </div>
  );

  return view;
};

export default ResultHeader;
