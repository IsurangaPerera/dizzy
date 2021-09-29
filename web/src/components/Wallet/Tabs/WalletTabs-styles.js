// Utils
import { makeStyles } from "../../../utils";


export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      paddingTop: theme.spacing(2),
    },
    tabs: {
      borderBottom: "1px solid #e8e8e8",
      backgroundColor: "#ffffff",
      indicator: {
        backgroundColor: "#1890ff",
      },
    },
    tabIndicator: {
      backgroundColor: "#1976d2",
    },
    tab: {
      borderBottom: "1px solid #e8e8e8",
      indicator: {
        backgroundColor: "#1976d2",
      },
      textTransform: "none",
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      "&:hover": {
        color: "#1976d2",
        opacity: 1,
      },
      "&$selected": {
        color: "#1976d2",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: "#1976d2",
      },
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
