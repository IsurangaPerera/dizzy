export const stylesCreator = (theme) => ({
  Default: {
    root: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
      '&:last-child': {
        marginBottom: 0,
      },
    },
    icon: {
      fontSize: 32,
      marginRight: theme.spacing(2),
    },
  },
});
