// React
import React, { Fragment, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Material
import { Typography } from "@material-ui/core";

// Components
import NoAlerts from "./NoAlerts";

// Store
import {
  getUserAlerts,
  deleteUserAlert,
  showAlertDialog,
} from "../../store/actions";

// Styles
import { useStyles, LazyProgress, Table, Switcher } from "./Alerts-styles";

const Alerts = () => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.user.alerts);
  const isBusy = useSelector((state) => state.user.isBusy);
  const titles = ["Query", "Frequency", "Notes"];

  // Hooks
  useEffect(() => {
    dispatch(getUserAlerts());
  }, [dispatch]);

  // Handlers
  const alertHandler = () => {
    dispatch(showAlertDialog());
  };

  const deleteRowHandler = (index) => {
    const alertId = alerts[index]._id;
    dispatch(deleteUserAlert(alertId));
  };

  // Functions
  const getRows = (alerts) => {
    const rows = [];
    alerts.forEach((alert) => {
      const trimmedAlert = {};
      trimmedAlert.query = alert.query;
      switch (alert.frequency) {
        case "daily":
          trimmedAlert.frequency = "Daily";
          break;
        case "weekly":
          trimmedAlert.frequency = "Weekly";
          break;
        case "monthly":
          trimmedAlert.frequency = "Monthly";
          break;
        default:
          trimmedAlert.frequency = "Unknown";
      }
      trimmedAlert.notes = alert.notes;
      rows.push(trimmedAlert);
    });
    return rows;
  };

  //JSX
  let alertsTable = <NoAlerts />;
  if (alerts.length > 0) {
    alertsTable = (
      <Fragment>
        <Typography className={classes.typography}>
          Manage your alerts
        </Typography>
        <Table
          titles={titles}
          rows={getRows(alerts)}
          deleted={deleteRowHandler}
        />
      </Fragment>
    );
  }

  const content = (
    <Fragment>
      {alertsTable}
      <Switcher
        question="Want to stay updated"
        action="Set an alert"
        clicked={alertHandler}
      />
    </Fragment>
  );

  const view = (
    <div className={classes.root}>{isBusy ? <LazyProgress /> : content}</div>
  );

  return view;
};

export default Alerts;
