// Components
import LogoRaw from '../LogoRaw';
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
      alignItems: 'left',
      justifyContent: 'center',
    },
    logo: {
      marginTop: theme.spacing(8),
    },
    features: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    otherFeatures: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  LogoRaw: {
    root: {
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
    },
    link: {
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
  SearchBoxRaw: searchBoxStyler(theme).Default,
  StatRaw: statStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Logo = withStyles(stylesCreator, LogoRaw);
export const SearchBox = withStyles(stylesCreator, SearchBoxRaw);
export const Stat = withStyles(stylesCreator, StatRaw);
