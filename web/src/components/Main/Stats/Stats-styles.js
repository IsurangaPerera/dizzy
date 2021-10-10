// Components
import StatRaw, { statStyler } from '../../StatRaw';

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
    stats: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-first',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(9),
      width: '100%',
      maxWidth: 460,
    },
  },
  StatRaw: statStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Stat = withStyles(stylesCreator, StatRaw);
