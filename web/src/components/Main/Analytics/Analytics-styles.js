// Components
import FeatureRaw, { featureStyler } from '../../FeatureRaw';

// Utils
import { makeStyles, withStyles } from '../../../utils';

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      maxWidth: 460,
      width: '100%',
    },
    title: {
      textAlign: 'left',
      width: '100%',
      maxWidth: 460,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    subtitle: {
      textAlign: 'left',
      width: '100%',
      maxWidth: 460,
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: theme.spacing(3),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: '100%',
      maxWidth: 460,
    },
  },
  FeatureRaw: featureStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Feature = withStyles(stylesCreator, FeatureRaw);
