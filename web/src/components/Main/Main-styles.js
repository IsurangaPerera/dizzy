// Components
import FeatureRaw, { featureStyler } from '../FeatureRaw';
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
      alignItems: 'left',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'left',
      width: '100%',
      maxWidth: 460,
      marginTop: theme.spacing(8),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: '100%',
      maxWidth: 460,
    },
    stats: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      width: '100%',
      maxWidth: 460,
    },
  },
  FeatureRaw: featureStyler(theme).Default,
  LogoRaw: logoStyler(theme).Default,
  SearchBoxRaw: searchBoxStyler(theme).Default,
  StatRaw: statStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Feature = withStyles(stylesCreator, FeatureRaw);
export const Logo = withStyles(stylesCreator, LogoRaw);
export const SearchBox = withStyles(stylesCreator, SearchBoxRaw);
export const Stat = withStyles(stylesCreator, StatRaw);
