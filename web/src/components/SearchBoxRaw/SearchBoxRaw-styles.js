export const stylesCreator = (theme) => ({
  Default: {
    root: {
      width: '100%',
      maxWidth: 460,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    paper: {
      display: 'flex',
    },
    input: {
      flex: 1,
      paddingLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
    },
    divider: {
      height: 40,
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
    },
  },
});
