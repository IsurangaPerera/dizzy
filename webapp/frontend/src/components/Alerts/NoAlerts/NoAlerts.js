// React
import React from "react";

// Material
import { Paper, Typography } from "@material-ui/core";

// Styles
import { useStyles } from "./NoAlerts-styles";

const NoAlerts = () => {
  // Variables
  const classes = useStyles();
  const advantages = [
    "Monitor the webs for interesting and new crypto content.",
    "Personalized email notifications.",
  ];

  //JSX
  const view = (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="outlined">
        <Typography className={classes.header}>
          You did not set any alerts. Try it!
        </Typography>
        <Typography className={classes.body}>Advantages:</Typography>
        <ul className={classes.list}>
          {advantages.map((advantage, index) => (
            <li key={index}>
              <Typography>{advantage}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
    </div>
  );

  return view;
};

export default NoAlerts;
