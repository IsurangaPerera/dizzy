// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Store
import { resetSearch } from '../../store/actions';

// Styles
import { useStyles, Logo, SearchBox, Stat } from './Main-styles';

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
      <div className={styles.stats}>
        <Stat value={50300000} text="Pages" />
        <Stat value={38111} text="Domains" />
        <Stat value={154400} text="Images" />
        <Stat value={50234} text="Tokens" />
      </div>
    </div>
  );

  return view;
};

export default Main;
