// React
import React from 'react';

// PropTypes
import PropTypes from 'prop-types';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Material
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// Store
import { hideAlert } from '../../store/actions';

const ToastRaw = (props) => {
  // Variables
  const { classes } = props;
  const dispatch = useDispatch();
  const open = useSelector((state) => state.toast.open);
  const duration = useSelector((state) => state.toast.duration);
  const severity = useSelector((state) => state.toast.severity);
  const message = useSelector((state) => state.toast.message);

  // Handlers
  const hideAlertHandler = () => {
    dispatch(hideAlert());
  };

  //JSX
  const view = (
    <div className={classes.root}>
      <Snackbar
        open={open}
        autoHideDuration={duration}
        onClose={hideAlertHandler}
      >
        <Alert onClose={hideAlertHandler} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );

  return view;
};

// Typechecking
ToastRaw.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }),
};

// Dynamic styling
ToastRaw.styledAs = 'ToastRaw';

export default ToastRaw;
