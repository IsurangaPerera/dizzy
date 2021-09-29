// Components
import LazyProgressRaw, { lazyProgressStyler } from "../LazyProgressRaw";

// Utils
import { makeStyles, withStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {},
  },
  LazyProgressRaw: lazyProgressStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const LazyProgress = withStyles(stylesCreator, LazyProgressRaw);
