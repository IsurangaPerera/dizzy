// Components
import SwitcherRaw, { switcherStyler } from '../SwitcherRaw';
import PromptDialogRaw, { promptDialogStyler } from '../PromptDialogRaw';

// Utils
import { makeStyles, withStyles } from '../../utils';

export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    typography: {
      padding: theme.spacing(1),
    },
    button: {
      maxWidth: 300,
      width: '100%',
      marginTop: theme.spacing(1),
      '&:nth-of-type(1)': {
        marginTop: theme.spacing(2),
      },
    },
  },
  SwitcherRaw: switcherStyler(theme).Default,
  PromptDialogRaw: promptDialogStyler(theme).Default,
});

// Local
export const useStyles = makeStyles(stylesCreator);

// HOCs
export const Switcher = withStyles(stylesCreator, SwitcherRaw);
export const PromptDialog = withStyles(stylesCreator, PromptDialogRaw);
