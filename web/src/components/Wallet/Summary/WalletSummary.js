// React
import React from "react";

// Material
import { Divider, Grid, Typography } from "@material-ui/core";
import { Card, CardContent, CardHeader } from "@material-ui/core";

// Styles
import { useStyles } from "./WalletSummary-styles";


export const WalletSummary = (props) => {
  // Variables
  const classes = useStyles();
  let { summary } = props;

  //JSX
  const summaryItems = summary.map((info, index) => {
    return (
      <Grid className={classes.item} key={index} item xs={12} sm={6}>
        <Typography variant="body2">{info.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {info.value}
        </Typography>
        <Divider className={classes.divider} />
      </Grid>
    );
  });

  const view = (
      <Card>
        <CardHeader title="Wallet Summary" className={classes.cardHeader} />
        <CardContent>
          <Grid className={classes.content} container>
            {summaryItems}
          </Grid>
        </CardContent>
      </Card>
  );

  return view;
};

export default WalletSummary;
