// React
import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Hook Form
import { useForm, Controller } from "react-hook-form";

// Schema
import { alertDialogFormSchema } from "./AlertDialogForm-schema";

// Material
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

// Store
import { createAlert } from "../../../store/actions";

// Styles
import { useStyles } from "./AlertDialogForm-styles";

const AlertDialogForm = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useSelector((state) => state.dialog.alert.query);

  const { formRef, onClose } = props;
  const { handleSubmit, errors, control } = useForm({
    validationSchema: alertDialogFormSchema,
  });

  const frequencies = [
    { type: "daily", label: "Daily" },
    { type: "weekly", label: "Weekly" },
    { type: "monthly", label: "Monthly" },
  ];

  // Handlers
  const alertHandler = (alert) => {
    dispatch(createAlert(alert));
    onClose();
  };

  //JSX
  const select = (
    <Select>
      {frequencies.map((frequency, index) => {
        return (
          <MenuItem key={index} value={frequency.type}>
            {frequency.label}
          </MenuItem>
        );
      })}
    </Select>
  );

  const view = (
    <form
      className={classes.root}
      autoComplete="off"
      ref={formRef}
      onSubmit={handleSubmit(alertHandler)}
      noValidate
    >
      <Controller
        className={classes.query}
        as={<TextField />}
        control={control}
        defaultValue={query}
        error={!!errors.query}
        helperText={errors.query && errors.query.message}
        label="Query"
        name="query"
      />
      <FormControl className={classes.select} error={!!errors.frequency}>
        <InputLabel>Frequency</InputLabel>
        <Controller
          as={select}
          control={control}
          defaultValue=""
          name="frequency"
        />
        <FormHelperText>
          {errors.frequency && errors.frequency.message}
        </FormHelperText>
      </FormControl>
      <Controller
        className={classes.notes}
        as={<TextField />}
        control={control}
        label="Notes"
        name="notes"
        placeholder="Optional"
        variant="outlined"
        defaultValue=""
        rowsMax={3}
        rows={3}
        multiline
      />
    </form>
  );

  return view;
};

export default AlertDialogForm;
