// Components
import ToastRaw, { toastStyler } from '../ToastRaw';

// Utils
import { makeStyles, withStyles } from '../../utils';

const stylesCreator = (theme) => ({
  Default: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    },
    container: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  ToastRaw: toastStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Toast = withStyles(stylesCreator, ToastRaw);
