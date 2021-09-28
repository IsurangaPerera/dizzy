// React
import React from "react";

// Material
import { Grid, Link, Typography } from "@material-ui/core";
import { Card, CardContent, CardHeader } from "@material-ui/core";

// Styles
import { useStyles } from "./WalletTopLinks-styles";


export const WalletTopLinks = (props) => {
  // Variables
  const classes = useStyles();
  let { links } = props;

  //JSX
  const topLinks = links.map((link, index) => {
    const url = "/info/wallet?id=" + link.id;
    return (
      <Grid className={classes.item} key={index} item xs={12} sm={6}>
        <Typography className={classes.typography}>
        <Link
          className={classes.link}
          href={url}
          rel="noopener"
        >
          {link.name}
        </Link>
      </Typography>
      </Grid>
    );
  });

  const view = (
      <Card>
        <CardHeader title="Top Links" className={classes.cardHeader} />
        <CardContent>
          <Grid className={classes.content} container>
            {topLinks}
          </Grid>
        </CardContent>
      </Card>
  );

  return view;
};

export default WalletTopLinks;
