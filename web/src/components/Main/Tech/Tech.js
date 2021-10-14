// React
import React from 'react';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { useStyles, Feature } from './Tech-styles';

const MainTech = () => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <div className={classes.root}>
      <Typography className={classes.title} color="primary" variant="h5">
        Open technologies
      </Typography>
      <Typography className={classes.subtitle}>
        Clone, deploy, and use freely on any platform
      </Typography>
      <div className={classes.opensource}>
        <Feature iconLigature="code" text="Open-source software on GitHub" />
        <Feature
          iconLigature="cloud_done"
          text="Cloud native deployment with K8s"
        />
      </div>
    </div>
  );

  return view;
};

export default MainTech;
