// React
import React from 'react';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { useStyles, Feature } from './OpenSource-styles';

const MainOpenSource = () => {
  // Variables
  const styles = useStyles();

  // JSX
  const view = (
    <div className={styles.root}>
      <Typography className={styles.title} color="primary" variant="h5">
        Open technologies
      </Typography>
      <Typography className={styles.subtitle}>
        Use, modify, or deploy freely on any platform
      </Typography>
      <div className={styles.opensource}>
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

export default MainOpenSource;
