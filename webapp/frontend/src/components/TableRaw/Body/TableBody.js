// React
import React from "react";

// Material
import {
  IconButton,
  TableBody as MuiTableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

// Styles
import { useStyles } from "./TableBody-styles";

const TableBody = (props) => {
  // Variables
  const classes = useStyles();
  const { rows, deleted, editable } = props;

  //JSX
  const getCells = (row) => {
    return Object.keys(row).map((key, index) => (
      <TableCell className={classes.cell} key={index}>
        {row[key]}
      </TableCell>
    ));
  };

  const getActionsCell = (rowIndex) => {
    let actions = null;
    if (editable) {
      actions = (
        <TableCell className={classes.actions} padding="none" align="right">
          <IconButton onClick={() => deleted(rowIndex)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      );
    }
    return actions;
  };

  // The browser won't add right padding at the end of the scroll, so we insert
  // a padding cell to fix this issue. See https://bit.ly/2N5zrZ2
  const padding = (
    <TableCell className={classes.padding} align="right"></TableCell>
  );

  const view = (
    <MuiTableBody className={classes.root}>
      {rows.map((row, index) => (
        <TableRow className={classes.row} key={index}>
          {getCells(row)}
          {getActionsCell(index)}
          {padding}
        </TableRow>
      ))}
    </MuiTableBody>
  );

  return view;
};

export default TableBody;
