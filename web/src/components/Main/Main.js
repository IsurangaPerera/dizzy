// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Store
import { resetSearch } from '../../store/actions';

// Components
import Features from './Features';
import OpenSource from './OpenSource';
import Stats from './Stats';

// Styles
import { useStyles, Logo, SearchBox } from './Main-styles';

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
      <div className={styles.pitch}>
        <Features />
        <div className={styles.ops}>
          <Stats />
          <OpenSource />
        </div>
      </div>
    </div>
  );

  return view;
};

export default Main;
