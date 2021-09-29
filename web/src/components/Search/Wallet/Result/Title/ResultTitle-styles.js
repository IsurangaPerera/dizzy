// Utils
import { makeStyles } from "../../../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      marginTop: theme.spacing(2)
    },
    typography: {},
    link: {
      width: "fit-content",
      "&:hover": {
        textDecoration: "none",
        cursor: "pointer",
      },
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
