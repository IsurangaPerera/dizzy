// React
import React from "react";

// Material
import Typography from "@material-ui/core/Typography";

// Nivo
import { ResponsiveSankey } from '@nivo/sankey'

// Styles
import { useStyles } from "./WalletMoneyFlow-styles";


export const WalletMoneyFlow = (props) => {
  // Variables
  const classes = useStyles();
  let { data } = props;

  // JSX
  let result;
  if(data.nodes && data.links && data.nodes.length > 0 && data.links.length > 0) {
    result = <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        align="justify"
        colors={{ scheme: 'category10' }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={24}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={true}
        labelPosition="inside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1 ] ] }}
    />
  } else {
    result =
        <Typography variant="h4" component="h2" className={classes.typography}>
          No Data
        </Typography>
  }


  const view = (
     <div className={classes.root}>
       {result}
     </div>
  );

  return view;
};

export default WalletMoneyFlow;
