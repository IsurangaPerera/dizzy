// Utils
import { makeStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    actions: {
      backgroundColor: theme.palette.background.default,
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
