// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {},
    drawer: {},
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
