// React
import React from "react";

// Material
import { List, ListItem } from "@material-ui/core";

// Components
import WalletResult from "../Result/WalletResult";

// Styles
import { useStyles } from "./WalletResults-styles";


export const WalletResults = (props) => {
  // Variables
  const classes = useStyles();

  // JSX
  const final = (
    <div className={classes.root}>
      <List component="ul" aria-label="search results" className={classes.list}>
        {props.items.map((result) => {
          return (
            <ListItem key={result.id}>
              <WalletResult
                id={result.id}
                name={result.name}
                clusterdat={result.clusteredAt}
                volume={result.volume}
                size={result.size}
                info={result.info}
                url={"/info/wallet?id=" + result.id}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return final;
};

export default WalletResults;
