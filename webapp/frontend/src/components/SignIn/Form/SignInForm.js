// React
import React from "react";

// Redux
import { useDispatch } from "react-redux";

// Hook Form
import { useForm } from "react-hook-form";

// Schema
import { signInFormSchema } from "./SignInForm-schema";

// Material
import { Button, Paper, TextField } from "@material-ui/core";

// Store
import { createToken } from "../../../store/actions";

// Styles
import { useStyles } from "./SignInForm-styles";

const Form = () => {
  // Variables
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: signInFormSchema,
  });

  // Handlers
  const signInHandler = (credentials) => {
    dispatch(createToken(credentials));
  };

  // JSX
  const view = (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        component="form"
        autoComplete="off"
        variant="outlined"
        onSubmit={handleSubmit(signInHandler)}
        noValidate
      >
        <TextField
          className={classes.text}
          inputRef={register}
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
          label="Email"
          name="email"
          type="text"
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
          Sign in
        </Button>
      </Paper>
    </div>
  );

  return view;
};

export default Form;
