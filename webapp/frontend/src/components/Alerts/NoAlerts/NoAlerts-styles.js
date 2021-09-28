// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
    },
    header: {
      marginBottom: theme.spacing(2),
    },
    body: {},
    list: {
      margin: 0,
      paddingLeft: theme.spacing(2),
      marginTop: theme.spacing(1),
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
