// React
import React, { useRef } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Material
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

// Components
import Title from "./Title";
import Form from "./Form";

// Store
import { hideAlertDialog } from "../../store/actions";

// Styles
import { useStyles } from "./AlertDialog-styles";

const AlertDialog = () => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const formRef = useRef();
  const open = useSelector((state) => state.dialog.alert.open);

  // Handlers
  const toggleAlertHandler = () => {
    dispatch(hideAlertDialog());
  };

  const submitFormHandler = () => {
    // Calling formRef.current.submit() does not work.
    // Instead, creating a custom event using the old-fashioned way.
    // This is compatible with all browsers, including IE.
    // See https://stackoverflow.com/a/28907911
    const submitEvent = document.createEvent("Event");
    submitEvent.initEvent("submit", true, true);
    formRef.current.dispatchEvent(submitEvent);
  };

  //JSX
  const view = (
    <Dialog open={open} onClose={toggleAlertHandler} fullWidth>
      <Title onClose={toggleAlertHandler}>Set An Alert</Title>
      <DialogContent dividers>
        <DialogContentText>What do you want to monitor?</DialogContentText>
        <Form formRef={formRef} onClose={toggleAlertHandler} />
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={submitFormHandler} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );

  return view;
};

export default AlertDialog;
