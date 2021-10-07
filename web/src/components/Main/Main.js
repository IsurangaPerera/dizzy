// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

// Store
import { resetSearch } from '../../store/actions';

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
    </div>
  );

  return view;
};

export default Main;
