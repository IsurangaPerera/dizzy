// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (_theme) => ({
  Default: {
    root: {},
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
