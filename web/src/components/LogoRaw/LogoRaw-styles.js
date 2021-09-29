export const stylesCreator = (theme) => ({
  Default: {
    root: {
      padding: theme.spacing(1),
    },
    link: {
      "&:hover": {
        textDecoration: "none",
      },
    },
  },
});
