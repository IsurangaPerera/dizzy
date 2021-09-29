// React
import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";

// Material
import { Typography } from "@material-ui/core";

// Store
import { resetSearch } from "../../store/actions";

// Styles
import { useStyles, Logo, SearchBox } from "./Main-styles";

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
      <Typography className={styles.typography}>
        Search the Webs for Cryptos!
      </Typography>
      <SearchBox />
    </div>
  );

  return view;
};

export default Main;
