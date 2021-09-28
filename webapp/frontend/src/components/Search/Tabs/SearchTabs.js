// React
import React from "react";

// Router
import { useHistory } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Material
import { Tabs, Tab } from "@material-ui/core";

// Styles
import { useStyles } from "./SearchTabs-styles";


const SearchTabs = () => {
  // Variables
  const classes = useStyles();
  const history = useHistory();
  const source = useSelector((state) => state.search.data.source);
  const query = useSelector((state) => state.search.data.query);
  const sources = ['web', 'wallet'];

  // Handlers
  const handleChange = (event, index) => {
    const source = sources[index];
    const location = {
      pathname: `/search/${source}`,
      search: "?query=" + query,
    };
    history.push(location);
  };

  // JSX
  const view = (
      <div className={classes.root}>
        <Tabs classes={{root: classes.tabs, indicator: classes.tabIndicator}} value={sources.indexOf(source)}
              onChange={handleChange}>
          <Tab className={classes.tab} disableRipple label="Web"/>
          <Tab className={classes.tab} disableRipple label="Wallets"/>
        </Tabs>
      </div>
  );

  return view;
};

export default SearchTabs;
