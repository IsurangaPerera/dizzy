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
    button: {
      width: "100%",
      marginTop: theme.spacing(1),
      "&:nth-of-type(1)": {
        marginTop: theme.spacing(2),
      },
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
