export default {
  Logo: {
    logo: {
      // we can now change the color used in the logo item to use the theme's `link` color
      color: "yellow",
      textAlign: "center",
    },
  },

  TabButton: {
    /* Button PROPS, METHODS, EVENTS & SLOTS */
    button: {
      backgroundColor: theme.color.light,
      padding: "10px",
      borderRadius: "5px",
      color: "#fff",
      "&:hover": {
        color: "#000",
        cursor: "pointer",
      },
    },
  },
};
