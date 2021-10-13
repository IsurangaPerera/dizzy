// Utils
import { makeStyles } from '../../../utils';

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      display: 'contents',
    },
    cell: {
      paddingLeft: 0,
      maxWidth: 120,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    actions: {
      paddingLeft: 0,
      paddingRight: 0,
      width: 48,
    },
    padding: {
      width: 20,
      border: 'none',
      padding: 0,
    },
  },
});

// Local
export const useStyles = makeStyles(stylesCreator);
