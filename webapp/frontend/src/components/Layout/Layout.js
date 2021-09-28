// React
import React from "react";

// Material
import { Container } from "@material-ui/core";

// Components
import Header from "../Header";
import Footer from "../Footer";
import FeedbackDialog from "../FeedbackDialog";
import TagDialog from "../TagDialog";
import AlertDialog from "../AlertDialog";

// Styles
import { useStyles, Toast } from "./Layout-styles";

export const Layout = (props) => {
  // Variables
  const classes = useStyles();

  // JSX
  const view = (
    <Container className={classes.root} maxWidth="md" disableGutters>
      <Header />
      <div className={classes.container}>{props.children}</div>
      <Footer />
      <Toast />
      <FeedbackDialog />
      <TagDialog />
      <AlertDialog />
    </Container>
  );
  return view;
};

export default Layout;
