// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      height: "90%",
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center'
    },
    typography: {
      color: "#a8a6a3"
    }
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
