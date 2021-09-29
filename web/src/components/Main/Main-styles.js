// Components
import LogoRaw, { logoStyler } from "../LogoRaw";
import SearchBoxRaw, { searchBoxStyler } from "../SearchBoxRaw";

// Utils
import { makeStyles, withStyles } from "../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      alignItems: "center",
    },
    typography: {
      padding: theme.spacing(1),
    },
  },
  LogoRaw: logoStyler(theme).Default,
  SearchBoxRaw: searchBoxStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Logo = withStyles(stylesCreator, LogoRaw);
export const SearchBox = withStyles(stylesCreator, SearchBoxRaw);
