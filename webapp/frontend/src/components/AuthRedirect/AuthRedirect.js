// React
import React from "react";

// Redux
import { useDispatch } from "react-redux";

// Router
import { Redirect } from "react-router-dom";

// Store
import { setRedirect } from "../../store/actions";

const AuthRedirect = (props) => {
  // Variables
  const { location } = props;
  const dispatch = useDispatch();

  // Actions
  dispatch(setRedirect(location));

  // JSX
  const view = <Redirect to="/signin" />;

  return view;
};

export default AuthRedirect;
