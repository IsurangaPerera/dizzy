// Utils
import { makeStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      padding: theme.spacing(2)
    },
    tableCell: {
      padding: theme.spacing(1.25)
    },
    content: {
      paddingTop: theme.spacing(1.5),
    },
    item: {
      paddingTop: theme.spacing(0.5),
    },
    divider: {
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
    },
    typography: {
      padding: theme.spacing(0.9)
    },
    paper: {
      marginTop: theme.spacing(2.5),
      display: 'block',
      width: "100%",
      transitionDuration: '0.3s',
      height: '500px'
    }
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
