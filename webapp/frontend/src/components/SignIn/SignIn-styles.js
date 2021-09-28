// Components
import LogoRaw, { logoStyler } from "../LogoRaw";
import SwitcherRaw, { switcherStyler } from "../SwitcherRaw";

// Utils
import { makeStyles, withStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    typography: {
      padding: theme.spacing(1),
    },
  },
  LogoRaw: logoStyler(theme).Default,
  SwitcherRaw: switcherStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Logo = withStyles(stylesCreator, LogoRaw);
export const Switcher = withStyles(stylesCreator, SwitcherRaw);
