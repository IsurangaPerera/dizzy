// Components
import LazyProgressRaw, { lazyProgressStyler } from "../LazyProgressRaw";
import TableRaw, { tableStyler } from "../TableRaw";
import SwitcherRaw, { switcherStyler } from "../SwitcherRaw";

// Utils
import { makeStyles, withStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: theme.spacing(2),
    },
    typography: {
      padding: theme.spacing(1),
    },
  },
  LazyProgressRaw: lazyProgressStyler(theme).Default,
  TableRaw: tableStyler(theme).Default,
  SwitcherRaw: {
    ...switcherStyler(theme).Default,
    root: {
      marginTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: "100%",
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const LazyProgress = withStyles(stylesCreator, LazyProgressRaw);
export const Table = withStyles(stylesCreator, TableRaw);
export const Switcher = withStyles(stylesCreator, SwitcherRaw);
