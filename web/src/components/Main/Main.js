// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Store
import { resetSearch } from '../../store/actions';

// Components
import Analytics from './Analytics';
import Stats from './Stats';
import Tech from './Tech';

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
      <div className={styles.features}>
        <Analytics />
        <div className={styles.otherFeatures}>
          <Stats />
          <Tech />
        </div>
      </div>
    </div>
  );

  return view;
};

export default Main;
