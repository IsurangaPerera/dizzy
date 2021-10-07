// Components
import LogoRaw, { logoStyler } from '../LogoRaw';
import SearchBoxRaw, { searchBoxStyler } from '../SearchBoxRaw';
import StatRaw, { statStyler } from '../StatRaw';

// Utils
import { makeStyles, withStyles } from '../../utils';

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    stats: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: theme.spacing(3),
    },
  },
  LogoRaw: logoStyler(theme).Default,
  SearchBoxRaw: searchBoxStyler(theme).Default,
  StatRaw: statStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Logo = withStyles(stylesCreator, LogoRaw);
export const SearchBox = withStyles(stylesCreator, SearchBoxRaw);
export const Stat = withStyles(stylesCreator, StatRaw);
