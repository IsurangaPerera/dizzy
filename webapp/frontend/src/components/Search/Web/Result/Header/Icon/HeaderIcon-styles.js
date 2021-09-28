// Components
import TorIconRaw, { torIconStyler } from "../../../../../TorIconRaw";

// Utils
import { makeStyles, withStyles } from "../../../../../../utils";

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      display: "inline",
      marginRight: theme.spacing(1),
    },
    icon: {
      verticalAlign: "middle",
    },
  },
  TorIconRaw: torIconStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const TorIcon = withStyles(stylesCreator, TorIconRaw);
