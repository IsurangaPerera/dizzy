// Utils
import { makeStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      padding: theme.spacing(2)
    },
    cardHeader: {
      paddingBottom: theme.spacing(0)
    },
    item: {
      paddingTop: theme.spacing(0.5),
    },
    typography: {
      padding: theme.spacing(1.055)
    },
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
