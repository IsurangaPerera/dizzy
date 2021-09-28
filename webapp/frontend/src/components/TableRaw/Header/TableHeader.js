// React
import React from "react";

// Material
import { TableCell, TableHead, TableRow } from "@material-ui/core";

// Styles
import { useStyles } from "./TableHeader-styles";

const TableHeader = (props) => {
  // Variables
  const classes = useStyles();
  const { titles, editable } = props;

  //JSX
  const cells = titles.map((title, index) => (
    <TableCell className={classes.cell} key={index}>
      {title}
    </TableCell>
  ));

  let actions = null;
  if (editable) {
    actions = <TableCell className={classes.actions} align="right"></TableCell>;
  }

  // The browser won't add right padding at the end of the scroll, so we insert
  // a padding cell to fix this issue. See https://bit.ly/2N5zrZ2
  const padding = (
    <TableCell className={classes.padding} align="right"></TableCell>
  );

  const view = (
    <TableHead className={classes.root}>
      <TableRow>
        {cells}
        {actions}
        {padding}
      </TableRow>
    </TableHead>
  );

  return view;
};

export default TableHeader;
