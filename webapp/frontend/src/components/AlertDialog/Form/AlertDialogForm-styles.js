// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    query: {
      marginBottom: theme.spacing(1),
    },
    select: {
      marginBottom: theme.spacing(1),
    },
    notes: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
