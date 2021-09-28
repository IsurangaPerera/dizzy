// React
import React from "react";

// Material
import CloseIcon from "@material-ui/icons/Close";
import { DialogTitle, IconButton, Typography } from "@material-ui/core";

// Styles
import { useStyles } from "./AlertDialogTitle-styles";

const AlertDialogTitle = (props) => {
  // Variables
  const classes = useStyles();
  const { children, onClose } = props;

  //JSX
  const view = (
    <DialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      <IconButton className={classes.button} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );

  return view;
};

export default AlertDialogTitle;
