// Material
import {
  makeStyles as makeMuiStyles,
  withStyles as withMuiStyles,
} from '@material-ui/core/styles';

export const makeStyles = (stylesCreator) =>
  makeMuiStyles((theme) => stylesCreator(theme).Default);

export const withStyles = (styleCreator, Component) =>
  withMuiStyles((theme) => styleCreator(theme)[Component.styledAs])(Component);
