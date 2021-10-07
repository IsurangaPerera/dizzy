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
      fontSize: 36,
      marginRight: theme.spacing(2),
    },
  },
});
