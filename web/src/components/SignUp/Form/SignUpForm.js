// React
import React from "react";

// Redux
import { useDispatch } from "react-redux";

// Hook Form
import { useForm } from "react-hook-form";

// Schema
import { signUpFormSchema } from "./SignUpForm-schema";

// Material
import { Button, Paper, TextField } from "@material-ui/core";

// Store
import { createAccount } from "../../../store/actions";

// Styles
import { useStyles } from "./SignUpForm-styles";

const SignUpForm = () => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signUpFormSchema,
  });

  // Handlers
  const signUpHandler = (data) => {
    dispatch(createAccount(data));
  };

  // JSX
  const view = (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        component="form"
        autoComplete="off"
        variant="outlined"
        onSubmit={handleSubmit(signUpHandler)}
        noValidate
      >
        <TextField
          className={classes.text}
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          label="Email"
          name="email"
          type="email"
        />
        <TextField
          className={classes.text}
          inputRef={register}
          error={!!errors.password}
          helperText={errors.password && errors.password.message}
          label="Password"
          name="password"
          type="password"
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Sign up
        </Button>
      </Paper>
    </div>
  );

  return view;
};

export default SignUpForm;
