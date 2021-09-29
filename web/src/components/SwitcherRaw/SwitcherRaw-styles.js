export const stylesCreator = (theme) => ({
  Default: {
    root: {
      marginTop: theme.spacing(2),
      width: "100%",
      maxWidth: 460,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(1),
    },
    typography: {
      padding: theme.spacing(1),
    },
  },
});
