// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      maxWidth: 460,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
    },
    text: {
      margin: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
