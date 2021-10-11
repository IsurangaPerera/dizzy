// React
import React from 'react';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { useStyles, Stat } from './Stats-styles';

const MainStats = () => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <div className={classes.root}>
      <Typography className={classes.title} color="primary" variant="h5">
        Extended coverage
      </Typography>
      <Typography className={classes.subtitle}>
        Find what you're looking for in the darkweb
      </Typography>
      <div className={classes.stats}>
        <Stat value={50300000} text="Pages" />
        <Stat value={38111} text="Domains" />
        <Stat value={50234} text="Cryptos" />
      </div>
    </div>
  );

  return view;
};

export default MainStats;
