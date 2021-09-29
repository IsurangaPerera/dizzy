// Utils
import { makeStyles } from "../../../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      paddingTop: theme.spacing(2.5),
      paddingLeft: theme.spacing(2.5),
      paddingRight: theme.spacing(2.5),
      marginBottom: theme.spacing(2),
      maxWidth: 286,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
