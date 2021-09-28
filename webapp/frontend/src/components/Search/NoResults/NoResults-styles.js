// Components
import SwitcherRaw, { switcherStyler } from "../../SwitcherRaw";

// Utils
import { makeStyles, withStyles } from "../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
    },
  },
  SwitcherRaw: {
    ...switcherStyler(theme).Default,
    root: {
      marginTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Switcher = withStyles(stylesCreator, SwitcherRaw);
