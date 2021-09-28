// Utils
import { makeStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      textAlign: "center",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(0.75),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(2.75),
      },
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
