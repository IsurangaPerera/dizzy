// React
import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Material
import CloseIcon from '@material-ui/icons/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';

// Store
import { hidePromptDialog } from '../../store/actions';

const PromptDialogRaw = (props) => {
  // Variables
  const { classes, onConfirm } = props;
  const dispatch = useDispatch();
  const open = useSelector((state) => state.dialog.prompt.open);

  // Handlers
  const togglePromptHandler = () => {
    dispatch(hidePromptDialog());
  };

  //JSX
  const view = (
    <Dialog
      className={classes.root}
      open={open}
      onClose={togglePromptHandler}
      fullWidth
    >
      <DialogTitle disableTypography className={classes.title}>
        <Typography variant="h6">Delete your account?</Typography>
        <IconButton className={classes.button} onClick={togglePromptHandler}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          All your data will be permanently deleted. Do you want to proceed?
        </DialogContentText>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <Button onClick={togglePromptHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="secondary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );

  return view;
};

// Typechecking
PromptDialogRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    actions: PropTypes.string.isRequired,
  }),
  onConfirm: PropTypes.func.isRequired,
};

// Dynamic styling
PromptDialogRaw.styledAs = 'PromptDialogRaw';

export default PromptDialogRaw;
