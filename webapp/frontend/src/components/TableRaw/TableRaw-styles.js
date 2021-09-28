export const stylesCreator = (theme) => ({
  Default: {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    paper: {
      paddingTop: theme.spacing(0.5),
      paddingLeft: theme.spacing(2.5),
      paddingBottom: theme.spacing(0.5),
    },
    table: {
      minWidth: "400px",
    },
  },
});
