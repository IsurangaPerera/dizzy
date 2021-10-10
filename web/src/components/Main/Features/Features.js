// React
import React from 'react';

// Material
import { Typography } from '@material-ui/core';

// Styles
import { useStyles, Feature } from './Features-styles';

const MainFeatures = () => {
  // Variables
  const styles = useStyles();

  // JSX
  const view = (
    <div className={styles.root}>
      <Typography className={styles.title} color="primary" variant="h5">
        Darkweb analytics
      </Typography>
      <Typography className={styles.subtitle}>
        Get useful insights with your search results
      </Typography>
      <div className={styles.features}>
        <Feature iconLigature="category" text="Website categorization" />
        <Feature iconLigature="language" text="Language detection" />
        <Feature iconLigature="content_copy" text="Mirror website detection" />
        <Feature iconLigature="offline_bolt" text="Service status check" />
        <Feature iconLigature="security" text="Malicious websites detection" />
        <Feature iconLigature="lock" text="User tracking detection" />
        <Feature iconLigature="token" text="Crypto address attribution" />
      </div>
    </div>
  );

  return view;
};

export default MainFeatures;
