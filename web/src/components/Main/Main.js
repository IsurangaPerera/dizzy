// React
import { Typography } from '@material-ui/core';
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Store
import { resetSearch } from '../../store/actions';

// Styles
import { useStyles, Feature, Logo, SearchBox, Stat } from './Main-styles';

export const Main = () => {
  // Variables
  const styles = useStyles();
  const dispatch = useDispatch();

  // Hooks
  useEffect(() => {
    dispatch(resetSearch());
  }, [dispatch]);

  // JSX
  const view = (
    <div className={styles.root}>
      <Logo />
      <SearchBox />
      <Typography className={styles.title} color="primary" variant="h5">
        Advanced search features
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
      <div className={styles.stats}>
        <Stat value={50300000} text="Pages" />
        <Stat value={38111} text="Domains" />
        <Stat value={154400} text="Images" />
        <Stat value={50234} text="Cryptos" />
      </div>
    </div>
  );

  return view;
};

export default Main;
