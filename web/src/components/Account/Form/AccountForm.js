// React
import React from "react";

// Redux
import { useDispatch } from "react-redux";

// Hook Form
import { useForm, Controller } from "react-hook-form";

// Schema
import { accountFormSchema } from "./AccountForm-schema";

// Material
import { Button, Paper, TextField } from "@material-ui/core";

// Store
import { updateAccount } from "../../../store/actions";

// Styles
import { useStyles } from "./AccountForm-styles";

const AccountForm = (props) => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name, company } = props;
  const { handleSubmit, errors, control } = useForm({
    validationSchema: accountFormSchema,
  });

  // Handlers
  const updateAccountHandler = (data) => {
    dispatch(updateAccount(data));
  };

  // JSX
  const view = (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        component="form"
        autoComplete="off"
        variant="outlined"
        onSubmit={handleSubmit(updateAccountHandler)}
        noValidate
      >
        <Controller
          className={classes.text}
          as={<TextField />}
          control={control}
          defaultValue={name}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
          label="Full Name"
          name="name"
        />
        <Controller
          className={classes.text}
          as={<TextField />}
          control={control}
          defaultValue={company}
          error={!!errors.company}
          helperText={errors.company && errors.company.message}
          label="Company"
          name="company"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Update
        </Button>
      </Paper>
    </div>
  );

  return view;
};

export default AccountForm;
