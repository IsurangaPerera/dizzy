// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      height: "100%",
      width: "100%",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginTop: theme.spacing(5)
    },
    container: {
      height: "70%"
    }
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
