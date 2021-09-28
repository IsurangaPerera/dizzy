// React
import React, {Fragment, useState} from "react";

// Material
import { Card } from "@material-ui/core";

// Components
import Body from "../../Wallet/Result/Body/ResultBody";
import Actions from "../../Wallet/Result/Actions/ResultActions";
import Info from "../../Wallet/Result/Info/ResultInfo";
import Title from "./Title";

// Styles
import { useStyles } from "./WalletResult-styles";


const WalletResult = (props) => {
  // Variables
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { id, volume, size, info, url, name, clusterdat } = props;

  // Handlers
  const expandCardHandler = () => {
    setExpanded(!expanded);
  };

  //JSX
  let expansion = (
    <Fragment>
      <Actions expanded={expanded} id={id} clicked={expandCardHandler} />
      <Info expanded={expanded} items={info} />
    </Fragment>
  );
  if (expanded) {
    expansion = (
      <Fragment>
        <Info expanded={expanded} items={info} />
        <Actions expanded={expanded} clicked={expandCardHandler} />
      </Fragment>
    );
  }

  const view = (
    <div className={classes.root}>
      <Card variant="outlined">
        <Title text={name} url={url} />
         <Body date={clusterdat} volume={volume} size={size} />
        {expansion}
      </Card>
    </div>
  );

  return view;
};

export default WalletResult;
