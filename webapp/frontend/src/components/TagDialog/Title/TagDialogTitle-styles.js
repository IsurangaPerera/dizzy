// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      backgroundColor: theme.palette.background.default,
      margin: 0,
      padding: theme.spacing(2),
    },
    button: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
